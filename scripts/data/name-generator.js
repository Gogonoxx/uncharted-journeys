/**
 * Ortsnamen-Generator für Uncharted Journeys
 * Generiert dynamische, biom-spezifische Ortsnamen basierend auf 4 Mustern:
 * A: Kompositum (Schattenmoor, Silbersee)
 * B: Artikel-Form (Die Alte Eiche)
 * C: Genitiv (Ruinen von Kareth)
 * D: Adjektiv + Landform (Klagende Schlucht)
 */

// ============================================
// WORTLISTEN FÜR ALLE 13 BIOME
// ============================================

const BIOME_WORDS = {
  // ==========================================
  // GRASLAND
  // ==========================================
  grassland: {
    green: {
      prefixes: ['Sonnen', 'Gold', 'Silber', 'Honig', 'Klee', 'Wiesen', 'Lerchen', 'Schwalben', 'Hasen', 'Reh', 'Hirten', 'Bauern', 'Blumen', 'Korn', 'Weizen'],
      suffixes: ['wiese', 'hügel', 'hang', 'aue', 'hof', 'feld', 'anger', 'garten', 'rain', 'steig', 'weg', 'kreuz', 'brunnen', 'linde', 'eiche'],
      adjectives: ['goldene', 'sonnige', 'stille', 'sanfte', 'grüne', 'friedliche', 'alte', 'hohe', 'weite', 'blühende', 'warme', 'helle', 'ruhige', 'gesegnete', 'fruchtbare'],
      structures: ['Hof', 'Mühle', 'Scheune', 'Brunnen', 'Kapelle', 'Schrein', 'Rastplatz', 'Wegkreuz', 'Wachturm', 'Brücke'],
      names: ['Aelindra', 'Solheim', 'Vaelorn', 'Lireth', 'Caelum', 'Mirath', 'Elowen', 'Thandril', 'Selora', 'Galwen']
    },
    yellow: {
      prefixes: ['Grau', 'Staub', 'Wind', 'Nebel', 'Dämmer', 'Schatten', 'Alt', 'Stein', 'Kreuz', 'Weg', 'Grenz', 'Mark', 'Öd', 'Brach', 'Rost'],
      suffixes: ['feld', 'hügel', 'mark', 'stein', 'kreuz', 'weg', 'rast', 'wacht', 'posten', 'grenze', 'rain', 'hang', 'grund', 'senke', 'mulde'],
      adjectives: ['graue', 'verlassene', 'vergessene', 'einsame', 'stille', 'öde', 'leere', 'kahle', 'windige', 'neblige', 'alte', 'stumme', 'tote', 'brachliegende', 'trockene'],
      structures: ['Ruinen', 'Stele', 'Grenzstein', 'Wegweiser', 'Meilenstein', 'Kreuzung', 'Lager', 'Unterstand', 'Wachposten', 'Grabhügel'],
      names: ['Mordain', 'Vorneth', 'Thalos', 'Grenth', 'Keldor', 'Ashvale', 'Durmath', 'Skeleth', 'Valdris', 'Morvain']
    },
    red: {
      prefixes: ['Blut', 'Knochen', 'Schlachten', 'Toten', 'Geier', 'Raben', 'Wolf', 'Krieg', 'Asche', 'Brand', 'Pest', 'Hunger', 'Fluch', 'Gift', 'Grab'],
      suffixes: ['feld', 'hügel', 'grube', 'grund', 'senke', 'tal', 'mulde', 'acker', 'hang', 'rain', 'mark', 'stätte', 'platz', 'ring', 'kreis'],
      adjectives: ['blutige', 'verfluchte', 'schwarze', 'tote', 'verwüstete', 'verbrannte', 'giftige', 'verdorbene', 'unheilige', 'finstere', 'grausame', 'elende', 'verdammte', 'verseuchte', 'böse'],
      structures: ['Massengrab', 'Galgen', 'Scheiterhaufen', 'Schlachtfeld', 'Pestgrube', 'Opferaltar', 'Hinrichtungsstätte', 'Kerker', 'Folterkammer', 'Grabmal'],
      names: ['Nekros', 'Malachar', 'Karveth', 'Draugoth', 'Vexnar', 'Morthos', 'Baalgor', 'Xarath', 'Thraxus', 'Zulketh']
    }
  },

  // ==========================================
  // WALD
  // ==========================================
  forest: {
    green: {
      prefixes: ['Eichen', 'Birken', 'Buchen', 'Linden', 'Tannen', 'Fichten', 'Ahorn', 'Eschen', 'Erlen', 'Hasel', 'Moos', 'Farn', 'Pilz', 'Beeren', 'Honig'],
      suffixes: ['hain', 'wald', 'forst', 'lichtung', 'wiese', 'quelle', 'bach', 'teich', 'höhle', 'hügel', 'hang', 'tal', 'grund', 'ruh', 'heim'],
      adjectives: ['alte', 'grüne', 'stille', 'heilige', 'verborgene', 'moosige', 'schattige', 'kühle', 'friedliche', 'uralte', 'lebendige', 'gesunde', 'reine', 'tiefe', 'dichte'],
      structures: ['Eiche', 'Quelle', 'Lichtung', 'Höhle', 'Schrein', 'Hütte', 'Forsthaus', 'Jägerstand', 'Holzfällerlager', 'Druidenstein'],
      names: ['Sylvaris', 'Elendil', 'Thalorn', 'Miravel', 'Faelindor', 'Celarion', 'Brindel', 'Lorwen', 'Arandel', 'Verinost']
    },
    yellow: {
      prefixes: ['Nebel', 'Schatten', 'Dämmer', 'Dunkel', 'Grau', 'Alt', 'Moder', 'Morsch', 'Dorn', 'Bruch', 'Sumpf', 'Moor', 'Schwarz', 'Nacht', 'Irrlich'],
      suffixes: ['wald', 'forst', 'dickicht', 'gestrüpp', 'hain', 'grund', 'senke', 'tal', 'bruch', 'moor', 'sumpf', 'schatten', 'dunkel', 'finsternis', 'irre'],
      adjectives: ['dunkle', 'neblige', 'verwilderte', 'undurchdringliche', 'alte', 'vergessene', 'verlassene', 'modrige', 'feuchte', 'kalte', 'stille', 'unheimliche', 'tiefe', 'dichte', 'verwachsene'],
      structures: ['Ruinen', 'Turm', 'Höhle', 'Grotte', 'Steinkreis', 'Altar', 'Hütte', 'Versteck', 'Lager', 'Unterschlupf'],
      names: ['Morthain', 'Draven', 'Skeldor', 'Vornash', 'Grimhold', 'Thorneth', 'Ashmer', 'Duskmire', 'Keldrath', 'Shadowmere']
    },
    red: {
      prefixes: ['Blut', 'Spinnen', 'Wolfs', 'Bären', 'Schlangen', 'Troll', 'Ork', 'Goblin', 'Hexen', 'Dämon', 'Todes', 'Gift', 'Fäulnis', 'Verwesung', 'Leichen'],
      suffixes: ['wald', 'hain', 'dickicht', 'forst', 'höhle', 'nest', 'grube', 'lager', 'bau', 'schlund', 'klamm', 'schlucht', 'abgrund', 'finsternis', 'horror'],
      adjectives: ['verfluchte', 'verdorbene', 'tote', 'schwarze', 'giftige', 'faulige', 'verweste', 'unheilige', 'dämonische', 'böse', 'grausame', 'mörderische', 'blutige', 'finstere', 'schreckliche'],
      structures: ['Hexenhütte', 'Trollhöhle', 'Spinnennest', 'Wolfsgrube', 'Opferstätte', 'Altar', 'Totempfahl', 'Knochenhaufen', 'Leichenberg', 'Grabstätte'],
      names: ['Malagor', 'Vexrath', 'Karneth', 'Drakul', 'Mortanis', 'Baalzorn', 'Xanthros', 'Nekroth', 'Thulgrim', 'Zarvex']
    }
  },

  // ==========================================
  // HÜGEL
  // ==========================================
  hills: {
    green: {
      prefixes: ['Sonnen', 'Gold', 'Grün', 'Blumen', 'Klee', 'Heide', 'Ginster', 'Schaf', 'Ziegen', 'Hirten', 'Wächter', 'Aussichts', 'Fern', 'Weit', 'Hoch'],
      suffixes: ['hügel', 'kuppe', 'höhe', 'berg', 'hang', 'rücken', 'kamm', 'gipfel', 'warte', 'blick', 'sicht', 'schau', 'stein', 'fels', 'klippe'],
      adjectives: ['grüne', 'sanfte', 'sonnige', 'blühende', 'friedliche', 'weite', 'offene', 'hohe', 'stolze', 'majestätische', 'alte', 'ehrwürdige', 'heilige', 'gesegnete', 'fruchtbare'],
      structures: ['Wachturm', 'Aussichtspunkt', 'Steinkreis', 'Schrein', 'Kapelle', 'Rastplatz', 'Hirtenhaus', 'Schäferhütte', 'Wegkreuz', 'Monument'],
      names: ['Elendar', 'Valheim', 'Caelith', 'Thandor', 'Miravel', 'Sorendil', 'Aelindor', 'Brinwald', 'Felorin', 'Galendor']
    },
    yellow: {
      prefixes: ['Grau', 'Kahl', 'Wind', 'Nebel', 'Stein', 'Fels', 'Geröll', 'Schutt', 'Bruch', 'Alt', 'Verfallen', 'Ruinen', 'Grab', 'Hünen', 'Riesen'],
      suffixes: ['hügel', 'kuppe', 'höhe', 'berg', 'hang', 'stein', 'fels', 'block', 'brocken', 'trümmer', 'ruine', 'grab', 'mal', 'ring', 'kreis'],
      adjectives: ['kahle', 'öde', 'windige', 'graue', 'steinige', 'felsige', 'verlassene', 'vergessene', 'alte', 'verfallene', 'einsame', 'stumme', 'leere', 'tote', 'zerbrochene'],
      structures: ['Ruinen', 'Turm', 'Burg', 'Festung', 'Grabhügel', 'Steinkreis', 'Hünengrab', 'Monument', 'Stele', 'Obelisk'],
      names: ['Keldrath', 'Vormast', 'Drenholt', 'Skelmar', 'Ashfeld', 'Grimnar', 'Thornwick', 'Valdros', 'Morthen', 'Greyholme']
    },
    red: {
      prefixes: ['Blut', 'Knochen', 'Schädel', 'Toten', 'Schlachten', 'Krieg', 'Dämon', 'Teufel', 'Drachen', 'Riesen', 'Oger', 'Troll', 'Ork', 'Goblin', 'Hexen'],
      suffixes: ['hügel', 'kuppe', 'höhe', 'berg', 'fels', 'stein', 'klippe', 'grat', 'spitze', 'horn', 'zahn', 'klaue', 'kralle', 'turm', 'festung'],
      adjectives: ['blutige', 'verfluchte', 'schwarze', 'finstere', 'unheilige', 'dämonische', 'teuflische', 'grausame', 'mörderische', 'schreckliche', 'entsetzliche', 'verdammte', 'böse', 'dunkle', 'tödliche'],
      structures: ['Festung', 'Burg', 'Turm', 'Kerker', 'Verlies', 'Opferstätte', 'Altar', 'Thron', 'Grabmal', 'Krypta'],
      names: ['Malkor', 'Vexaroth', 'Draugor', 'Zulketh', 'Baalrim', 'Thraxxus', 'Nekromar', 'Karveth', 'Mortifax', 'Xarnoth']
    }
  },

  // ==========================================
  // GEBIRGE
  // ==========================================
  mountain: {
    green: {
      prefixes: ['Sonnen', 'Gold', 'Silber', 'Kristall', 'Edelstein', 'Adler', 'Falken', 'Gems', 'Schnee', 'Eis', 'Gletscher', 'Firn', 'Alpen', 'Gipfel', 'Hoch'],
      suffixes: ['gipfel', 'spitze', 'horn', 'berg', 'wand', 'klamm', 'tal', 'see', 'quelle', 'pass', 'joch', 'sattel', 'rücken', 'kamm', 'grat'],
      adjectives: ['hohe', 'majestätische', 'stolze', 'ewige', 'heilige', 'leuchtende', 'strahlende', 'reine', 'klare', 'kristallene', 'silberne', 'goldene', 'erhabene', 'göttliche', 'himmlische'],
      structures: ['Kloster', 'Tempel', 'Schrein', 'Observatorium', 'Adlerhorst', 'Zuflucht', 'Hütte', 'Pass', 'Brücke', 'Aussichtspunkt'],
      names: ['Aethoril', 'Celindra', 'Valandor', 'Thaelorn', 'Miranthel', 'Solvareth', 'Elendrim', 'Caelindor', 'Felorath', 'Galarim']
    },
    yellow: {
      prefixes: ['Grau', 'Stein', 'Fels', 'Geröll', 'Schutt', 'Lawinen', 'Sturm', 'Wind', 'Nebel', 'Wolken', 'Donner', 'Blitz', 'Eis', 'Frost', 'Kalt'],
      suffixes: ['berg', 'gipfel', 'wand', 'klamm', 'schlucht', 'klippe', 'fels', 'stein', 'block', 'turm', 'spitze', 'grat', 'rücken', 'pass', 'engpass'],
      adjectives: ['graue', 'steinerne', 'felsige', 'steile', 'gefährliche', 'tückische', 'eisige', 'kalte', 'stürmische', 'windige', 'neblige', 'wolkige', 'donnernde', 'blitzende', 'zerklüftete'],
      structures: ['Ruinen', 'Turm', 'Festung', 'Wachposten', 'Höhle', 'Grotte', 'Mine', 'Stollen', 'Brücke', 'Pfad'],
      names: ['Keldroth', 'Vormath', 'Drengar', 'Skelheim', 'Ashgrim', 'Thornvar', 'Kaldros', 'Grimwald', 'Mordrek', 'Valdorn']
    },
    red: {
      prefixes: ['Drachen', 'Riesen', 'Troll', 'Oger', 'Dämon', 'Teufel', 'Todes', 'Knochen', 'Schädel', 'Blut', 'Feuer', 'Vulkan', 'Lava', 'Asche', 'Schwefel'],
      suffixes: ['berg', 'gipfel', 'höhle', 'grotte', 'nest', 'hort', 'festung', 'turm', 'klaue', 'zahn', 'horn', 'schlund', 'abgrund', 'krater', 'esse'],
      adjectives: ['verfluchte', 'dämonische', 'teuflische', 'feurige', 'brennende', 'glühende', 'schwarze', 'finstere', 'unheilige', 'tödliche', 'mörderische', 'grausame', 'schreckliche', 'entsetzliche', 'verdammte'],
      structures: ['Drachenhort', 'Riesenfestung', 'Dämonentempel', 'Opferaltar', 'Vulkanschlund', 'Feuerturm', 'Aschegruft', 'Lavagrotte', 'Knochenthron', 'Todestor'],
      names: ['Malakhor', 'Vexarion', 'Draugmar', 'Zulkorn', 'Baalgrath', 'Thraximor', 'Nekrador', 'Karvenos', 'Morthrax', 'Xarneth']
    }
  },

  // ==========================================
  // SUMPF
  // ==========================================
  swamp: {
    green: {
      prefixes: ['Schilf', 'Binsen', 'Rohr', 'Weiden', 'Erlen', 'Seerosen', 'Frösche', 'Libellen', 'Reiher', 'Enten', 'Biber', 'Fisch', 'Karpfen', 'Hecht', 'Stör'],
      suffixes: ['teich', 'see', 'weiher', 'tümpel', 'moor', 'bruch', 'aue', 'wiese', 'insel', 'ufer', 'grund', 'hafen', 'rast', 'platz', 'heim'],
      adjectives: ['stille', 'friedliche', 'ruhige', 'verborgene', 'geschützte', 'sichere', 'grüne', 'lebendige', 'fruchtbare', 'reiche', 'tiefe', 'klare', 'saubere', 'heilende', 'heilige'],
      structures: ['Insel', 'Hütte', 'Steg', 'Brücke', 'Fähre', 'Anlegestelle', 'Fischerhütte', 'Pfahlbau', 'Bootshaus', 'Schrein'],
      names: ['Miravel', 'Selorin', 'Thandel', 'Vaelith', 'Celadrin', 'Aelindor', 'Brindael', 'Lorindel', 'Faelorn', 'Galenis']
    },
    yellow: {
      prefixes: ['Nebel', 'Moder', 'Morast', 'Schlick', 'Schlamm', 'Fäulnis', 'Moor', 'Sumpf', 'Bruch', 'Irrlich', 'Geister', 'Schatten', 'Dunkel', 'Grau', 'Schwarz'],
      suffixes: ['moor', 'sumpf', 'bruch', 'morast', 'schlick', 'grund', 'loch', 'pfuhl', 'tümpel', 'see', 'teich', 'grube', 'senke', 'mulde', 'becken'],
      adjectives: ['neblige', 'modrige', 'schlammige', 'faulige', 'stinkende', 'trübe', 'dunkle', 'tiefe', 'gefährliche', 'tückische', 'trügerische', 'unheimliche', 'verlassene', 'vergessene', 'verbotene'],
      structures: ['Ruinen', 'Turm', 'Hütte', 'Versteck', 'Höhle', 'Grotte', 'Insel', 'Pfahlbau', 'Wrack', 'Grabhügel'],
      names: ['Mordreth', 'Skelmire', 'Vornash', 'Drenmor', 'Keldros', 'Ashfen', 'Grimhollow', 'Thornmere', 'Valdusk', 'Greymoor']
    },
    red: {
      prefixes: ['Gift', 'Pest', 'Seuchen', 'Leichen', 'Toten', 'Knochen', 'Blut', 'Dreck', 'Eiter', 'Fäulnis', 'Verwesung', 'Schlangen', 'Krokodil', 'Blutegel', 'Parasiten'],
      suffixes: ['sumpf', 'moor', 'pfuhl', 'loch', 'grube', 'schlund', 'grab', 'gruft', 'hölle', 'abgrund', 'verderben', 'tod', 'ende', 'untergang', 'verdammnis'],
      adjectives: ['giftige', 'pestverseuchte', 'verseuchte', 'tödliche', 'mörderische', 'verdorbene', 'verfluchte', 'unheilige', 'dämonische', 'entsetzliche', 'grausame', 'schreckliche', 'abscheuliche', 'ekelhafte', 'widerliche'],
      structures: ['Pestgrube', 'Leichenhaufen', 'Massengrab', 'Seuchenlager', 'Quarantäne', 'Giftquelle', 'Fäulnisaltar', 'Opferstätte', 'Hexenhütte', 'Nekromantenturm'],
      names: ['Malafen', 'Vexmire', 'Karnoth', 'Draugul', 'Zulkemoor', 'Baalmarsh', 'Nekrofen', 'Thulgrath', 'Mortalis', 'Xarveth']
    }
  },

  // ==========================================
  // KÜSTE
  // ==========================================
  coast: {
    green: {
      prefixes: ['Sonnen', 'Gold', 'Silber', 'Perlen', 'Muschel', 'Korallen', 'Delphin', 'Möwen', 'Robben', 'Seestern', 'Sand', 'Strand', 'Dünen', 'Hafen', 'Fischer'],
      suffixes: ['strand', 'bucht', 'hafen', 'anker', 'riff', 'insel', 'klippe', 'fels', 'leuchtturm', 'pier', 'kai', 'mole', 'düne', 'ufer', 'küste'],
      adjectives: ['sonnige', 'goldene', 'silberne', 'klare', 'reine', 'friedliche', 'stille', 'geschützte', 'sichere', 'warme', 'sanfte', 'schöne', 'malerische', 'idyllische', 'paradiesische'],
      structures: ['Leuchtturm', 'Hafen', 'Pier', 'Fischerdorf', 'Bootshaus', 'Anlegestelle', 'Werft', 'Schrein', 'Tempel', 'Aussichtspunkt'],
      names: ['Aelindis', 'Selamir', 'Thalassa', 'Vaelorin', 'Celadros', 'Mirindel', 'Brindaris', 'Loranthel', 'Felindra', 'Galenor']
    },
    yellow: {
      prefixes: ['Nebel', 'Sturm', 'Wind', 'Wellen', 'Brandung', 'Salz', 'Gischt', 'Gezeiten', 'Ebbe', 'Flut', 'Grau', 'Kalt', 'Regen', 'Wolken', 'Dunst'],
      suffixes: ['klippe', 'fels', 'riff', 'bucht', 'küste', 'strand', 'ufer', 'kai', 'hafen', 'anker', 'wrack', 'grund', 'bank', 'schwelle', 'passage'],
      adjectives: ['neblige', 'stürmische', 'windige', 'raue', 'wilde', 'gefährliche', 'tückische', 'kalte', 'graue', 'düstere', 'einsame', 'verlassene', 'vergessene', 'unheimliche', 'gespenstische'],
      structures: ['Ruinen', 'Leuchtturm', 'Wrack', 'Festung', 'Wachturm', 'Höhle', 'Grotte', 'Versteck', 'Schmugglerlager', 'Piratennest'],
      names: ['Keldmare', 'Vornholm', 'Drensar', 'Skelford', 'Ashwyn', 'Grimsea', 'Thornport', 'Valdrest', 'Mordwyn', 'Greyhaven']
    },
    red: {
      prefixes: ['Piraten', 'Räuber', 'Mörder', 'Toten', 'Knochen', 'Schädel', 'Blut', 'Geister', 'Dämon', 'Kraken', 'Hai', 'Seeschlangen', 'Ertrunkenen', 'Leichen', 'Verfluchten'],
      suffixes: ['bucht', 'klippe', 'riff', 'hafen', 'insel', 'höhle', 'grotte', 'nest', 'versteck', 'lager', 'festung', 'turm', 'grab', 'gruft', 'schlund'],
      adjectives: ['verfluchte', 'tödliche', 'mörderische', 'blutige', 'schwarze', 'finstere', 'unheilige', 'dämonische', 'gespenstische', 'grausame', 'entsetzliche', 'schreckliche', 'verdammte', 'verlorene', 'verbotene'],
      structures: ['Piratenfestung', 'Schmugglerhöhle', 'Gefängnisinsel', 'Galgen', 'Hinrichtungsstätte', 'Opferaltar', 'Krakennest', 'Geisterschiff', 'Totentempel', 'Verdammtengruft'],
      names: ['Malakos', 'Vexsea', 'Karnholm', 'Draugos', 'Zulkport', 'Baalwrack', 'Nekromaris', 'Thulwyn', 'Mortport', 'Xaralith']
    }
  },

  // ==========================================
  // UNTERGRUND / HÖHLEN
  // ==========================================
  underground: {
    green: {
      prefixes: ['Kristall', 'Edelstein', 'Gold', 'Silber', 'Mithril', 'Adamant', 'Diamant', 'Rubin', 'Smaragd', 'Saphir', 'Leucht', 'Glüh', 'Pilz', 'Moos', 'Tropfstein'],
      suffixes: ['höhle', 'grotte', 'kaverne', 'halle', 'dom', 'kammer', 'gewölbe', 'see', 'quelle', 'fluss', 'strom', 'fall', 'teich', 'pool', 'heim'],
      adjectives: ['leuchtende', 'glühende', 'strahlende', 'kristallene', 'prächtige', 'wundersame', 'magische', 'heilige', 'verborgene', 'geheime', 'sichere', 'friedliche', 'ruhige', 'stille', 'ewige'],
      structures: ['Schrein', 'Tempel', 'Heiligtum', 'Zuflucht', 'Versteck', 'Schatzraum', 'Thronsaal', 'Bibliothek', 'Observatorium', 'Garten'],
      names: ['Aethindor', 'Celindros', 'Vaelorn', 'Thalindra', 'Mirathel', 'Solindel', 'Elendros', 'Caelindel', 'Felorim', 'Galaros']
    },
    yellow: {
      prefixes: ['Dunkel', 'Finster', 'Schwarz', 'Tief', 'Schatten', 'Nacht', 'Echo', 'Hall', 'Tropf', 'Feucht', 'Kalt', 'Stein', 'Fels', 'Stollen', 'Schacht'],
      suffixes: ['höhle', 'grotte', 'kaverne', 'gang', 'stollen', 'schacht', 'tunnel', 'passage', 'kammer', 'halle', 'gewölbe', 'krypta', 'gruft', 'labyrinth', 'irrgarten'],
      adjectives: ['dunkle', 'finstere', 'tiefe', 'kalte', 'feuchte', 'enge', 'gewundene', 'verwirrende', 'endlose', 'verlassene', 'vergessene', 'alte', 'uralte', 'verfallene', 'eingestürzte'],
      structures: ['Ruinen', 'Mine', 'Stollen', 'Schacht', 'Brücke', 'Aufzug', 'Förderanlage', 'Lager', 'Unterkunft', 'Wachposten'],
      names: ['Keldroth', 'Vorndeep', 'Drenmork', 'Skelgrim', 'Ashdelve', 'Grimstone', 'Thornhollow', 'Valdark', 'Mordrim', 'Greydeep']
    },
    red: {
      prefixes: ['Dämon', 'Teufel', 'Höll', 'Untoten', 'Geister', 'Drachen', 'Spinnen', 'Schlangen', 'Knochen', 'Schädel', 'Blut', 'Gift', 'Tod', 'Verwesung', 'Fäulnis'],
      suffixes: ['höhle', 'grotte', 'hölle', 'abgrund', 'schlund', 'kammer', 'gruft', 'krypta', 'grab', 'nest', 'bau', 'lager', 'festung', 'tempel', 'thron'],
      adjectives: ['verfluchte', 'dämonische', 'höllische', 'untote', 'gespenstische', 'tödliche', 'giftige', 'mörderische', 'grausame', 'entsetzliche', 'schreckliche', 'unheilige', 'verdammte', 'böse', 'finstere'],
      structures: ['Dämonentempel', 'Höllenpforte', 'Untotengruft', 'Spinnenest', 'Drachenhort', 'Opferaltar', 'Folterkammer', 'Kerker', 'Verlies', 'Schatzkammer'],
      names: ['Malakrim', 'Vexaroth', 'Karndeep', 'Draugholm', 'Zulkgor', 'Baaldros', 'Nekrodeep', 'Thulgor', 'Mortrim', 'Xarnoth']
    }
  },

  // ==========================================
  // VULKANISCH
  // ==========================================
  volcanic: {
    green: {
      prefixes: ['Warm', 'Thermal', 'Heiß', 'Dampf', 'Geysir', 'Schwefel', 'Mineral', 'Heil', 'Glut', 'Ember', 'Asche', 'Obsidian', 'Basalt', 'Lava', 'Feuer'],
      suffixes: ['quelle', 'bad', 'becken', 'see', 'teich', 'grotte', 'höhle', 'rast', 'hafen', 'heim', 'stein', 'fels', 'platte', 'feld', 'garten'],
      adjectives: ['warme', 'heiße', 'dampfende', 'heilende', 'belebende', 'reine', 'klare', 'geschützte', 'sichere', 'friedliche', 'stille', 'verborgene', 'geheime', 'wundersame', 'magische'],
      structures: ['Therme', 'Bad', 'Quelle', 'Schrein', 'Tempel', 'Zuflucht', 'Rastplatz', 'Heilstätte', 'Observatorium', 'Schmiede'],
      names: ['Aetheros', 'Celindral', 'Vaeltherm', 'Thalindros', 'Miraveth', 'Solandor', 'Elendrath', 'Caelindros', 'Felorath', 'Galanthos']
    },
    yellow: {
      prefixes: ['Rauch', 'Qualm', 'Dampf', 'Schwefel', 'Asche', 'Ruß', 'Schlacke', 'Krater', 'Vulkan', 'Lava', 'Magma', 'Glut', 'Feuer', 'Brand', 'Kohle'],
      suffixes: ['feld', 'ebene', 'hang', 'hügel', 'berg', 'krater', 'schlund', 'spalte', 'riss', 'kluft', 'grube', 'becken', 'see', 'strom', 'fluss'],
      adjectives: ['rauchende', 'qualmende', 'dampfende', 'schweflige', 'aschige', 'rußige', 'heiße', 'glühende', 'brodelnde', 'kochende', 'gefährliche', 'tückische', 'unberechenbare', 'instabile', 'aktive'],
      structures: ['Ruinen', 'Mine', 'Schmiede', 'Gießerei', 'Wachposten', 'Lager', 'Brücke', 'Pfad', 'Passage', 'Tunnel'],
      names: ['Keldroth', 'Vornash', 'Drenfire', 'Skelgor', 'Ashmar', 'Grimflame', 'Thornpyre', 'Valdspark', 'Mordrek', 'Greycinder']
    },
    red: {
      prefixes: ['Feuer', 'Flammen', 'Inferno', 'Höll', 'Dämon', 'Teufel', 'Verdammnis', 'Zerstörung', 'Untergang', 'Apokalypse', 'Drachen', 'Ifrit', 'Feuer', 'Brand', 'Explosion'],
      suffixes: ['berg', 'schlund', 'krater', 'hölle', 'abgrund', 'see', 'meer', 'strom', 'flut', 'sturm', 'inferno', 'pforte', 'tor', 'thron', 'festung'],
      adjectives: ['brennende', 'lodernde', 'flammende', 'höllische', 'dämonische', 'teuflische', 'verfluchte', 'apokalyptische', 'zerstörerische', 'tödliche', 'mörderische', 'verdammte', 'ewige', 'unauslöschliche', 'verzehrende'],
      structures: ['Feuertempel', 'Dämonenpforte', 'Höllenschlund', 'Ifritthron', 'Vulkanfestung', 'Opferaltar', 'Feuerturm', 'Flammenthron', 'Infernoportal', 'Magmagrotte'],
      names: ['Malakhor', 'Vexflame', 'Karnpyre', 'Draugos', 'Zulkrath', 'Baalfire', 'Nekropyre', 'Thulgor', 'Morthrax', 'Xarneth']
    }
  },

  // ==========================================
  // WÜSTE
  // ==========================================
  desert: {
    green: {
      prefixes: ['Oasen', 'Palmen', 'Quell', 'Schatten', 'Kühle', 'Wasser', 'Brunnen', 'Karawanen', 'Händler', 'Rast', 'Sternen', 'Mond', 'Nacht', 'Morgen', 'Abend'],
      suffixes: ['oase', 'quelle', 'brunnen', 'garten', 'hain', 'hafen', 'rast', 'platz', 'lager', 'heim', 'stein', 'fels', 'schatten', 'zuflucht', 'frieden'],
      adjectives: ['kühle', 'schattige', 'verborgene', 'geheime', 'sichere', 'friedliche', 'stille', 'heilige', 'gesegnete', 'lebendige', 'grüne', 'blühende', 'fruchtbare', 'reiche', 'gastliche'],
      structures: ['Oase', 'Brunnen', 'Karawanserei', 'Rastplatz', 'Tempel', 'Schrein', 'Palast', 'Zelt', 'Lager', 'Markt'],
      names: ['Ashkar', 'Zephirim', 'Karimeth', 'Thalindor', 'Mirasol', 'Seladrin', 'Vaelindor', 'Celadris', 'Aelindros', 'Solanthir']
    },
    yellow: {
      prefixes: ['Sand', 'Dünen', 'Wind', 'Staub', 'Stein', 'Fels', 'Salz', 'Trocken', 'Dürre', 'Ödnis', 'Endlos', 'Weit', 'Grau', 'Gelb', 'Ocker'],
      suffixes: ['meer', 'feld', 'ebene', 'düne', 'hügel', 'kante', 'rücken', 'wand', 'turm', 'säule', 'stein', 'fels', 'block', 'formation', 'labyrinth'],
      adjectives: ['endlose', 'weite', 'leere', 'öde', 'trockene', 'dürre', 'heiße', 'brennende', 'gleißende', 'blendende', 'sandige', 'staubige', 'windige', 'einsame', 'verlassene'],
      structures: ['Ruinen', 'Turm', 'Säulen', 'Stele', 'Obelisk', 'Monument', 'Grabmal', 'Pyramide', 'Sphinx', 'Tempel'],
      names: ['Keldros', 'Vorneth', 'Drensar', 'Skelmir', 'Ashkand', 'Grimdune', 'Thornwind', 'Valdros', 'Mordath', 'Greysand']
    },
    red: {
      prefixes: ['Todes', 'Knochen', 'Schädel', 'Geier', 'Skorpion', 'Schlangen', 'Gift', 'Durst', 'Hunger', 'Verdorben', 'Verflucht', 'Dämonen', 'Djinn', 'Geister', 'Mumien'],
      suffixes: ['wüste', 'ödnis', 'grab', 'gruft', 'tal', 'schlucht', 'klamm', 'höhle', 'nest', 'bau', 'turm', 'festung', 'tempel', 'pyramide', 'krypta'],
      adjectives: ['tödliche', 'verfluchte', 'verdorbene', 'giftige', 'mörderische', 'grausame', 'entsetzliche', 'schreckliche', 'unheilige', 'dämonische', 'gespenstische', 'verbotene', 'verdammte', 'verlorene', 'ewige'],
      structures: ['Grabmal', 'Pyramide', 'Tempel', 'Gruft', 'Krypta', 'Opferstätte', 'Altar', 'Festung', 'Turm', 'Verlies'],
      names: ['Malaketh', 'Vexarion', 'Karnoth', 'Draugmir', 'Zulkandros', 'Baalthos', 'Nekrosand', 'Thulketh', 'Morthalos', 'Xarneth']
    }
  },

  // ==========================================
  // PLANAR / ÜBERNATÜRLICH
  // ==========================================
  planar: {
    green: {
      prefixes: ['Sternen', 'Mond', 'Sonnen', 'Licht', 'Kristall', 'Äther', 'Traum', 'Seelen', 'Geist', 'Elysium', 'Paradies', 'Himmel', 'Heilig', 'Göttlich', 'Segen'],
      suffixes: ['portal', 'tor', 'pforte', 'garten', 'hain', 'quelle', 'see', 'meer', 'reich', 'land', 'ebene', 'sphäre', 'dimension', 'welt', 'raum'],
      adjectives: ['strahlende', 'leuchtende', 'glänzende', 'schimmernde', 'ewige', 'heilige', 'göttliche', 'himmlische', 'paradiesische', 'gesegnete', 'reine', 'klare', 'friedliche', 'harmonische', 'vollkommene'],
      structures: ['Tor', 'Portal', 'Tempel', 'Schrein', 'Altar', 'Thron', 'Palast', 'Garten', 'Quelle', 'Brunnen'],
      names: ['Aetherion', 'Celestara', 'Vaelindros', 'Thalandril', 'Miravael', 'Solanthir', 'Elendros', 'Caelestis', 'Felorith', 'Galadriel']
    },
    yellow: {
      prefixes: ['Nebel', 'Schatten', 'Dämmer', 'Grau', 'Zwischen', 'Limbus', 'Schwebe', 'Echo', 'Spiegel', 'Reflexion', 'Verzerrung', 'Anomalie', 'Riss', 'Bruch', 'Störung'],
      suffixes: ['zone', 'ebene', 'reich', 'dimension', 'raum', 'sphäre', 'welt', 'passage', 'korridor', 'tunnel', 'brücke', 'übergang', 'schwelle', 'grenze', 'rand'],
      adjectives: ['neblige', 'schattige', 'dämmrige', 'graue', 'verschwommene', 'verzerrte', 'instabile', 'flüchtige', 'unbeständige', 'merkwürdige', 'seltsame', 'fremde', 'unwirkliche', 'traumhafte', 'gespenstische'],
      structures: ['Riss', 'Portal', 'Passage', 'Brücke', 'Turm', 'Leuchtturm', 'Wachposten', 'Station', 'Anker', 'Fixpunkt'],
      names: ['Keldrimor', 'Vornaeth', 'Drenholm', 'Skelwaith', 'Ashveil', 'Grimether', 'Thornrift', 'Valdrim', 'Mordaeth', 'Greymist']
    },
    red: {
      prefixes: ['Chaos', 'Höll', 'Abgrund', 'Leere', 'Nichts', 'Dunkel', 'Schatten', 'Dämon', 'Teufel', 'Verdammnis', 'Zerstörung', 'Entropie', 'Wahnsinn', 'Albtraum', 'Horror'],
      suffixes: ['dimension', 'ebene', 'reich', 'welt', 'sphäre', 'abgrund', 'schlund', 'hölle', 'kerker', 'gefängnis', 'pforte', 'tor', 'portal', 'riss', 'bruch'],
      adjectives: ['chaotische', 'höllische', 'abgründige', 'leere', 'dunkle', 'dämonische', 'teuflische', 'verdammte', 'zerstörerische', 'wahnsinnige', 'albtraumhafte', 'entsetzliche', 'grausame', 'schreckliche', 'unaussprechliche'],
      structures: ['Höllenpforte', 'Dämonenthron', 'Chaosaltar', 'Abgrundportal', 'Leereschacht', 'Wahnsinnstempel', 'Albtraumturm', 'Entropiekern', 'Verdammnistor', 'Zerstörungsfokus'],
      names: ['Malakros', 'Vexaroth', 'Karnoth', 'Draugmor', 'Zulkrath', 'Baalgoroth', 'Nekrovex', 'Thulgrath', 'Morthalon', 'Xarnoth']
    }
  },

  // ==========================================
  // ARKTISCH / EIS
  // ==========================================
  arctic: {
    green: {
      prefixes: ['Sonnen', 'Licht', 'Sternen', 'Aurora', 'Nordlicht', 'Kristall', 'Eis', 'Schnee', 'Frost', 'Winter', 'Polar', 'Mammut', 'Walross', 'Robben', 'Pinguin'],
      suffixes: ['hafen', 'rast', 'zuflucht', 'heim', 'hütte', 'höhle', 'grotte', 'quelle', 'see', 'bucht', 'insel', 'fels', 'stein', 'berg', 'gipfel'],
      adjectives: ['strahlende', 'leuchtende', 'glitzernde', 'funkelnde', 'kristallene', 'reine', 'klare', 'stille', 'friedliche', 'geschützte', 'sichere', 'warme', 'gemütliche', 'gastliche', 'heilige'],
      structures: ['Hütte', 'Iglu', 'Höhle', 'Zuflucht', 'Lager', 'Schrein', 'Tempel', 'Aussichtspunkt', 'Leuchtturm', 'Wachposten'],
      names: ['Aelindros', 'Celestheim', 'Vaelindor', 'Thalindros', 'Miraveth', 'Solindel', 'Elendrim', 'Caelindra', 'Felorin', 'Galanthir']
    },
    yellow: {
      prefixes: ['Eis', 'Schnee', 'Frost', 'Kalt', 'Gletscher', 'Lawinen', 'Sturm', 'Blizzard', 'Wind', 'Nebel', 'Grau', 'Weiß', 'Polar', 'Permafrost', 'Tundra'],
      suffixes: ['feld', 'ebene', 'wüste', 'meer', 'gletscher', 'berg', 'gipfel', 'wand', 'klippe', 'schlucht', 'spalte', 'riss', 'bruch', 'höhle', 'grotte'],
      adjectives: ['eisige', 'frostige', 'kalte', 'gefrorene', 'vereiste', 'schneebedeckte', 'windige', 'stürmische', 'neblige', 'graue', 'weiße', 'endlose', 'öde', 'tödliche', 'tückische'],
      structures: ['Ruinen', 'Turm', 'Festung', 'Wachposten', 'Lager', 'Höhle', 'Spalte', 'Brücke', 'Pass', 'Pfad'],
      names: ['Keldfrost', 'Vornheim', 'Drenmork', 'Skelgrim', 'Ashwinter', 'Grimfrost', 'Thornsnow', 'Valdmir', 'Mordrek', 'Greyice']
    },
    red: {
      prefixes: ['Todes', 'Erfrierungs', 'Hunger', 'Verderbnis', 'Eisbär', 'Yeti', 'Frost', 'Eis', 'Kälte', 'Lawinen', 'Abgrund', 'Spalten', 'Knochen', 'Geister', 'Untoten'],
      suffixes: ['grab', 'gruft', 'tod', 'ende', 'verderben', 'hölle', 'abgrund', 'spalte', 'schlucht', 'höhle', 'nest', 'bau', 'festung', 'turm', 'kerker'],
      adjectives: ['tödliche', 'mörderische', 'verfluchte', 'verdammte', 'ewige', 'endlose', 'grausame', 'entsetzliche', 'schreckliche', 'unheilige', 'gespenstische', 'untote', 'dämonische', 'frostgebundene', 'eingefrorene'],
      structures: ['Eistempel', 'Frostthron', 'Yetihöhle', 'Eisbärenbau', 'Gefrorene Gruft', 'Eiskerker', 'Frostfestung', 'Gletschergrab', 'Lawinengrab', 'Untotengruft'],
      names: ['Malakfrost', 'Vexaroth', 'Karnheim', 'Draugmir', 'Zulkfrost', 'Baalgor', 'Nekrofrost', 'Thulgor', 'Morthrax', 'Xarnoth']
    }
  },

  // ==========================================
  // ÖDLAND / DEADLANDS
  // ==========================================
  deadlands: {
    green: {
      prefixes: ['Oasen', 'Leben', 'Hoffnung', 'Licht', 'Schutz', 'Zuflucht', 'Überleben', 'Widerstand', 'Trotz', 'Hartnäckig', 'Beharrlich', 'Durchhalte', 'Überlebens', 'Rettungs', 'Schutz'],
      suffixes: ['insel', 'fleck', 'punkt', 'zone', 'bereich', 'ort', 'stelle', 'platz', 'lager', 'camp', 'basis', 'posten', 'station', 'zuflucht', 'heim'],
      adjectives: ['letzte', 'einzige', 'verborgene', 'geheime', 'geschützte', 'sichere', 'lebendige', 'grüne', 'blühende', 'trotzige', 'hartnäckige', 'beharrliche', 'hoffnungsvolle', 'widerständige', 'überlebende'],
      structures: ['Bunker', 'Zuflucht', 'Versteck', 'Basis', 'Lager', 'Schrein', 'Quelle', 'Brunnen', 'Garten', 'Farm'],
      names: ['Aelindros', 'Selareth', 'Vaelindor', 'Thalindris', 'Miraveth', 'Solindel', 'Elendrim', 'Caelindros', 'Felorin', 'Galanthir']
    },
    yellow: {
      prefixes: ['Asche', 'Ruß', 'Staub', 'Trümmer', 'Ruinen', 'Schutt', 'Ödnis', 'Leere', 'Verfall', 'Zerfall', 'Zerstörung', 'Verwüstung', 'Verödung', 'Grau', 'Braun'],
      suffixes: ['feld', 'ebene', 'wüste', 'ödnis', 'land', 'zone', 'gebiet', 'bereich', 'sektor', 'mark', 'grund', 'boden', 'erde', 'staub', 'asche'],
      adjectives: ['aschige', 'staubige', 'trockene', 'öde', 'leere', 'verlassene', 'zerstörte', 'verwüstete', 'verödete', 'tote', 'graue', 'braune', 'farblose', 'trostlose', 'hoffnungslose'],
      structures: ['Ruinen', 'Trümmer', 'Bunker', 'Versteck', 'Höhle', 'Grube', 'Krater', 'Schacht', 'Tunnel', 'Keller'],
      names: ['Keldroth', 'Vornash', 'Drenmork', 'Skelmir', 'Ashfeld', 'Grimhold', 'Thornwaste', 'Valdros', 'Mordrek', 'Greydust']
    },
    red: {
      prefixes: ['Tod', 'Vernichtung', 'Apokalypse', 'Untergang', 'Ende', 'Auslöschung', 'Verderbnis', 'Gift', 'Strahlung', 'Mutation', 'Abscheulichkeit', 'Horror', 'Grauen', 'Entsetzen', 'Wahnsinn'],
      suffixes: ['zone', 'gebiet', 'krater', 'schlund', 'abgrund', 'hölle', 'ort', 'stätte', 'mal', 'feld', 'grund', 'boden', 'land', 'reich', 'welt'],
      adjectives: ['tödliche', 'vernichtende', 'apokalyptische', 'verseuchte', 'vergiftete', 'mutierte', 'abscheuliche', 'grauenhafte', 'entsetzliche', 'wahnwitzige', 'verfluchte', 'verdammte', 'höllische', 'dämonische', 'unaussprechliche'],
      structures: ['Krater', 'Schlund', 'Abgrund', 'Tor', 'Pforte', 'Altar', 'Tempel', 'Festung', 'Turm', 'Grab'],
      names: ['Malaketh', 'Vexaroth', 'Karnoth', 'Draugmir', 'Zulkrath', 'Baalgoroth', 'Nekrovex', 'Thulgrath', 'Morthalon', 'Xarneth']
    }
  },

  // ==========================================
  // STEPPE
  // ==========================================
  steppe: {
    green: {
      prefixes: ['Sonnen', 'Gold', 'Weizen', 'Korn', 'Hirse', 'Nomaden', 'Hirten', 'Pferde', 'Büffel', 'Antilopen', 'Adler', 'Falken', 'Reit', 'Wander', 'Frei'],
      suffixes: ['weide', 'gras', 'feld', 'ebene', 'platz', 'lager', 'camp', 'rast', 'brunnen', 'quelle', 'hügel', 'hang', 'stein', 'fels', 'kreuz'],
      adjectives: ['goldene', 'sonnige', 'weite', 'offene', 'freie', 'endlose', 'fruchtbare', 'reiche', 'gesegnete', 'friedliche', 'stille', 'ruhige', 'sanfte', 'warme', 'gastliche'],
      structures: ['Jurte', 'Zelt', 'Lager', 'Brunnen', 'Quelle', 'Schrein', 'Steinkreis', 'Monument', 'Handelsposten', 'Karawanserei'],
      names: ['Aelindros', 'Selareth', 'Vaelindor', 'Thalindros', 'Miraveth', 'Solindel', 'Elendrim', 'Caelindros', 'Felorin', 'Galanthir']
    },
    yellow: {
      prefixes: ['Wind', 'Staub', 'Trocken', 'Dürre', 'Grau', 'Braun', 'Kahl', 'Öde', 'Leer', 'Weit', 'Endlos', 'Sturm', 'Donner', 'Blitz', 'Hagel'],
      suffixes: ['ebene', 'steppe', 'feld', 'grund', 'mark', 'land', 'weite', 'fläche', 'horizont', 'kante', 'grat', 'hügel', 'kuppe', 'stein', 'fels'],
      adjectives: ['windige', 'staubige', 'trockene', 'dürre', 'kahle', 'öde', 'leere', 'weite', 'endlose', 'einsame', 'verlassene', 'vergessene', 'graue', 'braune', 'farblose'],
      structures: ['Ruinen', 'Stele', 'Monument', 'Grabhügel', 'Steinkreis', 'Wegweiser', 'Meilenstein', 'Wachposten', 'Turm', 'Festung'],
      names: ['Keldroth', 'Vornash', 'Drenmork', 'Skelgrim', 'Ashfeld', 'Grimwind', 'Thornsteppe', 'Valdros', 'Mordrek', 'Greygale']
    },
    red: {
      prefixes: ['Blut', 'Knochen', 'Schädel', 'Krieg', 'Schlacht', 'Toten', 'Geier', 'Wolf', 'Hyänen', 'Schlachten', 'Mord', 'Massaker', 'Genozid', 'Horde', 'Plünder'],
      suffixes: ['feld', 'ebene', 'grund', 'stätte', 'platz', 'tal', 'senke', 'grube', 'grab', 'hügel', 'haufen', 'ring', 'kreis', 'mark', 'land'],
      adjectives: ['blutige', 'verfluchte', 'tödliche', 'mörderische', 'grausame', 'entsetzliche', 'schreckliche', 'unheilige', 'verdammte', 'verlorene', 'vergessene', 'schwarze', 'dunkle', 'finstere', 'höllische'],
      structures: ['Schlachtfeld', 'Massengrab', 'Galgen', 'Opferstätte', 'Altar', 'Totempfahl', 'Schädelpyramide', 'Knochenhaufen', 'Geierturm', 'Wolfsgrube'],
      names: ['Malaketh', 'Vexaroth', 'Karnoth', 'Draugmir', 'Zulkrath', 'Baalgoroth', 'Nekrovex', 'Thulgrath', 'Morthalon', 'Xarneth']
    }
  }
};

