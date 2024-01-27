<script>
  import { onMount } from "svelte";

  /**
   * @type {any[]}
   */
  let listData = [];
  onMount(async() =>{
    try{
      const response = await fetch('https://api.legiatra.com/contact')
      const data = await response.json();
      listData = data;
    }catch{
      console.log('error')
    }
  })

  // @ts-ignore
  async function update(id){
    const res = await fetch('https://api.legiatra.com/contact', {
			  method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          'contact_id': id
        })
      })
    
      const data = await res.json()

      listData = data;

  }
</script>

<div class="container">
  <table>
    <thead>
      <tr>
        <th style="width: 200px;">Phone</th>
        <th style="width: 300px;">Time</th>
        <th style="width: 200px;">Status</th>
        <!-- <th></th> -->
      </tr>
    </thead>
    <tbody>
      {#each listData as d}
        <tr style="height: 40px;">
          <td>{d.phone}</td>
          <td>{d.created_at}</td>
          <td>{d.status}</td>
          <td><button on:click={()=>{update(d.contact_id)} }>Update</button></td>
        </tr>
      {/each}
    </tbody>
  </table>
</div>

<style>


</style>