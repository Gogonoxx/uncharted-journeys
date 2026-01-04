/**
 * Biome Locations Data
 *
 * Jedes Biom hat Orte in 4 Kategorien:
 * - 🟢 green: Sichere Orte (friedliche Namen, Rast möglich)
 * - 🟡 yellow: Neutrale Orte (mysteriöse/neutrale Namen)
 * - 🔴 red: Gefährliche Orte (bedrohliche Namen, kürzere Pfade)
 * - 💎 treasure: Besondere Belohnungs-Orte (legendäre Namen)
 *
 * WICHTIG: Die Namen sind SETTINGS, nicht Encounters!
 * Sie geben die Atmosphäre vor, nicht was dort passiert.
 *
 * UPDATE: Namen werden jetzt dynamisch generiert via name-generator.js
 * Die statischen Listen bleiben als Fallback erhalten.
 */

import { generateLocationName } from './name-generator.js';

export const BIOME_LOCATIONS = {
  // ═══════════════════════════════════════════════════════════════════════════
  // GRASSLAND - Grasland
  // ═══════════════════════════════════════════════════════════════════════════
  grassland: {
    id: 'grassland',
    name: 'Grasland',
    icon: 'fa-wheat-awn',
    description: 'Offene Wiesen, Bauernhöfe und sanfte Hügel',

    green: [
      { id: 'golden_meadows', name: 'Goldene Wiesen', canRest: true },
      { id: 'windwhisper_hill', name: 'Windflüsterhügel', canRest: true },
      { id: 'sundew_plains', name: 'Sonnentau-Ebene', canRest: true },
      { id: 'honeybee_fields', name: 'Bienensumm-Felder', canRest: true },
      { id: 'shepherds_rest', name: 'Schäfersruh', canRest: true },
      { id: 'old_crossroads', name: 'Alter Kreuzweg', canRest: true },
      { id: 'silver_brook', name: 'Silberbach', canRest: true },
      { id: 'millstone_rise', name: 'Mühlsteinhöhe', canRest: true },
    ],

    yellow: [
      { id: 'grey_hills', name: 'Graue Hügel', canRest: false },
      { id: 'dusty_crossing', name: 'Staubige Kreuzung', canRest: false },
      { id: 'windbreak', name: 'Windbruch', canRest: false },
      { id: 'mist_hollow', name: 'Nebelsenke', canRest: false },
      { id: 'stone_watch', name: 'Steinerne Wacht', canRest: false },
      { id: 'fallow_ground', name: 'Brachland', canRest: false },
      { id: 'lonely_oak', name: 'Einsame Eiche', canRest: false },
      { id: 'forgotten_path', name: 'Vergessener Pfad', canRest: false },
    ],

    red: [
      { id: 'bone_field', name: 'Knochenfeld', canRest: false },
      { id: 'raven_hill', name: 'Rabenhügel', canRest: false },
      { id: 'blood_acre', name: 'Blutacker', canRest: false },
      { id: 'howling_waste', name: 'Heulende Öde', canRest: false },
      { id: 'gallows_ridge', name: 'Galgengrat', canRest: false },
      { id: 'scorched_earth', name: 'Verbrannte Erde', canRest: false },
      { id: 'weeping_stones', name: 'Weinende Steine', canRest: false },
      { id: 'blackthorn_hollow', name: 'Schwarzdornsenke', canRest: false },
    ],

    treasure: [
      { id: 'ancient_barrow', name: 'Uralter Grabhügel', canRest: false },
      { id: 'standing_stones', name: 'Stehende Steine von Aldor', canRest: false },
      { id: 'kings_rest', name: 'Königsruh', canRest: false },
      { id: 'fey_ring', name: 'Der Feenring', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // STEPPE - Steppe
  // ═══════════════════════════════════════════════════════════════════════════
  steppe: {
    id: 'steppe',
    name: 'Steppe',
    icon: 'fa-wind',
    description: 'Trockene Ebenen, Nomadenlager und endlose Weiten',

    green: [
      { id: 'silvergrass_steppe', name: 'Silbergras-Steppe', canRest: true },
      { id: 'nomads_star', name: 'Nomadenstern', canRest: true },
      { id: 'wide_horizons', name: 'Weite Horizonte', canRest: true },
      { id: 'eagle_sky', name: 'Adlerhimmel', canRest: true },
      { id: 'spring_of_karath', name: 'Quelle von Karath', canRest: true },
      { id: 'wind_haven', name: 'Windhafen', canRest: true },
      { id: 'grass_sea', name: 'Grasmeer', canRest: true },
      { id: 'waystone_rest', name: 'Wegsteinrast', canRest: true },
    ],

    yellow: [
      { id: 'dust_sea', name: 'Staubmeer', canRest: false },
      { id: 'endless_prairie', name: 'Endlose Prärie', canRest: false },
      { id: 'windswept', name: 'Windgepeitscht', canRest: false },
      { id: 'salt_flats', name: 'Salzebene', canRest: false },
      { id: 'thunder_plains', name: 'Donnerebene', canRest: false },
      { id: 'ancient_pillars', name: 'Alte Säulen', canRest: false },
      { id: 'whistling_rocks', name: 'Pfeifende Felsen', canRest: false },
      { id: 'buffalo_crossing', name: 'Büffelübergang', canRest: false },
    ],

    red: [
      { id: 'vulture_circle', name: 'Geierkreis', canRest: false },
      { id: 'death_watch', name: 'Totenwacht', canRest: false },
      { id: 'red_plains', name: 'Rote Ebene', canRest: false },
      { id: 'bone_valley', name: 'Knochental', canRest: false },
      { id: 'wailing_steppe', name: 'Klagende Steppe', canRest: false },
      { id: 'dust_devil_grounds', name: 'Staubteufel-Gründe', canRest: false },
      { id: 'broken_spears', name: 'Zerbrochene Speere', canRest: false },
      { id: 'blood_grass', name: 'Blutgras', canRest: false },
    ],

    treasure: [
      { id: 'khans_tomb', name: 'Grab des Khans', canRest: false },
      { id: 'sky_metal_crater', name: 'Himmelsmetall-Krater', canRest: false },
      { id: 'wind_spirit_shrine', name: 'Windgeist-Schrein', canRest: false },
      { id: 'eternal_flame', name: 'Ewige Flamme von Gorath', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // FOREST - Wald
  // ═══════════════════════════════════════════════════════════════════════════
  forest: {
    id: 'forest',
    name: 'Wald',
    icon: 'fa-tree',
    description: 'Dichter Wald, verwunschene Lichtungen und uralte Bäume',

    green: [
      { id: 'silverlight_clearing', name: 'Silberlicht-Lichtung', canRest: true },
      { id: 'old_oak_merador', name: 'Alte Eiche von Merador', canRest: true },
      { id: 'mossy_vale', name: 'Moosiges Tal', canRest: true },
      { id: 'goldleaf_grove', name: 'Goldblatt-Hain', canRest: true },
      { id: 'fern_hollow', name: 'Farnsenke', canRest: true },
      { id: 'birch_stand', name: 'Birkenstand', canRest: true },
      { id: 'quiet_stream', name: 'Stiller Bach', canRest: true },
      { id: 'sunbeam_glade', name: 'Sonnenstrahl-Lichtung', canRest: true },
    ],

    yellow: [
      { id: 'twilight_path', name: 'Zwielichtpfad', canRest: false },
      { id: 'mist_grove', name: 'Nebelhain', canRest: false },
      { id: 'root_ground', name: 'Wurzelgrund', canRest: false },
      { id: 'dusk_shadow', name: 'Dämmerschatten', canRest: false },
      { id: 'fallen_giant', name: 'Gestürzter Riese', canRest: false },
      { id: 'tangled_depths', name: 'Verworrene Tiefen', canRest: false },
      { id: 'hunters_mark', name: 'Jägermarke', canRest: false },
      { id: 'ancient_path', name: 'Uralter Pfad', canRest: false },
    ],

    red: [
      { id: 'thorn_valley', name: 'Dornental', canRest: false },
      { id: 'blackwood', name: 'Schwarzholz', canRest: false },
      { id: 'wolf_gorge', name: 'Wolfsschlucht', canRest: false },
      { id: 'rot_hollow', name: 'Modrige Senke', canRest: false },
      { id: 'bloodmoss', name: 'Blutmoos', canRest: false },
      { id: 'hanging_trees', name: 'Hängende Bäume', canRest: false },
      { id: 'whisper_dark', name: 'Flüsterdunkel', canRest: false },
      { id: 'dead_grove', name: 'Toter Hain', canRest: false },
    ],

    treasure: [
      { id: 'heart_of_the_wood', name: 'Herz des Waldes', canRest: false },
      { id: 'fey_court', name: 'Der Feenhof', canRest: false },
      { id: 'elder_hollow', name: 'Ältestensenke', canRest: false },
      { id: 'moonwell', name: 'Mondquelle', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MOUNTAINS - Gebirge
  // ═══════════════════════════════════════════════════════════════════════════
  mountains: {
    id: 'mountains',
    name: 'Gebirge',
    icon: 'fa-mountain',
    description: 'Schroffe Gipfel, Bergpässe und tiefe Schluchten',

    green: [
      { id: 'skyhorn_plateau', name: 'Himmelsdorn Plateau', canRest: true },
      { id: 'eagle_nest_view', name: 'Adlerhorst-Ausblick', canRest: true },
      { id: 'sun_ridge', name: 'Sonnengrat', canRest: true },
      { id: 'crystal_spring_heights', name: 'Kristallquell-Höhe', canRest: true },
      { id: 'shepherds_shelter', name: 'Hirtenschutz', canRest: true },
      { id: 'warm_stones', name: 'Warme Steine', canRest: true },
      { id: 'alpine_meadow', name: 'Almwiese', canRest: true },
      { id: 'clear_peak', name: 'Klarer Gipfel', canRest: true },
    ],

    yellow: [
      { id: 'everfrost_pass', name: 'Immerfrost Pass', canRest: false },
      { id: 'mist_gorge', name: 'Nebelklamm', canRest: false },
      { id: 'stone_warden', name: 'Steinerner Wächter', canRest: false },
      { id: 'grey_peak', name: 'Grauer Gipfel', canRest: false },
      { id: 'thunder_head', name: 'Donnerkopf', canRest: false },
      { id: 'narrow_passage', name: 'Enger Durchlass', canRest: false },
      { id: 'echo_canyon', name: 'Echo-Schlucht', canRest: false },
      { id: 'wind_gap', name: 'Windscharte', canRest: false },
    ],

    red: [
      { id: 'urogghul_gorge', name: "Schlucht von Urog'ghul", canRest: false },
      { id: 'slaughter_stone', name: 'Schlächterstein', canRest: false },
      { id: 'bloodfang_ridge', name: 'Blutzahn-Grat', canRest: false },
      { id: 'black_maw', name: 'Schwarzer Schlund', canRest: false },
      { id: 'bone_ridge', name: 'Knochengrat', canRest: false },
      { id: 'doom_peak', name: 'Verhängnisgipfel', canRest: false },
      { id: 'wailing_heights', name: 'Klagende Höhen', canRest: false },
      { id: 'giants_grave', name: 'Riesengrab', canRest: false },
    ],

    treasure: [
      { id: 'dragon_throne', name: 'Drachenthron', canRest: false },
      { id: 'dwarven_gates', name: 'Tore von Khaz-Morak', canRest: false },
      { id: 'sky_temple', name: 'Himmelstempel', canRest: false },
      { id: 'crystal_heart', name: 'Kristallherz', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // SWAMP - Sumpf
  // ═══════════════════════════════════════════════════════════════════════════
  swamp: {
    id: 'swamp',
    name: 'Sumpf',
    icon: 'fa-water',
    description: 'Modrige Sümpfe, dunkle Moore und nebelverhangene Gewässer',

    green: [
      { id: 'still_water', name: 'Stilles Wasser', canRest: true },
      { id: 'willow_light', name: 'Weidenlicht', canRest: true },
      { id: 'moss_island', name: 'Moosige Insel', canRest: true },
      { id: 'dry_hillock', name: 'Trockener Hügel', canRest: true },
      { id: 'reed_haven', name: 'Schilfhafen', canRest: true },
      { id: 'firefly_banks', name: 'Glühwürmchen-Ufer', canRest: true },
      { id: 'old_pier', name: 'Alter Steg', canRest: true },
      { id: 'frog_song', name: 'Froschgesang', canRest: true },
    ],

    yellow: [
      { id: 'mist_moor', name: 'Nebelmoor', canRest: false },
      { id: 'reed_sea', name: 'Schilfmeer', canRest: false },
      { id: 'rot_passage', name: 'Modrige Passage', canRest: false },
      { id: 'sunken_path', name: 'Versunkener Pfad', canRest: false },
      { id: 'grey_waters', name: 'Graue Wasser', canRest: false },
      { id: 'dead_trees', name: 'Tote Bäume', canRest: false },
      { id: 'bog_crossing', name: 'Moorübergang', canRest: false },
      { id: 'murky_deep', name: 'Trübe Tiefe', canRest: false },
    ],

    red: [
      { id: 'black_water', name: 'Schwarzwasser', canRest: false },
      { id: 'foul_ground', name: 'Faulgrund', canRest: false },
      { id: 'wisp_domain', name: 'Irrlichts Domäne', canRest: false },
      { id: 'corpse_bog', name: 'Leichenmoor', canRest: false },
      { id: 'poison_mire', name: 'Giftmorast', canRest: false },
      { id: 'drowned_hollow', name: 'Ertrunkene Senke', canRest: false },
      { id: 'hags_mirror', name: 'Hexenspiegel', canRest: false },
      { id: 'death_marsh', name: 'Todessumpf', canRest: false },
    ],

    treasure: [
      { id: 'sunken_temple', name: 'Versunkener Tempel', canRest: false },
      { id: 'witch_throne', name: 'Hexenthron', canRest: false },
      { id: 'drowned_city', name: 'Ertrunkene Stadt', canRest: false },
      { id: 'serpent_shrine', name: 'Schlangenschrein', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // COAST - Küste
  // ═══════════════════════════════════════════════════════════════════════════
  coast: {
    id: 'coast',
    name: 'Küste',
    icon: 'fa-water',
    description: 'Strände, Klippen, Häfen und das offene Meer',

    green: [
      { id: 'sunny_bay', name: 'Sonnige Bucht', canRest: true },
      { id: 'pearl_coast', name: 'Perlenküste', canRest: true },
      { id: 'wind_harbor', name: 'Windhafen', canRest: true },
      { id: 'shell_beach', name: 'Muschelstrand', canRest: true },
      { id: 'lighthouse_point', name: 'Leuchtturmspitze', canRest: true },
      { id: 'sailors_rest', name: 'Seemannsruh', canRest: true },
      { id: 'calm_waters', name: 'Ruhige Wasser', canRest: true },
      { id: 'tide_pools', name: 'Gezeitentümpel', canRest: true },
    ],

    yellow: [
      { id: 'rocky_shore', name: 'Felsige Gestade', canRest: false },
      { id: 'mist_cliffs', name: 'Nebelklippen', canRest: false },
      { id: 'surf_path', name: 'Brandungssteig', canRest: false },
      { id: 'driftwood_strand', name: 'Treibholzstrand', canRest: false },
      { id: 'sea_caves', name: 'Meereshöhlen', canRest: false },
      { id: 'kelp_forest', name: 'Tangwald', canRest: false },
      { id: 'storm_break', name: 'Sturmbrecher', canRest: false },
      { id: 'old_wreck', name: 'Altes Wrack', canRest: false },
    ],

    red: [
      { id: 'siren_rock', name: 'Sirenenfels', canRest: false },
      { id: 'black_tides', name: 'Schwarze Gezeiten', canRest: false },
      { id: 'bone_reef', name: 'Knochenriff', canRest: false },
      { id: 'drowners_deep', name: 'Ertrinkertiefen', canRest: false },
      { id: 'ghost_light', name: 'Geisterlicht', canRest: false },
      { id: 'kraken_shallows', name: 'Kraken-Untiefen', canRest: false },
      { id: 'widows_point', name: 'Witwenspitze', canRest: false },
      { id: 'blood_tide', name: 'Blutflut', canRest: false },
    ],

    treasure: [
      { id: 'pirate_hoard', name: 'Piratenhort', canRest: false },
      { id: 'sea_kings_tomb', name: 'Grab des Seekönigs', canRest: false },
      { id: 'sunken_palace', name: 'Versunkener Palast', canRest: false },
      { id: 'storm_god_shrine', name: 'Sturmgott-Schrein', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // UNDERGROUND - Untergrund
  // ═══════════════════════════════════════════════════════════════════════════
  underground: {
    id: 'underground',
    name: 'Untergrund',
    icon: 'fa-dungeon',
    description: 'Tiefe Höhlen, vergessene Minen und die Dunkelheit unter der Erde',

    green: [
      { id: 'crystal_hall', name: 'Kristallhalle', canRest: true },
      { id: 'quiet_grotto', name: 'Stille Grotte', canRest: true },
      { id: 'mushroom_light', name: 'Pilzlicht-Kaverne', canRest: true },
      { id: 'underground_lake', name: 'Unterirdischer See', canRest: true },
      { id: 'safe_haven', name: 'Sicherer Hafen', canRest: true },
      { id: 'glowing_cavern', name: 'Leuchtende Höhle', canRest: true },
      { id: 'echo_chamber', name: 'Echokammer', canRest: true },
      { id: 'still_waters', name: 'Stille Wasser', canRest: true },
    ],

    yellow: [
      { id: 'deep_passage', name: 'Tiefe Passage', canRest: false },
      { id: 'echo_tunnel', name: 'Echo-Tunnel', canRest: false },
      { id: 'dark_road', name: 'Finsterweg', canRest: false },
      { id: 'dripping_caves', name: 'Tropfende Höhlen', canRest: false },
      { id: 'narrow_squeeze', name: 'Enger Durchschlupf', canRest: false },
      { id: 'fungal_forest', name: 'Pilzwald', canRest: false },
      { id: 'old_mine', name: 'Alte Mine', canRest: false },
      { id: 'underground_river', name: 'Unterirdischer Fluss', canRest: false },
    ],

    red: [
      { id: 'black_deep', name: 'Schwarze Tiefe', canRest: false },
      { id: 'forgotten_halls', name: 'Vergessene Hallen', canRest: false },
      { id: 'bone_gorge', name: 'Knochenschlucht', canRest: false },
      { id: 'spider_nest', name: 'Spinnennest', canRest: false },
      { id: 'endless_dark', name: 'Endlose Finsternis', canRest: false },
      { id: 'screaming_caves', name: 'Schreiende Höhlen', canRest: false },
      { id: 'death_drop', name: 'Todessturz', canRest: false },
      { id: 'hungering_dark', name: 'Hungernde Dunkelheit', canRest: false },
    ],

    treasure: [
      { id: 'lost_city', name: 'Verlorene Stadt', canRest: false },
      { id: 'gem_vault', name: 'Edelsteingewölbe', canRest: false },
      { id: 'dragon_tomb', name: 'Drachengrab', canRest: false },
      { id: 'primordial_forge', name: 'Urzeitschmiede', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // VOLCANIC - Vulkanland
  // ═══════════════════════════════════════════════════════════════════════════
  volcanic: {
    id: 'volcanic',
    name: 'Vulkanland',
    icon: 'fa-fire',
    description: 'Lavafelder, heiße Quellen und rauchende Berge',

    green: [
      { id: 'hot_springs_ashtara', name: 'Warme Quellen von Ashtara', canRest: true },
      { id: 'obsidian_terrace', name: 'Obsidian-Terrasse', canRest: true },
      { id: 'cooled_fields', name: 'Erkaltete Felder', canRest: true },
      { id: 'ember_rest', name: 'Glutrast', canRest: true },
      { id: 'smoke_haven', name: 'Rauchhafen', canRest: true },
      { id: 'fire_temple', name: 'Feuertempel', canRest: true },
      { id: 'warm_stones', name: 'Warme Steine', canRest: true },
      { id: 'ash_garden', name: 'Aschegarten', canRest: true },
    ],

    yellow: [
      { id: 'smoking_path', name: 'Rauchender Pfad', canRest: false },
      { id: 'ash_trench', name: 'Aschegraben', canRest: false },
      { id: 'ember_wind_valley', name: 'Glutwind-Tal', canRest: false },
      { id: 'sulfur_vents', name: 'Schwefeldüsen', canRest: false },
      { id: 'lava_tubes', name: 'Lavaröhren', canRest: false },
      { id: 'geyser_field', name: 'Geysirfeld', canRest: false },
      { id: 'pumice_ridge', name: 'Bimssteingrat', canRest: false },
      { id: 'volcanic_glass', name: 'Vulkanglas', canRest: false },
    ],

    red: [
      { id: 'fire_maw', name: 'Feuerschlund', canRest: false },
      { id: 'hells_gate', name: 'Höllenpforte', canRest: false },
      { id: 'burning_ridge', name: 'Brennender Grat', canRest: false },
      { id: 'magma_flow', name: 'Magmastrom', canRest: false },
      { id: 'cinderstorm', name: 'Aschensturm', canRest: false },
      { id: 'scorched_pit', name: 'Versengte Grube', canRest: false },
      { id: 'flame_heart', name: 'Flammenherz', canRest: false },
      { id: 'pyroclastic_field', name: 'Pyroklastisches Feld', canRest: false },
    ],

    treasure: [
      { id: 'ancient_forge', name: 'Uralte Schmiede', canRest: false },
      { id: 'fire_god_throne', name: 'Thron des Feuergottes', canRest: false },
      { id: 'dragon_forge', name: 'Drachenschmiede', canRest: false },
      { id: 'elemental_rift', name: 'Elementarriss', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DESERT - Wüste
  // ═══════════════════════════════════════════════════════════════════════════
  desert: {
    id: 'desert',
    name: 'Wüste',
    icon: 'fa-sun',
    description: 'Endlose Sanddünen, verborgene Oasen und antike Ruinen',

    green: [
      { id: 'thousand_palms', name: 'Oase der tausend Palmen', canRest: true },
      { id: 'starlight_rest', name: 'Sternenruhe', canRest: true },
      { id: 'shadow_canyon', name: 'Schattencanyon', canRest: true },
      { id: 'well_of_life', name: 'Brunnen des Lebens', canRest: true },
      { id: 'date_grove', name: 'Dattelhain', canRest: true },
      { id: 'cool_caves', name: 'Kühle Höhlen', canRest: true },
      { id: 'caravan_rest', name: 'Karawanenrast', canRest: true },
      { id: 'moon_dunes', name: 'Monddünen', canRest: true },
    ],

    yellow: [
      { id: 'dune_sea', name: 'Dünenmeer', canRest: false },
      { id: 'mirage', name: 'Fata Morgana', canRest: false },
      { id: 'salt_flat', name: 'Salzebene', canRest: false },
      { id: 'wind_carved', name: 'Windgeschliffen', canRest: false },
      { id: 'ancient_road', name: 'Alte Straße', canRest: false },
      { id: 'stone_desert', name: 'Steinwüste', canRest: false },
      { id: 'red_sands', name: 'Roter Sand', canRest: false },
      { id: 'mesa_heights', name: 'Mesa-Höhen', canRest: false },
    ],

    red: [
      { id: 'bone_sand', name: 'Knochensand', canRest: false },
      { id: 'death_watch', name: 'Totenwacht', canRest: false },
      { id: 'withered_waste', name: 'Verdorrte Weite', canRest: false },
      { id: 'scorpion_dunes', name: 'Skorpiondünen', canRest: false },
      { id: 'sandstorm_valley', name: 'Sandsturmtal', canRest: false },
      { id: 'cursed_ruins', name: 'Verfluchte Ruinen', canRest: false },
      { id: 'bleached_bones', name: 'Gebleichte Knochen', canRest: false },
      { id: 'burning_expanse', name: 'Brennende Weite', canRest: false },
    ],

    treasure: [
      { id: 'pharaohs_tomb', name: 'Pharaonengrab', canRest: false },
      { id: 'lost_city_sands', name: 'Verlorene Stadt im Sand', canRest: false },
      { id: 'djinn_palace', name: 'Djinn-Palast', canRest: false },
      { id: 'sun_god_temple', name: 'Sonnengott-Tempel', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // MAGICAL - Magische Lande
  // ═══════════════════════════════════════════════════════════════════════════
  magical: {
    id: 'magical',
    name: 'Magische Lande',
    icon: 'fa-wand-sparkles',
    description: 'Feywild-ähnliche Gefilde, verzauberte Wälder und surreale Landschaften',

    green: [
      { id: 'dreamlight_garden', name: 'Traumlicht-Garten', canRest: true },
      { id: 'stardew_spring', name: 'Sternentau-Quelle', canRest: true },
      { id: 'eternal_spring', name: 'Ewiger Frühling', canRest: true },
      { id: 'unicorn_glade', name: 'Einhorn-Lichtung', canRest: true },
      { id: 'crystal_garden', name: 'Kristallgarten', canRest: true },
      { id: 'rainbow_bridge', name: 'Regenbogenbrücke', canRest: true },
      { id: 'moonwell', name: 'Mondquelle', canRest: true },
      { id: 'fey_court', name: 'Feenhof', canRest: true },
    ],

    yellow: [
      { id: 'shifting_paths', name: 'Wandelnde Pfade', canRest: false },
      { id: 'mirror_water', name: 'Spiegelwasser', canRest: false },
      { id: 'shimmer_border', name: 'Schimmernde Grenze', canRest: false },
      { id: 'time_ripple', name: 'Zeitwellen', canRest: false },
      { id: 'singing_forest', name: 'Singender Wald', canRest: false },
      { id: 'floating_stones', name: 'Schwebende Steine', canRest: false },
      { id: 'color_cascade', name: 'Farbkaskade', canRest: false },
      { id: 'echo_realm', name: 'Echo-Reich', canRest: false },
    ],

    red: [
      { id: 'nightmare_hollow', name: 'Albtraumsenke', canRest: false },
      { id: 'dark_shimmer', name: 'Dunkelschimmer', canRest: false },
      { id: 'broken_sphere', name: 'Zerbrochene Sphäre', canRest: false },
      { id: 'wild_magic_zone', name: 'Wilde-Magie-Zone', canRest: false },
      { id: 'unseelie_shadow', name: 'Unseelie-Schatten', canRest: false },
      { id: 'corrupted_well', name: 'Korrumpierte Quelle', canRest: false },
      { id: 'madness_maze', name: 'Wahnsinnslabyrinth', canRest: false },
      { id: 'twisted_grove', name: 'Verdrehter Hain', canRest: false },
    ],

    treasure: [
      { id: 'archfey_palace', name: 'Archfey-Palast', canRest: false },
      { id: 'wishing_well', name: 'Wunschbrunnen', canRest: false },
      { id: 'heart_of_magic', name: 'Herz der Magie', canRest: false },
      { id: 'eternal_library', name: 'Ewige Bibliothek', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // TUNDRA - Eislandschaft
  // ═══════════════════════════════════════════════════════════════════════════
  tundra: {
    id: 'tundra',
    name: 'Eislandschaft',
    icon: 'fa-snowflake',
    description: 'Gefrorene Weiten, Gletscher und ewiges Eis',

    green: [
      { id: 'northern_lights', name: 'Nordlicht-Rast', canRest: true },
      { id: 'warm_caves', name: 'Warme Höhlen', canRest: true },
      { id: 'quiet_snow', name: 'Stiller Schnee', canRest: true },
      { id: 'aurora_view', name: 'Aurora-Aussicht', canRest: true },
      { id: 'ice_fishing_camp', name: 'Eisfischer-Lager', canRest: true },
      { id: 'mammoth_rest', name: 'Mammutrast', canRest: true },
      { id: 'snow_owl_watch', name: 'Schneeeulenwacht', canRest: true },
      { id: 'frost_haven', name: 'Frosthafen', canRest: true },
    ],

    yellow: [
      { id: 'ice_field', name: 'Eisfeld', canRest: false },
      { id: 'glacier_path', name: 'Gletscherpfad', canRest: false },
      { id: 'frozen_expanse', name: 'Gefrorene Weite', canRest: false },
      { id: 'snow_drifts', name: 'Schneeverwehungen', canRest: false },
      { id: 'frozen_lake', name: 'Gefrorener See', canRest: false },
      { id: 'wind_carved_ice', name: 'Winderodiertes Eis', canRest: false },
      { id: 'permafrost', name: 'Permafrost', canRest: false },
      { id: 'silent_tundra', name: 'Stille Tundra', canRest: false },
    ],

    red: [
      { id: 'white_death', name: 'Weißer Tod', canRest: false },
      { id: 'eternal_ice', name: 'Ewiges Eis', canRest: false },
      { id: 'frost_grave', name: 'Frostgrab', canRest: false },
      { id: 'blizzard_pass', name: 'Schneesturm-Pass', canRest: false },
      { id: 'crevasse_field', name: 'Spaltenfeld', canRest: false },
      { id: 'frozen_dead', name: 'Gefrorene Tote', canRest: false },
      { id: 'howling_waste', name: 'Heulende Öde', canRest: false },
      { id: 'ice_tomb', name: 'Eisgruft', canRest: false },
    ],

    treasure: [
      { id: 'ice_palace', name: 'Eispalast', canRest: false },
      { id: 'frozen_vault', name: 'Gefrorenes Gewölbe', canRest: false },
      { id: 'ancient_glacier', name: 'Uralter Gletscher', canRest: false },
      { id: 'winter_god_shrine', name: 'Wintergott-Schrein', canRest: false },
    ],
  },

  // ═══════════════════════════════════════════════════════════════════════════
  // DEADLANDS - Totes Land
  // ═══════════════════════════════════════════════════════════════════════════
  deadlands: {
    id: 'deadlands',
    name: 'Totes Land',
    icon: 'fa-skull',
    description: 'Verwüstete Gebiete, untote Horden und korrumpierte Erde',

    green: [
      { id: 'last_hope', name: 'Letzte Hoffnung', canRest: true },
      { id: 'hallowed_ground', name: 'Geweihter Grund', canRest: true },
      { id: 'light_fortress', name: 'Lichtfestung', canRest: true },
      { id: 'survivor_camp', name: 'Überlebenden-Lager', canRest: true },
      { id: 'holy_sanctuary', name: 'Heiliges Refugium', canRest: true },
      { id: 'cleansed_earth', name: 'Geläuterte Erde', canRest: true },
      { id: 'hope_shrine', name: 'Schrein der Hoffnung', canRest: true },
      { id: 'life_spring', name: 'Lebensquelle', canRest: true },
    ],

    yellow: [
      { id: 'grey_waste', name: 'Graue Öde', canRest: false },
      { id: 'ash_fields', name: 'Aschefelder', canRest: false },
      { id: 'silent_ruins', name: 'Stille Ruinen', canRest: false },
      { id: 'withered_land', name: 'Verdorrtes Land', canRest: false },
      { id: 'bone_yard', name: 'Knochenhof', canRest: false },
      { id: 'blighted_heath', name: 'Verseuchte Heide', canRest: false },
      { id: 'forgotten_village', name: 'Vergessenes Dorf', canRest: false },
      { id: 'empty_roads', name: 'Leere Straßen', canRest: false },
    ],

    red: [
      { id: 'bone_sea', name: 'Knochenmeer', canRest: false },
      { id: 'black_crypt', name: 'Schwarze Gruft', canRest: false },
      { id: 'sigh_valley', name: 'Seufzertal', canRest: false },
      { id: 'death_domain', name: 'Todesdomäne', canRest: false },
      { id: 'wailing_fields', name: 'Klagende Felder', canRest: false },
      { id: 'corpse_hill', name: 'Leichenhügel', canRest: false },
      { id: 'shadow_vale', name: 'Schattental', canRest: false },
      { id: 'necropolis_gate', name: 'Tor zur Nekropole', canRest: false },
    ],

    treasure: [
      { id: 'ancient_crypt', name: 'Uralte Krypta', canRest: false },
      { id: 'lich_throne', name: 'Lichthron', canRest: false },
      { id: 'death_god_temple', name: 'Todesgott-Tempel', canRest: false },
      { id: 'soul_vault', name: 'Seelengewölbe', canRest: false },
    ],
  },
};

/**
 * Encounter-Pools nach Orts-Kategorie
 *
 * Diese definieren, welche Encounter-Typen an welchen Orten vorkommen können.
 */
export const LOCATION_ENCOUNTER_POOLS = {
  // 🟢 Grüne Orte - Sichere/Social Encounters
  green: [
    'A Chance Meeting',
    'Needing Assistance',
    'Fateful Encounter',   // Mysteriöser Fremder mit Quest (sicher!)
    'A Place to Rest',
    'A Bump in the Road',
    'Natural Wonders',
  ],

  // 🟡 Gelbe Orte - Alle Standard-Encounters möglich
  yellow: [
    'A Chance Meeting',
    'Needing Assistance',
    'Fateful Encounter',
    'A Place to Rest',
    'A Bump in the Road',
    'Natural Wonders',
    'Danger Afoot',
    'Monster Hunt',
    'Deadly Fight',
    // NOTE: 'A Dark Place' REMOVED - too passive, redundant with Deadly Fight
    'Hidden Reserves',
    'Old Memories',
  ],

  // 🔴 Rote Orte - Gefährliche Encounters
  red: [
    'Deadly Fight',
    'Monster Hunt',
    // NOTE: 'A Dark Place' REMOVED - too passive
    'Danger Afoot',
    'A Bump in the Road',  // ⚠️ Echtes Hazard auch bei roten Orten!
    'Hidden Reserves',    // Glückstreffer!
    'Old Memories',       // Gefährliche Ruinen mit Research-System
  ],

  // 💎 Schatz-Orte - Spezielle Belohnungs-Encounters
  treasure: [
    'Dungeon',           // Großartige Beute
    'Monster Hunt',      // Mit verbesserter Beute
    'Hidden Reserves',   // Schatz ohne Kampf
    'Lost Knowledge',    // Wissens-Schatz
  ],
};

/**
 * Hilfsfunktion: Zufällige Location aus einem Biom und einer Kategorie
 *
 * @param {string} biomeId - Die Biom-ID (z.B. 'forest')
 * @param {string} category - Die Kategorie ('green', 'yellow', 'red', 'treasure')
 * @returns {Object|null} Eine zufällige Location oder null
 */
export function getRandomLocation(biomeId, category) {
  const biome = BIOME_LOCATIONS[biomeId];
  if (!biome) return null;

  // Versuche dynamisch generierten Namen (außer für treasure)
  if (category !== 'treasure') {
    const generatedName = generateLocationName(biomeId, category);
    if (generatedName) {
      // Generiere eine einzigartige ID
      const id = `generated_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
      return {
        id,
        name: generatedName,
        canRest: category === 'green', // Nur grüne Orte erlauben Rast
        type: category,
        generated: true // Markiere als generiert
      };
    }
  }

  // Fallback: Statische Liste (für treasure oder wenn Generator fehlschlägt)
  const locations = biome[category];
  if (!locations || locations.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * locations.length);
  return { ...locations[randomIndex], type: category };
}

/**
 * Hilfsfunktion: Zufälliger Encounter-Typ für eine Kategorie
 *
 * @param {string} category - Die Kategorie ('green', 'yellow', 'red', 'treasure')
 * @returns {string|null} Ein zufälliger Encounter-Typ oder null
 */
export function getRandomEncounterType(category) {
  const pool = LOCATION_ENCOUNTER_POOLS[category];
  if (!pool || pool.length === 0) return null;

  const randomIndex = Math.floor(Math.random() * pool.length);
  return pool[randomIndex];
}

/**
 * Hilfsfunktion: Alle Biome als Array für Dropdown-Auswahl
 *
 * @returns {Array} Array von {id, name, icon, description}
 */
export function getBiomeList() {
  return Object.values(BIOME_LOCATIONS).map(biome => ({
    id: biome.id,
    name: biome.name,
    icon: biome.icon,
    description: biome.description,
  }));
}