// ============================================
// GENUS-MAPPING FÜR LANDFORMEN
// m = maskulin (der), f = feminin (die), n = neutrum (das)
// ============================================

const LANDFORM_GENUS = {
  // Maskulin (der)
  'wald': 'm', 'forst': 'm', 'hain': 'm', 'pass': 'm', 'grat': 'm',
  'berg': 'm', 'hügel': 'm', 'fels': 'm', 'stein': 'm', 'turm': 'm',
  'sumpf': 'm', 'see': 'm', 'teich': 'm', 'bach': 'm', 'fluss': 'm',
  'hang': 'm', 'rücken': 'm', 'kamm': 'm', 'gipfel': 'm', 'grund': 'm',
  'brunnen': 'm', 'schrein': 'm', 'tempel': 'm', 'altar': 'm', 'thron': 'm',
  'kerker': 'm', 'stollen': 'm', 'schacht': 'm', 'hafen': 'm', 'kai': 'm',
  'strand': 'm', 'pfad': 'm', 'weg': 'm', 'krater': 'm', 'schlund': 'm',
  'abgrund': 'm', 'wächter': 'm', 'horst': 'm', 'hort': 'm',
  // Strukturen (maskulin)
  'wachturm': 'm', 'aussichtspunkt': 'm', 'rastplatz': 'm', 'steinkreis': 'm',
  'leuchtturm': 'm', 'pier': 'm', 'steg': 'm', 'pfahlbau': 'm', 'bunker': 'm',
  'jägerstand': 'm', 'druidenstein': 'm', 'obelisk': 'm', 'grabhügel': 'm',
  'drachenhort': 'm', 'adlerhorst': 'm', 'feuerturm': 'm', 'frostthron': 'm',
  'totempfahl': 'm', 'knochenhaufen': 'm', 'leichenberg': 'm', 'markt': 'm',
  'palast': 'm', 'garten': 'm', 'fixpunkt': 'm', 'anker': 'm', 'dom': 'm',
  // Feminin (die)
  'lichtung': 'f', 'wiese': 'f', 'quelle': 'f', 'höhle': 'f', 'grotte': 'f',
  'schlucht': 'f', 'klamm': 'f', 'senke': 'f', 'mulde': 'f', 'aue': 'f',
  'insel': 'f', 'bucht': 'f', 'klippe': 'f', 'wand': 'f', 'spitze': 'f',
  'kuppe': 'f', 'höhe': 'f', 'warte': 'f', 'feste': 'f', 'burg': 'f',
  'festung': 'f', 'ruine': 'f', 'gruft': 'f', 'krypta': 'f', 'hütte': 'f',
  'rast': 'f', 'zuflucht': 'f', 'oase': 'f', 'ebene': 'f', 'steppe': 'f',
  'wüste': 'f', 'tundra': 'f', 'heide': 'f', 'mark': 'f', 'pforte': 'f',
  'brücke': 'f', 'passage': 'f', 'schwelle': 'f', 'mine': 'f', 'esse': 'f',
  // Strukturen (feminin)
  'eiche': 'f', 'kapelle': 'f', 'schäferhütte': 'f', 'fähre': 'f',
  'anlegestelle': 'f', 'fischerhütte': 'f', 'werft': 'f', 'therme': 'f',
  'heilstätte': 'f', 'schmiede': 'f', 'gießerei': 'f', 'karawanserei': 'f',
  'pyramide': 'f', 'sphinx': 'f', 'stele': 'f', 'station': 'f', 'basis': 'f',
  'farm': 'f', 'opferstätte': 'f', 'hexenhütte': 'f', 'trollhöhle': 'f',
  'jurte': 'f', 'unterkunft': 'f', 'förderanlage': 'f', 'bibliothek': 'f',
  'folterkammer': 'f', 'schatzkammer': 'f', 'höllenpforte': 'f',
  'dämonenpforte': 'f', 'magmagrotte': 'f', 'vulkanfestung': 'f',
  'piratenfestung': 'f', 'schmugglerhöhle': 'f', 'gefängnisinsel': 'f',
  // Neutrum (das)
  'tal': 'n', 'moor': 'n', 'dickicht': 'n', 'gestrüpp': 'n', 'gebiet': 'n',
  'reich': 'n', 'land': 'n', 'feld': 'n', 'meer': 'n', 'riff': 'n',
  'nest': 'n', 'lager': 'n', 'versteck': 'n', 'grab': 'n', 'grabmal': 'n',
  'tor': 'n', 'portal': 'n', 'gewölbe': 'n', 'verlies': 'n', 'labyrinth': 'n',
  'gebirge': 'n', 'massiv': 'n', 'becken': 'n', 'plateau': 'n', 'horn': 'n',
  // Strukturen (neutrum)
  'forsthaus': 'n', 'holzfällerlager': 'n', 'monument': 'n', 'heiligtum': 'n',
  'observatorium': 'n', 'bootshaus': 'n', 'wrack': 'n', 'geisterschiff': 'n',
  'zelt': 'n', 'iglu': 'n', 'kloster': 'n', 'gefängnis': 'n', 'infernoportal': 'n',
  'spinnennest': 'n', 'massengrab': 'n', 'seuchenlager': 'n'
};

