
$(document).ready(function() {

    let removedSkills = [];

    $('#inner .list').on('click', 'remove', function() {
      let listItem = $(this).closest('line');
      // Before we remove the row, save it's outerHTML
      removedSkills.push(listItem[0].outerHTML);
      listItem.fadeOut(500, function() {
        listItem.remove();
      });
    });

    // $('#addSkill').click(function(eventt) {
    //     if (!newSkills.length) return;
    //     let newSkill = newSkills.pop();
    //     let newListItem = <div class ="item">
    //         <button class="remove">X</button>
    //         <p class="line">${newSkill}</p>
    //       </div>;
    //     $('#inner .list').append(newListItem);
    //     if (!newSkills.length) $('#addSkill').attr('disabled', true);
    // });

//     $('#addSkill').click(function(event){
//         if (!newSkills.length) return;
//         let newSkill = newSkills.pop();
//         let newListItem = `<tr>
//             <td><button class="remove">X</button></td>
//             <td>${newSkill}</td>
//             </tr>`;
//         $('#inner .list').append(newRow);
//         if (!newSkills.length) $('#addSkill').attr('disabled', true);
//     });

})