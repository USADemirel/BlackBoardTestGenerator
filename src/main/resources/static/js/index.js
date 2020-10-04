function updateTitle(e) {
  assignment.title = e.target.value;
  isTitleEnteredFromKeyboard = true;
}

function getExtension(filename) {
  var parts = filename.split('.');
  return parts[parts.length - 1];
}

function updateFileStatus(){
  myfile = document.getElementById('csvfile').files[0];
  if (!myfile) {
    document.getElementById('response').innerText = 'No File Chosen!';
    document.getElementById('response').style.color = 'red';
    return 'fail';
  }else if(getExtension(myfile.name).toLowerCase() !== 'csv'){
    document.getElementById('response').innerText = 'Please choose a CSV file!';
    document.getElementById('response').style.color = 'red';
    return 'fail';
  }else{
    document.getElementById('response').innerText = 'File Chosen!';
    document.getElementById('response').style.color = 'green';
    if(document.querySelector('#assignment-title').value === '' || !isTitleEnteredFromKeyboard){
      document.querySelector('#assignment-title').value = myfile.name.substring(0,myfile.name.length-4);
    }
    return 'success';
  }
}
let isTitleEnteredFromKeyboard = false;
document.querySelector('#assignment-title').addEventListener('input', updateTitle);
document.getElementById('csvfile').addEventListener('change',updateFileStatus);

document.onreadystatechange = () => {
  document.querySelector('button').style.background = '#fef';
}

let assignment = {
  title: "NoNameAssignment",
  questions: ""
}

let myfile;
document.querySelector('#submitbutton').addEventListener('click', function () {
  if(updateFileStatus() === 'fail') return;
  var json = Papa.parse(myfile,
      {
        header: false,
        skipEmptyLines: true,
        complete: function (results) {
          assignment.title = document.getElementById('assignment-title').value;
          assignment.questions = results.data;

          let xhr = new XMLHttpRequest();
          xhr.open('POST', 'http://localhost:8080/api/questions', true);
          xhr.setRequestHeader('Content-type', 'application/json');

          xhr.onload = function () {
            const res = JSON.parse(xhr.responseText);
            const result = `<p style="color: darkgreen">${res.title} is ${res.message}</p><p><a href="download/${res.downloadLink}">Download here</a></p>`;
            document.getElementById('response').innerHTML = result;
            document.querySelector('#assignment-title').value = '';
            isTitleEnteredFromKeyboard = false;
            document.querySelector('#csvfile').value = null;
          }

          xhr.send(JSON.stringify(assignment));
        }
      });
})