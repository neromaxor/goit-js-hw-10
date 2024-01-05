import"./assets/modulepreload-polyfill-ec808ebb.js";import{i as r}from"./assets/vendor-651d7991.js";const i=document.querySelector("section");i.insertAdjacentHTML("afterend",`<form class="form">
  <label class="delay-label">
    Delay (ms)
    <input type="number" name="delay" required />
  </label>

  <fieldset>
    <legend>State</legend>
    <label class="label-fulfilled">
      <input type="radio" name="state" value="fulfilled" required />
      Fulfilled
    </label>
    <label class="label-rejected">
      <input type="radio" name="state" value="rejected" required />
      Rejected
    </label>
  </fieldset>

  <button type="submit">Create notification</button>
</form>`);const n=document.querySelector(".form");n.addEventListener("submit",s=>{s.preventDefault();const l=document.querySelector('[name="delay"]'),o=document.querySelector('[name="state"]:checked');if(!l||!o)return;const e=parseInt(l.value);new Promise((t,a)=>{setTimeout(()=>{o.value==="rejected"?a(""):t("")},e)}).then(t=>{r.success({title:"OK",titleColor:"#FFF",message:`Fulfilled promise in ${e}ms`,messageColor:"#FFF",position:"topRight",backgroundColor:"#59A10D"})}).catch(t=>{r.error({title:"Error",titleColor:"#FFF",message:`Rejected promise in ${e}ms`,messageColor:"#FFF",position:"topRight",backgroundColor:"#EF4040"})})});
//# sourceMappingURL=commonHelpers2.js.map
