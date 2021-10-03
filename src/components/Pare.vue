 <template>
 <div>
  <modalBootstrap :class="{'d-none': display}">
    <template v-slot:header>
        <h3 class="modal-title">Conversió euro a dòlar</h3>
      </template>

      <template v-slot:body>
        <input type="number" v-model="euros"/>
        <p>
              <br/>
              Doncs {{ euros }} € són {{ euros | conversio }} $ <br/>
              Utilitzant un canvi de 1€ a 1.23$
            </p>
      </template>

      <template v-slot:footer>
        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="display = !display">Tancar</button>
      </template>
  </modalBootstrap>
   
     <h3 class="mt-5 text-primary" :class="{'d-none': !display}">Heu tancat el Modal</h3>
</div>
</template>
  

<script src="./scripts/pare.js"></script>
<style></style>
