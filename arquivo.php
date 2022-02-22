
<!-- Comentario de comentario -->
<script>
  // flag == true:  Esconader Botao abrir, Motrar zona de comentario
  // flag == false: Mostrar Botao abrir, Esconder zona de comentario
  function toggleComentario(id, flag) {
    var botaoAbrir = document.getElementById("comentario-reply-abrir-" + id);
    var botaoFechar = document.getElementById("comentario-novo-" + id);
    if (flag) {
      // botaoAbrir.classList.add("visually-hidden-focusable");
      
      botaoFechar.classList.remove("d-none");
    }
    else{
      // botaoAbrir.classList.remove("visually-hidden-focusable");
      botaoFechar.classList.add("d-none");
    }


  }
</script>

<div id="comentario-novo-<?php echo $row["id_comentario"] ?>" class="comment comment-reply d-none">
    <div class="d-flex reply-form">
        <div class="w-100">
            <h4><span class="material-icons">north</span> Deixe a sua resposta <button class="float-end btn" onclick="toggleComentario(<?php echo $row['id_comentario']; ?>, false);"><span class="material-icons btn-comentario">close</span></button></h4>

            <form action=" ">
                <div class="row mt-2 ">
                    <div class="col form-group ">
                        <textarea name="comentario" class="form-control " placeholder="A sua resposta* " rows="5 "></textarea>
                    </div>
                </div>
                <input type="hidden" name="id_post" value="<?php echo $id_post; ?>">
                <input type="hidden" name="comentario_alvo" value="<?php echo $row["id_comentario"] ?>">
                <button type="submit" class="btn btn-primary" name="comentario_principal_submit">Responder</button>

            </form>
        </div>
    </div>
</div>