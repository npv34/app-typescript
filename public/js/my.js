
$(document).ready(function() {
    const getAllTokens = () => {
        $.ajax({
            url: "/get-my-tokens",
            method: "GET",
            success: (res) => {
                if(res.message === "success") {
                    let html = "";
                    let data = res.data;
                    data.forEach((item) => {
                        html += `<tr>`;
                        html += `<td>${item.key}</td>`;
                        html += `<td>${item.name}</td>`;
                        html += `<td>${item.active}</td>`;
                        html += `<td><button data-id="${item.id}" id="btn-delete-token" class="btn btn-danger">Delete</button></td>`;
                        html += `<td></td>`;
                        html += `</tr>`;
                    });
                    console.log(data);
                    $("#list-token").html(html);
                }
            },
            error: (err) => {
                console.error(err);
            }
        })
    }

    getAllTokens();

    $("body").on("click", "#btn-delete-token",  function() {
        if(!confirm("Are you sure you want to delete")) {
            return;
        }
        const id = $(this).attr("data-id");
        $.ajax({
            url: `/api-keys/${id}/delete`,
            method: "GET",
            success: (res) => {
                if(res.status === "success") {
                    getAllTokens();
                }
            },
            error: (err) => {
                console.error(err);
            }
        })
    })

    $("body").on("click", "#btn-create-token",  function() {
        const name = $("#name-token").val();
    
        $.ajax({
            url: `/api-keys/store`,
            method: "POST",
            data: {keyName: name},
            success: (res) => {
                if(res.status === "success") {
                    getAllTokens();
                    $("#name-token").val("")
                }
            },
            error: (err) => {
                console.error(err);
            }
        })
    })


});