// ============================================
// FANTASY-NAMEN (Exotisch, teils zweiteilig)
// ============================================

const FANTASY_NAMES = {
  // Für Possessiv: "Mirwens Rast", "Kelvins Hügel"
  possessiv: [
    'Mirwen', 'Kelvin', 'Thorin', 'Aldric', 'Beren', 'Caelum', 'Doran',
    'Elric', 'Faelar', 'Gorim', 'Haldir', 'Ivar', 'Jorik', 'Kael',
    'Lorin', 'Maegor', 'Narin', 'Orin', 'Pelion', 'Rhaegar', 'Saren',
    'Thalos', 'Ulric', 'Varek', 'Wulfric', 'Xander', 'Yoren', 'Zephyr'
  ],
  // Für "von/der": "Schlucht von Karach Dun", "Höhlen der Taranaika"
  orte: [
    'Karach Dun', 'Taranaika', 'Durenai', 'Valdros Mor', 'Keth Arun',
    'Silmaren', 'Thornhold', 'Grimmfang', 'Ashendale', 'Morwen Thal',
    'Dol Amroth', 'Karak Varn', 'Ered Luin', 'Khazad Dum', 'Minas Tirith',
    'Angband', 'Mordheim', 'Naggaroth', 'Ulthuan', 'Athel Loren',
    'Kislev', 'Praag', 'Talabheim', 'Middenheim', 'Altdorf',
    'Nuln', 'Marienburg', 'Bordeleaux', 'Parravon', 'Quenelles'
  ],
  // Für "Die [Name] Ruinen": zweiteilige exotische Namen
  adjektivisch: [
    'Durenai', 'Silmaren', 'Aetheri', 'Valdris', 'Kethani',
    'Morvani', 'Thulani', 'Grimaldi', 'Ashkari', 'Dol Amri'
  ]
};

