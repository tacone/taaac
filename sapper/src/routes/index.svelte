<svelte:head>
  <title>Sapper project template</title>
</svelte:head>

{#if typeof user != 'undefined'}
  <h1>Great success!</h1>
{/if}
cia
<p>count: {counter}, double: {double}</p>
<p><input type="button" value="get success" on:click={setUser} /></p>
<figure>
  <img alt="Success Kid" src="successkid.jpg" />
  <figcaption>Have fun with Sapper!</figcaption>
</figure>

<p>
  <strong>Try editing this file (src/routes/index.svelte) to test live
    reloading.</strong>
</p>

<script>
  let user;
  let counter = 0;
  $: double = counter * 2;

  const setUser = () => {
    user = 1;
    counter++;
  };
</script>

<style>
  h1,
  figure,
  p {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  figure {
    margin: 0 0 1em 0;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>
