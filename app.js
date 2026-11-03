const LOGO="assets/logo.png";
const LAYOUTS={A:'Royal Heritage',D:'Split Diagonal',E:'Golden Crest'};
const PAIR_D={
 blue:'น้ำเงินกรมท่า #0B2A5B + เส้นทแยงทองอำพัน #F0B429 + ฝั่งขวาฟ้าน้ำแข็ง #F3F6FB — คู่สีตรงข้าม (น้ำเงิน↔ส้มทอง) ตัดกันชัด ดูเป็นทางการ',
 red:'แดงเลือดหมู #8F0000 + เส้นทแยงทอง #D9A53B + ฝั่งขวางาช้าง #FBF6EC — แดง-ทองแบบไทย อบอุ่นและภูมิฐาน',
 orange:'ส้มอิฐ #B93D0A + เส้นทแยงน้ำเงินเข้ม #1F4566 + ฝั่งขวาครีมพีช #FFF6EC — คู่สีตรงข้าม (ส้ม↔น้ำเงิน) ทำให้ส้มดูหรูขึ้น ไม่จัดจ้าน',
 green:'เขียวมรกต #0F5132 + เส้นทแยงทองแชมเปญ #C9A85A + ฝั่งขวาเขียวหมอก #F4F8F1 — เขียวคู่ทองนุ่ม สงบ สบายตา',
 brown:'น้ำตาลไม้สัก #5B3A29 + เส้นทแยงอำพัน #D08A3C + ฝั่งขวาครีม #F8F1E6 — โทนเดียวกันไล่เข้ม-อ่อน (analogous) กลมกลืน อบอุ่น'
};
const COLORS={
 blue:{th:'น้ำเงิน',hex:'#0b2a5b',pair:'น้ำเงินกรมท่า + ทองอำพัน — ดูน่าเชื่อถือแบบราชการ ตัดกันชัดที่สุดในสี่ชุด'},
 red:{th:'แดง',hex:'#8f0000',pair:'แดงเลือดหมู + ทอง + ครีม — โทนเดิมของหน่วยงาน ดูภูมิฐาน'},
 orange:{th:'ส้ม',hex:'#b93d0a',pair:'ส้มอิฐเข้ม + ทองอ่อน + ครีมพีช — อบอุ่น มีพลัง ใช้ส้มโทนเข้มเพื่อให้ตัวอักษรขาวยังอ่านง่าย'},
 green:{th:'เขียว',hex:'#0f5132',pair:'เขียวมรกต + ทองแชมเปญ — สงบ สบายตา ดูเป็นทางการแบบนุ่มนวล'},
 brown:{th:'น้ำตาล',hex:'#5b3a29',pair:'น้ำตาลไม้สัก + ทองอำพัน + ครีม — อบอุ่น คลาสสิก ดูมั่นคงแบบเรือนไทย'}
};
/* build 12 sections from 3 templates */
const stage=document.getElementById('stage');
for(const L of Object.keys(LAYOUTS))for(const c of Object.keys(COLORS)){
  const sec=document.getElementById('tpl-'+L).content.firstElementChild.cloneNode(true);
  sec.classList.add('t-'+c);sec.dataset.layout=L;sec.dataset.color=c;
  sec.querySelector('.vlabel').innerHTML=`<i style="background:${COLORS[c].hex}"></i><b>${L} · ${LAYOUTS[L]}</b> — สี${COLORS[c].th}`;
  stage.appendChild(sec);
}
document.querySelectorAll("img[data-logo]").forEach(i=>{i.src=LOGO;i.alt='ตราสัญลักษณ์'});

const T={
 th:{org:'สำนักงานคณะกรรมการการศึกษาเอกชน',sys:'ระบบ Single Sign-On',lang:'ภาษา',font:'ขนาดตัวอักษร',ko:'ก',home:'หน้าแรก',
   ph:'พื้นที่เนื้อหาตัวอย่าง ใช้ดูว่า header เข้ากับหน้าเว็บอย่างไร',from:'เปิดจากเมนู'},
 en:{org:'Office of the Private Education Commission',sys:'Single Sign-On System',lang:'Language',font:'Font size',ko:'A',home:'Home',
   ph:'Sample content area to see how the header sits on a page.',from:'Opened from menu'}
};
const MENU=[
 {id:'home',th:'หน้าแรก',en:'Home'},
 {id:'services',th:'บริการ',en:'Services',sub:[
   {id:'school-search',th:'ค้นหารายชื่อโรงเรียน',en:'Search schools'},
   {id:'course-search',th:'ค้นหาหลักสูตรที่เปิดสอน',en:'Search courses offered'},
   {id:'school-name',th:'ขอใช้ชื่อโรงเรียน',en:'Request a school name'},
   {id:'sso-status',th:'ติดตามสถานะการสมัคร SSO',en:'Track SSO registration status'}]},
 {id:'manual',th:'คู่มือการใช้งาน',en:'User Guides',sub:[
   {id:'guide-officer',th:'ขั้นตอนการสมัครใช้งาน สำหรับ ศธจ./สช.จังหวัด/ศึกษานิเทศก์',en:'Registration steps for provincial offices / supervisors'},
   {id:'guide-school',th:'คู่มือการใช้งาน SSO สำหรับโรงเรียน',en:'SSO guide for schools'}]},
 {id:'track',th:'ติดตามคำขอ',en:'Track Requests'},
 {id:'validate',th:'ตรวจสอบเอกสาร',en:'Verify Documents'},
 {id:'faq',th:'FAQ',en:'FAQ'},
 {id:'about',th:'เกี่ยวกับเรา',en:'About Us',sub:[
   {id:'contact',th:'ติดต่อเรา',en:'Contact us'},
   {id:'privacy',th:'นโยบายการคุ้มครองข้อมูลส่วนบุคคล',en:'Privacy policy'},
   {id:'cookie',th:'นโยบายการใช้คุกกี้',en:'Cookie policy'},
   {id:'etrans',th:'ระเบียบธุรกรรมทางอิเล็กทรอนิกส์',en:'Electronic transactions regulation'}]}
];
let lang='th',page='home',fs=16,layout='A',color='blue',all=false;
const EXTRA=[{id:'register',th:'ลงทะเบียนผู้ใช้ใหม่',en:'Register a new user'},{id:'forgot',th:'ลืมรหัสผ่าน',en:'Forgot password'}];
const find=id=>{for(const m of MENU){if(m.id===id)return{item:m};for(const s of m.sub||[])if(s.id===id)return{item:s,parent:m}}const x=EXTRA.find(e=>e.id===id);if(x)return{item:x};return{item:MENU[0]}};
const mobile=()=>matchMedia('(max-width:980px)').matches;
function closeAll(root){root.querySelectorAll('.nv-item.open').forEach(li=>li.classList.remove('open'));}
function buildNav(root){
  const ul=root.querySelector('.js-nav'),p=find(page);ul.innerHTML='';
  MENU.forEach(m=>{
    const li=document.createElement('li');li.className='nv-item'+((m.id===page||p.parent===m)?' active':'');
    if(!m.sub){li.innerHTML=`<a class="nv-link" href="#">${m[lang]}</a>`;li.firstChild.onclick=e=>{e.preventDefault();go(m.id)};}
    else{
      li.innerHTML=`<button class="nv-link">${m[lang]} <span class="chev"></span></button><ul class="nv-sub">${m.sub.map(s=>`<li><a href="#" data-id="${s.id}" class="${s.id===page?'active':''}">${s[lang]}</a></li>`).join('')}</ul>`;
      const b=li.querySelector('button');
      b.onclick=e=>{e.stopPropagation();const o=!mobile()||!li.classList.contains('open');closeAll(root);if(o)li.classList.add('open')};
      li.onmouseenter=()=>{if(!mobile()){closeAll(root);li.classList.add('open')}};
      li.onmouseleave=()=>{if(!mobile())li.classList.remove('open')};
      li.querySelectorAll('.nv-sub a').forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.id)});
    }
    ul.appendChild(li);
  });
}
function buildDemo(root){
  root.querySelector('.js-demo').classList.toggle('lg',page==='home');
  if(page!=='register')root.querySelector('.js-demo').classList.remove('rgd');
  if(page==='home'){renderLogin(root);root.querySelectorAll('.js-demo .js-go').forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.go)});return;}
  if(page==='register'){RG.render(root);return;}
  if(page==='forgot'){renderForgot(root);root.querySelectorAll('.js-demo .js-go').forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.go)});return;}
  return buildDemo0(root);}
function buildDemo0(root){const {item,parent}=find(page),t=T[lang];
  root.querySelector('.js-demo').innerHTML=`${page==='home'?'':`<div class="crumb">${t.home}${parent?' / '+parent[lang]:''} / ${item[lang]}</div>`}<h2>${item[lang]}</h2><div class="card">${page==='home'?'':`<b>${t.from}:</b> ${parent?parent[lang]+' → ':''}${item[lang]}<br>`}${t.ph}</div>`;}
function renderAll(){
  document.documentElement.lang=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>el.textContent=T[lang][el.dataset.i18n]);
  const d=new Date().toLocaleDateString(lang==='th'?'th-TH':'en-GB',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  document.querySelectorAll('.js-date').forEach(s=>s.textContent=d);
  document.querySelectorAll('.variant').forEach(r=>{buildNav(r);buildDemo(r);buildFoot(r)});
  document.querySelectorAll('.js-lang-menu').forEach(m=>{m.innerHTML=['th','en'].map(l=>`<button data-l="${l}" class="${l===lang?'on':''}">${l==='th'?'ไทย':'English'}</button>`).join('');
    m.querySelectorAll('button').forEach(b=>b.onclick=e=>{e.stopPropagation();lang=b.dataset.l;closePops();save();renderAll()})});
}