// ============================================
// GENERATOR-FUNKTIONEN
// ============================================

function randomChoice(array) {
  if (!array || array.length === 0) return null;
  return array[Math.floor(Math.random() * array.length)];
}

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getArtikel(suffix, kasus = 'nom') {
  const genus = LANDFORM_GENUS[suffix.toLowerCase()] || 'f';
  if (kasus === 'nom') {
    return genus === 'm' ? 'Der' : genus === 'f' ? 'Die' : 'Das';
  }
  if (kasus === 'gen') {
    return genus === 'm' ? 'des' : genus === 'f' ? 'der' : 'des';
  }
  return 'die';
}

/**
 * Muster A: Artikel + Kompositum
 * Beispiele: "Die Bannerfurt", "Der Finstersumpf", "Das Schattental"
 */
function generateArtikelKompositum(words) {
  const prefix = randomChoice(words.prefixes);
  const suffix = randomChoice(words.suffixes);
  if (!prefix || !suffix) return null;

  const artikel = getArtikel(suffix);
  const kompositum = prefix + suffix;
  return `${artikel} ${capitalize(kompositum)}`;
}

/**
 * Muster B: Artikel + Adj + Landform
 * Beispiele: "Das grüne Tal", "Der tote Wald", "Die schwarze Feste"
 */
