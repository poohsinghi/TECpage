export async function loadText() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://asdfast.beobit.net/api/?type=word&length=6')
    const data = await res.json()
    console.log(data);
    
    return data
  }