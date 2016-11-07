'use strict';Object.defineProperty(exports,'__esModule',{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor)}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor}}();var _firebase=require('firebase');var _firebase2=_interopRequireDefault(_firebase);var _lodash=require('lodash');var _lodash2=_interopRequireDefault(_lodash);var _dotenv=require('dotenv');var _dotenv2=_interopRequireDefault(_dotenv);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj}}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError('Cannot call a class as a function')}}if(process.env.NODE_ENV!=='production')_dotenv2.default.config({silent:process.env.NODE_ENV==='production'});var Store=function(){function Store(){_classCallCheck(this,Store);var _self=this;_firebase2.default.initializeApp({serviceAccount:{'type':process.env.FB_TYPE,'project_id':process.env.FB_PROJECTID,'private_key_id':process.env.FB_PRIVATEKEY_ID,'private_key':process.env.FB_PRIVATEKEY.replace(/\\n/g,'\n'),'client_email':process.env.FB_CLIENT_EMAIL,'client_id':process.env.FB_CLIENT_ID,'auth_uri':process.env.FB_AUTH_URI,'token_uri':process.env.FB_TOKEN_URI,'auth_provider_x509_cert_url':process.env.FB_AUTH_PROVIDER,'client_x509_cert_url':process.env.FB_CLIENT_CERT},databaseURL:process.env.FIREBASE_DB});this.db=_firebase2.default.database();this.ref=this.db.ref('/');this.ref.on('value',function(snapshot){_self.foodList=snapshot.val()})}_createClass(Store,[{key:'getVenueList',value:function getVenueList(restriction){var items=void 0;if(restriction!=='all'){items=_lodash2.default.filter(this.foodList,function(o){return o.availability[restriction.toLowerCase()]})}else{items=this.foodList}return _lodash2.default.sortBy(items,['title'])}},{key:'getRandomLunchVenue',value:function getRandomLunchVenue(restriction){var items=this.getVenueList(restriction);var filtered=_lodash2.default.shuffle(items);return _lodash2.default.first(_lodash2.default.values(filtered))}}]);return Store}();exports.default=Store;