function generateArtikelAdjLandform(words) {
  const adj = randomChoice(words.adjectives);
  const suffix = randomChoice(words.suffixes);
  if (!adj || !suffix) return null;

  const artikel = getArtikel(suffix);
  return `${artikel} ${adj} ${capitalize(suffix)}`;
}

/**
 * Muster C: Artikel + Landform + von + Name
 * Beispiele: "Die Schlucht von Karach Dun", "Der Pass von Valdros Mor"
 */
function generateVonKonstruktion(words) {
  const suffix = randomChoice(words.suffixes);
  const name = randomChoice(FANTASY_NAMES.orte);
  if (!suffix || !name) return null;

  const artikel = getArtikel(suffix);
  return `${artikel} ${capitalize(suffix)} von ${name}`;
}

/**
 * Muster D: Name's + Struktur/Kompositum
 * Beispiele: "Mirwens Rast", "Kelvins Steinhügel", "Thorins Wacht"
 */
function generatePossessiv(words) {
  const name = randomChoice(FANTASY_NAMES.possessiv);
  const structure = randomChoice(words.structures);
  if (!name || !structure) return null;

  // Possessiv-Endung: Namen die auf s/x/z enden bekommen nur '
  const possessivName = name.endsWith('s') || name.endsWith('x') || name.endsWith('z')
    ? `${name}'`
    : `${name}s`;

  return `${possessivName} ${structure}`;
}