/* ---------- login / register / forgot ---------- */
const PROV='กรุงเทพมหานคร กระบี่ กาญจนบุรี กาฬสินธุ์ กำแพงเพชร ขอนแก่น จันทบุรี ฉะเชิงเทรา ชลบุรี ชัยนาท ชัยภูมิ ชุมพร เชียงราย เชียงใหม่ ตรัง ตราด ตาก นครนายก นครปฐม นครพนม นครราชสีมา นครศรีธรรมราช นครสวรรค์ นนทบุรี นราธิวาส น่าน บึงกาฬ บุรีรัมย์ ปทุมธานี ประจวบคีรีขันธ์ ปราจีนบุรี ปัตตานี พระนครศรีอยุธยา พะเยา พังงา พัทลุง พิจิตร พิษณุโลก เพชรบุรี เพชรบูรณ์ แพร่ ภูเก็ต มหาสารคาม มุกดาหาร แม่ฮ่องสอน ยโสธร ยะลา ร้อยเอ็ด ระนอง ระยอง ราชบุรี ลพบุรี ลำปาง ลำพูน เลย ศรีสะเกษ สกลนคร สงขลา สตูล สมุทรปราการ สมุทรสงคราม สมุทรสาคร สระแก้ว สระบุรี สิงห์บุรี สุโขทัย สุพรรณบุรี สุราษฎร์ธานี สุรินทร์ หนองคาย หนองบัวลำภู อ่างทอง อำนาจเจริญ อุดรธานี อุตรดิตถ์ อุทัยธานี อุบลราชธานี'.split(' ');
const TX={
 th:{kicker:'ยืนยันตัวตนครั้งเดียว ใช้ได้ทุกระบบ',pts:['เข้าสู่ระบบครั้งเดียว ใช้ได้ทุกระบบ','ปลอดภัยด้วยรหัส OTP ทางอีเมล','จัดการบัญชีและสิทธิ์ในที่เดียว'],welcome:'ยินดีต้อนรับสู่ระบบ Single Sign-On',
  lead:'เข้าสู่ระบบด้วยบัญชีเดียว เพื่อใช้งานบริการออนไลน์ทั้งหมดของสำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน โดยไม่ต้องจำรหัสผ่านหลายชุด',
  apps:[['🏫','ค้นหาโรงเรียน / หลักสูตร','pedb.opec.go.th'],['📝','ขอใช้ชื่อโรงเรียน','orss.opec.go.th'],['📍','ติดตามสถานะคำขอ','peso.opec.go.th'],['📄','ตรวจสอบเอกสาร','evalidate.opec.go.th']],
  login:'เข้าสู่ระบบ',loginSub:'สำหรับผู้ใช้งานที่ลงทะเบียนแล้ว',user:'ชื่อผู้ใช้งานระบบ',userPh:'กรอกชื่อผู้ใช้งาน',pass:'รหัสผ่านระบบ',passPh:'กรอกรหัสผ่าน',
  show:'แสดง',hide:'ซ่อน',remember:'จดจำชื่อผู้ใช้',forgot:'ลืมรหัสผ่าน?',submit:'ยืนยันการเข้าสู่ระบบ',or:'หรือ',thaid:'เข้าใช้งานด้วย ThaID',thaidT:'ยืนยันตัวตนด้วย ThaID',thaidS:'(จำลอง) ระบบจะพาคุณไปยืนยันตัวตนที่แอป ThaID ของกรมการปกครอง ไม่ต้องกรอกรหัสผ่านหรือ OTP',thaidWait:'กำลังรอการยืนยันในแอป ThaID…',thaidOk:'จำลอง: ยืนยันสำเร็จ',thaidCancel:'ยกเลิก',noacc:'ยังไม่มีบัญชีผู้ใช้?',newUser:'ลงทะเบียนผู้ใช้ใหม่',
  needUser:'กรุณากรอกชื่อผู้ใช้งาน',needPass:'กรุณากรอกรหัสผ่าน',demoNote:'หน้าต้นแบบ: กรอกอะไรก็ได้เพื่อดูขั้นตอนถัดไป ลองใช้รหัสผ่าน "wrong" เพื่อดูข้อความแจ้งเตือนเมื่อรหัสผิด',
  wrong:n=>`ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง (เหลืออีก ${n} ครั้ง ก่อนบัญชีถูกระงับชั่วคราว 15 นาที)`,
  otpT:'ยืนยันรหัส OTP',otpS:e=>`ส่งรหัส 6 หลักไปที่อีเมล ${e} แล้ว รหัสมีอายุ 5 นาที`,otpBtn:'ยืนยันรหัส',otpBad:'กรุณากรอกรหัสให้ครบ 6 หลัก',resend:'ส่งรหัสใหม่',back:'ย้อนกลับ',
  okT:'เข้าสู่ระบบสำเร็จ',okS:'(จำลอง) ระบบจะพาคุณกลับไปยังบริการที่ขอเข้าใช้ หรือไปหน้ารวมบริการ',logout:'ออกจากระบบ',
  fT:'ลืมรหัสผ่าน',fS:'กรอกชื่อผู้ใช้งานหรืออีเมลที่ลงทะเบียนไว้ ระบบจะส่งลิงก์สำหรับตั้งรหัสผ่านใหม่ให้ทางอีเมล',fIn:'ชื่อผู้ใช้งาน หรือ อีเมล',fBtn:'ส่งลิงก์ตั้งรหัสผ่านใหม่',
  fNeed:'กรุณากรอกชื่อผู้ใช้งานหรืออีเมล',fSent:'(จำลอง) หากข้อมูลตรงกับบัญชีในระบบ เราได้ส่งลิงก์ตั้งรหัสผ่านใหม่ไปที่อีเมลแล้ว ลิงก์มีอายุ 30 นาที',toLogin:'กลับไปหน้าเข้าสู่ระบบ',
  resent:'ส่งรหัส OTP ใหม่แล้ว (จำลอง)'},
 en:{kicker:'Verify once, use everywhere',pts:['Sign in once, use every system','Secured with email OTP','Manage account & permissions in one place'],welcome:'Welcome to Single Sign-On',
  lead:'Sign in with one account to use every online service of the Office of the Private Education Commission — no more remembering many passwords.',
  apps:[['🏫','Search schools / courses','pedb.opec.go.th'],['📝','Request a school name','orss.opec.go.th'],['📍','Track requests','peso.opec.go.th'],['📄','Verify documents','evalidate.opec.go.th']],
  login:'Sign in',loginSub:'For registered users',user:'Username',userPh:'Enter your username',pass:'Password',passPh:'Enter your password',
  show:'Show',hide:'Hide',remember:'Remember username',forgot:'Forgot password?',submit:'Sign in',or:'or',thaid:'Sign in with ThaID',thaidT:'Verify with ThaID',thaidS:'(Simulated) You will be sent to the ThaID app of the Department of Provincial Administration. No password or OTP needed.',thaidWait:'Waiting for confirmation in the ThaID app…',thaidOk:'Simulate: verified',thaidCancel:'Cancel',noacc:'No account yet?',newUser:'Register a new user',
  needUser:'Please enter your username',needPass:'Please enter your password',demoNote:'Prototype: type anything to see the next step. Use password "wrong" to see the error message.',
  wrong:n=>`Incorrect username or password (${n} attempts left before a 15-minute lock)`,
  otpT:'Enter OTP',otpS:e=>`A 6-digit code was sent to ${e}. It expires in 5 minutes.`,otpBtn:'Verify',otpBad:'Please enter all 6 digits',resend:'Resend code',back:'Back',
  okT:'Signed in',okS:'(Simulated) You will be returned to the service you requested, or to the service portal.',logout:'Sign out',
  fT:'Forgot password',fS:'Enter your username or registered email. We will email you a link to set a new password.',fIn:'Username or email',fBtn:'Send reset link',
  fNeed:'Please enter your username or email',fSent:'(Simulated) If this matches an account, a reset link has been sent. It expires in 30 minutes.',toLogin:'Back to sign in',
  resent:'A new OTP has been sent (simulated)'}
};
const SCHOOLS=['โรงเรียนอัสสัมชัญ','โรงเรียนเซนต์คาเบรียล','โรงเรียนกรุงเทพคริสเตียนวิทยาลัย','โรงเรียนวัฒนาวิทยาลัย','โรงเรียนมาแตร์เดอีวิทยาลัย','โรงเรียนเซนต์ยอแซฟคอนเวนต์','โรงเรียนดาราวิทยาลัย','โรงเรียนมงฟอร์ตวิทยาลัย'];
const S={login:{u:'',remember:false,show:false,err:{},alert:'',tries:5,step:'form'},forgot:{v:'',err:'',sent:false}};
function toast(msg){const t=document.getElementById('toast');t.textContent=msg;t.classList.add('on');clearTimeout(toast._t);toast._t=setTimeout(()=>t.classList.remove('on'),2200);}
const E=v=>String(v).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/"/g,'&quot;');
function fld(k,label,input,opt={}){const e=opt.err;return `<div class="fld ${e?'bad':''}"><label>${label}${opt.req!==false?' <span class="req">*</span>':''}</label>${input}${e?`<div class="err">${e}</div>`:opt.hint?`<div class="hint">${opt.hint}</div>`:''}</div>`}
function renderLogin(root){
  const x=TX[lang],L=S.login,box=root.querySelector('.js-demo');let card='';
  if(L.step==='form'){card=`<h3>${x.login}</h3><p class="sub">${x.loginSub}</p><form class="js-login" novalidate>
     ${L.alert?`<div class="alert err">${L.alert}</div>`:''}
     ${fld('u',x.user,`<div class="in"><input name="u" autocomplete="username" placeholder="${x.userPh}" value="${E(L.u)}"></div>`,{err:L.err.u})}
     ${fld('p',x.pass,`<div class="in"><input name="p" type="${L.show?'text':'password'}" autocomplete="current-password" placeholder="${x.passPh}"><button type="button" class="eye js-eye">${L.show?x.hide:x.show}</button></div>`,{err:L.err.p})}
     <div class="between"><label><input type="checkbox" class="js-rem" ${L.remember?'checked':''}> ${x.remember}</label><button type="button" class="lnk2 js-go" data-go="forgot">${x.forgot}</button></div>
     <button class="btn btn-p w100" type="submit">${x.submit}</button>
     <div class="or">${x.or}</div>
     <button type="button" class="btn btn-t w100 js-tid"><span class="tid">ID</span>${x.thaid}</button>
     <div class="newu">${x.noacc}</div>
     <button type="button" class="btn btn-o w100 js-go" data-go="register" style="margin-top:8px">＋ ${x.newUser}</button>
     <div class="alert info" style="margin:16px 0 0;font-size:.82rem">${x.demoNote}</div></form>`;}
  else if(L.step==='otp'){const mail=(L.u||'user').replace(/[^a-z0-9._-]/gi,'').slice(0,3)+'•••@school.ac.th';
    card=`<h3>${x.otpT}</h3><p class="sub">${x.otpS(mail)}</p><form class="js-otp center" novalidate>
     ${L.alert?`<div class="alert err">${L.alert}</div>`:''}
     <div class="otp">${[0,1,2,3,4,5].map(i=>`<input inputmode="numeric" maxlength="1" data-i="${i}" aria-label="digit ${i+1}">`).join('')}</div>
     <button class="btn btn-p w100" type="submit">${x.otpBtn}</button>
     <div class="between" style="margin:12px 0 0"><button type="button" class="btn-g btn js-back">← ${x.back}</button><button type="button" class="lnk2 js-resend">${x.resend}</button></div></form>`;}
  else if(L.step==='thaid'){card=`<h3>${x.thaidT}</h3><p class="sub">${x.thaidS}</p><div class="center">
     <div class="tw"><span>📱</span></div><p style="color:#666;margin:0 0 18px">${x.thaidWait}</p>
     <button type="button" class="btn btn-p w100 js-tok">✓ ${x.thaidOk}</button>
     <button type="button" class="btn btn-g js-tcancel" style="margin-top:8px">${x.thaidCancel}</button></div>`;}
  else{card=`<div class="center"><div class="bigicon">✓</div><h3>${x.okT}</h3><p class="sub" style="margin-top:6px">${x.okS}</p><button class="btn btn-o js-logout">${x.logout}</button></div>`;}
  box.innerHTML=`<div class="cw"><div class="cw-l"><div class="cw-box">${card}</div></div>
    <div class="cw-r"><h2>${x.welcome}</h2><p class="cw-k">${x.kicker}</p>
      <svg class="shield" viewBox="0 0 120 140" aria-hidden="true"><path d="M60 6 L112 26 V70 C112 104 88 126 60 136 C32 126 8 104 8 70 V26 Z" fill="rgba(255,255,255,.1)" stroke="var(--ac)" stroke-width="3"/><circle cx="60" cy="60" r="14" fill="var(--ac)"/><path d="M53 70 h14 l4 32 h-22z" fill="var(--ac)"/><circle cx="60" cy="60" r="5" fill="var(--m)"/></svg>
      <ul class="cw-pts">${x.pts.map(t=>`<li>${t}</li>`).join('')}</ul></div></div>`;
  const f=box.querySelector('.js-login');
  if(f){f.u.oninput=e=>L.u=e.target.value;
    box.querySelector('.js-eye').onclick=()=>{L.show=!L.show;const i=f.p;i.type=L.show?'text':'password';box.querySelector('.js-eye').textContent=L.show?x.hide:x.show;};
    box.querySelector('.js-rem').onchange=e=>L.remember=e.target.checked;
    f.onsubmit=e=>{e.preventDefault();L.u=f.u.value.trim();const pw=f.p.value;L.err={};L.alert='';
      if(!L.u)L.err.u=x.needUser;if(!pw)L.err.p=x.needPass;
      if(!L.err.u&&!L.err.p){if(pw==='wrong'){L.tries=Math.max(0,L.tries-1);L.alert=x.wrong(L.tries);}else{L.step='otp';L.tries=5;}}
      rerender();if(L.step==='otp')focusOtp();};}
  const o=box.querySelector('.js-otp');
  if(o){const ins=[...o.querySelectorAll('.otp input')];
    ins.forEach((inp,i)=>{inp.oninput=()=>{inp.value=inp.value.replace(/\D/g,'').slice(-1);if(inp.value&&ins[i+1])ins[i+1].focus();};
      inp.onkeydown=e=>{if(e.key==='Backspace'&&!inp.value&&ins[i-1])ins[i-1].focus();};
      inp.onpaste=e=>{const t=(e.clipboardData.getData('text')||'').replace(/\D/g,'').slice(0,6);if(t){e.preventDefault();t.split('').forEach((c,j)=>{if(ins[j])ins[j].value=c});(ins[t.length]||ins[5]).focus();}};});
    o.onsubmit=e=>{e.preventDefault();const code=ins.map(i=>i.value).join('');if(code.length<6){L.alert=x.otpBad;rerender();focusOtp();return;}L.alert='';L.step='done';rerender();};
    box.querySelector('.js-back').onclick=()=>{L.step='form';L.alert='';rerender();};
    box.querySelector('.js-resend').onclick=()=>toast(x.resent);}
  const ti=box.querySelector('.js-tid');if(ti)ti.onclick=()=>{L.step='thaid';L.alert='';rerender();};
  const tk=box.querySelector('.js-tok');if(tk)tk.onclick=()=>{L.step='done';rerender();};
  const tc=box.querySelector('.js-tcancel');if(tc)tc.onclick=()=>{L.step='form';rerender();};
  const lo=box.querySelector('.js-logout');if(lo)lo.onclick=()=>{L.step='form';rerender();};
}
function focusOtp(){const r=document.querySelector('.variant.on .otp input');if(r)r.focus();}
function renderForgot(root){
  const x=TX[lang],F=S.forgot,box=root.querySelector('.js-demo');
  box.innerHTML=`<div class="home" style="grid-template-columns:1fr;max-width:480px"><div class="lcard"><div class="lh"><h3>${x.fT}</h3><p>${x.loginSub}</p></div>
   <form class="lb js-forgot" novalidate><p style="margin:0 0 14px;color:#555;font-size:.93rem">${x.fS}</p>
   ${F.sent?`<div class="alert ok">${x.fSent}</div>`:fld('v',x.fIn,`<input name="v" value="${E(F.v)}">`,{err:F.err})}
   ${F.sent?'':`<button class="btn btn-p w100" type="submit">${x.fBtn}</button>`}
   <button type="button" class="btn btn-g w100 js-go" data-go="home" style="margin-top:8px">← ${x.toLogin}</button></form></div></div>`;
  const f=box.querySelector('.js-forgot');
  f.onsubmit=e=>{e.preventDefault();F.v=(f.v&&f.v.value.trim())||'';F.err=F.v?'':x.fNeed;if(F.v)F.sent=true;rerender();};
}
function rerender(){document.querySelectorAll('.variant').forEach(buildDemo);}

