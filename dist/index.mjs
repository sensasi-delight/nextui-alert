import{jsx as r,jsxs as t}from"react/jsx-runtime";import{CheckCircleIcon as e,InfoIcon as n,AlertCircleIcon as i,TriangleAlertIcon as o,XIcon as a}from"lucide-react";import{Button as d}from"@nextui-org/button";import{Card as c}from"@nextui-org/card";function l(r,t){const e={...m,color:s(r,t),backgroundColor:u(r,t)};return"bordered"===r&&(e.borderWidth=2,e["--tw-border-opacity"]=1,e.borderColor=`hsl(var(--nextui-${t}) / var(--nextui-${t}-opacity, var(--tw-border-opacity)))`),e}function s(r,t){return"solid"===r?"#fff":`hsl(var(--nextui-${t}-800) / var(--nextui-${t}-800-opacity, var(--tw-text-opacity)))`}function u(r,t){return"solid"===r?`hsl(var(--nextui-${t}))`:"bordered"===r?"hsl(var(--nextui-background)))":`color-mix(in srgb, hsl(var(--nextui-${t})) 15%, hsl(var(--nextui-background)))`}const m={paddingTop:"0.875rem",paddingBottom:"0.875rem",paddingLeft:"1rem",paddingRight:"1rem",flexDirection:"row",gap:"0.625rem"};function f(s){const{children:u,color:m,endContent:f,onClose:x,variant:h="flat",severity:p="warning",startContent:v,title:g,...b}=s,y=m??("info"===p?"primary":p),w=!1===v?void 0:v??function(t){return r("success"===t?e:"info"===t?n:"danger"===t?i:o,{})}(p);return t(c,{style:l(h,y),...b,children:[w&&r("div",{className:"solid"===h?"":`text-${y}`,children:w}),t("div",{className:"flex-1 place-content-center",children:[g&&r("div",{className:"text-lg font-medium mb-1.5",children:g}),u]}),x&&r(d,{isIconOnly:!0,size:"sm",variant:"light",className:"text-inherit rounded-full min-w-5 min-h-5 w-5 h-5",onPress:x,children:r(a,{})}),f]})}export{f as default};