/**
 * Muster E: Artikel + Struktur + der/des + Name
 * Beispiele: "Die Höhlen der Taranaika", "Der Turm des Grimmfang"
 */
function generateDerKonstruktion(words) {
  const structure = randomChoice(words.structures);
  const name = randomChoice(FANTASY_NAMES.orte);
  if (!structure || !name) return null;

  // Struktur-Genus bestimmt "der/des"
  const strukturGenus = LANDFORM_GENUS[structure.toLowerCase()] || 'f';
  const artikel = getArtikel(structure);

  // Genitiv-Artikel für den Namen (meist "der" da Ortsnamen oft feminin behandelt werden)
  const genitivArtikel = Math.random() > 0.5 ? 'der' : 'des';

  return `${artikel} ${structure} ${genitivArtikel} ${name}`;
}

/**
 * Muster F: Artikel + Name + Struktur
 * Beispiele: "Die Durenai Ruinen", "Der Silmaren Pass"
 */
function generateNameStruktur(words) {
  const name = randomChoice(FANTASY_NAMES.adjektivisch);
  const structure = randomChoice(words.structures);
  if (!name || !structure) return null;

  const artikel = getArtikel(structure);
  return `${artikel} ${name} ${structure}`;
}

// Bindewörter für dreiteilige Komposita
const BINDE_WOERTER = [
  'stein', 'wind', 'eis', 'feuer', 'blut', 'schatten', 'nacht', 'sturm',
  'frost', 'donner', 'nebel', 'silber', 'gold', 'eisen', 'knochen'
];