/* ---------- footer ---------- */
const FT={
 th:{desc:'ระบบยืนยันตัวตนกลาง เข้าสู่ระบบครั้งเดียว ใช้บริการได้ทุกระบบของสำนักงาน',contact:'ติดต่อสอบถามปัญหาการใช้งาน',
   phone:'02-282-1000 ต่อ 330, 340',hours:'วันจันทร์–ศุกร์ 08:30–16:30 น.',email:'อีเมล',line:'LINE OpenChat',
   lineNote:'สแกนเพื่อเข้ากลุ่มช่วยเหลือ และแจ้งปัญหาการใช้งาน',qrph:'(ตัวอย่าง — ใส่ QR จริงภายหลัง)',
   top:'กลับขึ้นด้านบน',copy:y=>`© ${y} สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน สงวนลิขสิทธิ์`},
 en:{desc:'Central identity service — sign in once to use every OPEC system.',contact:'Help & support',
   phone:'02-282-1000 ext. 330, 340',hours:'Mon–Fri 08:30–16:30',email:'Email',line:'LINE OpenChat',
   lineNote:'Scan to join the help group and report issues',qrph:'(placeholder — real QR to be added)',
   top:'Back to top',copy:y=>`© ${y} Office of the Private Education Commission. All rights reserved.`}
};
const QR=(()=>{let r='',seed=7;const rnd=()=>(seed=(seed*9301+49297)%233280)/233280;
  const fin=(x,y)=>`<rect x="${x}" y="${y}" width="7" height="7" fill="#111"/><rect x="${x+1}" y="${y+1}" width="5" height="5" fill="#fff"/><rect x="${x+2}" y="${y+2}" width="3" height="3" fill="#111"/>`;
  for(let y=0;y<25;y++)for(let x=0;x<25;x++){if((x<8&&y<8)||(x>16&&y<8)||(x<8&&y>16))continue;if(rnd()>.52)r+=`<rect x="${x}" y="${y}" width="1" height="1" fill="#111"/>`;}
  return `<svg viewBox="0 0 25 25" shape-rendering="crispEdges" aria-label="QR">${r}${fin(0,0)}${fin(18,0)}${fin(0,18)}</svg>`;})();
const sub=id=>MENU.find(m=>m.id===id).sub;
const lk=(o)=>`<li><a class="lnk" data-go="${o.id}">${o[lang]}</a></li>`;
const lg=()=>`<a class="logo js-home" href="#"><img src="${LOGO}" alt="ตราสัญลักษณ์"></a>`;
function contactBlock(f,withQR=true){return `
  <div class="ci"><span class="ic">☎</span><div><b>${f.phone}</b><small>${f.hours}</small></div></div>
  <div class="ci"><span class="ic">✉</span><div>sso@opec.go.th<br>regis.support@opec.go.th</div></div>
  ${withQR?`<div class="qr">${QR}<small><b>${f.line}</b><br>${f.lineNote}<br><span class="ph">${f.qrph}</span></small></div>`:''}`}
function bottomBar(f){const y=lang==='th'?new Date().getFullYear()+543:new Date().getFullYear();
  return `<div class="ft-bottom btm"><span>${f.copy(y)}</span><span class="pol">${sub('about').slice(1).map(o=>`<a class="lnk" data-go="${o.id}">${o[lang]}</a>`).join('')}</span><span class="sp"><button class="totop js-top">↑ ${f.top}</button></span></div>`}
