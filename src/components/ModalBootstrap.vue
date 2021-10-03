<template>
  <div>
    <!-- Button trigger modal -->
    <button type="button" class="mt-5 btn btn-primary" data-bs-toggle="modal" data-bs-target="#modalsFirst">
      D'€uros a dolar$
    </button>

    <!-- Modal -->
    <div class="modal fade" id="modalsFirst" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <!-- slot header -->
            <slot name="header"></slot>
          </div>
          <div class="modal-body">
            <!-- slot body -->
            <slot name="body"></slot>
            
          </div>
          <div class="modal-footer">
            <!-- slot footer -->
            <slot name="footer"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script  src='./scripts/modalBootstrap.js'>

</script>