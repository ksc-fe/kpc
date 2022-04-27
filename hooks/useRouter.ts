/**
 * @brief find the router instance
 *
 * in React, find the history of router
 * for react-router@5, we need get the history from providers
 * as it use the new context api of React
 *
 * in Vue, find the $router
 */
import {useInstance, createRef, onMounted} from 'intact';
import {isExternalLink} from '../components/utils';

export function useRouter() {
    const instance = useInstance()!;
    const ref = createRef<any>();

    onMounted(() => {
        ref.value = findRouter(instance);
    });

    return ref;
}

export function navigate(router: any, to?: string | object) {
    if (to) {
        if (router && !isExternalLink(to)) {
            router.push(to!);
        } else {
            location.href = to as string;
        }
    }
}

function findRouter(instance: any): any {
    const Component = instance.constructor;
    if (Component.$cid === 'IntactReact') {
        // in React
        let parent = instance;
        while (!parent.$isReact) {
            parent = parent.$senior;
            if (!parent) return;
        }
        for (let [key, value] of parent.$reactProviders) {
            const displayName = key._context.displayName;
            // V6
            if (displayName === 'Navigation') {
                return value.navigator;
            }
            // V5
            if (displayName === 'Router') {
                return value.history;
            }
        }
    } else if (Component.$cid === 'IntactVue') {
        do {
            const parent = instance.$parent; 
            if (parent) {
                return parent.$router;
            }
        } while (instance = instance.$senior);
    } else if (Component.$cid === 'IntactVueNext') {
        // for vue-next
        do {
            const vueInstance = instance.vueInstance;
            if (vueInstance) {
                return vueInstance.proxy.$router;
            }
        } while (instance = instance.$senior);
    }
}

