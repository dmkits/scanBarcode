//>>built
define("dojox/app/module/lifecycle",["dojo/_base/declare","dojo/topic"],function(b,c){return b(null,{lifecycle:{UNKNOWN:0,STARTING:1,STARTED:2,STOPPING:3,STOPPED:4},_status:0,getStatus:function(){return this._status},setStatus:function(a){this._status=a;c.publish("/app/status",a)}})});
//# sourceMappingURL=lifecycle.js.map