
$(document).ready(function() {

  let removedSkills = [];

  // $('#addHome').removeClass('btn-danger').addClass('btn-success');
  // $('h1').addClass('text-center');

//  let newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );
//   $('body').append(newLink);
//   $('#zillowLink').attr( "target", "_blank" );

  $('#skills tbody').on('click', 'button', function() {
    let row = $(this).closest('tr');
    // Before we remove the row, save it's outerHTML
    removedSkills.push(row[0].outerHTML);
    row.fadeOut(500, function() {
      row.remove();
    });
    // Ensure that the "Restore Removed Homes" button is enabled
    $('#restoreHomes').removeAttr('disabled');
  });

  $('#addSkill').click(function(event){
      let newSkill = $('#entry').val();
      let newRow = `<tr>
          <td style="border:none;"><button class="remove">X</button></td>
          <td style="border:none;">${newSkill}</td>
        </tr>`;
      $('#skills tbody').append(newRow);
  });

})