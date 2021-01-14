export function request(options) {
  var xhr = new XMLHttpRequest();
  var formData = new FormData();
  var data = options.data;

  if (data) {
    for (var key in data) {
      if (data[key] != null) {
        formData.append(key, data[key]);
      }
    }
  }

  var upload = xhr.upload;

  if (upload && options.onProgress) {
    upload.onprogress = function (e) {
      if (e.total > 0) {
        e.percent = Math.floor(e.loaded / e.total * 100);
      }

      options.onProgress(e);
    };
  }

  xhr.onerror = function (e) {
    return options.onError(getError(options, xhr));
  };

  if (options.onSuccess) {
    xhr.onload = function () {
      if (xhr.status < 200 || xhr.status >= 300) {
        return options.onError(getError(options, xhr), getBody(xhr));
      }

      options.onSuccess(getBody(xhr));
    };
  }

  xhr.open('post', options.action, true);

  if (options.withCredentials && 'withCredentials' in xhr) {
    xhr.withCredentials = true;
  }

  var headers = options.headers;

  if (headers) {
    for (var _key in headers) {
      if (headers[_key] != null) {
        xhr.setRequestHeader(_key, headers[_key]);
      }
    }
  }

  xhr.send(formData);
  return {
    abort: function abort() {
      xhr.abort();
    }
  };
}

function getError(options, xhr) {
  var msg = "cannot post " + options.action + " " + xhr.status + "'";
  var err = new Error(msg);
  err.status = xhr.status;
  err.method = 'post';
  err.url = options.action;
  err.response = getBody(xhr);
  return err;
}

function getBody(xhr) {
  var text = xhr.responseText || xhr.response;
  if (!text) return text;

  try {
    return JSON.parse(text);
  } catch (e) {
    return text;
  }
}