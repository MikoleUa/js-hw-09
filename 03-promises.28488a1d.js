const e={delay:document.querySelector('[name="delay"]'),step:document.querySelector('[name="step"]'),amount:document.querySelector('[name="amount"]'),submitButton:document.querySelector('[type="submit"]')},{delay:t,step:n,amount:o,submitButton:u}=e;e.submitButton.addEventListener("click",(function(e){e.preventDefault(),function e(u=1){let c=u,l=~~t.value+~~n.value*c;Number(o.value)<c||(function(e,t){const n=Math.random()>.3;new Promise(((o,u)=>{setTimeout((()=>{n?o(document.body.insertAdjacentHTML("beforeend",`<span style ="display: block; background-color: yellow; width: 300px">✅ Fulfilled promise ${e} in ${t}ms</span>`)):u(document.body.insertAdjacentHTML("beforeend",`<span style ="display: block; background-color: grey; width: 300px">❌ Rejected promise ${e} in ${t}ms</span>`))}),t)})).then((e=>{console.log(e)})).catch((e=>{console.log(e)}))}(c,l),e(c+=1))}()}));
//# sourceMappingURL=03-promises.28488a1d.js.map