/**
 * Muster G: Dreiteiliges Kompositum
 * Beispiele: "Die Blutsteinspitze", "Der Klirreispass", "Das Sturmwindtal"
 */
function generateDreiKompositum(words) {
  const prefix = randomChoice(words.prefixes);
  const binde = randomChoice(BINDE_WOERTER);
  const suffix = randomChoice(words.suffixes);
  if (!prefix || !binde || !suffix) return null;

  // Vermeide Dopplungen
  if (prefix.toLowerCase() === binde || binde === suffix) return null;

  const artikel = getArtikel(suffix);
  const kompositum = prefix + binde + suffix;
  return `${artikel} ${capitalize(kompositum)}`;
}

// ============================================
// GEWICHTUNG NACH ORT-TYP
// ============================================

const PATTERN_WEIGHTS = {
  green: {
    artikelKompositum: 25,
    artikelAdjLandform: 20,
    vonKonstruktion: 10,
    possessiv: 20,
    derKonstruktion: 10,
    nameStruktur: 10,
    dreiKompositum: 5
  },
  yellow: {
    artikelKompositum: 25,
    artikelAdjLandform: 20,
    vonKonstruktion: 15,
    possessiv: 15,
    derKonstruktion: 10,
    nameStruktur: 10,
    dreiKompositum: 5
  },
  red: {
    artikelKompositum: 30,
    artikelAdjLandform: 15,
    vonKonstruktion: 15,
    possessiv: 10,
    derKonstruktion: 15,
    nameStruktur: 10,
    dreiKompositum: 5
  }
};

