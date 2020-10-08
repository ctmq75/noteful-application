  DROP TABLE IF EXISTS notes;

  
  CREATE TABLE noteful_notes (
  id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
  note_name TEXT NOT NULL,
  content TEXT,
  folder_id INTEGER REFERENCES noteful_folders(id) ON DELETE CASCADE NOT NULL,
  modified TIMESTAMP DEFAULT now() NOT NULL,

);