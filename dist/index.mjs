import{jsx as t,jsxs as r}from"react/jsx-runtime";import{CheckCircleIcon as o,InfoIcon as e,AlertCircleIcon as n,TriangleAlertIcon as i,XIcon as a}from"lucide-react";import{Button as c}from"@nextui-org/button";import{Card as l}from"@nextui-org/card";function d(t,r){return"solid"===t?{}:{color:`hsl(var(--nextui-${r}) / var(--nextui-${r}-opacity, var(--tw-text-opacity)))`}}function s(t,r){const o=function(t,r){return"solid"===t?"#fff":`hsl(var(--nextui-${r}-800) / var(--nextui-${r}-800-opacity, var(--tw-text-opacity)))`}(t,r);return"solid"===t?{...u,color:o,backgroundColor:`hsl(var(--nextui-${r}))`}:"bordered"===t?{...u,color:o,borderWidth:2,"--tw-border-opacity":1,borderColor:`hsl(var(--nextui-${r}) / var(--nextui-${r}-opacity, var(--tw-border-opacity)))`}:{...u,color:o,backgroundColor:`hsl(var(--nextui-${r}) / 0.15)`}}const u={paddingTop:"0.875rem",paddingBottom:"0.875rem",paddingLeft:"1rem",paddingRight:"1rem",flexDirection:"row",gap:"0.625rem"};function m({severity:u="warning",variant:m="flat",color:f,startContent:p,title:x,children:h,onClose:v,endContent:g,...y}){const b=f??"info"===u?"primary":u,w=!1===p?void 0:p??function(r){return t("success"===r?o:"info"===r?e:"danger"===r?n:i,{})}(u);return r(l,{shadow:"none",style:s(m,b),...y,children:[w&&t("div",{style:d(m,b),children:w}),r("div",{className:"flex-1 place-content-center text-",children:[x&&t("div",{className:"text-lg font-medium mb-1.5",children:x}),h]}),v&&t(c,{isIconOnly:!0,size:"sm",variant:"light",className:"text-inherit rounded-full min-w-5 min-h-5 w-5 h-5",onClick:v,children:t(a,{})}),g]})}export{m as default};
