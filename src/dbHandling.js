let sqlite3;
let capi, oo;

let sqlite_ready = window.sqlite3InitModule().then(function(loaded_sqlite3){
  sqlite3 = loaded_sqlite3;
  capi = sqlite3.capi/*C-style API*/,
  oo = sqlite3.oo1/*high-level OO API*/;
});

/**
 * Executes a SQL query on the localstorage SQLite database.
 *
 * @param {string} query - The SQL query to run.
 *
 * @param {Array|Object|null} [bind=null]
 * Values to bind to the query (positional or named).
 * Defaults to `null` (no binding).
 *
 * @param {"array"|"object"} [rowMode="array"]
 * How rows are returned.
 * Defaults to `"array"` (array of values per row).
 *
 * @returns {Promise<Array<object|any[]>>}
 * Resolves to an array of rows.
 * Each row is either:
 * - object (if rowMode="object")
 * - array (if rowMode="array")
 */
async function Query(query, bind = [], rowMode = "array") {
  await sqlite_ready;
  const db = new oo.JsStorageDb('local');

  try {
      const response = db.exec({
        sql: query,
        bind: bind,
        rowMode: rowMode,
        returnValue: "resultRows"
      });
      return structuredClone(response);
    }finally{
      db.close();
    };
};