function buildFoot(root){
  const f=FT[lang],t=T[lang],L=root.dataset.layout,el=root.querySelector('.js-foot');
  const svc=MENU.find(m=>m.id==='services'),man=MENU.find(m=>m.id==='manual'),abt=MENU.find(m=>m.id==='about');
  const quick=['track','validate','faq'].map(id=>MENU.find(m=>m.id===id));
  if(L==='A'){el.innerHTML=`<div class="ft-main">
     <div class="ft-brand"><div class="row">${lg()}<h3>${t.org}</h3></div><p class="sys">${t.sys}</p><p class="desc">${f.desc}</p></div>
     <div><h4>${svc[lang]}</h4><ul>${svc.sub.map(lk).join('')}${quick.map(lk).join('')}</ul></div>
     <div><h4>${man[lang]}</h4><ul>${man.sub.map(lk).join('')}</ul><h4>${abt[lang]}</h4><ul>${abt.sub.map(lk).join('')}</ul></div>
     <div class="ft-contact"><h4>${f.contact}</h4>${contactBlock(f)}</div></div>${bottomBar(f)}`;}
  else if(L==='D'){el.innerHTML=`<div class="ft-wrap">
     <div class="ft-left"><div class="row">${lg()}<div><h3>${t.org}</h3><p class="sys">${t.sys}</p></div></div>
       <h4 style="color:#fff;border-color:var(--dac)">${f.contact}</h4>${contactBlock(f,false)}</div>
     <div class="ft-right">
       <div><h4>${svc[lang]}</h4><ul>${svc.sub.map(lk).join('')}</ul></div>
       <div><h4>${man[lang]}</h4><ul>${man.sub.map(lk).join('')}${quick.map(lk).join('')}</ul></div>
       <div><h4>${abt[lang]}</h4><ul>${abt.sub.map(lk).join('')}</ul><div class="qr">${QR}<small><b>${f.line}</b><br>${f.lineNote}<br><span class="ph">${f.qrph}</span></small></div></div>
     </div></div>${bottomBar(f)}`;}
  else{el.innerHTML=`<div class="ft-top"><div class="crest">${lg()}</div><h3>${t.org}</h3><p class="sys">${t.sys}</p></div>
     <div class="ft-cols">
       <div><h4>${svc[lang]}</h4><ul>${svc.sub.map(lk).join('')}</ul></div>
       <div><h4>${man[lang]}</h4><ul>${man.sub.map(lk).join('')}${quick.map(lk).join('')}</ul></div>
       <div><h4>${abt[lang]}</h4><ul>${abt.sub.map(lk).join('')}</ul></div>
     </div>
     <div class="ft-contact">
       <span class="chipc"><i>☎</i><span>${f.phone}<br><small>${f.hours}</small></span></span>
       <span class="chipc"><i>✉</i><span>sso@opec.go.th<br><small>regis.support@opec.go.th</small></span></span>
       <span class="chipc"><i>💬</i><span>${f.line}<br><small>${f.lineNote}</small></span></span>
     </div>${bottomBar(f)}`;}
  el.querySelectorAll('[data-go]').forEach(a=>a.onclick=e=>{e.preventDefault();go(a.dataset.go)});
  el.querySelectorAll('.js-home').forEach(a=>a.onclick=e=>{e.preventDefault();go('home')});
  el.querySelectorAll('.js-top').forEach(b=>b.onclick=()=>{root.scrollIntoView({behavior:'smooth',block:'start'})});
}

