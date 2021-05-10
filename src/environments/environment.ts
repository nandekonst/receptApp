// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.

export var varEnvironment = {
  schema: "https"
 }

export enum dictionaries {
  MAINDB = 0,
  CHEMICDB,
  COMPUTDB,
  LEGALDB,
  MEDICDB,
  TECHNIDB,
  TRADEDB,
  PROVERBDB
};

export const environment = {
  production: true,
  REDIRECTURL: 'localhost:4200',
  API_IP: 'droplet1.euroglot.nl',
  //API_IP: 'api.euroglot.nl',
  //API_IP: '10.78.75.3',
  DB_NAMES: "maindb,chemicdb,computdb,legaldb,medicdb,technidb,tradedb,proverbdb",
  //PORTS_DICTIONARY: '2345,2351,2352,2353,2354,2355,2356,2357',
  //PORTS_CONJUGATIONS: '2348,2371,2372,2373,2374,2375,2376,2377',
  //PORTS_RECOGNIZER: '2346,2361,2362,2363,2364,2365,2366,2367',
  //PORT_RESOURCE: '2347',
  //PORT_SOUFFLEUR: '2349',
  //PORT_AUTH: '2350',
  //PORT_MERGE: '2344',
  //PORT_CONFIG: '2343',
  //PORT_MERGE2: '2339',
  //PORT_MLPROXY: '2341',
  //PORT_PAY: '2338',
  //PORT_TERMINOLOGY: '2325',
  //PORT_SEGMENTER : '2333',
  //PORT_TRANSLATE: '2330',
 
  PORTS_DICTIONARY: '443,443,443,443,443,443,443,443',
  PORTS_CONJUGATIONS: '443,443,443,443,443,443,443,443',
  PORTS_RECOGNIZER: '443,443,443,443,443,443,443,443',
  PORT_RESOURCE: '443',
  PORT_SOUFFLEUR: '443',
  PORT_CONVERTER: '443',
  PORT_AUTH: '443',
  PORT_MERGE: '443',
  PORT_CONFIG: '443',
  PORT_MERGE2: '443',
  PORT_MLPROXY: '443',
  PORT_PAY: '443',
  PORT_TERMINOLOGY: '443',
  PORT_SEGMENTER : '443',
  PORT_TRANSLATE: '443',
  MERGE_FORMS: '/forms/',
  ENDPOINT_PAY: '/pay',
  ENDPOINT_CUSTOMER: '/customer/',
  ENDPOINT_CONVERTER: '/converter/',
  ENDPOINT_PRODUCTS: '/products/',
  ENDPOINT_PRODUCT: '/product/',
  ENDPOINT_ORDERS: '/orders/',
  ENDPOINT_ORDER:'/order/',
  ENDPOINT_BUY: '/buy/',
  ENDPOINT_SUBSCRIBE: '/subscribe/',
  ENDPOINT_MERGE: '/dictionaries',
  ENDPOINT_MERGE2: '/checks',
  ENDPOINT_DICTIONARY_INFO: '/dictionary_info/',
  ENDPOINT_CONCEPT_LIST: '/concept_list',
  ENDPOINT_DICTIONARY: '/dictionary',
  ENDPOINT_CONJUGATION: '/conjugations',
  ENDPOINT_RECOGNIZER: '/recognizer',
  ENDPOINT_RESOURCE: '/resource',
  ENDPOINT_SOUFFLEUR: '/souffleur',
  ENDPOINT_AUTH: '/authenticate',
  ENDPOINT_EGO_LOGIN: '/egonline/',
  ENDPOINT_LOGIN_LOGIN: '/loginauth/',
  ENDPOINT_GAUTH_LOGIN:'/gauth/',
  ENDPOINT_REGISTER_GAUTH: '/register_gauth/',
  ENDPOINT_REGISTER: '/register_loginauth/',
  ENDPOINT_CONFIG: '/configuration',
  ENDPOINT_MLPROXY: '/mlproxy',
  ENDPOINT_EUROGLOT: '/euroglot',
  ENDPOINT_LM:'/lm/',
  ENDPOINT_DEEPLAPI: '/deeplapi',
  ENDPOINT_V2: '/v2',
  ENDPOINT_TRANSLATE: '/translate',
  CONFIG:'/config/',
  ENDPOINT_EXPORT: '/export',
  ENDPOINT_CONCEPT: '/concept',
  ENDPOINT_UPDATE_CONCEPT: '/update_concept',
  ENDPOINT_DELETE_CONCEPT: '/delete_concept',
  ENDPOINT_UPDATE_WORD: '/update_word',
  ENDPOINT_WORD: '/word',
  ENDPOINT_DELETE_WORD: '/delete_word',
  ENDPOINT_TERMINOLOGY: '/terminology',
  ENDPOINT_SEGMENT: '/segmenter/text/',
  ENDPOINT_TRANSLATOR: '/translator/translates',
  IMPORT_ARGS: "",
  EXPORT_ARGS: 'full_data',
  ENDPOINT_IMPORT: '/import',
  RESET_PASSWORD_EGO:'/reset_ego_password/',
  RESET_PASSWORD:'/reset_login_password/',
  RESET_PASSWORD_MAILLINK:'://www.euroglotonline.nl/forgot-password?user=<!--USER-->&hash=<!--HASH-->',
  REGISTER_MAILLINK: '://www.euroglotonline.nl/register-login?user=<!--USER-->&registration_hash=<!--HASH-->',
  TRANSLATE:'/translate/',
  CREATE_TERMINOLOGY: '/create',
  DELETE_TERMINOLOGY:'/delete',
  TERMINOLOGY_LIST: '/list',
  TRANSLATES: '/translates/',
  THESAURUS: '/thesaurus/',
  FORMS: '/forms/',
  TRANSLATED_FORMS: '/translations/',
  SYNONYM_FORMS: '/synonyms/',
  SURROUNDINGS: '/surround/',
  RESOURCE: '/resource/',
  WORDTYPE: '/word_type/',
  WORDTYPES: '/word_types/',
  GENDERS: '/genders/',
  SOUFFLEUR: '/souffleur/',
  CONCEPTS: '/concepts/',
  RESOURCE_ARGS: '',
  ATTRIBUTE: '/attribute/',
  ATTRIBUTE_ARGS: '',
  ATTRIBUTES: '/attributes/',
  ATTRIBUTES_ARGS: '',
  TRANSLATE_ARGS: 'count=4&full_data',
  COUNT_ALL: 'count=0',
  THESAURUS_MT_ARGS: 'count=0&local_recurse&case_insensitive',
  THESAURUS_ARGS: 'full_data',
  SURROUNDINGS_ARGS: 'count=4',
  REFERENCE_ARGS: 'with_references',
  LOCAL_RECURSE: 'local_recurse',
  ALL_RECURSE: 'recurse',
  CASE_INSENSITIVE: 'case_insensitive',
  ALL_TRANSLATED_SYNONYMS: 'all_translated_synonyms',
  HIDE_DOUBLE_ALTERNATIVES: 'hide_double_alternatives',
  DIACRITIC_INSENSITIVE: 'diacritic_insensitive',
  TEST_PURCHASE: false
};
