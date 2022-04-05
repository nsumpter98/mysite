import{r as i,c as t,h as r,H as o,e}from"./p-9e7122fd.js";import{g as n}from"./p-fa12caf6.js";import{m as a,j as s,e as d,g as l}from"./p-7e57a929.js";import{c,h}from"./p-69e7783d.js";const b=class{constructor(r){i(this,r),this.ionChange=t(this,"ionChange",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7),this.ionStyle=t(this,"ionStyle",7),this.inputId="ion-cb-"+p++,this.name=this.inputId,this.checked=!1,this.indeterminate=!1,this.disabled=!1,this.value="on",this.onClick=i=>{i.preventDefault(),this.setFocus(),this.checked=!this.checked,this.indeterminate=!1},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}componentWillLoad(){this.emitStyle()}checkedChanged(i){this.ionChange.emit({checked:i,value:this.value}),this.emitStyle()}disabledChanged(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"checkbox-checked":this.checked,"interactive-disabled":this.disabled})}setFocus(){this.focusEl&&this.focusEl.focus()}render(){const{color:i,checked:t,disabled:e,el:d,indeterminate:l,inputId:b,name:p,value:g}=this,m=n(this),{label:u,labelId:k,labelText:x}=a(d,b);s(!0,d,p,t?g:"",e);let f=r("path",l?{d:"M6 12L18 12",part:"mark"}:{d:"M5.9,12.5l3.8,3.8l8.8-8.8",part:"mark"});return"md"===m&&(f=r("path",l?{d:"M2 12H22",part:"mark"}:{d:"M1.73,12.91 8.1,19.28 22.79,4.59",part:"mark"})),r(o,{onClick:this.onClick,"aria-labelledby":u?k:null,"aria-checked":`${t}`,"aria-hidden":e?"true":null,role:"checkbox",class:c(i,{[m]:!0,"in-item":h("ion-item",d),"checkbox-checked":t,"checkbox-disabled":e,"checkbox-indeterminate":l,interactive:!0})},r("svg",{class:"checkbox-icon",viewBox:"0 0 24 24",part:"container"},f),r("label",{htmlFor:b},x),r("input",{type:"checkbox","aria-checked":`${t}`,disabled:e,id:b,onFocus:()=>this.onFocus(),onBlur:()=>this.onBlur(),ref:i=>this.focusEl=i}))}get el(){return e(this)}static get watchers(){return{checked:["checkedChanged"],disabled:["disabledChanged"]}}};let p=0;b.style={ios:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:50%;--border-width:1px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.23);--background:var(--ion-item-background, var(--ion-background-color, #fff));--size:26px;width:var(--size);height:var(--size)}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:8px;margin-top:10px;margin-bottom:9px;display:block;position:static}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:8px;margin-inline-end:8px}}:host(.in-item[slot=start]){margin-left:2px;margin-right:20px;margin-top:8px;margin-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:20px;margin-inline-end:20px}}",md:":host{--background-checked:var(--ion-color-primary, #3880ff);--border-color-checked:var(--ion-color-primary, #3880ff);--checkmark-color:var(--ion-color-primary-contrast, #fff);--checkmark-width:1;--transition:none;display:inline-block;position:relative;user-select:none;z-index:2}:host(.ion-color){--background-checked:var(--ion-color-base);--border-color-checked:var(--ion-color-base);--checkmark-color:var(--ion-color-contrast)}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}.checkbox-icon{border-radius:var(--border-radius);display:block;position:relative;width:100%;height:100%;transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);box-sizing:border-box}.checkbox-icon path{fill:none;stroke:var(--checkmark-color);stroke-width:var(--checkmark-width);opacity:0}:host(.checkbox-checked) .checkbox-icon,:host(.checkbox-indeterminate) .checkbox-icon{border-color:var(--border-color-checked);background:var(--background-checked)}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{opacity:1}:host(.checkbox-disabled){pointer-events:none}:host{--border-radius:calc(var(--size) * .125);--border-width:2px;--border-style:solid;--border-color:rgba(var(--ion-text-color-rgb, 0, 0, 0), 0.51);--checkmark-width:3;--background:var(--ion-item-background, var(--ion-background-color, #fff));--transition:background 180ms cubic-bezier(0.4, 0, 0.2, 1);--size:18px;width:var(--size);height:var(--size)}.checkbox-icon path{stroke-dasharray:30;stroke-dashoffset:30}:host(.checkbox-checked) .checkbox-icon path,:host(.checkbox-indeterminate) .checkbox-icon path{stroke-dashoffset:0;transition:stroke-dashoffset 90ms linear 90ms}:host(.checkbox-disabled){opacity:0.3}:host(.in-item){margin-left:0;margin-right:0;margin-top:18px;margin-bottom:18px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:18px;margin-bottom:18px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}"};const g=class{constructor(t){i(this,t)}render(){const{lines:i}=this,t=n(this);return r(o,{class:c(this.color,{[t]:!0,[`list-header-lines-${i}`]:void 0!==i})},r("div",{class:"list-header-inner"},r("slot",null)))}};g.style={ios:":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;box-sizing:border-box}::slotted(ion-label){flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-color-step-850, #262626);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-250, #c8c7cc)));padding-left:calc(var(--ion-safe-area-left, 0px) + 20px);position:relative;align-items:flex-end;font-size:22px;font-weight:700;letter-spacing:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0px) + 20px);padding-inline-start:calc(var(--ion-safe-area-left, 0px) + 20px)}}::slotted(ion-button),::slotted(ion-label){margin-top:29px;margin-bottom:6px}::slotted(ion-button){margin-left:3px;margin-right:3px;height:1.4em}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){::slotted(ion-button){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:3px;margin-inline-end:3px}}:host(.list-header-lines-full){--border-width:0 0 0.55px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 0.55px 0}",md:":host{--border-style:solid;--border-width:0;--inner-border-width:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:0;padding-right:0;padding-top:0;padding-bottom:0;display:flex;align-items:center;justify-content:space-between;width:100%;min-height:40px;border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);color:var(--color);overflow:hidden}:host(.ion-color){background:var(--ion-color-base);color:var(--ion-color-contrast)}.list-header-inner{display:flex;position:relative;flex:1;flex-direction:inherit;align-items:inherit;align-self:stretch;min-height:inherit;border-width:var(--inner-border-width);border-style:var(--border-style);border-color:var(--border-color);overflow:inherit;box-sizing:border-box}::slotted(ion-label){flex:1 1 auto}:host(.list-header-lines-inset),:host(.list-header-lines-none){--border-width:0}:host(.list-header-lines-full),:host(.list-header-lines-none){--inner-border-width:0}:host{--background:transparent;--color:var(--ion-text-color, #000);--border-color:var(--ion-item-border-color, var(--ion-border-color, var(--ion-color-step-150, rgba(0, 0, 0, 0.13))));padding-left:calc(var(--ion-safe-area-left, 0) + 16px);min-height:45px;font-size:14px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host{padding-left:unset;-webkit-padding-start:calc(var(--ion-safe-area-left, 0) + 16px);padding-inline-start:calc(var(--ion-safe-area-left, 0) + 16px)}}:host(.list-header-lines-full){--border-width:0 0 1px 0}:host(.list-header-lines-inset){--inner-border-width:0 0 1px 0}"};const m=class{constructor(r){i(this,r),this.ionStyle=t(this,"ionStyle",7),this.ionFocus=t(this,"ionFocus",7),this.ionBlur=t(this,"ionBlur",7),this.inputId="ion-rb-"+u++,this.radioGroup=null,this.checked=!1,this.buttonTabindex=-1,this.name=this.inputId,this.disabled=!1,this.updateState=()=>{this.radioGroup&&(this.checked=this.radioGroup.value===this.value)},this.onClick=()=>{this.checked=this.nativeInput.checked},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()}}async setFocus(i){i.stopPropagation(),i.preventDefault(),this.el.focus()}async setButtonTabindex(i){this.buttonTabindex=i}connectedCallback(){void 0===this.value&&(this.value=this.inputId);const i=this.radioGroup=this.el.closest("ion-radio-group");i&&(this.updateState(),d(i,"ionChange",this.updateState))}disconnectedCallback(){const i=this.radioGroup;i&&(l(i,"ionChange",this.updateState),this.radioGroup=null)}componentWillLoad(){this.emitStyle()}emitStyle(){this.ionStyle.emit({"radio-checked":this.checked,"interactive-disabled":this.disabled})}render(){const{inputId:i,disabled:t,checked:e,color:s,el:d,buttonTabindex:l}=this,b=n(this),{label:p,labelId:g,labelText:m}=a(d,i);return r(o,{"aria-checked":`${e}`,"aria-hidden":t?"true":null,"aria-labelledby":p?g:null,role:"radio",tabindex:l,onFocus:this.onFocus,onBlur:this.onBlur,onClick:this.onClick,class:c(s,{[b]:!0,"in-item":h("ion-item",d),interactive:!0,"radio-checked":e,"radio-disabled":t})},r("div",{class:"radio-icon",part:"container"},r("div",{class:"radio-inner",part:"mark"}),r("div",{class:"radio-ripple"})),r("label",{htmlFor:i},m),r("input",{type:"radio",checked:e,disabled:t,tabindex:"-1",id:i,ref:i=>this.nativeInput=i}))}get el(){return e(this)}static get watchers(){return{color:["emitStyle"],checked:["emitStyle"],disabled:["emitStyle"]}}};let u=0;m.style={ios:':host{--inner-border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color-checked:var(--ion-color-primary, #3880ff);width:15px;height:24px}:host(.ion-color.radio-checked) .radio-inner{border-color:var(--ion-color-base)}.item-radio.item-ios ion-label{margin-left:0}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){.item-radio.item-ios ion-label{margin-left:unset;-webkit-margin-start:0;margin-inline-start:0}}.radio-inner{width:33%;height:50%}:host(.radio-checked) .radio-inner{transform:rotate(45deg);border-width:2px;border-top-width:0;border-left-width:0;border-style:solid;border-color:var(--color-checked)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-9px;top:-8px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-9px}:host(.in-item){margin-left:10px;margin-right:11px;margin-top:8px;margin-bottom:8px;display:block;position:static}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item){margin-left:unset;margin-right:unset;-webkit-margin-start:10px;margin-inline-start:10px;-webkit-margin-end:11px;margin-inline-end:11px}}:host(.in-item[slot=start]){margin-left:3px;margin-right:21px;margin-top:8px;margin-bottom:8px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:3px;margin-inline-start:3px;-webkit-margin-end:21px;margin-inline-end:21px}}',md:':host{--inner-border-radius:50%;display:inline-block;position:relative;box-sizing:border-box;user-select:none;z-index:2}:host(.radio-disabled){pointer-events:none}.radio-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%;contain:layout size style}.radio-icon,.radio-inner{box-sizing:border-box}label{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;appearance:none;outline:none;display:flex;align-items:center;opacity:0}[dir=rtl] label,:host-context([dir=rtl]) label{left:unset;right:unset;right:0}label::-moz-focus-inner{border:0}input{position:absolute;top:0;left:0;right:0;bottom:0;width:100%;height:100%;margin:0;padding:0;border:0;outline:0;clip:rect(0 0 0 0);opacity:0;overflow:hidden;-webkit-appearance:none;-moz-appearance:none}:host(:focus){outline:none}:host{--color:var(--ion-color-step-400, #999999);--color-checked:var(--ion-color-primary, #3880ff);--border-width:2px;--border-style:solid;--border-radius:50%;width:20px;height:20px}:host(.ion-color) .radio-inner{background:var(--ion-color-base)}:host(.ion-color.radio-checked) .radio-icon{border-color:var(--ion-color-base)}.radio-icon{margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;border-radius:var(--border-radius);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--color)}.radio-inner{border-radius:var(--inner-border-radius);width:calc(50% + var(--border-width));height:calc(50% + var(--border-width));transform:scale3d(0, 0, 0);transition:transform 280ms cubic-bezier(0.4, 0, 0.2, 1);background:var(--color-checked)}:host(.radio-checked) .radio-icon{border-color:var(--color-checked)}:host(.radio-checked) .radio-inner{transform:scale3d(1, 1, 1)}:host(.radio-disabled){opacity:0.3}:host(.ion-focused) .radio-icon::after{border-radius:var(--inner-border-radius);left:-12px;top:-12px;display:block;position:absolute;width:36px;height:36px;background:var(--ion-color-primary-tint, #4c8dff);content:"";opacity:0.2}:host-context([dir=rtl]):host(.ion-focused) .radio-icon::after,:host-context([dir=rtl]).ion-focused .radio-icon::after{left:unset;right:unset;right:-12px}:host(.in-item){margin-left:0;margin-right:0;margin-top:9px;margin-bottom:9px;display:block;position:static}:host(.in-item[slot=start]){margin-left:4px;margin-right:36px;margin-top:11px;margin-bottom:10px}@supports (margin-inline-start: 0) or (-webkit-margin-start: 0){:host(.in-item[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:4px;margin-inline-start:4px;-webkit-margin-end:36px;margin-inline-end:36px}}'};const k=class{constructor(r){i(this,r),this.ionChange=t(this,"ionChange",7),this.inputId="ion-rg-"+x++,this.labelId=`${this.inputId}-lbl`,this.allowEmptySelection=!1,this.name=this.inputId,this.setRadioTabindex=i=>{const t=this.getRadios(),r=t.find((i=>!i.disabled)),o=t.find((t=>t.value===i&&!t.disabled));if(!r&&!o)return;const e=o||r;for(const i of t)i.setButtonTabindex(i===e?0:-1)},this.onClick=i=>{i.preventDefault();const t=i.target&&i.target.closest("ion-radio");if(t){const i=t.value;i!==this.value?this.value=i:this.allowEmptySelection&&(this.value=void 0)}}}valueChanged(i){this.setRadioTabindex(i),this.ionChange.emit({value:i})}componentDidLoad(){this.setRadioTabindex(this.value)}async connectedCallback(){const i=this.el.querySelector("ion-list-header")||this.el.querySelector("ion-item-divider");if(i){const t=this.label=i.querySelector("ion-label");t&&(this.labelId=t.id=this.name+"-lbl")}}getRadios(){return Array.from(this.el.querySelectorAll("ion-radio"))}onKeydown(i){const t=!!this.el.closest("ion-select-popover");if(i.target&&!this.el.contains(i.target))return;const r=this.getRadios().filter((i=>!i.disabled));if(i.target&&r.includes(i.target)){const o=r.findIndex((t=>t===i.target)),e=r[o];let n;["ArrowDown","ArrowRight"].includes(i.code)&&(n=o===r.length-1?r[0]:r[o+1]),["ArrowUp","ArrowLeft"].includes(i.code)&&(n=0===o?r[r.length-1]:r[o-1]),n&&r.includes(n)&&(n.setFocus(i),t||(this.value=n.value)),["Space"].includes(i.code)&&(this.value=this.allowEmptySelection&&void 0!==this.value?void 0:e.value,i.preventDefault())}}render(){const{label:i,labelId:t}=this,e=n(this);return r(o,{role:"radiogroup","aria-labelledby":i?t:null,onClick:this.onClick,class:e})}get el(){return e(this)}static get watchers(){return{value:["valueChanged"]}}};let x=0;export{b as ion_checkbox,g as ion_list_header,m as ion_radio,k as ion_radio_group}