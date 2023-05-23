jQuery(function () {
    if (jQuery("#user-activity").length > 0) {
      jQuery("#user-activity").DataTable({
        "order": [[ 0, "desc" ]]
      });
    }
  
    if (jQuery("#user-text").length > 0) {
      jQuery("#user-text").DataTable({
        "order": [[ 0, "desc" ]]
      });
    }
  
    jQuery('#dissmiss-activity-forever').on('click', function(){
  
      window.location.href = script_global_vars.admin_url + "admin.php?page=correcting-writing-exercises-user-activity";
      
    });
  
    jQuery('#dissmiss-text-forever').on('click', function(){
  
      window.location.href = script_global_vars.admin_url + "admin.php?page=correcting-writing-exercises-user-text";
      
    });
  
    /* Handle AJAX Request */
    window.addEventListener("click", resetChars);
  
    function resetChars(e) {
      const target = e.target;
  
      if (isResetBtn(target)) {
        const id = target.dataset.id;
        doAPIResetChars(id);
      }
    }
  
    function isResetBtn(target) {
      return target.classList && target.classList.contains("reset-btn");
    }
  
    function doAPIResetChars(id) {
      toggleResetBtnDisableState(id, true);
      jQuery.ajax({
        url: script_global_vars.ajax_url,
        method: "POST",
        data: {
          action: script_global_vars.reset_action,
          nonce: script_global_vars.nonce,
          userID: id,
        },
        success: (res) => {
          if (res.data.statusCode === 200) {
            handleResetSuccess(res.data.userID);
          } else {
            alert(script_global_vars.reset_error);
            toggleResetBtnDisableState(id, false);
          }
        },
        error: (e) => {
          console.log(e);
          alert(script_global_vars.reset_error);
          toggleResetBtnDisableState(id, false);
        },
      });
    }
  
    function toggleResetBtnDisableState(id, disable) {
      const btn = getResetBtn(id);
      btn.disabled = disable;
    }
  
    function handleResetSuccess(id) {
      const btn = getResetBtn(id);
      const charsCount = document.getElementById("chars-count-" + id);
      const wordsCount = document.getElementById("words-count-" + id);
  
  
      btn.toggleAttribute("disabled", true);
      charsCount.textContent = 0;
      wordsCount.textContent = 0;
    }
  
    function getResetBtn(id) {
      return document.getElementById("reset-btn-" + id);
    }
  });
  