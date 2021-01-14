import { _$ } from '../utils';

function now() {
  return new Date();
}

function days(days) {
  var now = new Date();
  now.setDate(now.getDate() + days);
  return now;
}

function months(months) {
  var now = new Date();
  now.setMonth(now.getMonth() + months);
  return now;
}

export var today = {
  label: function label() {
    return _$('今天');
  },
  value: function value() {
    return now();
  }
};
export var yesterday = {
  label: function label() {
    return _$('昨天');
  },
  value: function value() {
    return days(-1);
  }
};
export var tomorrow = {
  label: function label() {
    return _$('明天');
  },
  value: function value() {
    return days(1);
  }
};
export var afterOneWeek = {
  label: function label() {
    return _$('一周后');
  },
  value: function value() {
    return days(7);
  }
};
export var afterOneMonth = {
  label: function label() {
    return _$('一月后');
  },
  value: function value() {
    return months(1);
  }
};
export var afterThreeMonths = {
  label: function label() {
    return _$('三月后');
  },
  value: function value() {
    return months(3);
  }
};
export var beforeOneWeek = {
  label: function label() {
    return _$('一周前');
  },
  value: function value() {
    return days(-7);
  }
};
export var beforeOneMonth = {
  label: function label() {
    return _$('一月前');
  },
  value: function value() {
    return months(-1);
  }
};
export var beforeThreeMonths = {
  label: function label() {
    return _$('三月前');
  },
  value: function value() {
    return months(-3);
  }
};
export var lastWeek = {
  label: function label() {
    return _$('上一周');
  },
  value: function value() {
    return [days(-7), now()];
  }
};
export var nextWeek = {
  label: function label() {
    return _$('下一周');
  },
  value: function value() {
    return [now(), days(7)];
  }
};
export var lastMonth = {
  label: function label() {
    return _$('上一个月');
  },
  value: function value() {
    return [months(-1), now()];
  }
};
export var nextMonth = {
  label: function label() {
    return _$('下一个月');
  },
  value: function value() {
    return [now(), months(1)];
  }
};
export var lastThreeMonths = {
  label: function label() {
    return _$('前三个月');
  },
  value: function value() {
    return [months(-3), now()];
  }
};
export var nextThreeMonths = {
  label: function label() {
    return _$('后三个月');
  },
  value: function value() {
    return [now(), months(3)];
  }
};