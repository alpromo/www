// ** I18N
/*+**********************************************************************************
 * The contents of this file are subject to the vtiger CRM Public License Version 1.1
 * ("License"); You may not use this file except in compliance with the License
 * The Original Code is: vtiger CRM Open Source
 * All Rights Reserved.
 * Description: Defines the Russian language pack.
 * The Initial Translator is Eugene Babiy (eugene.babiy@gmail.com).
 * This Language Pack modified and supported by SalesPlatform Ltd
 * SalesPlatform vtiger CRM Russian Community: http://community.salesplatform.ru/
 * If you have any questions or comments, please email: devel@salesplatform.ru
 ************************************************************************************/

Calendar._DN = new Array
("Воскресенье",
 "Понедельник",
 "Вторник",
 "Среда",
 "Четверг",
 "Пятница",
 "Суббота",
 "Воскресенье");

// Добавлено для 5.2.0
Calendar._SDN = new Array
("Вс",
 "Пн",
 "Втр",
 "Ср",
 "Чт",
 "Пт",
 "Сб",
 "Вс");
// Конец добавления

Calendar._MN = new Array
("Январь",
 "Февраль",
 "Март",
 "Апрель",
 "Май",
 "Июнь",
 "Июль",
 "Август",
 "Сентябрь",
 "Октябрь",
 "Ноябрь",
 "Декабрь");

// Добавлено для 5.2.0
Calendar._SMN = new Array
("Янв",
 "Фев",
 "Мар",
 "Апр",
 "Май",
 "Июн",
 "Июл",
 "Авг",
 "Сен",
 "Окт",
 "Ноя",
 "Дек");
// Конец добавления


// tooltips
Calendar._TT = {};

Calendar._TT["INFO"] = "Про календарь";

Calendar._TT["ABOUT"] =
"DHTML Date/Time Selector\n" +
"(c) dynarch.com 2002-2003\n" + // don't translate this this ;-)
"Последняя версия доступна здесь: http://dynarch.com/mishoo/calendar.epl\n" +
"Распространяется под лицензией GNU LGPL. Пожробнее смотрите http://gnu.org/licenses/lgpl.html." +
"\n\n" +
"Выбор даты:\n" +
"- Используйте кнопки \xab, \xbb чтобы выбрать год\n" +
"- Используйте кнопки " + String.fromCharCode(0x2039) + ", " + String.fromCharCode(0x203a) + " чтобы выбрать месяц\n" +
"- Удерживайте кнопку мыши на любой из следующих кнопок для ускоренного выбора.";
Calendar._TT["ABOUT_TIME"] = "\n\n" +
"Выбор времени:\n" +
"- Нажмите на на любой участок времени чтобы увиличить его\n" +
"- или Shift-щелчек для уменьшения\n" +
"- или щелчек и перемещение для ускооренного выбора.";

Calendar._TT["TOGGLE"] = "Сменить день начала недели (ПН/ВС)";
Calendar._TT["PREV_YEAR"] = "Пред. год (удерживать для меню)";
Calendar._TT["PREV_MONTH"] = "Пред. месяц (удерживать для меню)";
Calendar._TT["GO_TODAY"] = "На сегодня";
Calendar._TT["NEXT_MONTH"] = "След. месяц (удерживать для меню)";
Calendar._TT["NEXT_YEAR"] = "След. год (удерживать для меню)";
Calendar._TT["SEL_DATE"] = "Выбрать дату";
Calendar._TT["DRAG_TO_MOVE"] = "Перетащить";
Calendar._TT["PART_TODAY"] = " (сегодня)";
Calendar._TT["MON_FIRST"] = "Показать понедельник первым";
Calendar._TT["SUN_FIRST"] = "Показать воскресенье первым";
Calendar._TT["CLOSE"] = "Закрыть";
Calendar._TT["TODAY"] = "Сегодня";
Calendar._TT["DAY_FIRST"] = "Понедельник";

// date formats
Calendar._TT["DEF_DATE_FORMAT"] = "%d.%m.%Y";
Calendar._TT["TT_DATE_FORMAT"] = "%e %b, %a";

Calendar._TT["WEEKEND"] = "нед";
Calendar._TT["WK"] = "нед";
Calendar._TT["TIME"] = "Время:";