const PATTERNS = [
  'artikelKompositum',
  'artikelAdjLandform',
  'vonKonstruktion',
  'possessiv',
  'derKonstruktion',
  'nameStruktur',
  'dreiKompositum'
];

function selectPattern(type) {
  const weights = PATTERN_WEIGHTS[type] || PATTERN_WEIGHTS.yellow;
  const total = PATTERNS.reduce((sum, p) => sum + (weights[p] || 0), 0);
  let random = Math.random() * total;

  for (const pattern of PATTERNS) {
    const weight = weights[pattern] || 0;
    if (random < weight) return pattern;
    random -= weight;
  }
  return 'artikelKompositum';
}

// ============================================
// HAUPTFUNKTION
// ============================================

/**
 * Generiert einen Ortsnamen für ein bestimmtes Biom und Typ
 * @param {string} biomeId - ID des Bioms (z.B. 'forest', 'desert')
 * @param {string} type - Typ des Ortes ('green', 'yellow', 'red')
 * @returns {string|null} Generierter Name oder null bei Fehler
 */
export function generateLocationName(biomeId, type) {
  const biomeWords = BIOME_WORDS[biomeId];
  if (!biomeWords) {
    console.warn(`[Name Generator] Unknown biome: ${biomeId}`);
    return null;
  }

  const words = biomeWords[type];
  if (!words) {
    console.warn(`[Name Generator] Unknown type for biome ${biomeId}: ${type}`);
    return null;
  }

  const pattern = selectPattern(type);

  let name = null;
  switch (pattern) {
    case 'artikelKompositum':
      name = generateArtikelKompositum(words);
      break;
    case 'artikelAdjLandform':
      name = generateArtikelAdjLandform(words);
      break;
    case 'vonKonstruktion':
      name = generateVonKonstruktion(words);
      break;
    case 'possessiv':
      name = generatePossessiv(words);
      break;
    case 'derKonstruktion':
      name = generateDerKonstruktion(words);
      break;
    case 'nameStruktur':
      name = generateNameStruktur(words);
      break;
    case 'dreiKompositum':
      name = generateDreiKompositum(words);
      break;
  }

  // Fallback
  if (!name) {
    name = generateArtikelKompositum(words) ||
           generateArtikelAdjLandform(words) ||
           generatePossessiv(words);
  }

  return name;
}

/**
 * Exportiert die Wortlisten für externe Verwendung
 */
export { BIOME_WORDS, PATTERN_WEIGHTS, FANTASY_NAMES, LANDFORM_GENUS };