const RG=(function(){
const ROLES={
 school:{ic:'🏫',th:'ผู้ดูแลระบบของโรงเรียน',en:'School administrator',dth:'ผู้บริหารหรือเจ้าหน้าที่ที่ได้รับมอบหมายให้ดูแลข้อมูลของโรงเรียนเอกชน',den:'Staff assigned to manage a private school’s data',
   sth:'จัดการข้อมูลโรงเรียนและคำขอ',sen:'Manage school data & requests',
   lth:['จัดการข้อมูลโรงเรียนและหลักสูตร','ยื่นคำขอต่าง ๆ ของโรงเรียน'],len:['Manage school & course data','Submit school requests'],
   docth:['หนังสือแต่งตั้งหรือมอบหมายจากผู้บริหารโรงเรียน (PDF ไม่เกิน 5 MB)','ชื่อหรือรหัสโรงเรียนที่จดทะเบียนกับ สช.','อีเมลที่ใช้งานได้ (ใช้รับรหัส OTP)'],
   docen:['Appointment letter from the school head (PDF, up to 5 MB)','School name or code registered with OPEC','A working email (used for OTP)']},
 province:{ic:'🏛️',th:'ผู้ดูแลระบบระดับจังหวัด',en:'Provincial administrator',dth:'เจ้าหน้าที่ ศธจ. / สช.จังหวัด / ศึกษานิเทศก์',den:'Provincial education office staff and supervisors',
   sth:'ศธจ. / สช.จังหวัด / ศึกษานิเทศก์',sen:'Provincial office / supervisors',
   lth:['ตรวจสอบและอนุมัติคำขอในจังหวัด','ดูแลผู้ใช้ของโรงเรียนในพื้นที่'],len:['Review requests in the province','Manage school users in the area'],
   docth:['หนังสือแต่งตั้งหรือมอบหมายจากหน่วยงานต้นสังกัด (PDF ไม่เกิน 5 MB)','ทราบสังกัดและจังหวัดที่รับผิดชอบ','อีเมลหน่วยงานที่ใช้งานได้'],
   docen:['Appointment letter from your office (PDF, up to 5 MB)','Your affiliation and province','A working work email']},
 central:{ic:'🏢',th:'เจ้าหน้าที่ สช. ส่วนกลาง',en:'OPEC central staff',dth:'บุคลากรของสำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน ส่วนกลาง',den:'Staff of the OPEC central office',
   sth:'บุคลากรส่วนกลาง',sen:'Central office staff',
   lth:['ดูแลภาพรวมของทุกจังหวัด','จัดการสิทธิ์และระบบที่เชื่อมต่อ'],len:['Oversee all provinces','Manage permissions & connected systems'],
   docth:['แบบฟอร์มขอใช้ระบบที่กรอกและลงนามแล้ว (แนบเป็น PDF หรือนำมายื่นที่กลุ่มงานทะเบียน)'],
   docen:['The signed system access request form (attach as PDF or bring it to the Registration Division)']}
};
const RX={
 th:{title:'ลงทะเบียนผู้ใช้ใหม่',sub:'กรอกข้อมูลเพื่อขอสิทธิ์เข้าใช้งานระบบ SSO ใช้เวลาประมาณ 3 นาที',
  s1:'เลือกประเภทผู้ใช้',gA:'ข้อมูลผู้สมัคร',gO:'ข้อมูลหน่วยงาน',gC:'บัญชีผู้ใช้',s5:'ตรวจสอบและส่ง',
  gAs:'ข้อมูลของผู้ที่จะใช้งานระบบ',gOs:'หน่วยงานที่คุณสังกัด',gCs:'ตั้งชื่อผู้ใช้และรหัสผ่านสำหรับเข้าสู่ระบบ',
  pick:'คุณเป็นผู้ใช้ประเภทใด?',pickS:'เลือกให้ตรงกับหน้าที่ของคุณ สิทธิ์การใช้งานจะต่างกันตามประเภท',pickErr:'กรุณาเลือกประเภทผู้ใช้',
  next:'ถัดไป',back:'ย้อนกลับ',submit:'ส่งคำขอลงทะเบียน',review:'ตรวจสอบข้อมูล',choose:'— เลือก —',
  f:{prefix:'คำนำหน้า',fname:'ชื่อ',lname:'นามสกุล',pos:'ตำแหน่ง',tel:'เบอร์โทรศัพท์มือถือ',email:'อีเมล',school:'ชื่อโรงเรียน หรือ รหัสโรงเรียน',prov:'จังหวัด',affil:'สังกัด',dept:'สำนัก / กลุ่มงาน',file:'แนบหนังสือแต่งตั้ง / หนังสือมอบหมาย (PDF)',uname:'ชื่อผู้ใช้งานที่ต้องการ',pw:'รหัสผ่าน',pw2:'ยืนยันรหัสผ่าน',method:'วิธีส่งแบบฟอร์มขอใช้ระบบ',fileForm:'แนบแบบฟอร์มขอใช้ระบบ (PDF)'},
  fileH:'ไฟล์ .pdf ไม่เกิน 5 MB',mFile:'แนบแบบฟอร์มทางออนไลน์',mFileS:'ถ่ายภาพหรือสแกนแบบฟอร์มที่ลงนามแล้ว แล้วแนบเป็นไฟล์ PDF',mIn:'นำเอกสารมายื่นด้วยตนเอง',mInS:'ยื่นที่กลุ่มงานทะเบียน สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน',
  dl:'ดาวน์โหลดแบบฟอร์มขอใช้ระบบ (PDF)',dlToast:'(จำลอง) ดาวน์โหลดแบบฟอร์มขอใช้ระบบ',
  inNote:'กรุณานำแบบฟอร์มขอใช้ระบบที่กรอกและลงนามแล้ว ไปยื่นที่กลุ่มงานทะเบียน สำนักงานคณะกรรมการส่งเสริมการศึกษาเอกชน เจ้าหน้าที่จะเปิดสิทธิ์ให้หลังได้รับเอกสาร',
  gForm:'แบบฟอร์มขอใช้ระบบ',gFormS:'เจ้าหน้าที่ สช. ส่วนกลางไม่ต้องกรอกข้อมูลอื่นในระบบนี้ เลือกส่งแบบฟอร์มขอใช้ระบบด้วยวิธีใดวิธีหนึ่ง',homeBtn:'กลับหน้าแรก',sh:['ประเภท','ผู้สมัคร','หน่วยงาน','บัญชี','แบบฟอร์ม'],mT:'ส่งคำขอลงทะเบียนเรียบร้อยแล้ว',mS:'กรุณาคัดลอกรหัสคำขอไว้ใช้ติดตามสถานะการสมัคร',copy:'คัดลอก',copied:'คัดลอกแล้ว ✓',copyFail:'คัดลอกอัตโนมัติไม่ได้ กรุณาเลือกรหัสแล้วคัดลอกเอง',trackBtn:'ติดตามสถานะ',goHome:'(จำลอง) กลับไปหน้าแรก',inStamp:'ยื่นเอง',pvFile:'ไฟล์แนบ',inBar:'ไม่ต้องกรอกข้อมูลเพิ่มเติม · นำเอกสารไปยื่นที่กลุ่มงานทะเบียน',
  inDone:'อย่าลืมนำแบบฟอร์มขอใช้ระบบที่ลงนามแล้วไปยื่นที่กลุ่มงานทะเบียน พร้อมแจ้งเลขที่คำขอด้านบน เจ้าหน้าที่จะเปิดสิทธิ์หลังได้รับเอกสาร',reviewIn:'นำมายื่นด้วยตนเองที่กลุ่มงานทะเบียน',
  pvForm:'แบบฟอร์ม',pvFormFile:'แนบไฟล์แล้ว',pvFormIn:'ยื่นที่กลุ่มงานทะเบียน',
schoolH:'พิมพ์เพื่อค้นหาโรงเรียนที่จดทะเบียนกับ สช.',unameH:'ภาษาอังกฤษหรือตัวเลข 6–20 ตัวอักษร',emailH:'แนะนำให้ใช้อีเมล @opec.go.th',
  r8:'อย่างน้อย 8 ตัว',rA:'มีตัวอักษร',rN:'มีตัวเลข',
  consent:'ข้าพเจ้ายินยอมให้เก็บและใช้ข้อมูลส่วนบุคคลเพื่อการยืนยันตัวตนและให้บริการ ตาม',policy:'นโยบายการคุ้มครองข้อมูลส่วนบุคคล',policyToast:'(จำลอง) เปิดหน้านโยบายการคุ้มครองข้อมูลส่วนบุคคล',
  req:'กรุณากรอกข้อมูลนี้',bademail:'รูปแบบอีเมลไม่ถูกต้อง',badtel:'กรอกเบอร์มือถือ 10 หลัก',baduname:'ใช้ a-z, 0-9 ความยาว 6–20 ตัว',badpw:'รหัสผ่านยังไม่ตรงตามเงื่อนไข',pwmis:'รหัสผ่านไม่ตรงกัน',needconsent:'กรุณายอมรับนโยบายก่อนดำเนินการต่อ',
  role:'ประเภทผู้ใช้',name:'ชื่อ-นามสกุล',none:'-',revT:'ตรวจสอบข้อมูลก่อนส่ง',revS:'หากต้องการแก้ไข กด "ย้อนกลับ"',
  prefixes:['นาย','นาง','นางสาว'],affils:['สำนักงานส่งเสริมการศึกษาเอกชนจังหวัด (สช.จังหวัด)','สำนักงานศึกษาธิการจังหวัด (ศธจ.)','ศึกษานิเทศก์'],
  doneT:'ส่งคำขอลงทะเบียนเรียบร้อย',doneS:'เจ้าหน้าที่จะตรวจสอบภายใน 3 วันทำการ และแจ้งผลทางอีเมล ใช้เลขที่คำขอนี้เพื่อติดตามสถานะ',track:'ติดตามสถานะการสมัคร SSO',again:'ลงทะเบียนอีกรายการ',goTrack:'(จำลอง) ไปหน้า "ติดตามสถานะการสมัคร SSO"',
  helpT:'ต้องการความช่วยเหลือ?',helpS:'โทร 02-282-1000 ต่อ 330, 340 วันจันทร์–ศุกร์ 08:30–16:30 น.',
  prog:'กรอกแล้ว',of:'จาก',fields:'ช่อง',
  ph2:'เลือกประเภทผู้ใช้ด้านบนเพื่อเริ่มกรอกข้อมูล',ph3:'เลือกประเภทผู้ใช้ทางซ้ายเพื่อเริ่มกรอกข้อมูล',
  preT:'เตรียมให้พร้อม',preTime:'⏱ ใช้เวลาประมาณ 3 นาที',preReview:'🔎 ตรวจสอบภายใน 3 วันทำการ',
  okBtn:'ตกลง',enter:'กด Enter ↵',qOf:'ข้อ',
  q:{role:'ก่อนอื่น คุณเป็นผู้ใช้ประเภทใด?',name:'ขอทราบชื่อ-นามสกุลของคุณ',pos:'คุณดำรงตำแหน่งอะไร?',email:'อีเมลของคุณคืออะไร?',tel:'เบอร์โทรศัพท์มือถือของคุณ',org_school:'คุณดูแลโรงเรียนไหน?',org_province:'คุณสังกัดหน่วยงานใด?',org_central:'คุณอยู่สำนักหรือกลุ่มงานไหน?',file:'แนบหนังสือแต่งตั้งของคุณ',file_form:'แนบแบบฟอร์มขอใช้ระบบของคุณ',method:'คุณจะส่งแบบฟอร์มขอใช้ระบบอย่างไร?',uname:'ตั้งชื่อผู้ใช้งานของคุณ',pw:'ตั้งรหัสผ่าน',consent:'ขอความยินยอมข้อมูลส่วนบุคคล',review:'ตรวจสอบข้อมูลของคุณอีกครั้ง'},
  qs:{method:'แบบฟอร์มที่กรอกและลงนามเรียบร้อยแล้ว',file_form:'ถ่ายภาพหรือสแกนแบบฟอร์มที่ลงนามแล้ว เป็นไฟล์ PDF',email:'ใช้รับรหัส OTP และแจ้งผลการลงทะเบียน',tel:'ใช้เฉพาะกรณีเจ้าหน้าที่ต้องติดต่อกลับ',file:'หนังสือจากผู้บริหารหรือต้นสังกัดที่ระบุว่าคุณเป็นผู้ดูแลระบบ',pw:'ตั้งให้เดายากและไม่ซ้ำกับระบบอื่น',review:'ถ้าถูกต้องแล้วกดส่งได้เลย'},
  pvT:'ตัวอย่างใบสมัคร',pvDraft:'ฉบับร่าง',pvReady:'พร้อมส่ง',pvSent:'ส่งแล้ว',pvName:'ชื่อ-นามสกุล',pvPos:'ตำแหน่ง',pvOrg:'หน่วยงาน',pvProv:'จังหวัด',pvMail:'อีเมล',pvTel:'โทร',pvUser:'ชื่อผู้ใช้',pvNote:'ข้อมูลในใบสมัครอัปเดตทันทีตามที่คุณพิมพ์'},
 en:{title:'Register a new user',sub:'Fill in your details to request access to the SSO system. About 3 minutes.',
  s1:'User type',gA:'Applicant',gO:'Organisation',gC:'Account',s5:'Review & submit',
  gAs:'Details of the person who will use the system',gOs:'The organisation you belong to',gCs:'Choose a username and password for signing in',
  pick:'What type of user are you?',pickS:'Choose the one that matches your role. Permissions differ by type.',pickErr:'Please choose a user type',
  next:'Next',back:'Back',submit:'Submit registration',review:'Review details',choose:'— Select —',
  f:{prefix:'Title',fname:'First name',lname:'Last name',pos:'Position',tel:'Mobile number',email:'Email',school:'School name or code',prov:'Province',affil:'Affiliation',dept:'Bureau / Division',file:'Appointment letter (PDF)',uname:'Desired username',pw:'Password',pw2:'Confirm password',method:'How to submit the access request form',fileForm:'Attach the system access request form (PDF)'},
  fileH:'.pdf up to 5 MB',mFile:'Attach the form online',mFileS:'Photograph or scan the signed form and attach it as a PDF',mIn:'Submit documents in person',mInS:'At the Registration Division, Office of the Private Education Commission',
  dl:'Download the system access request form (PDF)',dlToast:'(Simulated) Download the system access request form',
  inNote:'Please bring the filled-in, signed access request form to the Registration Division, Office of the Private Education Commission. Staff will grant access once the documents are received.',
  gForm:'Access request form',gFormS:'Central OPEC staff do not need to fill in anything else here. Choose one way to submit the access request form.',homeBtn:'Back to home',sh:['Type','Applicant','Organisation','Account','Form'],mT:'Registration submitted',mS:'Please copy your reference number to track the status.',copy:'Copy',copied:'Copied ✓',copyFail:'Could not copy automatically. Please select the number and copy it manually.',trackBtn:'Track status',goHome:'(Simulated) Back to home',inStamp:'In person',pvFile:'File',inBar:'Nothing more to fill in · bring the documents to the Registration Division',
  inDone:'Remember to bring the signed access request form to the Registration Division and quote the reference number above. Access is granted once the documents are received.',reviewIn:'Submit in person at the Registration Division',
  pvForm:'Form',pvFormFile:'Attached',pvFormIn:'In person (Registration Div.)',
schoolH:'Type to search schools registered with OPEC',unameH:'Letters or digits, 6–20 characters',emailH:'An @opec.go.th address is recommended',
  r8:'8+ characters',rA:'a letter',rN:'a number',
  consent:'I consent to the collection and use of my personal data for identity verification and services under the',policy:'Privacy policy',policyToast:'(Simulated) Open the privacy policy',
  req:'This field is required',bademail:'Invalid email format',badtel:'Enter a 10-digit mobile number',baduname:'Use a-z, 0-9, 6–20 characters',badpw:'Password does not meet the rules',pwmis:'Passwords do not match',needconsent:'Please accept the policy to continue',
  role:'User type',name:'Full name',none:'-',revT:'Review before submitting',revS:'Press "Back" to edit',
  prefixes:['Mr.','Mrs.','Ms.'],affils:['Provincial Private Education Office','Provincial Education Office','Education supervisor'],
  doneT:'Registration submitted',doneS:'Staff will review within 3 business days and notify you by email. Use this reference number to track the status.',track:'Track SSO registration status',again:'Register another user',goTrack:'(Simulated) Go to "Track SSO registration status"',
  helpT:'Need help?',helpS:'Call 02-282-1000 ext. 330, 340, Mon–Fri 08:30–16:30',
  prog:'Completed',of:'of',fields:'fields',
  ph2:'Choose a user type above to start',ph3:'Choose a user type on the left to start',
  preT:'Have these ready',preTime:'⏱ About 3 minutes',preReview:'🔎 Reviewed within 3 business days',
  okBtn:'OK',enter:'press Enter ↵',qOf:'Q',
  q:{role:'First, what type of user are you?',name:'What is your full name?',pos:'What is your position?',email:'What is your email?',tel:'Your mobile number',org_school:'Which school do you manage?',org_province:'Which office are you with?',org_central:'Which bureau or division are you in?',file:'Attach your appointment letter',file_form:'Attach your access request form',method:'How will you submit the access request form?',uname:'Choose a username',pw:'Set a password',consent:'Personal data consent',review:'Review your details'},
  qs:{method:'The form, filled in and signed',file_form:'Photograph or scan the signed form as a PDF',email:'Used for OTP codes and registration updates',tel:'Only used if staff need to reach you',file:'A letter from your head or office stating you are the administrator',pw:'Make it hard to guess and unique',review:'If everything is correct, submit'},
  pvT:'Application preview',pvDraft:'Draft',pvReady:'Ready',pvSent:'Sent',pvName:'Full name',pvPos:'Position',pvOrg:'Organisation',pvProv:'Province',pvMail:'Email',pvTel:'Phone',pvUser:'Username',pvNote:'The application updates as you type'}
};
const blank=()=>({prefix:'',fname:'',lname:'',pos:'',tel:'',email:'',school:'',prov:'',affil:'',dept:'',method:'file',file:'',uname:'',pw:'',pw2:'',consent:false});
const R={role:null,d:blank(),err:{},sent:false,ref:''};
const ST={1:{step:1,max:1},2:{open:{1:true}}};

/* ---------- field model ---------- */
const G=r=>r==='central'?{applicant:[],org:(R.d.method==='file'?['file']:[]),account:[]}:({applicant:['prefix','fname','lname','pos','tel','email'],org:r==='school'?['school','prov','file']:r==='province'?['affil','prov','file']:(R.d.method==='file'?['dept','file']:['dept']),account:['uname','pw','pw2']});
const reqKeys=r=>{if(r==='central')return R.d.method==='file'?['file','consent']:[];const g=G(r);return [...g.applicant,...g.org,...g.account,'consent'];};
const filled=k=>k==='consent'?!!R.d.consent:String(R.d[k]??'').trim()!=='';
const pwOk=p=>({len:p.length>=8,a:/[a-z]/i.test(p),n:/\d/.test(p)});
function pwRuleHTML(){const x=RX[lang],p=pwOk(R.d.pw);return `<div class="pwrule js-rule"><span class="${p.len?'ok':''}">✓ ${x.r8}</span><span class="${p.a?'ok':''}">✓ ${x.rA}</span><span class="${p.n?'ok':''}">✓ ${x.rN}</span></div>`;}
function fieldHTML(k){
  if(k==='method')return methodHTML();
  const x=RX[lang],d=R.d,e=R.err[k],lab=(k==='file'&&R.role==='central')?x.f.fileForm:x.f[k];let inp='',hint='';const val=E(d[k]);
  if(k==='prefix'||k==='affil'||k==='prov'){
    const opts=k==='prefix'?x.prefixes.map((t,i)=>[String(i),t]):k==='affil'?x.affils.map((t,i)=>[String(i),t]):PROV.map(p=>[p,p]);
    inp=`<select name="${k}"><option value="">${x.choose}</option>${opts.map(o=>`<option value="${E(o[0])}" ${String(d[k])===o[0]?'selected':''}>${E(o[1])}</option>`).join('')}</select>`;}
  else if(k==='file'){inp=`<input name="file" type="file" accept="application/pdf">`;hint=d.file?'✓ '+E(d.file):x.fileH;}
  else if(k==='school'){inp=`<input name="school" value="${val}" list="schools-list" autocomplete="off">`;hint=x.schoolH;}
  else if(k==='tel')inp=`<input name="tel" type="tel" value="${val}" inputmode="numeric" maxlength="10" placeholder="08xxxxxxxx">`;
  else if(k==='email'){inp=`<input name="email" type="email" value="${val}" placeholder="name@example.com">`;hint=R.role==='central'?x.emailH:'';}
  else if(k==='pw'||k==='pw2')inp=`<input name="${k}" type="password" value="${val}" autocomplete="new-password">`;
  else if(k==='uname'){inp=`<input name="uname" value="${val}" autocomplete="off">`;hint=x.unameH;}
  else inp=`<input name="${k}" value="${val}">`;
  return `<div class="fld ${e?'bad':''}" data-k="${k}"><label>${lab} <span class="req">*</span></label>${inp}${k==='pw'?pwRuleHTML():''}${e?`<div class="err">${e}</div>`:hint?`<div class="hint">${hint}</div>`:''}</div>`;
}
function methodHTML(){const x=RX[lang],m=R.d.method;
  return `<div class="fld" data-k="method"><label>${x.f.method} <span class="req">*</span></label>
   <div class="mopts" role="radiogroup"><button type="button" role="radio" aria-checked="${m==='file'}" class="mo js-m ${m==='file'?'on':''}" data-v="file"><span><b>${x.mFile}</b><small>${x.mFileS}</small></span></button>
   <button type="button" role="radio" aria-checked="${m==='inperson'}" class="mo js-m ${m==='inperson'?'on':''}" data-v="inperson"><span><b>${x.mIn}</b><small>${x.mInS}</small></span></button></div>
   <div class="hint"><a class="lnk2 js-dl">⬇ ${x.dl}</a></div>${m==='inperson'?`<div class="alert info" style="margin:10px 0 0">${x.inNote}</div>`:''}</div>`;}
const f=fieldHTML;
const isIn=()=>R.role==='central'&&R.d.method==='inperson';
function centralBodyHTML(){const x=RX[lang];return `<div class="alert info" style="margin-bottom:16px">${x.gFormS}</div>${f('method')}${R.d.method==='file'?`${f('file')}${consentHTML()}`:''}`;}
function groupHTML(g,r=R.role){
  if(g==='applicant')return `<div class="g3">${f('prefix')}${f('fname')}${f('lname')}</div><div class="g2">${f('pos')}${f('tel')}</div>${f('email')}`;
  if(g==='org'){if(r==='school')return `${f('school')}<div class="g2">${f('prov')}${f('file')}</div>`;if(r==='province')return `<div class="g2">${f('affil')}${f('prov')}</div>${f('file')}`;return `${f('dept')}${f('method')}${R.d.method==='file'?f('file'):''}`;}
  return `${f('uname')}<div class="g2">${f('pw')}${f('pw2')}</div>`;
}
function consentHTML(){const x=RX[lang];return `<label class="chk"><input type="checkbox" name="consent" ${R.d.consent?'checked':''}><span>${x.consent} <a class="lnk2 js-policy">${x.policy}</a></span></label>${R.err.consent?`<div class="cerr">${R.err.consent}</div>`:''}`;}
function clearErr(fl,k){delete R.err[k];fl.classList.remove('bad');const e=fl.querySelector('.err');if(e)e.remove();}
function bindFields(el,onChange){
  el.querySelectorAll('.fld[data-k] input,.fld[data-k] select').forEach(i=>{
    const fl=i.closest('.fld'),k=fl.dataset.k,ev=(i.tagName==='SELECT'||i.type==='file')?'change':'input';
    i.addEventListener(ev,()=>{
      if(i.type==='file'){R.d.file=i.files[0]?i.files[0].name:'';let h=fl.querySelector('.hint');if(!h){h=document.createElement('div');h.className='hint';fl.appendChild(h);}h.textContent=R.d.file?'✓ '+R.d.file:RX[lang].fileH;}
      else R.d[k]=i.value;
      clearErr(fl,k);
      if(k==='pw'){const p=pwOk(i.value),sp=fl.querySelectorAll('.js-rule span');[p.len,p.a,p.n].forEach((v,j)=>sp[j].classList.toggle('ok',v));}
      if(onChange)onChange(k);});});
  const c=el.querySelector('input[name=consent]');
  if(c)c.onchange=()=>{R.d.consent=c.checked;delete R.err.consent;const er=el.querySelector('.cerr');if(er)er.remove();if(onChange)onChange('consent');};
  el.querySelectorAll('.js-policy').forEach(a=>a.onclick=e=>{e.preventDefault();toast(RX[lang].policyToast);});
  el.querySelectorAll('.js-dl').forEach(a=>a.onclick=e=>{e.preventDefault();toast(RX[lang].dlToast);});
  el.querySelectorAll('.js-home').forEach(b=>b.onclick=()=>go('home'));
  el.querySelectorAll('.js-m').forEach(b=>b.onclick=()=>{R.d.method=b.dataset.v;delete R.err.file;renderAll();const nb=document.querySelector('.variant.on .js-m[data-v="'+b.dataset.v+'"]');if(nb)nb.focus({preventScroll:true});});
}
function validate(keys){
  const x=RX[lang],d=R.d,e={};
  keys.forEach(k=>{
    if(k==='method')return;
    if(k==='consent'){if(!d.consent)e.consent=x.needconsent;return;}
    const v=String(d[k]??'').trim();
    if(!v){e[k]=x.req;return;}
    if(k==='email'&&!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v))e[k]=x.bademail;
    if(k==='tel'&&!/^0\d{9}$/.test(v))e[k]=x.badtel;
    if(k==='uname'&&!/^[a-z0-9]{6,20}$/i.test(v))e[k]=x.baduname;
    if(k==='pw'){const p=pwOk(d.pw);if(!(p.len&&p.a&&p.n))e[k]=x.badpw;}
    if(k==='pw2'&&d.pw!==d.pw2)e[k]=x.pwmis;
  });return e;
}
function focusBad(el){const b=el.querySelector('.fld.bad input,.fld.bad select');if(b){b.scrollIntoView({block:'center'});b.focus({preventScroll:true});}}
function reviewRows(){
  const x=RX[lang],d=R.d,r=ROLES[R.role],px=x.prefixes[d.prefix]||'';
  if(R.role==='central'){const rr=[[x.role,r.ic+' '+r[lang]],[x.f.method,d.method==='file'?x.mFile:x.reviewIn]];if(d.method==='file')rr.push([x.f.fileForm,d.file||x.none]);return rr;}
  const rows=[[x.role,r.ic+' '+r[lang]],[x.name,`${px} ${d.fname} ${d.lname}`.trim()],[x.f.pos,d.pos],[x.f.email,d.email],[x.f.tel,d.tel]];
  if(R.role==='school')rows.push([x.f.school,d.school],[x.f.prov,d.prov],[x.f.file,d.file||x.none]);
  if(R.role==='province')rows.push([x.f.affil,x.affils[d.affil]||''],[x.f.prov,d.prov],[x.f.file,d.file||x.none]);
  rows.push([x.f.uname,d.uname]);return rows;
}
const revHTML=()=>`<dl class="rev">${reviewRows().map(r=>`<dt>${r[0]}</dt><dd>${E(r[1])}</dd>`).join('')}</dl>`;
function submitNow(){R.ref=`SSO-${new Date().getFullYear()+543}-${String(Math.floor(Math.random()*900000)+100000)}`;R.sent=true;renderAll();openModal();}
function resetAll(){R.role=null;R.d=blank();R.err={};R.sent=false;R.ref='';ST[1]={step:1,max:1};ST[2]={open:{1:true}};renderAll();window.scrollTo({top:0});}
/* ---------- success dialog ---------- */
const modalEl=()=>document.getElementById('rgmodal');
async function copyRef(){
  const x=RX[lang],b=document.getElementById('mcopy');let ok=false;
  try{await navigator.clipboard.writeText(R.ref);ok=true;}
  catch(e){try{const ta=document.createElement('textarea');ta.value=R.ref;ta.style.cssText='position:fixed;opacity:0';document.body.appendChild(ta);ta.select();ok=document.execCommand('copy');ta.remove();}catch(_){ok=false;}}
  if(!ok){toast(x.copyFail);return;}
  if(b){b.textContent=x.copied;setTimeout(()=>{const c=document.getElementById('mcopy');if(c)c.textContent=RX[lang].copy;},2000);}
}
function renderModal(){
  const x=RX[lang];
  modalEl().parentNode.className='rg t-'+color;
  modalEl().querySelector('.mbox').innerHTML=`<div class="bigicon">✓</div><h3>${x.mT}</h3><p>${x.mS}</p>
    <div class="refrow"><span class="refno">${R.ref}</span><button type="button" class="btn btn-o" id="mcopy">${x.copy}</button></div>
    <div class="mact"><button type="button" class="btn btn-o" id="mtrack">${x.trackBtn}</button><button type="button" class="btn btn-p" id="mok">${x.okBtn}</button></div>`;
  document.getElementById('mcopy').onclick=copyRef;
  document.getElementById('mtrack').onclick=()=>go('sso-status');
  document.getElementById('mok').onclick=closeModal;
}
function openModal(){renderModal();modalEl().classList.add('on');document.body.style.overflow='hidden';setTimeout(()=>{const o=document.getElementById('mok');if(o)o.focus();},30);}
function closeModal(){modalEl().classList.remove('on');document.body.style.overflow='';resetAll();}
function fillDemo(){
  if(!R.role)R.role='school';
  Object.assign(R.d,{prefix:'1',fname:'สมศรี',lname:'ใจดี',pos:R.role==='central'?'นักวิชาการศึกษา':R.role==='province'?'ศึกษานิเทศก์':'ผู้อำนวยการ',tel:'0812345678',email:R.role==='central'?'somsri@opec.go.th':'somsri@school.ac.th',
    school:'โรงเรียนอัสสัมชัญ',prov:'พระนครศรีอยุธยา',affil:'0',dept:'กลุ่มพัฒนาระบบดิจิทัล',file:'appointment.pdf',uname:'somsri01',pw:'abc12345',pw2:'abc12345',consent:true});
  R.err={};ST[1].max=4;renderAll();
}

/* ---------- 1 · application card + stepper/form ---------- */
function r1(el){
  const x=RX[lang],s=ST[1];
  const cen=R.role==='central',inP=isIn();
  const g=R.role&&!cen?G(R.role):null;
  const steps=cen?[[x.sh[0],[]],[x.sh[4],reqKeys('central')]]:[[x.sh[0],[]],[x.sh[1],g?g.applicant:[]],[x.sh[2],g?g.org:[]],[x.sh[3],g?[...g.account,'consent']:[]]];
  const last=steps.length;s.step=Math.min(s.step,last);
  const FOC=(cen?{1:['role'],2:['prov','org']}:{1:['role'],2:['name','pos','email','tel'],3:['org','prov'],4:['uname']})[s.step];
  const stat=()=>R.sent?'sent':inP?'inperson':(R.role&&reqKeys(R.role).every(filled)?'ready':'draft');
  let body='';
  if(s.step===1)body=`<h3>${x.pick}</h3><p class="sub">${x.pickS}</p>${R.err.role?`<div class="alert err">${R.err.role}</div>`:''}<div class="rcs">${Object.keys(ROLES).map(k=>{const r=ROLES[k];return `<button type="button" class="rc js-role ${R.role===k?'on':''}" data-k="${k}"><span class="ri">${r.ic}</span><span><h4>${r[lang]}</h4><p>${lang==='th'?r.dth:r.den}</p><ul>${(lang==='th'?r.lth:r.len).map(l=>`<li>${l}</li>`).join('')}</ul></span><span class="tk">✓</span></button>`}).join('')}</div>`;
  else if(cen)body=`<h3>${x.gForm}</h3><div style="margin-top:16px">${centralBodyHTML()}</div>`;
  else if(s.step===2)body=`<h3>${x.gA}</h3><p class="sub">${x.gAs}</p>${groupHTML('applicant')}`;
  else if(s.step===3)body=`<h3>${x.gO}</h3><p class="sub">${x.gOs}</p>${groupHTML('org')}`;
  else body=`<h3>${x.gC}</h3><p class="sub">${x.gCs}</p>${groupHTML('account')}${consentHTML()}`;
  el.innerHTML=`<div class="r1"><h2 class="r1t">${x.title}</h2>${pvHTML(stat())}
    <section class="fc"><ol class="steps stp">${steps.map((t,i)=>`<li class="${s.step===i+1?'on':i+1<s.step?'passed':''}"><span class="n">${i+1<s.step?'✓':i+1}</span><button type="button" class="js-st" data-i="${i+1}" ${i+1>s.max?'disabled':''}>${t[0]}</button></li>`).join('')}</ol>
    <div class="fb">${body}<div class="acts"><button type="button" class="btn btn-g js-bk" ${s.step===1?'style="visibility:hidden"':''}>← ${x.back}</button><button type="button" class="btn btn-p js-nx">${s.step===last?(cen&&inP?x.homeBtn:'✓ '+x.submit):x.next+' →'}</button></div></div></section></div>`;
  const setStamp=()=>{const st=el.querySelector('.js-stamp');if(st){const v=stat();st.textContent=v==='inperson'?x.inStamp:v==='ready'?x.pvReady:x.pvDraft;}};
  updatePV(el,FOC);
  bindFields(el,()=>{updatePV(el,FOC);setStamp();});
  el.querySelectorAll('.js-role').forEach(b=>b.onclick=()=>{R.role=b.dataset.k;delete R.err.role;r1(el);});
  el.querySelectorAll('.js-st').forEach(b=>b.onclick=()=>{s.step=+b.dataset.i;r1(el);});
  el.querySelector('.js-bk').onclick=()=>{s.step=Math.max(1,s.step-1);r1(el);};
  el.querySelector('.js-nx').onclick=()=>{
    if(s.step===1){if(!R.role){R.err.role=x.pickErr;r1(el);return;}s.step=2;}
    else if(cen){if(inP){go('home');return;}const e=validate(['file','consent']);R.err=e;if(!Object.keys(e).length){submitNow();return;}r1(el);focusBad(el);return;}
    else if(s.step===4){const e=validate(reqKeys(R.role));R.err=e;if(!Object.keys(e).length){submitNow();return;}
      const g2=G(R.role);s.step=g2.applicant.some(k=>e[k])?2:g2.org.some(k=>e[k])?3:4;r1(el);focusBad(el);return;}
    else{const e=validate(steps[s.step-1][1]);R.err=e;if(Object.keys(e).length){r1(el);focusBad(el);return;}s.step++;}
    s.max=Math.max(s.max,s.step);r1(el);window.scrollTo({top:0});
  };
}

/* ---------- 2 · accordion ---------- */
function groupsOf(r){if(r==='central')return [];const g=G(r);return [['gA',g.applicant],['gO',g.org],['gC',[...g.account,'consent']]];}
const PVMAP={prefix:'name',fname:'name',lname:'name',pos:'pos',email:'email',tel:'tel',school:'org',affil:'org',dept:'org',prov:'prov',uname:'uname'};
function pvKeysFor(k){if(k==='file')return R.role==='central'?['prov','org']:[];if(k==='method')return ['prov','org'];return PVMAP[k]?[PVMAP[k]]:[];}
const pvStat=()=>R.sent?'sent':isIn()?'inperson':(R.role&&reqKeys(R.role).every(filled)?'ready':'draft');
function refreshStamp(el){const x=RX[lang],st=el.querySelector('.js-stamp');if(!st)return;const v=pvStat();st.textContent=v==='sent'?x.pvSent:v==='inperson'?x.inStamp:v==='ready'?x.pvReady:x.pvDraft;st.classList.toggle('sent',v==='sent');}
function r2(el){
  const x=RX[lang],s=ST[2];
  const seg=`<div class="seg">${Object.keys(ROLES).map(k=>{const r=ROLES[k];return `<button type="button" class="js-role ${R.role===k?'on':''}" data-k="${k}"><span class="ri">${r.ic}</span><span><b>${r[lang]}</b><small>${lang==='th'?r.sth:r.sen}</small></span></button>`}).join('')}</div>`;
  let main='',bar='';
  if(!R.role){main=`<div class="empty2">${x.ph2}</div>`;}
  else{
    const gs=groupsOf(R.role);
    if(R.role==='central')main=`<div class="acc open" data-i="1"><button type="button" class="h js-ac"><span class="no">1</span><span class="t"><b>${x.gForm}</b><small class="cnt"></small></span><span class="ch"></span></button><div class="body">${centralBodyHTML()}</div></div>`;
    else main=gs.map(([n,keys],i)=>{const done=keys.filter(filled).length,ok=done===keys.length,hasErr=keys.some(k=>R.err[k]);const body=['applicant','org','account'][i];
      return `<div class="acc ${s.open[i+1]?'open':''} ${ok?'ok':''} ${hasErr?'hasErr':''}" data-i="${i+1}"><button type="button" class="h js-ac"><span class="no">${ok?'✓':i+1}</span><span class="t"><b>${x[n]}</b><small class="cnt">${done} ${x.of} ${keys.length} ${x.fields}</small></span><span class="ch"></span></button><div class="body">${groupHTML(body)}${i===2?consentHTML():''}</div></div>`;}).join('');
  }
  const all=R.role?reqKeys(R.role):[],dn=all.filter(filled).length,pct=all.length?Math.round(dn/all.length*100):0;
  const bar0=`<div class="bar2"><div class="pg"><small class="pgt">${x.prog} ${pct}% (${dn} ${x.of} ${all.length} ${x.fields})</small><div class="pbar"><i class="pgi" style="width:${pct}%"></i></div></div><button type="button" class="btn btn-p js-sub" ${R.role?'':'disabled'}>✓ ${x.submit}</button></div>`;
  bar=isIn()?`<div class="bar2"><div class="pg"><small>${x.inBar}</small></div><button type="button" class="btn btn-o js-home">${x.homeBtn}</button></div>`:bar0;
  let foc=[];
  el.innerHTML=`<div class="r2"><h2>${x.title}</h2><p class="sub">${x.sub}</p><div class="r2g">${pvHTML(pvStat())}<div class="r2m">${seg}${main}${bar}</div></div></div>`;
  updatePV(el,foc);
  const upd=(k)=>{if(typeof k==='string')foc=pvKeysFor(k);updatePV(el,foc);refreshStamp(el);if(!R.role)return;const gs=groupsOf(R.role);el.querySelectorAll('.acc').forEach((a,i)=>{if(!gs[i])return;const keys=gs[i][1],done=keys.filter(filled).length,ok=done===keys.length;a.classList.toggle('ok',ok);a.querySelector('.no').textContent=ok?'✓':i+1;a.querySelector('.cnt').textContent=`${done} ${x.of} ${keys.length} ${x.fields}`;});
    const all=reqKeys(R.role),dn=all.filter(filled).length,pct=all.length?Math.round(dn/all.length*100):0;if(!el.querySelector('.pgt'))return;el.querySelector('.pgt').textContent=`${x.prog} ${pct}% (${dn} ${x.of} ${all.length} ${x.fields})`;el.querySelector('.pgi').style.width=pct+'%';};
  bindFields(el,upd);
  el.querySelector('.r2m').addEventListener('focusin',e=>{const fl=e.target.closest&&e.target.closest('.fld[data-k]');if(fl){foc=pvKeysFor(fl.dataset.k);updatePV(el,foc);}});
  el.querySelectorAll('.js-role').forEach(b=>b.onclick=()=>{R.role=b.dataset.k;R.err={};r2(el);});
  el.querySelectorAll('.js-ac').forEach(b=>b.onclick=()=>{const a=b.closest('.acc'),i=+a.dataset.i;s.open[i]=!a.classList.contains('open');a.classList.toggle('open',s.open[i]);});
  const sb=el.querySelector('.js-sub');
  if(sb)sb.onclick=()=>{const e=validate(reqKeys(R.role));R.err=e;if(!Object.keys(e).length){submitNow();return;}
    groupsOf(R.role).forEach(([n,keys],i)=>{if(keys.some(k=>e[k]))s.open[i+1]=true;});r2(el);focusBad(el);};
}

/* ---------- 5 · live preview ---------- */
function pvHTML(status='draft'){const x=RX[lang],st={draft:[x.pvDraft,''],ready:[x.pvReady,''],sent:[x.pvSent,'sent'],inperson:[x.inStamp,'']}[status];return `<aside class="pv"><div class="pvh"><small>${x.pvT.toUpperCase()}</small><b>${x.title}</b><span class="stamp js-stamp ${st[1]}">${st[0]}</span></div>
  <div class="av"><svg viewBox="0 0 100 100" aria-hidden="true"><circle cx="50" cy="38" r="17" fill="var(--m)" opacity=".85"/><path d="M14 100c0-22 16-36 36-36s36 14 36 36z" fill="var(--m)" opacity=".85"/></svg></div>
  <div class="pvb"><div class="nm" data-pv="name"></div><div class="ps" data-pv="pos"></div>
   <dl><div><dt>${x.f.fname?x.role:''}</dt><dd data-pv="role"></dd></div><div><dt data-pvl="org">${x.pvOrg}</dt><dd data-pv="org"></dd></div><div><dt data-pvl="prov">${x.pvProv}</dt><dd data-pv="prov"></dd></div><div><dt>${x.pvMail}</dt><dd data-pv="email"></dd></div><div><dt>${x.pvTel}</dt><dd data-pv="tel"></dd></div><div><dt>${x.pvUser}</dt><dd data-pv="uname"></dd></div></dl></div></aside>`;}
function updatePV(el,focus=[]){
  const x=RX[lang],d=R.d,r=R.role?ROLES[R.role]:null,px=x.prefixes[d.prefix]||'',cen=R.role==='central';
  const val={name:cen?r[lang]:`${px} ${d.fname} ${d.lname}`.trim(),pos:cen?x.gForm:d.pos,role:r?r.ic+' '+r[lang]:'',
    org:R.role==='school'?d.school:R.role==='province'?(x.affils[d.affil]||''):cen?(d.method==='file'?d.file:''):'',
    prov:cen?(d.method==='inperson'?x.pvFormIn:(d.file?x.pvFormFile:'')):d.prov,email:d.email,tel:d.tel,uname:d.uname};
  const setL=(k,t)=>{const l=el.querySelector('[data-pvl="'+k+'"]');if(l)l.textContent=t;};
  setL('prov',cen?x.pvForm:x.pvProv);setL('org',cen?x.pvFile:x.pvOrg);
  const rowOf=k=>{const n=el.querySelector('[data-pv="'+k+'"]');return n?n.closest('dl div'):null;};
  ['email','tel','uname'].forEach(k=>{const rw=rowOf(k);if(rw)rw.style.display=cen?'none':'';});
  const orw=rowOf('org');if(orw)orw.style.display=(cen&&d.method==='inperson')?'none':'';
  const ph={name:x.pvName,pos:x.pvPos,role:x.role,org:cen?'—':x.pvOrg,prov:cen?'—':x.pvProv,email:'name@example.com',tel:'08xxxxxxxx',uname:'username'};
  el.querySelectorAll('[data-pv]').forEach(n=>{const k=n.dataset.pv,v=val[k];n.textContent=v||ph[k];n.classList.toggle('ghost',!v);(n.closest('dl div')||n).classList.toggle('hl',focus.includes(k));});
}

let rlay='1';
function renderInto(root){
  const dm=root.querySelector('.js-demo');if(!dm)return;
  dm.classList.add('rgd');
  dm.innerHTML='<div class="rg"><div class="rw js-rr"></div></div>';
  const el=dm.querySelector('.js-rr');
  (rlay==='2'?r2:r1)(el);
}
function renderAll(){
  if(page==='register')document.querySelectorAll('.variant').forEach(renderInto);
  if(modalEl().classList.contains('on'))renderModal();
}
document.addEventListener('keydown',e=>{
  if(!modalEl().classList.contains('on')||e.key!=='Tab')return;
  const bs=[...modalEl().querySelectorAll('button')],i=bs.indexOf(document.activeElement);
  e.preventDefault();bs[(i+(e.shiftKey?-1:1)+bs.length)%bs.length].focus();
});
return {render:renderInto,renderAll,fill:fillDemo,reset:resetAll,get lay(){return rlay},set lay(v){rlay=v==='2'?'2':'1';}};

})();

