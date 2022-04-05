import{r as t,c as e,h as i,H as s,e as o}from"./p-9e7122fd.js";import{g as n}from"./p-fa12caf6.js";import{f as a,l as r,m as l,j as d}from"./p-7e57a929.js";import{c,f as h,h as p}from"./p-65c4f62c.js";import{h as u}from"./p-69e7783d.js";import"./p-6fd4985d.js";
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const g=(t,e)=>{if(1===t.nodeType)return(t.tagName===e.toUpperCase()?[t]:Array.from(t.querySelectorAll(e))).find((e=>e.value===t.value))},b=class{constructor(i){t(this,i),this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7),this.inputId="ion-sel-"+k++,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}styleChanged(){this.emitStyle()}valueChanged(){this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){this.updateOverlayOptions(),this.emitStyle(),this.mutationO=((t,e,i)=>{if("undefined"==typeof MutationObserver)return;const s=new MutationObserver((t=>{i(((t,e)=>{let i;t.forEach((t=>{for(let s=0;s<t.addedNodes.length;s++)i=g(t.addedNodes[s],e)||i}))})(t,"ion-select-option"))}));return s.observe(t,{childList:!0,subtree:!0}),s})(this.el,0,(async()=>{this.updateOverlayOptions()}))}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);if(this.isExpanded=!0,e.onDidDismiss().then((()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()})),await e.present(),"popover"===this.interface){let t=this.childOpts.map((t=>t.value)).indexOf(this.value);t=t>-1?t:0;const i=e.querySelector(`.select-interface-option:nth-child(${t+1})`);i&&a(i)}return e}createOverlay(t){let e=this.interface;return"action-sheet"===e&&this.multiple&&(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn(`Select interface cannot be a "${e}" without passing an event. Using the "alert" interface instead.`),e="alert"),"action-sheet"===e?this.openActionSheet():"popover"===e?this.openPopover(t):this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const e=this.childOpts,i=this.value;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e,i);break;case"popover":const s=t.querySelector("ion-select-popover");s&&(s.options=this.createPopoverOptions(e,i));break;case"alert":t.inputs=this.createAlertInputs(e,this.multiple?"checkbox":"radio",i)}}createActionSheetButtons(t,e){const i=t.map((t=>{const i=m(t),s=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" "),o=`${C} ${s}`;return{role:f(e,i,this.compareWith)?"selected":"",text:t.textContent,cssClass:o,handler:()=>{this.value=i}}}));return i.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),i}createAlertInputs(t,e,i){return t.map((t=>{const s=m(t),o=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{type:e,cssClass:`${C} ${o}`,label:t.textContent||"",value:s,checked:f(i,s,this.compareWith),disabled:t.disabled}}))}createPopoverOptions(t,e){return t.map((t=>{const i=m(t),s=Array.from(t.classList).filter((t=>"hydrated"!==t)).join(" ");return{text:t.textContent||"",cssClass:`${C} ${s}`,value:i,checked:f(e,i,this.compareWith),disabled:t.disabled,handler:t=>{this.value=t,this.multiple||this.close()}}}))}async openPopover(t){const e=this.interfaceOptions,i=n(this),s="md"!==i,o=this.multiple,a=this.value;let r=t,l="auto";const d=this.el.closest("ion-item");d&&(d.classList.contains("item-label-floating")||d.classList.contains("item-label-stacked"))&&(r=Object.assign(Object.assign({},t),{detail:{ionShadowTarget:d}}),l="cover");const h=Object.assign(Object.assign({mode:i,event:r,alignment:"center",size:l,showBackdrop:s},e),{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,multiple:o,value:a,options:this.createPopoverOptions(this.childOpts,a)}});return c.create(h)}async openActionSheet(){const t=n(this),e=this.interfaceOptions,i=Object.assign(Object.assign({mode:t},e),{buttons:this.createActionSheetButtons(this.childOpts,this.value),cssClass:["select-action-sheet",e.cssClass]});return h.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,s=this.multiple?"checkbox":"radio",o=n(this),a=Object.assign(Object.assign({mode:o},i),{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,s,this.value),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return p.create(a)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}getLabel(){return r(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:y(this.childOpts,this.value,this.compareWith)}setFocus(){this.focusEl&&this.focusEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled,select:!0,"select-disabled":this.disabled,"has-placeholder":void 0!==this.placeholder,"has-value":this.hasValue(),"has-focus":this.isExpanded})}render(){const{disabled:t,el:e,inputId:o,isExpanded:a,name:r,placeholder:c,value:h}=this,p=n(this),{labelText:g,labelId:b}=l(e,o);d(!0,e,r,v(h),t);let f=!1,m=this.getText();""===m&&void 0!==c&&(m=c,f=!0);const x={"select-text":!0,"select-placeholder":f},y=f?"placeholder":"text",w=void 0!==g?""!==m?`${m}, ${g}`:g:m;return i(s,{onClick:this.onClick,role:"button","aria-haspopup":"listbox","aria-disabled":t?"true":null,"aria-label":w,class:{[p]:!0,"in-item":u("ion-item",e),"select-disabled":t,"select-expanded":a}},i("div",{"aria-hidden":"true",class:x,part:y},m),i("div",{class:"select-icon",role:"presentation",part:"icon"},i("div",{class:"select-icon-inner"})),i("label",{id:b},w),i("button",{type:"button",disabled:t,id:o,"aria-labelledby":b,"aria-haspopup":"listbox","aria-expanded":`${a}`,onFocus:this.onFocus,onBlur:this.onBlur,ref:t=>this.focusEl=t}))}get el(){return o(this)}static get watchers(){return{disabled:["styleChanged"],placeholder:["styleChanged"],isExpanded:["styleChanged"],value:["valueChanged"]}}},f=(t,e,i)=>void 0!==t&&(Array.isArray(t)?t.some((t=>x(t,e,i))):x(t,e,i)),m=t=>{const e=t.value;return void 0===e?t.textContent||"":e},v=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},x=(t,e,i)=>"function"==typeof i?i(t,e):"string"==typeof i?t[i]===e[i]:Array.isArray(e)?e.includes(t):t===e,y=(t,e,i)=>void 0===e?"":Array.isArray(e)?e.map((e=>w(t,e,i))).filter((t=>null!==t)).join(", "):w(t,e,i)||"",w=(t,e,i)=>{const s=t.find((t=>x(m(t),e,i)));return s?s.textContent:null};let k=0;const C="select-interface-option";b.style={ios:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:10px;--padding-bottom:10px;--padding-start:20px}.select-icon{width:12px;height:18px;opacity:0.33}",md:":host{--placeholder-color:currentColor;--placeholder-opacity:0.33;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:flex;position:relative;align-items:center;font-family:var(--ion-font-family, inherit);overflow:hidden;z-index:2}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:0.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:var(--placeholder-color);opacity:var(--placeholder-opacity)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}button{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.select-icon{position:relative}.select-text{flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-2px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;pointer-events:none}[dir=rtl] .select-icon-inner,:host-context([dir=rtl]) .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:0;--padding-bottom:10px;--padding-start:16px}.select-icon{width:19px;height:19px;transition:transform 0.15s cubic-bezier(0.4, 0, 0.2, 1);opacity:0.55}:host-context(.item-label-stacked) .select-icon,:host-context(.item-label-floating:not(.item-fill-outline)) .select-icon,:host-context(.item-label-floating.item-fill-outline){transform:translate3d(0,  -9px,  0)}:host-context(.item-has-focus) .select-icon{transform:rotate(180deg)}:host-context(.item-has-focus.item-label-stacked) .select-icon,:host-context(.item-has-focus.item-label-floating:not(.item-fill-outline)) .select-icon{transform:translate3d(0,  -9px,  0) rotate(180deg)}:host-context(ion-item.ion-focused) .select-icon,:host-context(.item-has-focus) .select-icon{color:var(--highlight-color-focused);opacity:1}"};export{b as ion_select}