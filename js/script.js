/* Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.
# MILESTONE 0:
Creare l’array di oggetti con le informazioni fornite.
# MILESTONE 1:
Stampare su console le informazioni di nome, ruolo e la stringa della foto
# MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
# BONUS 1:
Trasformare la stringa foto in una immagine effettiva (le trovate in allegato)
# BONUS 2:
Organizzare i singoli membri in card/schede e ispirarci alle grafiche in allegato
Consigli del giorno:
Ragioniamo come sempre a step.
Prima la logica in italiano e poi traduciamo in codice.
*/

/* ---------------------------------DATI-------------------------------
Wayne Barnett |	Founder & CEO        |	wayne-barnett-founder-ceo.jpg
Angela Caroll |	Chief Editor         |	angela-caroll-chief-editor.jpg
Walter Gordon |	Office Manager       |	walter-gordon-office-manager.jpg
Angela Lopez  |	Social Media Manager |	angela-lopez-social-media-manager.jpg
Scott Estrada |	Developer            |	scott-estrada-developer.jpg
Barbara Ramos |	Graphic Designer     |	barbara-ramos-graphic-designer.jpg 
*/

// Creo l'array di oggetti:

const teamMembers = [
    {name: 'Wayne Barnett', role: 'Founder & CEO', source: 'wayne-barnett-founder-ceo.jpg', email: 'waynebarnett@team.com'},
    {name: 'Angela Caroll', role: 'Chief Editor', source: 'angela-caroll-chief-editor.jpg', email: 'angelacaroll@team.com'},
    {name: 'Walter Gordon', role: 'Office Manager', source: 'walter-gordon-office-manager.jpg', email: 'waltergordon@team.com'},
    {name: 'Angela Lopez', role: 'Social Media Manager', source: 'angela-lopez-social-media-manager.jpg', email: 'angelalopez@team.com'},
    {name: 'Scott Estrada', role: 'Developer', source: 'scott-estrada-developer.jpg', email: 'scottestrada@team.com'},
    {name: 'Barbara Ramos', role: 'Graphic Designer', source: 'barbara-ramos-graphic-designer.jpg', email: 'barbararamos@team.com'},
]

// Stampo le stesse informazioni sul DOM

// Collego l'elemento del DOM

const display = document.getElementById('display');

// Stampo su pagina i dati richiesti

for(let i = 0; i < teamMembers.length; i++){
    const currentMember = teamMembers[i];
    display.innerHTML += `<li><div class="card"><img src="./img/${currentMember.source}" alt="${currentMember.name}"</img><div class="card-text"><p>${currentMember.name}</p><p>${currentMember.role}</p><p><a href="#">${currentMember.email}<a></p></div></div></li>`;
}
