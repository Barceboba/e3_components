 <template>
 <div>
  <modalBootstrap :euros="euro">
    <template v-slot:header>
        <h3 class="modal-title">Conversió euro a dòlar</h3>
      </template>

      <template v-slot:body>
        <input type="number" v-model.number="euro"/>
      </template>

      <template v-slot:footer>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="missatge = 'Heu tancat el Modal'">Tancar</button>
      </template>
  </modalBootstrap>
  <h3>
      <br>
      <div class="alert alert-light">{{ missatge }}</div>
    </h3>
 </div>
</template>
  

<script src="./scripts/pare.js"></script>
<style></style>
