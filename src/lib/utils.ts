export function slugify(str: string) {
  return str
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // rimuove accenti
    .replace(/[^a-z0-9]+/g, "-") // sostituisce non-alfanumerici con -
    .replace(/(^-|-$)+/g, ""); // rimuove - iniziali/finali
}
