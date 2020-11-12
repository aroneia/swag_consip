import moment from 'moment/min/moment-with-locales.js';

export const getFormattedDate = (date, format) => {
  return moment(date).format(format);
};

export const setLocale = (locale) => {
  moment.locale(locale);
};

export const getCurrentMonth = (date) => {
  return moment(date).format('MMMM Y');
};

const genDayOfWeek = (DayOfWeekString) => {
  /*
    DayOfWeekString : SUN, MON, TUE, WED, THU, FRI, SAT
      type : string
   */
  if (typeof DayOfWeekString !== 'string') {
    throw new Error(`genDayOfWeek got parameter type: ${typeof DayOfWeekString}, but string expected`);
  }
  const str2numberString = {
    'mon': '01',
    'tue': '02',
    'wed': '03',
    'thu': '04',
    'fri': '05',
    'sat': '06',
    'sun': '07',
    '월': '01',
    '화': '02',
    '수': '03',
    '목': '04',
    '금': '05',
    '토': '06',
  };

  return new Date(`2019-07-${str2numberString[DayOfWeekString.toLowerCase()]}T00:00:00`);
};

const genTimeBlock = (dayOfWeek, hours = 0, minutes = 0) => {
  const date = genDayOfWeek(dayOfWeek);
  date.setHours(hours);
  if (minutes != null) {
    date.setMinutes(minutes);
  }
  return date;
};

const addColor = (events) => {
  // add color to item
  return events.reduce((acc, item, idx) => {
    const sameOne = acc.find((elem) => {
      return elem.title === item.title;
    });
    const count = acc.reduce((acc, item) => {
      if (acc[acc.length - 1] !== item.title) {
        acc.push(item.title);
      }
      return acc;
    }, []).length;
    acc.push({
      ...item,
      color: sameOne === undefined ? colorGenerator(count) : sameOne.color,
      id: idx,
    });
    return acc;
  }, []);
};


const hashString = (s) => {
  /**
   * String -> Number
   */
  let h, i;
  for (i = 0, h = 0; i < s.length; i++) {
    // eslint-disable-next-line no-bitwise
    h = Math.imul(31, h) + s.charCodeAt(i) | 0;
  }
  return Math.abs(h);
};

const colorGenerator = (num) => {
  const color_list = [
    // apple calendar color
    '#E3DBFF',
  ];
  return color_list[num % color_list.length];
};

export {genDayOfWeek, genTimeBlock, colorGenerator, addColor};

