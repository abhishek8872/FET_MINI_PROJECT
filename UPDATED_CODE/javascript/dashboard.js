let products = [];

        function toShow(x) {
            $("#menu").empty();
            x.map((menu) => {
                $("#menu").append(`

        <div class="col">
                <div class="card h-100">
                    <img src="${menu.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title"><b>${menu.title}</b></h5>
                        
                        <p class="card-text"><b>${menu.price}</b></p>
                    </div>
                    <button type="button" class="btn btn-warning" data-id="${menu.id
                    }">Add to cart</button>
                </div>
            </div>
       
        `);
            });
        }

        $(document).ready(function () {


            // $("#btn").click(function (event) {

            $.ajax({
                type: "GET",
                url: "http://localhost:3000/Menu/",
                dataType: "json",
                success: function (data) {
                    products = data;
                    toShow(products);
                    //     for(let item of menus){
                    //         output+='

                    //         ';
                    //     }
                }
            });
        });