function go(id){if(id==='forgot'&&page!=='forgot')S.forgot={v:'',err:'',sent:false};page=id;window.scrollTo({top:0});document.querySelectorAll('.variant').forEach(r=>{closeAll(r);r.classList.remove('nv-open')});renderAll();syncRG();}
function closePops(){document.querySelectorAll('.pop-menu.open').forEach(m=>m.classList.remove('open'))}
document.querySelectorAll('.variant').forEach(root=>{
  root.querySelectorAll('.js-lang').forEach(b=>b.onclick=e=>{e.stopPropagation();const m=b.parentNode.querySelector('.js-lang-menu');const o=!m.classList.contains('open');closePops();if(o)m.classList.add('open')});
  root.querySelectorAll('.js-fs-down').forEach(b=>b.onclick=e=>{e.stopPropagation();fs=Math.max(13,fs-1);applyFs()});
  root.querySelectorAll('.js-fs-up').forEach(b=>b.onclick=e=>{e.stopPropagation();fs=Math.min(22,fs+1);applyFs()});
  root.querySelectorAll('.js-home').forEach(a=>a.onclick=e=>{e.preventDefault();go('home')});
  root.querySelector('.js-burger').onclick=e=>{e.stopPropagation();root.classList.toggle('nv-open')};
});
function applyFs(){document.documentElement.style.setProperty('--fs',fs+'px');
  document.querySelectorAll('.js-fs-down').forEach(b=>b.disabled=fs<=13);document.querySelectorAll('.js-fs-up').forEach(b=>b.disabled=fs>=22);save();}
