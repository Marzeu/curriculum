document.addEventListener('DOMContentLoaded', function(){
    const skills = document.getElementById('skills').getElementsByTagName('p');
    for (let skill of skills) {
      let porcentagem = skill.innerHTML.slice(skill.innerHTML.indexOf(" - ")+3).replace("%","");
      var newItem = document.createElement("div");
      newItem.setAttribute("class", "barra");
      newItem.setAttribute("style", `background-image: linear-gradient(to right, blue ${porcentagem}%, #333 ${100 - porcentagem}%);`);
      skill.after(newItem);
    }
  });

function alertaTelegram() {
  alert('(48) 9 9645-4572, o mesmo do celular ali em cima!');
}

function alertaFacebook() {
  alert('Desculpe não uso Facebook, mas você pode me encontrar no Linkdin!');
}