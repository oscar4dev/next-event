import supabase from "./supabase";

export async function getLakeside() {

   const { data, error } = await supabase
      .from('lakeside')
      .select('*')

   if (error) {
      throw new Error("Sorry, an error occured");
   }

   return data
}

export async function getAdventure() {

   const { data, error } = await supabase
      .from('adventure')
      .select('*')

   if (error) {
      throw new Error('Sorry, an error occured')
   }

   return data
}

export async function getCamping() {

   const { data, error } = await supabase
      .from('camping')
      .select('*')

   if (error) {
      throw new Error('Sorry, an error occured')
   }

   return data
}

export async function getBackyardWedding() {

   const { data, error } = await supabase
      .from('backyard-wedding')
      .select('*')

   if (error) {
      throw new Error('Sorry, an error occured')
   }

   return data
}

export async function createMessage(message) {

   const { error } = await supabase
      .from('message')
      .insert([message])
      .select()

   if (error) {
      throw new Error('Sorry, an error occured')
   }
}

export async function getMessages() {

   const { data, error } = await supabase
      .from('message')
      .select('*')

   if (error) throw new Error('Sorry, an error occured')

   return data
}

export async function deleteMessage(id) {

   const { error } = await supabase
      .from('message')
      .delete()
      .eq('id', id)

   if (error) throw new Error('Sorry an error occured')

}