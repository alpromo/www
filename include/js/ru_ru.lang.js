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

var alert_arr = {
      DELETE:'Вы уверены что хотите удалить выбранные ',
      RECORDS:' записи?',
      SELECT:'Пожалуйста выберите хотя бы одно значение',
      DELETE_ACCOUNT:'Удаление учетной записи(ей) удалит относящиеся к ним Сделки и Предложения. Вы уверены что хотите удалить выбранные ',
      DELETE_VENDOR:'Удаление этого(их) Поставщика(ов) удалит связанные с ним(и) Заказы на Покупку. Вы уверены что хотите удалить выбранные ',
      SELECT_MAILID:'Пожалуйста выберите учетную запись почты',
      OVERWRITE_EXISTING_ACCOUNT2:') адресными данными?',
	  // SalesPlatform.ru begin
	  OVERWRITE_EXISTING_CONTACT1:'Заменить указанный адрес адресом выбранного (',
	  OVERWRITE_EXISTING_CONTACT2:') контакта?',
	  'No Mail Ids' : 'Отсутствует e-mail адрес',
	  'Mail Ids not permitted' : 'Доступ к e-mail адресам не разрешен',
	  // SalesPlatform.ru end
      MISSING_FIELDS:'Отсутствуют обязательные поля:',
      NOT_ALLOWED_TO_EDIT:'Вам не разрешено редактировать это поле',
      NOT_ALLOWED_TO_EDIT_FIELDS:'Вам не разрешено редактировать эти поля',
      COLUMNS_CANNOT_BE_EMPTY:'Выбранные колонки не могут быть пустми',
      CANNOT_BE_EMPTY:' не может быть пустым',
      CANNOT_BE_NONE:' не может быть без значения',
      ENTER_VALID:'Пожалуйста введите допустимое ',
      SHOULDBE_LESS:' должно быть меньше ',
      SHOULDBE_LESS_EQUAL:' должно быть меньше или равно ',
      SHOULDBE_EQUAL:' должно быть равно ',
      SHOULDBE_GREATER:' должно быть больше ',
      SHOULDBE_GREATER_EQUAL:' должно быть больше или равно ',
      INVALID:'Не верно ',
      EXCEEDS_MAX:' превышает допустимый лимит ',
      OUT_OF_RANGE:' вне диапазона',
      SHOULDNOTBE_EQUAL:' не должно быть ровно ',
      PORTAL_PROVIDE_EMAILID:'Пользователь Портала должен предоставить адрес почты для регистрации',
      ADD_CONFIRMATION:'Вы уверены что хотите добавить избранное ',
      ACCOUNTNAME_CANNOT_EMPTY:'Наименование Контрагента не может быть пустым',
      CANT_SELECT_CONTACTS:'Вы не можете выбрать связанные контакты из Обращений',
      LBL_THIS:'Этот ',
      DOESNOT_HAVE_MAILIDS:' не имеет учетных записей почты',
      ARE_YOU_SURE:'Вы уверены?',
      DOESNOT_HAVE_AN_MAILID:'" не имеет адреса Email',
      MISSING_REQUIRED_FIELDS:'Отсутствуют обязательные поля: ',
      READONLY:'только для чтения',
      SELECT_ATLEAST_ONE_USER:'Пожалуйста выберите хотя бы одного пользователя',
      DISABLE_SHARING_CONFIRMATION:'Вы уверены что хотите запретить общее использование для избранного(х) ',
      USERS:' пользователь(и) ?',
      ENDTIME_GREATER_THAN_STARTTIME:'Дата Завершения должна быть старше Даты Начала ',
      FOLLOWUPTIME_GREATER_THAN_STARTTIME:'Время Отклика должно быть старше Даты Завершения ',
      MISSING_EVENT_NAME:'Отсутствует Название События',
      EVENT_TYPE_NOT_SELECTED:'Тип События не избран',
      CLOSEDATE_CANNOT_BE_EMPTY:'Дата Закрытия не может быть пустой',
      SITEURL_CANNOT_BE_EMPTY:'Адрес Сайта не может быть пустым',
      SITENAME_CANNOT_BE_EMPTY:'Название Сайта не может быть пустым',
      LISTPRICE_CANNOT_BE_EMPTY:'Цена не может быть пустой',
      INVALID_LIST_PRICE:'Неверная Цена',
      PROBLEM_ACCESSSING_URL:'Ошибка доступа к ссылке: ',
      CODE:' Код: ',
      WISH_TO_QUALIFY_MAIL_AS_CONTACT:'Вы уверены что хотите определить это Письмо как Контакт?',
      SELECT_ATLEAST_ONEMSG_TO_DEL:'Пожалуйста выберите хотя бы одно письмо для удаления',
      ERROR:'Ошибка',
      FIELD_TYPE_NOT_SELECTED:'Не выбран Тип Поля',
      SPECIAL_CHARACTERS_NOT_ALLOWED:'Не разрешается использование Специальных Знаков',
      SPECIAL_CHARACTERS:'Специальные знаки',
      NOT_ALLOWED:'не разрешены. Пожалейста попробуйте ввести другие значения',
      PICKLIST_CANNOT_BE_EMPTY:'Значение Списка не может быть пустым',
      DUPLICATE_VALUES_FOUND:'Обнаружены дубликаты записей',
      DUPLICATE_MAPPING_ACCOUNTS:'Дублировать указания для Контрагентов!!',
      DUPLICATE_MAPPING_CONTACTS:'Дублировать указания для Контактов!!',
      DUPLICATE_MAPPING_POTENTIAL:'Дублировать указания для Сделок!!',
      ERROR_WHILE_EDITING:'Ошибка при Редактировании',
      CURRENCY_CHANGE_INFO:'Изменения Валюты произведены Успешно',
      CURRENCY_CONVERSION_INFO:'Вы используете Доллар $ Как Валюту? \n Нажмите OK чтобы оставить как $, Отмена чтобы изменить курс валюты.',
      THE_EMAILID:'Адрес email \\\'',
      EMAIL_FIELD_INVALID:'\\\' в поле адреса неверен',
      MISSING_REPORT_NAME:'Отсутствует Название Отчета',
      REPORT_NAME_EXISTS:'Название Отчета уже существует, попробуйте еще...',
      WANT_TO_CHANGE_CONTACT_ADDR:'Вы хотите изменить адреса Контактов относящихся этому Контрагенту?',
      SURE_TO_DELETE:'Вы уверены что хотите удалить ?',
      NO_PRODUCT_SELECTED:'Выберите хотя бы один Товар',
      VALID_FINAL_PERCENT:'Введите правильную Скидку',
      VALID_FINAL_AMOUNT:'Введите правильное значение Скидки',
      VALID_SHIPPING_CHARGE:'Введите правильную стоимость Сбережения и Доставки',
      VALID_ADJUSTMENT:'Введите правильную Поправку',
      WANT_TO_CONTINUE:'Вы хотите Продолжить?',
      ENTER_VALID_TAX:'Пожалуйста введите правильную ставку Налога',
      VALID_TAX_NAME:'Введите правильное Название Налога',
      CORRECT_TAX_VALUE:'Введите Корректную Ставку Налога',
      ENTER_POSITIVE_VALUE:'Пожалуйста введите позитивное значение',
      LABEL_SHOULDNOT_EMPTY:'Метка налога не может быть пустой',
      NOT_VALID_ENTRY:'неверное значение. Пожалуйста введите корректное значение',
      VALID_DISCOUNT_PERCENT:'Введите правильное значение Скидки',
      VALID_DISCOUNT_AMOUNT:'Введите правильный размер Скидки',
      SELECT_TEMPLATE_TO_MERGE:'Пожалуйста выберите Шаблон для Настройки',
      SELECTED_MORE_THAN_ONCE:'Вы выбрали следующий товар(ы) больше чем один раз.',
      YES:'да',
      NO:'нет',
      MAIL:'письмо',
      EQUALS:'соответствует',
      NOT_EQUALS_TO:'не соответствует',
      STARTS_WITH:'начинается с',
      CONTAINS:'содержит',
      DOES_NOT_CONTAINS:'не содержит',
      LESS_THAN:'меньше чем',
      GREATER_THAN:'больше чем',
      // SalesPlatform.ru begin localization for 5.4.0 
      NONE:'--нет--',
      // SalesPlatform.ru end
      LESS_OR_EQUALS:'меньше или равно',
      GREATER_OR_EQUALS:'больше или равно',
      NO_SPECIAL_CHARS:'Специальные знаки не разрешаются в строке Инвойса',
      PLS_SELECT_VALID_FILE:'Пожалуйста выберите файл со следующим расширением:\n',
      NO_SPECIAL:'Специальные знаки и русские буквы не разрешены',
      NO_QUOTES:'Символы кавычек (\' ") и + не допускаются',
      IN_PROFILENAME:' в Названии Профиля',
      IN_GROUPNAME:' в названии Группы',
      IN_ROLENAME:' в Названии Роли',
      VALID_TAX_PERCENT:'Введите правильный процент Налога',
      VALID_SH_TAX:'Введите правильные Налоги на доставку и сбережение ',
      ROLE_DRAG_ERR_MSG:'Вы не можете переместить Родительскую Ветку в Дочернюю',
      LBL_DEL:'удалить',
      VALID_DATA:' Введите Верные Данные, Пожалуйста попробуйте еще... ',
      STDFILTER:'Стандартные Фильтры',
      STARTDATE:'Дата Начала',
      ENDDATE:'Дата Завершения',
      START_DATE_TIME:'Дата и Время Начала',
      START_TIME:'Время Начала',
      DATE_SHOULDNOT_PAST:'Текущая дата и время для Действий со статусом Планируется',
      TIME_SHOULDNOT_PAST:'Текущее время для Действий со статусом Планируется',
      LBL_AND:'И',
      LBL_ENTER_VALID_PORT:'Пожалуйста введите верный номер порта',
      IN_USERNAME:' в поле Пользователь ',
      LBL_ENTER_VALID_NO:'Пожалуйста введите верный номер',
      LBL_PROVIDE_YES_NO:' Неверное значение.\n Пожалуйста ответьте Да или Нет',
      LBL_SELECT_CRITERIA:' Неверный критерий.\n Пожалуйста выберите критерий',
      OPPORTUNITYNAME_CANNOT_BE_EMPTY:'Название Возможности не может быть пустым',
      OVERWRITE_EXISTING_ACCOUNT1:'Переписать существующий адрес этими(',
      NAME_DESC:'для Названия и Описания папки',
      ENDS_WITH:'заканчивается на',
      SHARED_EVENT_DEL_MSG:'У пользователя нет прав на удаление этой записи.',
      LBL_WRONG_IMAGE_TYPE:'Разрешенные типы файлов для Контактов - jpeg, png, jpg, pjpeg, x-png или gif',
      SELECT_MAIL_MOVE:'Пожалуйста выберите письмо для перемещения...',
      LBL_NOTSEARCH_WITHSEARCH_ALL:'Вы не использовали поиск. Все результаты будут Экспортированы из',
      LBL_NOTSEARCH_WITHSEARCH_CURRENTPAGE:'Вы ничего не искали. Но Вы выбрали опцию "с поиска и текущей страницы". Тогда записи с текущей страницы будут Экспортированы из',
      LBL_NO_DATA_SELECTED:'Нет избранных записей. Выберите хотя бы одну запись для Экспорта',
      LBL_SEARCH_WITHOUTSEARCH_ALL:'Вы использовали опцию поиска но Вы не выбрали опции Без поиска и Все.\nВы можете нажать [ok] чтобы Экспортировать все данные или Вы можете нажать [cancel] и попробовать еще с другими критериями поиска',
      STOCK_IS_NOT_ENOUGH:'В наличии недостаточное к-во',
      // SalesPlatform.ru begin
      QTY: 'К-во',
      COLUMN : 'Колонка',
      // SalesPlatform.ru end
      INVALID_QTY:'Неверное к-во',
      LBL_SEARCH_WITHOUTSEARCH_CURRENTPAGE:'Вы использовали опцию поиска но Вы не выбрали опции Без поиска и Текущая страница.\nВы можете нажать [ok] чтобы Экспортировать данные текущей страницы или Вы можете нажать [cancel] и попробовать еще с другими критериями поиска',
      LBL_SELECT_COLUMN:'Неверная колонка.\n Пожалуйста выберите колонку',
      LBL_NOT_ACCESSIBLE:'Не Допустимо',
      LBL_FILENAME_LENGTH_EXCEED_ERR:'Название файла не может привышать 255 символов',
      LBL_DONT_HAVE_EMAIL_PERMISSION:'У Вас нет доступа к полю Email, поэтому Вы не можете выбрать адрес',
      LBL_NO_FEEDS_SELECTED:'Не Выбраны Поля',
      LBL_SELECT_PICKLIST:'Пожалуйста выберите хотя бы одно значение для удаления',
      LBL_CANT_REMOVE:'Вы не можете убрать все значения',

// Added after 5.0.4 GA
	
	/*For global add/delete in picklist*/
	LBL_GIVE_PICKLIST_VALUE:'Пожалуйста введите несколько значений для этого списка для замены',
	LBL_SELECT_ROLE:'Пожалуйста выберите хотя бы одну роль для которой добавить новые значения',
	LBL_ADD_PICKLIST_VALUE:'Пожалуйста введите хотя бы одно значения для добавления',
	LBL_NO_VALUES_TO_DELETE: 'нет значени для удаления',

                /* For Duplicate merging feature */
	SAME_GROUPS: 'Вы должны выбрать записи в одной группе для объединения',
	ATLEAST_TWO: 'Выберите минимум две записи для объединения',
	MAX_THREE: 'Вам разрешено выбрать максимум три записи',
	//PARENT_RECORD: 'Select a record as parent record',  MergeFields.tpl Line:59
	MAX_RECORDS: 'Вам разрешено выбирать максимум четыре записи',
	CON_MANDATORY: 'Выберите обязательное поле Фамилия',
	LE_MANDATORY: 'Выберите обязательное поле Фамилия и Компания',
	ACC_MANDATORY: 'Выберите обязательное поле Название Контрагента',
	PRO_MANDATORY: 'Выберите обязательное поле Название Товара',
	TIC_MANDATORY: 'Выберите обязательное поле Заголовок Заявки',
	POTEN_MANDATORY: 'Выберите обязательное поле Название Сделки',
	VEN_MANDATORY: 'Выберите обязательное поле Название Поставщика',
	DEL_MANDATORY: 'Вам не разрешено удалять обязательное поле',
	
	/* For Multi-Currency Support */
	MSG_CHANGE_CURRENCY_REVISE_UNIT_PRICE: 'Цена единицы будет отображаться во всех Валютах основываясь на выбранной Валюте. Вы уверены?',
	Select_one_record_as_parent_record : 'Выберите одну запись как родительскую',
	RECURRING_FREQUENCY_NOT_PROVIDED : 'Не указана периодичность повторения',
	RECURRING_FREQNECY_NOT_ENABLED : 'Указана периодичность повторения, но периодичность не включена',
	/* Added for Documents module */
	NO_SPECIAL_CHARS_DOCS:'Специальные символы, как скобки, косая линия, символ +, % и ? не разрешены',
	FOLDER_NAME_TOO_LONG:'Название папки слишком длинное. Исправте и попробуйте еще!',
	FOLDERNAME_EMPTY:'Название Папки не может быть пустым',
	DUPLICATE_FOLDER_NAME:'Попытка дублировать существующее наTrying to duзвание папки. Исправте и попробуйте еще !',
	FOLDER_DESCRIPTION_TOO_LONG:'Описание Папки слишком длинное. Исправте и попробуйте еще!',
	NOT_PERMITTED:'Вам не разрешено выполнять эту операцию.',
	
	ALL_FILTER_CREATION_DENIED:'Невозможно создать Пользовательский Вид используя название "Все", попробуйте использовать другое Название Вида',
	OPERATION_DENIED:'Вам запрещено выполнять данную операцию',
	EMAIL_CHECK_MSG: 'Запретить доступ к порталу чтобы сохранить поле email пустым',
	IS_PARENT : 'Этот Товар имеет Субтовары, Вам не разрешено выбирать Главный Товар',
	
	/*global actions on picklist*/
	PICKLIST_CANNOT_BE_EMPTY: 'Значение Списка не может быть пустым',
	DUPLICATE_VALUES_FOUND: 'Найдены дублирующие записи',
	LBL_NO_ROLES_SELECTED: 'Не выбраны роли, Вы хотите продолжить?',
	LBL_DUPLICATE_FOUND: 'Найдены дублирующие записи для значения ',
	LBL_CANNOT_HAVE_EMPTY_VALUE: 'Невозможно заменить пустым значением, чтобы удалить значение используйте опцию Удалить.',
	LBL_DUPLICATE_VALUE_EXISTS: 'Существуют дублирующие записи',
	LBL_WANT_TO_DELETE: 'Это удалит значения выбранного списка для всех ролей. Вы уверены что хотите продолжить?',
	LBL_DELETE_ALL_WARNING: 'Необходимо иметь хотя бы одно значения для списка',
	LBL_PLEASE_CHANGE_REPLACEMENT: 'пожалуйста измените заменяющее значение; оно также отмечено к удалению',
	
	/*layout Editor changes*/
	BLOCK_NAME_CANNOT_BE_BLANK : 'Название блока не может быть пустым',
	ARE_YOU_SURE_YOU_WANT_TO_DELETE : 'Вы уверены что хотите удалить ?',
	PLEASE_MOVE_THE_FIELDS_TO_ANOTHER_BLOCK : 'Пожалуйста переместите поля в другой блок',
	ARE_YOU_SURE_YOU_WANT_TO_DELETE_BLOCK : 'Вы уверены что хотите удалить блок?',
	LABEL_CANNOT_NOT_EMPTY : 'Метка не может быть Пустой',
	LBL_TYPEALERT_1 : 'Вы не можете связать',
	LBL_WITH : 'с',
	LBL_TYPEALERT_2 : 'типом данных. Пожалуйста свяжите одинаковые типы данных.',
	LBL_LENGTHALERT : 'Извините, Вы не можете связать поля с разным количеством символов. Пожалуйста связывайте данные с одинаковым или большим количеством символов.',
	LBL_DECIMALALERT : 'Извините, Вы не можете связать поля с разным десятичным размещением. Пожалуйста связывайте данные с одинаковым или большим десятичным размещением.',
	FIELD_IS_MANDATORY : 'Обязательное Поле',
	FIELD_IS_ACTIVE : 'Поле доступное для использования',
	FIELD_IN_QCREATE : 'Пресутствует в Быстром Создании',
	FIELD_IS_MASSEDITABLE : 'Доступно для Массового Изменения',
        // SalesPlatform.ru begin added fieldname
        FIELD_NAME : 'Системное имя:',	
        // SalesPlatform.ru end
		
	IS_MANDATORY_FIELD : 'есть Обязательным Полем',
	CLOSEDATE_CANNOT_BE_EMPTY : 'Дата Закрытия не может быть Пустой',
	AMOUNT_CANNOT_BE_EMPTY : 'Сумма не может быть Пустой',
	ARE_YOU_SURE : 'Вы уверены что хотите Удалить?',
	LABEL_ALREADY_EXISTS : 'Метка уже существует. Пожалуйста укажите другую Метку',
	LENGTH_OUT_OF_RANGE : 'Длинна Блока должна быть меньше 50 символов',
	LBL_SELECT_ONE_FILE : 'Пожалуйста выберите хотя бы один Файл',
	LBL_UNABLE_TO_ADD_FOLDER : 'Невозможно добавить Папку. Пожалуйста повторите попытку.',
	LBL_ARE_YOU_SURE_YOU_WANT_TO_DELETE_FOLDER : 'Вы уверены что хотите удалить папку?',
	LBL_ERROR_WHILE_DELETING_FOLDER : 'Ошибка при удалении папку. Пожалуйста повторите попытку еще раз.',
	LBL_FILE_CAN_BE_DOWNLOAD : 'Файл доступен для загрузки',
	LBL_DOCUMENT_LOST_INTEGRITY:'Этот Документ не доступен. Он будет отмечен как Неактивный',
	LBL_DOCUMENT_NOT_AVAILABLE : 'Этот Документ не доступен для Загрузки',
	LBL_FOLDER_SHOULD_BE_EMPTY : 'Папка должна быть пустой перед удалением!',
	
	LBL_PLEASE_SELECT_FILE_TO_UPLOAD : 'Пожалуйста выберите файл для загрузки.',
	LBL_ARE_YOU_SURE_TO_MOVE_TO : 'Вы уверены что хотите переместить файл(ы) в ',
	LBL_FOLDER : ' папку',
	LBL_UNABLE_TO_UPDATE : 'Невозможно обновить! Пожалуйста повторите попытку.',
	LBL_BLANK_REPLACEMENT: 'Невозможно выбрать пустое значение для замены',
	
	LBL_IMAGE_DELETED : 'Изображение Удалено',
	
	/* Tooltip management */
	ERR_FIELD_SELECTION : 'Некоторые ошибки при выборе поля',
	
	/* Inventory validation strings */
	NO_LINE_ITEM_SELECTED : 'Не отмечена запись. Пожалуйста отметьте хотя бы одну запись.',
	LINE_ITEM : 'Позиция Списка',
	LIST_PRICE: 'Цена Продажи',
	
	/* Webmails */
	LBL_PRINT_EMAIL : 'Печать', 
	LBL_DELETE_EMAIL : 'Удалить', 
	LBL_DOWNLOAD_ATTACHMENTS : 'Загрузить Вложения', 
	LBL_QUALIFY_EMAIL : 'Отметить', 
	LBL_FORWARD_EMAIL : 'Переслать', 
	LBL_REPLY_TO_SENDER : 'Ответить Отправителю', 
	LBL_REPLY_TO_ALL : 'Ответить Всем',
	
	LBL_WIDGET_HIDDEN : 'Виджет Скрыт',
	LBL_RESTORE_FROM_PREFERENCES : 'Вы можете восстановить его из Ваших настроек',
	ERR_HIDING : 'Ошибка при скрытии',
	MSG_TRY_AGAIN : 'Пожалуйста повторите попытку',
	
	MSG_ENABLE_SINGLEPANE_VIEW : 'Однопанельный Вид Включен',
	MSG_DISABLE_SINGLEPANE_VIEW : 'Однопанельный Вид Выключен',
	
	MSG_FTP_BACKUP_DISABLED : 'Резервирование по FTP Выключено',
	MSG_LOCAL_BACKUP_DISABLED : 'Локальное Резервирование Выключено',
	MSG_FTP_BACKUP_ENABLED : 'Резервирование по FTP Включено',
	MSG_LOCAL_BACKUP_ENABLED : 'Локальное Резервирование Включено',
	MSG_CONFIRM_PATH : 'подтвердите данные Адреса',
	MSG_CONFIRM_FTP_DETAILS : 'подтвердите данные FTP',
	
	START_PERIOD_END_PERIOD_CANNOT_BE_EMPTY : 'Время Начала или Время Окончания не могут быть пустыми',
	
	/* added to fix i18n issues with home page*/
	LBL_ADD: 'Добавить ',
	Module: 'Модуль',
	DashBoard: 'Панель',
	RSS: 'RSS',
	Default: 'По умолчанию',
	Notebook: 'Блокнот',
	SPECIAL_CHARS:'\\ / < > + \' " ',

	BETWEEN: 'между',
	BEFORE: 'перед',
	AFTER: 'после',   
	'ERROR_DELETING_TRY_AGAIN': 'Ошибка при удалении. Пожалуйста, попробуйте еще раз.',
	'LBL_ENTER_WINDOW_TITLE': 'Пожалуйста, введите Заголовок Окна.',
	'LBL_SELECT_ONLY_FIELDS': 'Пожалуйста, выберите только два поля.',
	'LBL_ENTER_RSS_URL':'Пожалуйста, введите адрес RSS',
	'LBL_ADD_HOME_WIDGET': 'Невозможно добавить объект! Пожалуйста, попробуйте еще',
        // SalesPlatform.ru begin html widget added
        SP_HTML: 'HTML код',
        'LBL_ENTER_HTML_CODE':'Пожалуйста, введите HTML код',
        // SalesPlatform.ru end
// SalesPlatform.ru begin
// 5.3.0 begin
        'LBL_DEFAULT_VALUE_FOR_THIS_FIELD' : 'Значение для поля по умолчанию',

        'RECIPIENTS_CANNOT_BE_EMPTY' : 'Список получателей не может быть пустым',
        'VALID_SCANNER_NAME' : 'Пожалуйста, укажите правильное наименование сканера (это должны быть только буквы и цифры)',
        'ERR_SAME_SOURCE_AND_TARGET' : 'Источник и Приемник не должны совпадать',
        'ERR_ATLEAST_ONE_VALUE_FOR' : 'Вы должны выбрать хотя бы одно значение в списке',
        'ERR_SELECT_MODULE_FOR_DEPENDENCY' : 'Пожалуйста, выберите модуль для добавления зависимости',
// 5.3.0 end

// 5.4.0 begin
// SalesPlatform.ru begin localization for workflow filters
        'LBL_NEW_CONDITION':'Новое условие',
        "is" : "соответствует",
        "is not" : "не соответствует",
        "contains" : "содержит",
        "does not contain" : "не содержит",
        "starts with" : "начинается с",
        "ends with" : "заканчивается на",
        "equal to" : "равно",
        "less than" : "меньше",
        "greater than" : "больше",
        "does not equal" : "не равно",
        "less than or equal to" : "меньше или равно",
        "greater than or equal to" : "больше или равно",
        "has changed" : "изменено",   
// SalesPlatform.ru end
	'LBL_SIZE_SHOULDNOTBE_GREATER':'Размер файла не должен превышать ', //added for upload error message
	'LBL_MAX_SIZE':'Максимальный размер закачиваемого файла',
	'LBL_FILESIZEIN_KB':'Кб', // added to show filesize limit in KB
	'LBL_FILESIZEIN_B':'б', // added to show filesize limit in B
	//Contexual help page
    'LBL_HELP_TITLE' : 'Помощь',
    'LBL_WIKI_TITLE' : 'Руководства',
    'LBL_FAQ_TITLE'   : 'ЧаВо',
    'LBL_VIDEO_TITLE' : 'Видео',
    'LBL_CLOSE_TITLE' : 'Закрыть',
	'LBL_SELECT':'Выберите виджеты для показа по умолчанию',

	'ERR_SELECT_ATLEAST_ONE_MERGE_CRITERIA_FIELD' : 'Выберите хотя бы одно поле в качестве критерия слияния',
	'ERR_PLEASE_MAP_MANDATORY_FIELDS' : 'Пожалуйста, укажите Соответствие для следующих обязательных для заполнения полей',
	'ERR_MAP_NAME_ALREADY_EXISTS' : 'Такое имя Соответствия уже существует. Пожалуйста, задайте другое имя',
	'ERR_MAP_NAME_CANNOT_BE_EMPTY' : 'Имя Соответсвия не может быть пустым',
	'ERR_FIELDS_MAPPED_MORE_THAN_ONCE' : 'Для этого поля Соответсвие задано более одного раза. Пожалуйста, проверьте Соответствие.',

	//error messages for lead conversion
	'ERR_SELECT_EITHER':'Выберите Контрагента или Контакт для преобразования Обращения',
	'ERR_SELECT_ACCOUNT':'Выберите Контрагента для продолжения',
	'ERR_SELECT_CONTACT':'Выберите Контакт для продолжения',
	'ERR_MANDATORY_FIELD_VALUE':'Значения для обязательных полей отсутствуют',
	'ERR_POTENTIAL_AMOUNT':'Сумма Сделки должна быть числом',
	'ERR_EMAILID':'Введите действительный Email',
	'ERR_TRANSFER_TO_ACC':'Должен быть выбран Контрагент для переноса связанных записей',
	'ERR_TRANSFER_TO_CON':'Должен быть выбран Контакт для переноса связанных записей',
	'SURE_TO_DELETE_CUSTOM_MAP':'Вы действительно хотите удалить Соответствие полей?',
	'LBL_CLOSE_DATE':'Дата закрытия',
	'LBL_EMAIL':'Email',
	'MORE_THAN_500' : 'Вы выбрали более 500 записей. Для этого действия может потребоваться много времени. Вы уверены, что хотите продолжить?',
	'LBL_MAPPEDALERT':'Для поля уже задано Соответствие',
// 5.4.0 end

      'LBL_PRODUCT_CODE':'Код товара',
      'LBL_PRODUCT_NAME':'Наименование',
      'LBL_PRODUCT_DESCRIPTION':'Описание',
      'LBL_PRODUCT_COMMENT':'Комментарий',
      'SELECT_DOCWITHFILE':'Пожалуйста, выберите документ с файлом.',
	  'LBL_OFF':'нет',
	  'LBL_ON':'да',
	  'LBL_MOV_EMAIL1':'Перемещение писем из папки ',
	  'LBL_MOV_EMAIL2':' в папку ',
	  'LBL_MOV_EMAIL3':'',
      'SELECT_MASS':'Не выбрано ни одного значения. Сделать рассылку по всем записям текущего фильтра?',
// SalesPlatform.ru end

//SalesPlatform.ru begin localization for ReportCharts 
        ReportCharts: 'Отчет с диаграммой'
//SalesPlatform.ru end
	};
        
// SalesPlatform.ru begin JS SPConfiguration fix
document.write("<script type='text/javascript' src='include/js/renamed.ru_ru.lang.js'></"+"script>");
// SalesPlatform.ru end
