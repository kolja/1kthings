/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "rz1bfjprexivhhl",
    "created": "2023-08-01 16:34:57.955Z",
    "updated": "2023-08-01 16:34:57.955Z",
    "name": "things",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gla34xao",
        "name": "name",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "bt4ktlpb",
        "name": "description",
        "type": "text",
        "required": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("rz1bfjprexivhhl");

  return dao.deleteCollection(collection);
})