document.addEventListener('click',()=>{closePops();document.querySelectorAll('.variant').forEach(closeAll)});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){closePops();document.querySelectorAll('.variant').forEach(closeAll)}});

function syncRG(){
  const on=page==='register';
  document.getElementById('rgTools').style.display=on?'inline-flex':'none';
  document.getElementById('rgGo').classList.toggle('on',on);
  document.querySelectorAll('#switch [data-rlay]').forEach(b=>b.classList.toggle('on',b.dataset.rlay===RG.lay));
}
function show(){
  stage.classList.toggle('all',all);
  document.querySelectorAll('.variant').forEach(s=>s.classList.toggle('on',all||(s.dataset.layout===layout&&s.dataset.color===color)));
  document.querySelectorAll('[data-layout]').forEach(b=>{if(b.tagName==='BUTTON')b.classList.toggle('on',!all&&b.dataset.layout===layout)});
  document.querySelectorAll('[data-color]').forEach(b=>{if(b.tagName==='BUTTON')b.classList.toggle('on',!all&&b.dataset.color===color)});
  document.getElementById('allBtn').classList.toggle('on',all);
  document.getElementById('desc').textContent=all?'แสดงทั้ง 15 แบบเรียงกัน (ซ่อนพื้นที่เนื้อหาเพื่อให้เทียบ header ง่าย) — กดเลือกแบบหรือสีเพื่อกลับไปดูทีละแบบ':`${layout} · ${LAYOUTS[layout]} — สี${COLORS[color].th}: ${layout==='D'?PAIR_D[color]:COLORS[color].pair}`;
  syncRG();if(page==='register')RG.renderAll();
  save();
}
document.querySelectorAll('#switch [data-layout]').forEach(b=>b.onclick=()=>{layout=b.dataset.layout;all=false;show()});
document.querySelectorAll('#switch [data-color]').forEach(b=>b.onclick=()=>{color=b.dataset.color;all=false;show()});
document.getElementById('allBtn').onclick=()=>{all=!all;show()};
document.getElementById('rgGo').onclick=()=>go('register');
document.querySelectorAll('#switch [data-rlay]').forEach(b=>b.onclick=()=>{RG.lay=b.dataset.rlay;syncRG();RG.renderAll();save();});
document.getElementById('rgFill').onclick=()=>RG.fill();
document.getElementById('rgReset').onclick=()=>RG.reset();
addEventListener('resize',()=>document.querySelectorAll('.variant').forEach(buildNav));
function save(){try{localStorage.setItem('opec-hdr12',JSON.stringify({lang,fs,layout,color,all,rlay:RG.lay}))}catch(e){}}
try{const s=JSON.parse(localStorage.getItem('opec-hdr12')||'{}');if(s.lang)lang=s.lang;if(s.fs)fs=s.fs;if(LAYOUTS[s.layout])layout=s.layout;if(COLORS[s.color])color=s.color;all=!!s.all;if(s.rlay)RG.lay=s.rlay}catch(e){}
renderAll();applyFs();show();
