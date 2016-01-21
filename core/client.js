import router from './router';

router.resolve({pathname: '/'}).then(page => {
    console.log(page);
});
