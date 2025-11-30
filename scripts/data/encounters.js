/**
 * Encounter data for Uncharted Journeys
 * Auto-generated from 5e_Uncharted_Journeys_231025.txt
 *
 * Structure:
 * ENCOUNTERS[region][encounterType][0-9] = { roll, title, description }
 */

export const REGIONS = [
  "Coasts",
  "Deserts",
  "Farmlands",
  "Forests",
  "Frontiers",
  "Grasslands",
  "Great Cities",
  "Haunted Lands",
  "Hellscapes",
  "Jungles",
  "Lands of the Fae",
  "Mountains",
  "Open Waters",
  "Orfnir",
  "Underground",
  "War Torn Lands",
  "Wild Magic Lands"
];

export const ENCOUNTER_TYPES = [
  "A Chance Meeting",
  "Hidden Reserves",
  "A Bump in the Road",
  "Needing Assistance",
  "Danger Afoot",
  "Natural Wonders",
  "Monster Hunt",
  "A Place to Rest",
  "Old Memories",
  "A Dark Place",
  "Deadly Fight",
  "Fateful Encounter"
];

export const ENCOUNTERS = {
  "Coasts": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "the waves",
        "description": "He was once a sailor, but old age has beached him here. Still, he has a wealth of knowledge about the sea in general and the local goings-on, and is happy to share them in exchange for a drink and some company. The Catch: A fisherman stands along the beach reel fishing. Her bucket is overflowing and, it"
      },
      {
        "roll": 2,
        "title": "being a good day, she offers some of her catch in trade to the passing party",
        "description": "She is friendly and personable, with a raw sense of humour, but she warns the party that the Sahuagin sometimes hunt on this beach. Fishing Trouble: A child sits by the water, sobbing. Her attempts at fishing have resulted in"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "broken fishing gear, and she is both mad at herself and the trouble she may get into at home. A Wisdom (Survival) check repairs the gear and gains the fixer a new friend, one that may have a well-placed parent or guardian. Bottle Shock. A weathered old bottle is stuck in the sand just beyond the crashing waves."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Inside, on strange yellowed parchment, is a dire warning about a horror that hasn’t happened yet, except that the event must have happened years, if not decades ago. Did this bottle travel back in time? Seasoning Salt: An older woman sits by the seashore singing to herself while shaking a massive"
      },
      {
        "roll": 5,
        "title": "pan over a fire",
        "description": "Inside the pan is seawater slowly simmering down into salt, which the woman is happy to barter for coin, trade, or interesting news. She grins a toothless smile and her songs speak of long lost creatures and ancient lands. On the Rocks: Glowing lights emanate from the hull of a ship split open upon a reef. Songs"
      },
      {
        "roll": 6,
        "title": "ring out from deep within the wreck, echoing through the rock formations",
        "description": "Further inspection reveals planks have been laid from the hull to shore. Carousers come and go from the makeshift tavern arm in arm, swaying with the waves. Sea Mail: Treading along the edge of a cliff, a postman staggers into view, completely drenched"
      },
      {
        "roll": 7,
        "title": "after a freak wave crested the cliff face",
        "description": "He laments his sodden letters and parcels, having believed a coastal walk would be a pleasant journey. Despite his disappointment in his performance, he delivers his postal guild motto with gusto, oblivious to the seaweed stuck in his cap. Ships in the Night: A boat sails along steep cliffs, unable to find a suitable dock. The party looks"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "down at them, noticing that they are oddly familiar… Each crew member is dressed exactly like one of the party, and their facial features are markedly similar, though not identical. They are just as surprised as the party at this resemblance. Easy Pickings: A flock of gulls can be seen swooping down at a Dwarven man, appearing"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "to attack him while he remains unfazed, casually bending down to collect handfuls of eggs. Watching further, the gulls never actually reach the man, repelled by an invisible force. If the party inquires, he simply taps the Amulet of Shield around his neck and offers them an egg. Reverse Fishing: Erupting from the waves, a whole school of fish beach themselves, followed"
      },
      {
        "roll": 10,
        "title": "by a group of Merfolk rising from the sea with baskets under arm",
        "description": "They begin collecting the flapping fish from the sands and are grateful for any help the party provides, letting them keep a few fish before returning to the waves. ENCOUANNTCERIESN: TC ORAUSINTS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "actually crumbled to dust, rotted away, or been otherwise ruined by years of briny weathering and corrosion, but a thorough search might uncover something preserved well enough to still be useful. Seaweed Bonanza: The party comes upon large clumps of seaweed deposited at the edge of the"
      },
      {
        "roll": 2,
        "title": "surf, a valuable food source when prepared properly",
        "description": "An Intelligence (Nature) check reveals that the copper-coloured seaweed lacing some of the clumps has special healing properties. Unburied Treasure: A recent tempest has pushed seawater further inland, pulling away"
      },
      {
        "roll": 3,
        "title": "undisturbed sand",
        "description": "The receding waters reveal the top of an old chest that has all the markings of a famous sea pirate treasure. Inside are strange coins, warm clothes, and a pristine weapon or two. The party better hope they don’t meet the pirates while wearing their haul. Seafood for Dinner: A Giant Crab, large even amongst its own, rests in the surf. A Wisdom"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "(Survival) check reveals that it has only recently died and its flesh is still edible. While this grants the party a filling feast, its three missing legs means that there’s an even more dangerous predator about. Cauldron Cove: An unholy stench fills the air, emanating from floating barrels full of fish soaking in lye. Beyond the barrels, crates full of croaking frogs drift attached to ropes. Following"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "the rope leads to a hidden cave filled with mildewed cauldrons, dried octopi, a dozen shattered mirrors, and a slime covered spellbook written in Aquan. It is only a matter of time before the Sea Hag returns home. Lost Provisions: The sun shines on receding water, exposing several sunken chests tied together with rope. Recovering them reveals they are all branded with the same sigil. Inside"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "the chests are assorted ancient weapons, a dozen watertight pouches of long-spoiled grain, and several bottles of assorted poisons. An Intelligence (History) check discerns these were stashed for one party in an ancient war and never retrieved. Succubus Sea Spa: A pleasant fragrance wafts out of a sea cave, where the party finds a"
      },
      {
        "roll": 7,
        "title": "seaside spa run by a Succubus and Incubus",
        "description": "The friendly fiends offer a seaweed bath and sea salt exfoliation treatment to those comfortable enough to relax and indulge in this odd, yet enjoyable break on their journey. Microbiome: Rockpools brim with life along the rocky outcrops of the coasts, with a"
      },
      {
        "roll": 8,
        "title": "colourful array of creatures coexisting in such small spaces",
        "description": "Putting aside the beauty of life, the Quartermaster can capture and cook these helpless critters to make a delicious seaside smorgasbord from the crustaceans and shellfish."
      },
      {
        "roll": 9,
        "title": "Floating Arms",
        "description": "A shipwreck’s armoury has been broken into and several floating barrels of harpoons, fishing spears and nets are readily accessible, if you can brave the currents. Catch of the Day: A set of lobster traps have been effective at catching their prey. Floating"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "buoys mark their locations in the water below, and can be reeled in for additional food supplies. After collecting the crustaceans, a sigil is noticed on the traps, indicating they were set by a well known pirate crew. They won’t be pleased to see their catch stolen. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "(treat as Swarms of Insects)",
        "description": "Walking through them risks combat and the space they cover is considered difficult terrain. A path through them can be carved with a Wisdom (Animal Handling) check, or a Strength (Athletics) check to scale the cliffs. Do Not Disturb: A Dragon Turtle has come ashore and is peacefully sleeping on the beach."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "If aroused, it hungrily snaps at the party for a quick meal before returning into the deep. The Outrider must make a Dexterity (Stealth) check (with advantage) to avoid waking this dragon from its slumber. High Tide: The party approaches a section of beach where high cliffs lay between the sand and"
      },
      {
        "roll": 3,
        "title": "the rising water",
        "description": "A Strength or Constitution (Athletics) check by the Outrider is needed to endure the difficult climb to the safety of the cliff tops. Sticky Fingers: A grassy marsh lies in the party’s path, but these aren’t regular reeds. They are"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "carnivorous flora, hunting tiny fish and while harmless to larger animals, they tend to wrap around the legs of waders. This not only makes the path difficult terrain to move through, but requires a Strength (Athletics) check to escape their grasp and carve a path to surer footing. Siren Song: A half dozen sirens (use the Harpy entry) lounge on the rocks overlooking the"
      },
      {
        "roll": 5,
        "title": "waves, styling each other’s hair and singing to themselves",
        "description": "They have yet to notice the party, but could at any moment. Avoiding them requires going a different way or sneaking by via a Dexterity (Stealth) check, in addition to a Wisdom saving throw to resist their song. Coastal Corrosion: After an unavoidable trudge through brackish water, any character wearing metal armour notices Tiny Rust Monsters nibbling through their armour. If the"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "Outrider fails on a Dexterity (Sleight of Hand) check to pick them off, the armour takes a permanent -1 penalty to the AC it offers. Any water waded through from now on must be thoroughly inspected for pests. Rustling Feathers: Setting up for a beachside lunch, the party is beset by hungry seagulls who swoop and dive at any exposed food, squawking and flapping, causing a huge ruckus."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "A Wisdom (Animal Handling) check can appease the gulls or make them fight amongst themselves for scraps of food, or a Strength (Athletics) check can outrun the bothersome birds before they snag any of the party's supplies. Misjudged Mistake: Crossing a sandbank at low tide, the Outrider immediately notices their untimely error. The tide is rising, closing off the walkway when submerged, and there is no"
      },
      {
        "roll": 8,
        "title": "time to retreat",
        "description": "A Bronze Dragon Wyrmling laughs hysterically at the party, amused at their mistake. A successful Charisma (Persuasion) check can convince it to carry each member to the beach, saving them a soggy trudge through the water. Quick Sinking: As a river flows into the sea, it slows down and spreads its sediment, creating"
      },
      {
        "roll": 9,
        "title": "a marshy wetland delta",
        "description": "The terrain slows the party down, and the Outrider must make a Constitution (Athletics) check to trudge through the sand and find the best route. Unstable Earth: The bluffs and cliffs that the party are walking along have been severely"
      },
      {
        "roll": 10,
        "title": "undercut by the sea eroding the rocks beneath them",
        "description": "Sections of the rock are giving way, creating sudden pits into the sea. A Dexterity (Stealth) check is needed to avoid triggering any more rock falls. ENCOUANNTCERIESN: TC ORAUSINTS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "massive tentacle rises from the water behind him",
        "description": "If they choose to assist, then the party must make a group Strength (Athletics) check to reach him in time and engage the Giant Octopus, otherwise the man is drowned before their eyes! Hunters and Hunted: A galley rows offshore, with some of the crew throwing tethered"
      },
      {
        "roll": 2,
        "title": "harpoons into the water",
        "description": "A group Wisdom (Perception) check enables the party to realise that the crew is not hunting a marine animal, but rather one of the Merfolk. To save the swimming creature, the party needs to get the crew’s attention. Strange Prey: What looks like a Dwarf is stuck in a net, bobbing up and down in the ocean. A Wisdom (Perception) check reveals it is not a drowning Dwarf, but an undersea creature"
      },
      {
        "roll": 3,
        "title": "trapped in a net camouflaged as seaweed",
        "description": "It can be untangled and freed with a group Dexterity (Sleight of Hand) check. Unfortunately, the trappers aren’t far behind, and they won’t take kindly to those who free their catch. Lost at Sea: The party is flagged down by a crew coming ashore from a strange looking ship"
      },
      {
        "roll": 4,
        "title": "in the distance",
        "description": "It takes a Charisma (Persuasion) check with disadvantage to communicate with them; they are from an unknown land beyond the horizon. They offer interesting trinkets and perhaps new arms, armour, and magic to anyone willing to help them meet local leaders. Voiceless Vagabond: A young woman stumbles across the shore, attempting to flag down the party. Though she cannot speak, she communicates through gestures that she is lost and"
      },
      {
        "roll": 5,
        "title": "deeply confused",
        "description": "Characters who do not speak sign language can communicate with her via a Charisma (Persuasion) check. She looks at the open water with longing and is fearful of any magic used in her presence. She implies her family will pay heartily for her return. Fugue for Freeriders: A group of young Commoners approach and inform the party of nearby Giant Seahorse racing set up by a greedy Noble. The youths are eager to free the seahorses"
      },
      {
        "roll": 6,
        "title": "and return them to the water",
        "description": "A group Wisdom (Animal Handling) check accomplishes this, though a Charisma (Deception) check allows them to hoodwink the idealists long enough to place bets instead. Fishy Business: The sounds of people in trouble seem to be echoing from somewhere in the cliffs. A Wisdom (Perception) check leads the group to discover the crew of a small boat"
      },
      {
        "roll": 7,
        "title": "trapped in a cave",
        "description": "The tide has come in, cutting off the cave entrance, with them inside. The tide keeps rising, and the crew are in danger, but a small hole leads to the cliff top. The crew are smuggling alcohol, hoping to avoid the taxes at the harbour, but even smugglers don’t deserve to drown. Tidal Comeuppance: An Elven man is buried up to his neck in the sand, shouting for help as"
      },
      {
        "roll": 8,
        "title": "the tide ascends",
        "description": "He regails an intricate sob story of the events that led him to this unfortunate position. A Strength (Athletics) check is required to dig him out, though a successful Wisdom (Insight) check reveals that his story is false, and he may be deserving of this fate. Drifting Dinghy: A small raft is found adrift in the water, an unconscious Orc lying on top of"
      },
      {
        "roll": 9,
        "title": "it",
        "description": "A Intelligence (Medicine) check can resuscitate this Orc, who has food and kit “borrowed” from a settlement upriver. She reveals that she is not in need of medical aid… she is just terribly, terribly drunk. Stranded Sailors: A life boat filled with distressed sailors has gotten completely lost. They’re"
      },
      {
        "roll": 10,
        "title": "arguing over a map, their compass lost to the depths",
        "description": "A successful Intelligence (Survival) check sets them on their way. Using Navigator’s Tools grants advantage on this check. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "They have rounded up the villagers and placed them in a fenced area on the beach, but why they’ve attacked or what they plan to do with the prisoners is a mystery. The party must make a group Dexterity (Stealth) check to avoid being seen. Mistaken Identity: The party is mistaken for pirates by a government vessel with an overzealous"
      },
      {
        "roll": 2,
        "title": "crew of Guards",
        "description": "Due to coincidence, a party member has the same distinguishing article of clothing as one of the pirates. The hunters assume that anything the party says is a lie and they demand the stolen loot back, or else. Lover’s Revenge: A young man is crying by the water. He is actually undead, upset over being"
      },
      {
        "roll": 3,
        "title": "killed by a rival",
        "description": "He mistakes the party for the hired killers that drowned him, turning hostile immediately. If he is convinced otherwise, then he asks the party to avenge his death. In return, he promises to reveal a treasure that lies not far beneath the waves. Too Good to be True: Crates bob in the waves just offshore. The outside ones offer tantalising"
      },
      {
        "roll": 4,
        "title": "labels such as ‘wine’ or ‘spice,’ but these are simply the lure",
        "description": "Peppered amongst the treasures are a family of Mimics disguised as crates, waiting to attack hapless salvagers when they are bogged down in the waves. Widow’s Walk: The party hears sobbing carried on the wind. From the remains of an ancient"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "lighthouse, a strange shimmer in the moonlight takes on a humanoid shape pacing back and forth: a Specter of someone whose love never returned from sea. Lost in their grief, they assume the party holds their love captive. Tail of a Tale: Shouting and jeers are overcome by screams and splashing in a covered grove."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "A group of Weretigers are having an initiation party for their newest “cub” by having chicken fights, playing keep away, and fetch. They do not take kindly to being spotted, and will fight to keep their secrets hidden. Shark in the Water: Half-orc hunters have hauled more than they bargained for while fishing"
      },
      {
        "roll": 7,
        "title": "for sharks to make shark fin soup",
        "description": "Capturing the prized pet of a Sahuagin warrior, the underwater troop have come ashore to fight those who would dare harm their sacred animals. Figures Skating: Ominous chanting can be heard across the misty lagoon, where the fog"
      },
      {
        "roll": 8,
        "title": "grows thicker by the minute",
        "description": "Figures spotted in the distance soon close the gap as they glide by the party: Druids taking advantage of their water walk spell to skate across the surface of the water. They do not wish to kill the party, but trespassers must still be punished. Mine! Mine! Mine!: A gull hunter hoping to stealthily snatch some eggs has drawn the ire of a"
      },
      {
        "roll": 9,
        "title": "flock of aggressive seagulls, using the stats of Blood Hawks",
        "description": "He is battered and bruised by the time the party reaches him, but his expertise with a net might come in handy while fending off these seabirds. Fool’s Gold: A pack of Goblins have been carving up a beached whale. They believe they’ve"
      },
      {
        "roll": 10,
        "title": "found ambergris, and are intent on selling it",
        "description": "In reality they have clumps of half digested krill, and they don’t appreciate being corrected, or having their payday taken away. ENCOUANNTCERIESN: TC ORAUSINTS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "beautiful and terrifying",
        "description": "To some, the open water represents unfettered freedom, exciting adventure, and lucrative opportunity. To others, the dark waves hold only terrible danger, crushing isolation, and insurmountable obstacles. Shipbreaker Shoals: A stone’s throw from the beach, a dozen shipwrecks lie half-submerged"
      },
      {
        "roll": 2,
        "title": "in the surf",
        "description": "As the tide recedes, a massive field of jagged, sun-bleached coral emerges from the water. It holds the ruined hulks aloft like an army of warriors hoisting vanquished invaders upon their calcified spears as a warning to other foolhardy mariners. The Whistle: A gorge in the cliffside near the sea plays natural music when the winds are"
      },
      {
        "roll": 3,
        "title": "just right and the tide is high enough",
        "description": "This is an event that attracts the local villagers for a ceremonial celebration. The party is invited, but these villagers seem to harbour a dark secret… Perspective Matters: For centuries, treasure hunters have waited for a Cyclops to emerge from"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "the sea, rumoured to have an eye that can grant great wealth to whoever pierces it. However, a recent storm has pulled back the waters in this inlet, revealing that the ‘cyclops’ is actually a natural formation of coral and stone shaped like a large eye. Golden Moments: The shore gleams with light as a nest of a dozen newly hatched Gold"
      },
      {
        "roll": 5,
        "title": "Dragon Wyrmlingswriggle their way into the water for the first time",
        "description": "A warm glow beneath the waves reveals their mother marking the trail for them. Does this inspire hope, greed, or terror of the future dragons and their massive parents in the depths? Rainbow Falls: A geyser of multicoloured water provides a warm respite, heat, and light. For"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "centuries, bards have spoken of the magical rainbow waters and its life-giving properties. Hidden in the spray are Sprites ensuring via heart sight that only the deserving access their sacred water. The Weight of the World: Admiring the smattering of islands on the horizon, the Leader notices one island seems to be slowly moving across the surface. The party may be unbelieving"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "of this phenomenon… until the entire island breaches the surface, attached to the back of a gargantuan Dragon Turtle. With a melancholic cry, the creature submerges entirely, creating a huge wave that smashes into the other islands. The Queen of Gems: Splashing through an estuary at low tide, the Quartermaster noticies a"
      },
      {
        "roll": 8,
        "title": "glint amidst the rocky reef",
        "description": "Further inspection reveals a living oyster, with a beautiful iridescent pearl forming within its shell. An appreciation for the oddities of nature can be gained here, though some may choose to harvest this pearl, killing the mollusc in the process. The Revealing Storm: On the morning after a terrible storm hammered the beaches, a new"
      },
      {
        "roll": 9,
        "title": "day brings a fascinating sight",
        "description": "Enough sand was torn away from the beach to reveal the bones of an as-yet-unknown creature to the party. The Outrider or other party member familiar with the wilderness may be able to make assumptions about the creature due to its bone structure. Drifting Danger: A cloud of jellyfish are drifting along underneath the surface of the water. A full spectrum of colours is visible in the rings on their heads and their trailing tentacles."
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "The swarm drifts along just beneath the surface for hours as your ship passes by, catching the different angles of sunlight through the day. The danger they would pose to anyone unfortunate enough to fall in is not lost on the party. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "of Pterosaurs live",
        "description": "Fortunately, a group Wisdom (Perception) check can spot these creatures before they try to make a meal out of the party! Burying Treasure: The party catches sight of a ship just off-shore, along with a small rowboat"
      },
      {
        "roll": 2,
        "title": "dragged up on the beach",
        "description": "A pirate band is taking the opportunity to bury treasure, and they wouldn’t be too happy to find the party observing them. It takes a group Dexterity (Stealth) check to keep from being spotted. Sudden Eight: Rumours of a territorial Giant Octopus from the depths pass between"
      },
      {
        "roll": 3,
        "title": "superstitious fisherfolk",
        "description": "Said to camouflage itself until someone gets too close, the octopus springs onto land, grappling its prey and attempting to drown it in a nearby pool before consuming it. Whoever slays the beast can sell its ink for a pretty penny. Creeping Seaweed: A seaweed variant of the Violet Fungus lays in wait for the party. It looks"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "like an ordinary patch of seaweed, but a group Wisdom (Perception) check enables the party to realise that it is slowly creeping towards them, independently of the rolling surf. If the monster is spotted, then the party can easily outpace it. Blood in the Water: Bloody chum drifts on the churning waters. In the distance, tattered"
      },
      {
        "roll": 5,
        "title": "sails and the remains of a broken raft float on red waves",
        "description": "Beneath the shoreline, a Swarm of Quippers quickly disperses as a Giant Shark begins to feed. Nestled: Rumours of a massive sea monster in a nearby bay have sailors terrified to venture"
      },
      {
        "roll": 6,
        "title": "out",
        "description": "Upon inspection, what appears to be a log floating in the distance is the neck of an ancient and sleepy Plesiosaurus. Its nest is filled with ancient debris from eggs it has nurtured and hatched over the centuries. Scrambled Rage: A Hydra has plundered a trading barge for its loot. Claiming the eggs inside"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "the barge for itself it is trying to hatch them, not knowing the eggs to be valuable art pieces. The party may notice the debris from the barge first, or the giant footprints left in the mud by the hydra. Fanged Danger: The party finds a wide trough in the mud on the banks here. The trough is"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "lined with the imprint of scales, and leads to a nesting site for a Giant Anaconda. The beast has eaten several adventurers whole, and has some impressive weapons and armour in its guts. That Damned Crab: A hermit fisherman hails the party, requesting their aid with some pest"
      },
      {
        "roll": 9,
        "title": "control",
        "description": "His boathouse has been chosen for the nest of a notoriously large, mossy crab (use the statistics of a Shambling Mound) and its fresh brood of Giant Crabs. After felling this pest, the party can retrieve its sturdy chitin, as well as a large quantity of fresh crab meat. Abyssal Hunger: A mile off the coast, a Kraken finishes devouring a pirate ship and turns its attention toward the survivors rowing to shore. Its tentacles writhe onto land, attacking"
      },
      {
        "roll": 10,
        "title": "anything within reach",
        "description": "Those rescued from the beast’s wrath will part with some of the treasure they managed to save as thanks, and tentacles severed in combat can provide an exceptional rubbery material. ENCOUANNTCERIESN: TC ORAUSINTS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "layout is designed to be moved through in all 3 dimensions",
        "description": "Inside, there are carvings of abyssal creatures, sea-dwelling folk, and a god of the deep water. Despite its ruined appearance, the temple still has the blessing of its deity upon it, and resting here restores all spent Hit Dice. Ghost Town: A shabby seaside village borders the inlet, its residents dismal and haggard."
      },
      {
        "roll": 2,
        "title": "Most houses are boarded up, abandoned, and neglected",
        "description": "Once a thriving fishing community, a disgruntled Water Elemental cursed the waters in the bay when it noticed the overfishing. Many villagers left for more prosperous locations, leaving this dwindling community to perish. Perfect Protection: A cave entrance in the cliffside is revealed only at low tide. While the"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "cave itself will be flooded, upper sections of the cave are safe enough for a party to spend the night. If the party doesn’t vacate before the tide changes, they will have to swim out of the cave, risking facing fishy foes. Old Graves: The party discovers a safe place to camp just off the shoreline, a pleasant seagrass"
      },
      {
        "roll": 4,
        "title": "meadow",
        "description": "Unfortunately, it is actually an old burial ground whose markers were lost with the shifting of the coastline. The party may find themselves cursed and under siege by Ghouls unless they can placate the dead according to some long-forgotten custom. Rained In: An abandoned fishing cottage provides adequate protection from the rain, as only"
      },
      {
        "roll": 5,
        "title": "part of the roof is caved in",
        "description": "The dozens of Rats living in the rafters welcome the company. A waterlogged journal details a mysterious plague the previous occupant was “this close” to curing by the final entry. Auntie’s House: A cheery shoreside cottage welcomes travellers in. Inside, an elderly Green"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "Hag stirring a pot of fish stew bids everyone eat heartily and rest their weary bones. In return, all she asks for is a cherished memory to keep. To Light The Way: A lighthouse shines in the distance, topped by a burning beacon with a"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "massive concave mirror that rotates, powered by the heat of the fire driving a fan. The lighthouse keeper is nowhere to be seen, and all that remains are dozens of notebooks with ‘she is coming back’ scrawled over and over in them. A warning? Or hope for the return of a long lost love? Below Deck: A capsized vessel provides immediate shelter from a heavy storm. Once beneath"
      },
      {
        "roll": 8,
        "title": "this overturned boat, the party finds it surprisingly comfortable",
        "description": "Exploring the upside down cabins, enough supplies can be scavenged to recover one Supply Die, though sheltering Giant Crabs may not be willing to share their food. Giant Shell: The corpse of a huge turtle has washed ashore. It has decayed to the point where"
      },
      {
        "roll": 9,
        "title": "only the shell and bones remain, which makes it a dry and defensible shelter",
        "description": "It was deposited during a rough storm and remains in place until a similar storm pulls it back into the sea. She Sells Sushi On The Sea Shore: A Merfolk has set up a stall on the shoreside, selling"
      },
      {
        "roll": 10,
        "title": "portions of fresh fish prepared in appetising bitesize displays",
        "description": "She invites the party to take a seat and enjoy the meals, for a fair price. The arrangements of raw fish are delicious, but some of these fish might be poisonous to landlubbers. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "It shares many similarities with Dwarven settlements, although these dwarves apparently worshipped a sea god and have incorporated many ocean motifs into their religious iconography. Much of their building material consists of coral drawn from the nearby reef. The Imprint: An ancient city has crumbled into dust, but the magic protecting it still exists."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "When the tide rises, the waters stop along an invisible barrier that once kept it from flooding the city, except where the old residents wanted it to flow. The outline of old docks are clearly visible at high tide. Tiny Village: With a crunch underfoot in tall dune grasses the party is alerted to the remnants of an ancient fae village, scaled for creatures 6 inches tall. There may be hidden messages or"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "treasures in these small buildings, but such can only be accessed by those willing to shrink. For the shrunken, however, hidden dangers lurk, as many shore creatures have made this village their home. Warrior’s Graveyard: The party comes upon the remnants of a great battle fought between two"
      },
      {
        "roll": 4,
        "title": "Storm Giant armies",
        "description": "Huge weapons and armour lie strewn about the old battlefield, rusted in the salt air. Some swords may mark heroic last stands, while helms and shields offer hints as to the armies’ identities. Merrow Grove: A massive coral spire juts out from beneath the waves. An abandoned Merrow"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "castle, decorated with mother of pearl, and sea-glass mosaics depicts valiant wars against Kraken and Sahuagin alike. In the darkest depths, Giant Sharks slumber among the prized relics of yore. Kraken the Code: Centuries of water recession left dozens of shipwrecks to dry in the sun. At"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "the centre of this accidental graveyard, a massive opalescent orb is cracked down the middle. Near the orb, the sound of thunder is heard regardless of the weather. Inside, an infant Kraken barely clings to life. Cliff Warden: A sea cliff was long ago hewn into the likeness of a warrior-priest. While many"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "of the massive statue’s features have worn away, its intricately carved hands and fingers still clearly form some sort of sign; however, the sign’s meaning has been lost for thousands of years, as forgotten as the folk that originally made it. Above the Surf: An abandoned village rises above the churning surf, each house resting on"
      },
      {
        "roll": 8,
        "title": "stilts",
        "description": "They were clearly deeply cherished as each house is beautifully formed and intricately carved, but now several are missing or lie broken, their reinforced stilts snapped by what must have been an incredibly powerful wave or perhaps a dangerous predator. Smuggler’s Den: The waves lashing against the cliffside do well to hide a coastal cave, just big"
      },
      {
        "roll": 9,
        "title": "enough for a rowboat to slip inside",
        "description": "A makeshift shelter has been constructed on the small shore within, which nobody has visited in a long time. Stacks of rotten crates contain old bottles of alcohol and water damaged goods, while a crude map is carved into the back wall. Aeons Eroded: A large stone wall runs along a coastal cliffside, with either end curving towards"
      },
      {
        "roll": 10,
        "title": "the cliff, crumbling over the drop into the sea",
        "description": "Remnants of an overgrown road lead toward a gatehouse in the wall, its rusted iron gate stuck open. Whatever ancient settlement these walls were meant to protect has fallen into the sea long ago. ENCOUANNTCERIESN: TC ORAUSINTS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "the fish caught in their talons emit blood curdling screams, crying out in articulate, desperate speech. The eagles eventually land and tear apart their pleading prey, eyeing the party with sinister intent and malicious laughter. Crawling Horrors: Large hermit crabs converge around an old lighthouse set on an island just"
      },
      {
        "roll": 2,
        "title": "beyond the shoreline",
        "description": "These hermit crabs are using humanoid skulls for shells, making it seem as if the disembodied skull eye sockets are watching the party’s every move. The crabs seem to move as a group and follow any who would approach the lighthouse. You Are What You Eat: A noble of some repute is adrift and begs the party for help. Their ship"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "had crashed on a desert island and the crew was forced to resort to cannibalism to survive. Naturally, the noble is the sole survivor. Though outwardly sickened by their fiendish actions, the noble can be caught eyeing the party hungrily. Night Light: A lighthouse of polished bone shines with a sickening light on the horizon."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Following it leads to a living island with rippling blood pools and grass made of tiny grasping fingers. Leaving the island requires a sacrifice: a reduction of Maximum Hit Points, a permanent level of Exhaustion, leaving behind a crew member, or worse. Island of Dreams: Whispers on the wind speak of a nearby island shrouded in darkness where"
      },
      {
        "roll": 5,
        "title": "anything imaginable is true",
        "description": "Dreams, nightmares, hopes, and fears take form on this island of possibilities. Temptation worms into the party’s soul and begins feasting upon their hearts, despite their better judgement. Disturbing Fins: As the party approaches the edge of the surf, they notice a number of fins out"
      },
      {
        "roll": 6,
        "title": "in the waves, presumably Reef Sharks",
        "description": "These “sharks,” however, are swimming dangerously close to the surf, almost as if they aren’t worried about getting beached. They are amphibious, and have legs that enable them to walk as fast as they swim. They Didn’t Make It: The party comes upon a group of pirates attempting to row to shore. The"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "trouble is, these pirates drowned and their Zombie selves are trying to complete the journey, rowing a boat that’s already beached beyond the surf. They take no notice of the party as their leader silently gives them orders to keep rowing. Shore Reave: Looking down from a sea cliff, the party sees a long skiff pulling up to a small"
      },
      {
        "roll": 8,
        "title": "reef island just beyond the shore",
        "description": "Not long after the distant foragers set foot on the ‘isle’ its head rises from the surf to bite several of them in half. Their distant screams carry on the wind until the sea serpent finishes devouring them all. Dead Waves: The water in this cove is as still as the sand, with no tide to be seen. The absence"
      },
      {
        "roll": 9,
        "title": "of the waves reflects the uncomfortable silence, with no signs of life nearby",
        "description": "An overwhelming dread fills the party, and any who step too close to the shoreline find themselves overcome with the urge to keep walking into the depths. Ghost Cruise: A luxurious sea vessel has beached itself on the sand, with no sign of a crew."
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "Climbing aboard, the party finds tables set for dinner, plates covered with cooked food still steaming hot, sleeping quarters filled with clothes and neatly made beds, but no sign of life on board. It’s as if the crew vanished just mere moments ago. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "by Wights",
        "description": "Before attacking, the ship sends out a ‘boarding beacon’ of Will-o’-Wisps. The Wights then board the ship and try to slay everyone aboard. Hunting Season: A band of Sahuagin steps out of the waves, spoiling for a fight. They have"
      },
      {
        "roll": 2,
        "title": "several trained Giant Crabs to help them in their hunt",
        "description": "The Sahuagin engage the closest party members as the giant crabs corral any that try to run, slowly closing the circle until they are menacing the party on all sides. Turnabout is Fair Play: A local undersea community of Elves has responded to a seaside"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "community’s overfishing by sneaking ashore at night and slaughtering their livestock. The community responds by attempting to hire the party to rid them of the ‘raiders.’ Of course, they fail to mention why they’re being attacked. March of the Dead: Centuries ago, a feared necromancer and their minions were sunk sailing"
      },
      {
        "roll": 4,
        "title": "the high seas",
        "description": "Unfortunately, the necromancer and crew turned undead and have slowly marched back to shore. Of course, no one remembers this incident, so it is a surprise when waterlogged Zombies, led by an undead Archmage, rise from the waves to seek revenge! Titan's Fall: Unceasing storms plunge the coast into darkness as lightning rends the sky"
      },
      {
        "roll": 5,
        "title": "asunder",
        "description": "Two Storm Giants argue playfully over who can create the most impressive wave and prove worthy of the title Fulminus Gargantua. Unfortunately, the only path forward is between the two of them. Sea King: Angry shouts rise from an Archmage barking orders at a group of Water Elementals"
      },
      {
        "roll": 6,
        "title": "in an attempt to control the seas",
        "description": "Lightning courses around him as the elementals are poised to strike back. Part of the Crew: A Tiefling warlock is embroiled in battle against her former pirate crew"
      },
      {
        "roll": 7,
        "title": "who were cursed after stealing ancient treasure",
        "description": "Slowly dying on their return voyage, they have turned into hideous Ghasts, jealous of their surviving crewmate who kept watch on the ship during their plunder. Her eldritch blasts only exacerbate their stench whenever she lands a hit. Nosy Neighbour: A cadre of Merfolk surface beside the ship shouting for assistance in heavily accented Common. They reveal an Aboleth has moved into their waters and is preying on"
      },
      {
        "roll": 8,
        "title": "their hopes and desires under the guise of granting wishes",
        "description": "The merfolk offer to reward the party for the aboleth’s removal and several of their best warriors (use the Merrow entry) offer to fight alongside the party. Crustacean Trouble: The party inadvertently stumbles into the hunting grounds of a Chuul,"
      },
      {
        "roll": 9,
        "title": "who lurks beneath the waves by day and scuttles out at night",
        "description": "The Chuul prefers to attack party members on watch while the others are asleep, leaving them defenceless. It keeps any treasures it finds beneath sea rocks beyond the surf. First Meal: As a storm brews overhead, the sands beneath the party’s feet begin to stir. A clutch"
      },
      {
        "roll": 10,
        "title": "of Blue Dragon Wyrmlings erupt from below, freshly hatched",
        "description": "They cry out in unison, seeing the party as the only available food source nearby. Desperate to sate their hunger, they give chase and refuse to flee. Hopefully their mother doesn’t return any time soon. ENCOUANNTCERIESN: TC ORAUSINTS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "oblivion",
        "description": "She is just coherent enough to claim that her entire crew betrayed her, but that there is a valuable yet dangerous object aboard her ship. She needs to recover it and offers the party the other valuables in ‘her’ ship if they help her. The Lost Dragon: A clumsy young ‘adorkable’ man begs the party for assistance. He claims to"
      },
      {
        "roll": 2,
        "title": "be a Young Bronze Dragon permanently transformed by a seaside wizard",
        "description": "The wizard plans to use his “draconic essence” to open a portal to another plane, which the wizard believes will grant him power but the dragon believes will destroy the world. A Matter of Tradition: Every 13th year, a Sahuagin champion rises from the waves to challenge"
      },
      {
        "roll": 3,
        "title": "a landlubber",
        "description": "This is purely a nonlethal ritual between the Sahuagin clan and the local village, but plague and war has erased the landlubbers. Unfortunately, the champion believes that one of the party is their combatant, and killing the Sahuagin is akin to starting a war. Sudden Island: The party sees that a burial site, and a gargantuan portion of the land surrounding it, has been ripped up and dragged into the ocean, spotting trees and foliage out"
      },
      {
        "roll": 4,
        "title": "on the horizon",
        "description": "A long dormant Dragon Turtle had unknowingly cultivated this land on its back as it slept, and it is secretly tainted with necromantic powers from the powerful mages buried on its shell. A Fair Bargain: Dreams from a Kraken offer great power in the form of Warlock patronage at a terrible price. The price includes at minimum a constant psychic link to the kraken."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "Ignoring the dreams results in the dreamer gaining no benefit from long rests until the kraken is answered. The kraken has slumbered for millenia, awakening now to conquer the planes one warlock at a time. The Sleeping Swordsman: A retired elven swordmaster (use the Marilith entry) is rumoured"
      },
      {
        "roll": 6,
        "title": "to sleep in a massive seashell on a distant shore",
        "description": "She trains only those who swear to use her teachings in the service of the less fortunate. The Elf is in self-imposed exile as all her previous students have died horrific violent deaths. As the Crow Flies: An Iron Golem covered in barnacles and dragging seaweed rises from the depths and trudges onto the beach. Having walked in a straight line from its point of origin"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "across the sea, it now attempts to clamber up a cliff face, intent on the most direct path to its goal. It has been so long since it set out on its journey that it no longer remembers the message it was meant to deliver. Divine Recognition: A beautiful Deva swoops down from above. If the party has recently done"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "a service for the greater good, such as slaying a Nemesis, the Deva thanks them wholeheartedly. If the party is only starting their quest for good, this angel senses their future actions and gives them sage advice. This celestial was sent by a deity to gather information about the party. King Crustacean: Two parallel lines of crabs emerge from the shore, brandishing horns and"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "sputtering a royal tune as their giant king rises from the waves, a rusted crown atop his shell. Bellowing in Common, he demands entertainment in the form of magical spells. He is secretly a powerful Wizard himself, looking for someone worthy to bestow his knowledge upon. Downcast: A Merfolk lies on the beach, staring into the sky, spear and shield discarded to the"
      },
      {
        "roll": 10,
        "title": "side",
        "description": "They barely react to the party’s presence and seem dejected and depressed. They don’t want to talk about it, but they have been exiled by their people, never to return to the sea. Beneath the waves, they were a powerful warrior of some renown. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Deserts": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "surfing the desert dunes",
        "description": "Only able to support a single Halfling’s weight, they don’t have any to spare for the party, but they are eager to share the sport if enough wood is available for crafting. Caravan Trail: A long line of caravans trudge through the desert on their way to their next"
      },
      {
        "roll": 2,
        "title": "city, a shortcut deemed necessary by their guild leader",
        "description": "Exhausted, overworked, and angry at their superiors, they are eager to trade with the party and badmouth their incompetent leaders. Fame and Glory: A non-native group of Gnomes have set out on an expedition to uncover"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "the histories of a lost civilization within the desert, hoping to return home with incredible discoveries. Despite their enthusiasm, it is clear that they have no knowledge of survival within the harsh climate, and are dangerously unprepared for their journey. Familiar Frog: A large frog hops weakly along the rocky ground, moaning in Common. It is"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "the familiar of a nearby Wizard who has holed herself up in a cave and sent it out to find food, despite its amphibious body struggling in the dry desert. Love Letters: A Half-Orc rides a two humped camel across the dunes, the personal messenger"
      },
      {
        "roll": 5,
        "title": "of two lovers situated on either side of the desert",
        "description": "She is paid handsomely, and enjoys the solitude, though she scoffs at the sickly-sweet love of her patrons. Carrying a Secret: A Dragonborn adventurer is encountered along the road, looking dirty and"
      },
      {
        "roll": 6,
        "title": "injured, and hesitant to talk with the party",
        "description": "He is protectively cradling an object wrapped up in cloth, and becomes very paranoid if asked about its significance. Desert Express: A uniformed postman passes by the party on his way to a delivery. Struggling"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "in his ill-suited clothes, he admits that the unsteady dunes, extreme temperatures, and odd wildlife have reduced his efficiency, and vows to work harder when he returns to favourable climes. Lines of the Gods: The party finds a group of locals carving vast incisions along the desert"
      },
      {
        "roll": 8,
        "title": "floor for the amusement of their god as she looks down upon her worshippers",
        "description": "They are eager to move the party along and out of their way, warning them not to touch any of the sacred carved lines. Seeds of Life: A tribe of nomadic Druids cross the desert heading in the opposite direction"
      },
      {
        "roll": 9,
        "title": "of the party",
        "description": "They leave grasses and flowers in their wake, delighted in their mission to spread life to this barren region, but if the party follows their trail they find only the dried remains of dead plants. The desert is not kind to fools who wish to destroy it. Cloudless Nights: A Dwarven Wizard is found climbing up a steep ridge, searching for the"
      },
      {
        "roll": 10,
        "title": "optimal spot to study the stars",
        "description": "He is annoyed to have found other people in such a remote area, having left his busy city in order to observe the stars in peace, away from the light pollution of urban areas. ENCOUANNTECRIESN: DTERSUERINTS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "It begs to be free so that it can help restore life to this barren land",
        "description": "Should the party heed its request, it will gladly replenish their supplies of water before searching for a spot to create a new oasis. Oasis: An uninhabited oasis in the sands offers refuge from the heat of the desert. What trees"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "have grown offer shade from the sun, as well as their fruits, and the crystal clear water quenches the thirst of weary travellers. Amidst the Dead: Mounds of bones lay in piles around a cave entrance, though there are"
      },
      {
        "roll": 3,
        "title": "no signs of predators anymore",
        "description": "Sifting through the bones can gift the party with a dead cartographer’s unfinished map, with handy shortcuts marked on it, which can reduce the number of Encounters on this Journey by 1. Desert Mounts: Two camels wander through the desert, saddles and equipment lashed to"
      },
      {
        "roll": 4,
        "title": "their humps",
        "description": "They are skittish, having seemingly escaped from their last owner, but they would make great mounts… or food. Blood from a Stone: Large clusters of boulders line this valley, and the glint of the sun catches"
      },
      {
        "roll": 5,
        "title": "the Quartermaster’s eyes as it reflects rainwater hidden within their clefts",
        "description": "Perhaps more water hides under these innocuous rocks. Succulent: Most of the cacti the Quartermaster has attempted to cook have left an unpleasant"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "taste in everyone's mouth, but unless they try every new variation they come across, they’ll never know if there’s one particular variety that is delicious. Floating Font: Water spouting magically from an invisible source 5 ft. off the ground whizzes"
      },
      {
        "roll": 7,
        "title": "quickly by the party, unable to be stopped or captured",
        "description": "If they are able to contain some of this fast moving water, it tastes fresh and clean. Abandoned Cargo: Cargo half sunk in the sand is scattered across the area. While signs of a"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "struggle are hard to find, it's clear that whoever owned these supplies has long since fled the area. Though such supplies are welcome, the threat of bandits shouldn’t be ignored. Mirror Mirror: A flooded salt flat stretches out to the horizon, reflecting the sky in a stunning"
      },
      {
        "roll": 9,
        "title": "display",
        "description": "As the sun sets, a small desert shrine can be seen only in the reflected world, alongside a winged celestial. With a gesture from the divine creature, plantlife bearing fruit blooms around the shrine, and falls upwards into the real world. Canyon Grove: Sheltered within the nooks and crannies of a canyon’s rocky surface, an"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "abundance of fruits and berries can be found from plants growing between the rocks, their roots sinking deep to find water wherever they can. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "the sand into a vibrantly reflective glass",
        "description": "Threatening to crack and slice through the boots and soles of those who risk walking on the fragile surface, a successful Intelligence (Investigation) check allows a safe crossing, each step carefully considered. Moving Mountains: The direction and strength of the wind has led to the formation of"
      },
      {
        "roll": 2,
        "title": "mountainous sand dunes that block the path ahead",
        "description": "After reaching the ridge of one sand dune, the party is disheartened to see that it is but one of many. A Strength (Athletics) check determines how exhausting this climb will be. Tight Squeeze: A rocky mountain blocks the direct route, but it may be possible to cut through"
      },
      {
        "roll": 3,
        "title": "this obstacle by climbing through a narrow slot canyon",
        "description": "Using a Dexterity (Acrobatics) check, the Outrider can find a path through this outcropping that the party can squeeze through. Sandstorm: A roiling brown cloud forms in the distance, a dangerous warning of the"
      },
      {
        "roll": 4,
        "title": "sandstorm to come",
        "description": "A shelter must be found with a successful Wisdom (Survival) check before the sandstorm envelops the party, buffeting them with its abrasive wind and obscuring the path ahead. Hungry Larvae: A stretch of vast sand pits alerts the party to the traps of giant antlions. They"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "must carefully skirt the edges of these pits with a Strength (Acrobatics) check to avoid falling into the mandibles of this insect. If the Outrider fails, the party must instead fight the giant antlion (use the Giant Centipede entry) to escape. Anthills: Unusual mounds poke out of the sand, with the crawling insects moving between them creating a wall of millions of tiny legs and pincers. As the dominant creatures of this area,"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "the ants will attack any who attempt to cross, stinging them and wriggling off with their food. A successful Intelligence (Nature) check can determine the best spots to circumvent the nest without going too far off course. Bulette Holes: Large Bulettes have dug through the ground, leaving complex warrens of"
      },
      {
        "roll": 7,
        "title": "intersecting tunnels and caverns",
        "description": "The ground is unstable, and every collapsed section delays the party. A Wisdom (Perception) check is needed to find and avoid the telltale signs of the treacherous cave-ins. Whispering Winds: Mystical chanting on the wind confounds the ears and confuses the"
      },
      {
        "roll": 8,
        "title": "mind",
        "description": "Whispering conflicting directions to the listener, the party begins walking in circles. A Wisdom (Insight) check can determine which inner voice is real, and which one is misleading. Alternatively, an Intelligence (Cartographer’s Tools) check can keep the party on track. Spider Farm: A forest of cacti stands before the party, with thick strands of spiderweb strung between them, creating an uncomfortable barrier. Scuttling out from the webs, an Ettercap"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "shouts in broken Common, warning none to trespass on its farm, lest it summons its spiders. A Wisdom (Perception) check allows the Outrider to circumvent the farm without too much delay. Do Not Touch: Large sapphires litter the sands ahead, laying in plain sight and glinting under"
      },
      {
        "roll": 10,
        "title": "the sun, an attractive and easy payday",
        "description": "Aware of this notorious trap of the Blue Dragons, an Intelligence (Investigation) check allows careful avoidance of any alarms… should the party be able to resist temptation. ENCOUANNTECRIESN: DTERSUERINTS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "having cracked through the crust, revealing a quagmire of mud that has engulfed the wheels. With assistance of the party’s Strength (Athletics) check, they can attempt to salvage their stock before it sinks completely. Grim Determination: A female Half-Orc wanders alone through the desert, deep scars covering her body. She vaguely tells the party that she is on a personal quest, remaining scant"
      },
      {
        "roll": 2,
        "title": "with the details",
        "description": "Despite her obvious injuries and evidence of severe dehydration, she resolutely refuses assistance… Until, at least, she collapses in exhaustion, necessitating a group Wisdom (Medicine) check. Curse of the Tomb: The party encounters a male Halfling who wants nothing to do with the"
      },
      {
        "roll": 3,
        "title": "group, insisting they keep their distance",
        "description": "He claims that he has been cursed after attempting to rob a tomb, and is showing obvious signs of hallucinations and paranoia, but an explanation with an Intelligence (Arcana) check may calm him down. Curious Nomads: A group of nomadic Humans make their annual trip through the desert"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "to visit another settlement, and their knowledge of the desert geography is invaluable. In exchange for their assistance, they ask only for the party to entertain them on their voyage with a Charisma (Performance) check. A Final Journey: An aged Elf Wizard is making a final journey to the city of her birth, hoping"
      },
      {
        "roll": 5,
        "title": "to spend her final days there",
        "description": "While she is eager to share the history of her home, she remains quiet about more recent events surrounding it, as the city fell long ago. An Intelligence (History) check may reveal some clues to the party, and bring light to the Elf ’s eyes. Three Wishes: Three young wizards carrying an empty lamp are trying to hunt down a genie,"
      },
      {
        "roll": 6,
        "title": "hoping to split its three wishes amongst them",
        "description": "They are performing a variety of odd spells in the hopes of summoning one, with very little success, and wonder if the party can help them in their rituals with an Intelligence (Arcana) check. Dry Quicksand: A Lizardfolk and their dinosaur mount has sunken into a sand pit, their"
      },
      {
        "roll": 7,
        "title": "thrashing and wailing carried on the winds",
        "description": "Only the nimblest of adventurers can rescue them without sinking themselves, requiring a successful Dexterity (Acrobatics) check. Disappearing Act: The party watch as an extravagant palace in the distance crumbles into nothing but sand, a lone figure escaping the destruction. Upon reaching the scene, they meet"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "a Human treasure hunter who had entered this magical palace from a very different location and has no way home. An Intelligence (Cartographer’s Tools) or Wisdom (Survival) can provide them with directions. Scattered in the Wind: A dust devil has whipped through an encampment of humans,"
      },
      {
        "roll": 9,
        "title": "ensnaring their papers in its winds",
        "description": "They are desperately trying to follow it and snatch their documents back, appreciating the help of a successful Dexterity (Sleight of Hand) check. Sword in the Stone Golem: A Stone Golem has been immobilised by a magic sword that has been stabbed deep into its back. Unlike most of its kind, it can speak and seems somewhat"
      },
      {
        "roll": 10,
        "title": "intelligent",
        "description": "It begs to be released so that it may accomplish its task, but states that only the worthy may pull the sword, necessitating an Intelligence (Religion) check. Alternatively, a successful Dexterity (Mason’s Tools) check can blasphemously loosen the sword. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "lands, and view them as easy pickings",
        "description": "Some follow after, while others seek to travel ahead, cutting off the forward path, and surrounding the party — this isn’t their first rodeo. Against the Elements: A cluster of Dust Mephits are blowing over the dunes. These elementals"
      },
      {
        "roll": 2,
        "title": "are seeking to spread chaos and vandalism",
        "description": "If the party notices the mephits, it’s because they spotted the rolling dust cloud was moving against the wind, despite the fierce gale. Gnome Trapper: A Rock Gnome Mage and some gnomish Bandits have set up human sized"
      },
      {
        "roll": 3,
        "title": "snares and pit traps in the sand, using them to ensnare trespassers to rob",
        "description": "If the Gnomes are discovered, it is because their trap lines were visible or their hiding holes were not well concealed. A Challenger Approaches: A group of Monks challenge any who pass by their monastery that"
      },
      {
        "roll": 4,
        "title": "is carved into the cliffside to a trial of combat",
        "description": "They promise not to deal any killing blows, but state that they will not hold back. Burrows: Loose sand gives way to craggy rocks, littered with caves dug out by a nest of Giant Centipedes. Such creatures can often dig up veins of ores or punch into long buried ruins and"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "monuments to the dead, but with little use for such things, they leave them in the dirt. The party risks awakening these writhing insects by entering, but treasure lies within for those brave enough to try. Scorpions: A pair of Giant Scorpions seem to be performing an intricate dance in the desert"
      },
      {
        "roll": 6,
        "title": "sands, circling one another in instinctive tradition",
        "description": "Once they spot the party, they move in tandem to attack, angry at this intrusion on their private courting ritual. Ghoul Cave: What appeared to be a tempting campground in an abandoned village carved"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "into the stones of a rocky outcropping reveals itself to be occupied, though its Ghoul residents would love to have the party for dinner. What Lies Below: A trio of Mummies guard the entrance to a tomb complex beneath the"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "sands, commanding their Skeleton minions to drag victims deeper within the tomb for some unknown horror. Great dangers and treasures lay in wait within, though the exact opening mechanism is unknown to the party. This Cave Ain’t Big Enough For Both of Us: A cave offers the only protection from a terrible"
      },
      {
        "roll": 9,
        "title": "sandstorm that sweeps across the area suddenly",
        "description": "Though at first the cave seems empty, deeper within are a group of Bandits and a Bandit Captain who are also taking shelter from the storm. Crawling Stones: Long, perfectly straight lines cut their way through the upper layer of sand"
      },
      {
        "roll": 10,
        "title": "here",
        "description": "Following these puzzling lines, they will find a group of rocks at the head of each path. The rocks are completely still, with no indication that they have moved themselves. If one touches a rock, the answer becomes clear: toothy boulder Mimics begin attacking. ENCOUANNTECRIESN: DTERSUERINTS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "resembling a hollowed-out dome",
        "description": "Spiralling inwards from the centre is a rich vein of vibrantly colourful minerals, shining in stark contrast to the rocks and desert sands. From a high vantage point, the formation resembles a giant bull’s eye, potentially causing unease for some. Acid Bath: A natural basin holds crystal clear water above brightly coloured stone, tantalisingly"
      },
      {
        "roll": 2,
        "title": "refreshing to the parched mouth and gritty eyes of adventurers",
        "description": "If any party member attempts to scoop it up, the water reveals itself to be acidic and highly corrosive, dealing 1d6 acid damage if it touches bare skin. Starry Night: The cloudless skies of the desert night present a spectacular view of the stars,"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "and the party have noticed a stunning display of shooting stars streaking across the twinkling backdrop. Some may view this as an omen of good fortune, but for some, they remind them of their cosmic insignificance. Salt Pan: A dazzling white surface extends as far as the eye can see: a dried up lake bed that"
      },
      {
        "roll": 4,
        "title": "left behind minerals as its water evaporated under the sun",
        "description": "The transformation of liquids into solids and gases may fascinate some as they cross the salt flat, while to others, it is a grim reminder of the deadly intensity of the sun. Ancient Dance: What seemed to be a broiling sandstorm turns out to be a passionate dance between an Air Elemental and an Earth Elemental, pure beings of their respective elements."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "They are far enough away to pose no threat to the group, though some may grow frightful at the prospect of encountering beings of such raw power. Others find beauty in this rhythmic fusion of sand and wind. Sand’s Song: The harsh desert wind reacts strangely with the sand dunes here, creating a haunting tone that shifts and flows with the sands themselves. The shapes of the dunes and the"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "strength of the wind change from moment to moment, creating ethereal songs or phantom voices. Such songs may be haunting, sounding like dire omens or warnings, or may be softer, soothing the woes of travellers. Sea of Glass: The terrain gives way, changing into a vast expanse of glass stretching out across the landscape, all that remains of a vast magical firestorm that scorched across the desert sands."
      },
      {
        "roll": 7,
        "title": "Though fragile looking, the glass is solid enough to walk on",
        "description": "In the daytime, the sun is reflected harshly, but on a cloudless night, the stars and moon shine against the mirrored surface in a beautiful display of light. Fairy Circles: The arid underbrush here breaks up into odd formations with no explanation,"
      },
      {
        "roll": 8,
        "title": "strange circles and other shapes forming holes in the ground",
        "description": "From even a low vantage point, one can see these patterns stretch out for a great distance, eventually ending as abruptly as they began. Such patterns must be the result of fae magic, or druidic intervention. Great Canyon: The flat ground is suddenly cut through by an immense canyon complex that"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "has been carved into the ground here long ago by the flow of water, creating a stunning vista and a mile long drop. The canyon stretches out tens of miles across and is hundreds of miles long, but a stable rope bridge could be used to cross the chasm. Great River: The lifeless desert is torn through by a wide river that feeds an abundance of"
      },
      {
        "roll": 10,
        "title": "life in this region",
        "description": "The drastic change in the landscape from sand and rock to greenery and growth is a welcome sight, and may give comfort that even in the harshest of places, life can still bloom. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "cavern pitted with large Ankheg eggs",
        "description": "The eggs would take time to gather, and the rumbling ground signals their parents approaching. Collecting the eggs would surely mean a fight, but provided they don’t hatch too soon, they are a lucrative haul. Giant Snakes: Great swells in the sandy ground give a clue that there are serpents taking shelter from the heat under the sand's surface, and the size of these indicate they are of monstrous"
      },
      {
        "roll": 2,
        "title": "proportions",
        "description": "Fangs, venom glands, meat and scales all have value to the desert cultures, as everything can be made use of. Since these Giant Snakes are resting, slipping by unnoticed shouldn’t be difficult, though picking a fight with one snake will surely raise the ire of the others. Manticore Pack: The area ahead is littered with spikes, weapons, and bloodstains. A successful Intelligence (Nature) check reveals the attackers: a pride of Manticores, with drops of blood"
      },
      {
        "roll": 3,
        "title": "leading back to their lair",
        "description": "The manticore’s diet of humanoids often leads to them eating valuables and even magic items, that may be cut out of their stomachs, in addition to the value of their hides and claws. Bird of Prey: The bodies of large animals litter the area, long since picked clean of meat. The bones smashed apart as if dropped from great height signals the territory of a Roc. While its"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "nest may be hidden, it is likely to be high with a view across the land: a rocky outcropping, mesa, or mountain are likely places. The eggs of a Roc are valuable, but with their keen eyes they’re likely to spot trespassers in their domain. Desert Jewel: A young Blue Dragon has made its lair in the ruins of an ancient city, and"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "arrogantly displays its wealth for all to see, creating a shining lure in the middle of the wastes. While the dragon is watchful of interlopers, it must still search for food occasionally, leaving its treasure unguarded. Gorgon: Uninteresting and flat landscape gives way to strange stones of jagged and irregular"
      },
      {
        "roll": 6,
        "title": "shape, some eerily resembling humanoid limbs",
        "description": "Hoof marks signals that a Gorgon roams this area. Within the gorgon’s den, an un-smashed statue of a warrior stands, with their magic sword untouched by the petrifying breath. Little Grey Men: A group of Doppelgangers whizz across the night sky on a fast moving Floating Disk. The party witnesses as they silently abduct a Tiefling from a nearby camp and"
      },
      {
        "roll": 7,
        "title": "replace her with one of their own",
        "description": "Doppelgangers are notorious for learning important secrets of those they abduct, and living off their stolen wealth, and are sure to have amassed a sizeable sum of gold. Lost Crusaders: A tattered banner of a distant god flies high above a procession of armoured"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "figures lost in the desert, their livery identifying them as knights of a distant land. Religious fervour couldn’t protect these pilgrims from the desert harshness, and now they wander the sands as Zombie Knights, still clinging to their loot and treasures as they march ever onward. Lost Sarcophagus: A group of mummified figures wander the desert, carrying aloft a cracked"
      },
      {
        "roll": 9,
        "title": "sarcophagus",
        "description": "On closer inspection they seem to be moving with determination towards an unknown target. They are draped in finery and rather than a body, the sarcophagus is full of treasure. Any attempt to disrupt their journey results in a fight with these Mummies. Wyvern Nest: The rockface of a tall mesa has deep gouges scratched into its surface. An Intelligence (Nature) check can determine that these were made by a territorial Wyvern"
      },
      {
        "roll": 10,
        "title": "marking its domain",
        "description": "The Wyvern will be more aggressive than usual, as hidden away within 86 its nest are its recently hatched children; extremely valuable to those who have the knowledge and skill to train them. ENCOUANNTECRIESN: DTERSUERINTS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "weigh anchor if not for the lack of a crew… and ocean",
        "description": "If the wayward crew returns to their ship, they will be unhappy at any stowaway occupying their boat. Clay Army: A sudden stairway to an underground chamber is found. Inside it is cool and"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "shady, but lurking in the dark are rows upon rows of Clay Golems, standing in immaculate order. Inanimate and inert, the party can rest uneasily between their lines. Canyon Oasis: A large hidden oasis is found, protected by the canyon rocks. Strange and"
      },
      {
        "roll": 3,
        "title": "unique plants are abundant here, providing shade and food",
        "description": "The water is crystal clear and pure, but the animals here seem hesitant to let strangers into their watering hole. Nomad Camp: A suitable campsite is already occupied here with a group of desert nomads, who"
      },
      {
        "roll": 4,
        "title": "are more than happy to share their camp and provisions with other travellers",
        "description": "The nomads' tales of their heroes and legends may give insights into the region’s history and dangers. However, not all the smiles may be genuine, and some of the nomads may have hostile intentions. Village of Stone: Inventive inhabitants of the desert make use of everything they can, even down to rocky landscapes that can be found within the wastes. One such community once"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "resided in this area, having carved out their homes from the abundant rock, providing protection from sandstorms. The village may only be temporarily abandoned, its residents travelling from rocky village to rocky village. Old Mine: A once thriving mine exists here, its entrance half choked by the sands. Deep inside"
      },
      {
        "roll": 6,
        "title": "the mine is likely to be cool, offering protection from the desert heat",
        "description": "Though anything of value has likely already been taken, the mine is extensive and vast, and likely to contain Swarms of Bats and Insects. Serpent Temple: An intricate temple complex to a serpentine god stands proud in the desert, obelisks and sandstone statues of serpentine humanoids dotting the landscape. No matter"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "where one stands within the complex, the statues always seem to be staring, watching for something. Should disrespect to their god be shown, the statues will come to life, ready to fight (use the Gargoyles stat block without fly speed for these statues). The Perfect Camp: A well constructed camp with a gentle fire sits mysteriously in the desert. It"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "is well sheltered from the harsher winds, and the tents seem to be the perfect temperature for their occupants. The camp is secretly a gift or the trap of a Ghost, and those who slumber here may wake up to no camp at all in the morning, or find themselves fighting off this spectral foe. Melting Metropolis: A small mountain is surrounded on all sides by ancient houses,"
      },
      {
        "roll": 9,
        "title": "constructed with muddy materials",
        "description": "The houses seem to droop and sag, looking as if they have melted in a freak rainstorm, their structures collapsing or merging. Grey Oozes often lurk in such places, and perhaps even cause such decay. Remnants of Monsters: A cave on the side of a sheer cliff feels temperate and shaded to the"
      },
      {
        "roll": 10,
        "title": "weary party",
        "description": "A Wisdom (Nature) check reveals that this cave was once carved by a Purple Worm, but seems disused. Caves such as these are perfect nests for Giant Spiders and Giant Scorpions. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "spring having never stopped flowing",
        "description": "No living creatures can be found within the town walls, nor any evidence of past occupants. Canyon City: Weathered statues of humanoids can be found jutting out of the rocks as the adventurers descend into a canyon pathway. As they descend deeper and deeper into the"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "canyon, they find more evidence of ancient habitation, eventually stumbling into the heart of the once mighty civilization that called the canyon home. Vast complexes were carved out of the canyon walls. The buildings sit abandoned and forgotten, the strange statues their only remaining residents. Ancient Seabed: Harsh winds have blown the sands away from this area, revealing what has been buried since ages past: an ancient seabed scattered with the fossilised remains of life from"
      },
      {
        "roll": 3,
        "title": "another time",
        "description": "Giant seashells, bleached coral reefs and the titanic skeletons of ancient whales are unearthed. Such a glimpse into the past is surely temporary, as the desert will once again bury it beneath the sands of time. Titanic Grave: The party finds ancient pillars in a curved formation, thinking they are just"
      },
      {
        "roll": 4,
        "title": "more ruins in the desert",
        "description": "It isn’t until they find a titanic skull that they realise they have walked through the ribcage of a great beast. Shelter can be found inside the skull, if they can weather the eerie sound of the wind blowing through its eyesockets. Contaminated Canals: An orderly network of empty canals crisscrosses the landscape,"
      },
      {
        "roll": 5,
        "title": "appearing to link ancient cities and villages",
        "description": "A purple slime covers the base and sides, and an Intelligence (Investigation) check will reveal that it is poisonous, and must have contaminated the water source. Sands of Time: A giant hourglass stands upon a tall pillar, sand slowly trickling between bulbs,"
      },
      {
        "roll": 6,
        "title": "appearing to be over halfway complete",
        "description": "The structure seems ancient, indicating that its end is not any time soon, but its ominous countdown provokes portentous thoughts. Skull City: A site of a long passed civilization lies carved into the cliff face. From afar, it appears"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "as if this city was designed to resemble a titanic skull or perhaps more unsettlingly, it was built inside a giant skull. Within each eye socket, thrones face out onto the desert landscape, providing a helpful vantage point. Clockwork Construct: A vast clockwork construct in the shape of a beetle lays slain on"
      },
      {
        "roll": 8,
        "title": "the sands, corroded mechanical viscera scattered across the dunes around it",
        "description": "Questions surrounding its purpose, inventors, and demise linger on the minds of the party as they investigate this intricate construction. Meteor Fall: Embedded into the cliff face is a massive rock, its colouration and texture unlike"
      },
      {
        "roll": 9,
        "title": "all those around it",
        "description": "Evidence of a meteoric impact can be deduced with an Intelligence (Investigation) check, alongside scorch marks, indicating that this rock fell from space and lodged itself here. Dry Well: A stone well sits unused by an old road. It seems to have received much use in the"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "past, with weathering evident where people would rest or place their hands while using the well. Perhaps this area wasn’t always so barren and desolate. ENCOUANNTECRIESN: DTERSUERINTS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "minds of the party",
        "description": "One of their fallen comrades seems to call out to them mournfully, begging to know why the party didn’t save them. This may just be a mirage of a painful memory, or a Ghost preying on the grief of the group. Lost Oasis: A once thriving town existed here around what used to be an oasis, now dried."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "All that remains of its inhabitants are sun-bleached bones and half buried houses, the desert slowly reclaiming the land. Such a miserable end may even have ensnared the souls of those who remained, trapping them as resentful spirits. Screams of the Dead: The sound of the rushing wind resonates peculiarly with the sand dunes here, filling the air with sharp high-pitched shrieks and wailing cries of pain and agony,"
      },
      {
        "roll": 3,
        "title": "threatening to lure trespassers away from their comrades",
        "description": "There is no beauty to be found in these notes, and many undead spirits are drawn here by the cry of the wind, lending their own ethereal voices to the sorrowful song, adding to the dread it inspires. Caravan of Corpses: A once thriving caravan has met its end in the wastes, the desiccated"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "bodies of its traders and pack animals having long since been picked clean of their treasures, leaving only bones and dried meat for the vultures. Signs of a struggle may be found, but traces of the bandits will have faded with the desert sands. It seems like justice will not be served. Ruined Obelisk: The party finds the ruins of a great obelisk amidst the sands, shattered and cast down, the desert winds having eroded it to formlessness. The only artefact untouched"
      },
      {
        "roll": 5,
        "title": "by the weather and time is a bronze plate, inscribed in Draconic",
        "description": "“Gaze upon our city, the grandest of the world.” Some may find it a lesson in hubris, others losing hope in their own homelands' longevity. Boneyard: The lonely desert soon becomes cluttered with the massive bones of great beasts,"
      },
      {
        "roll": 6,
        "title": "sunken into the sand, a vast herd of the dead stretching across the horizon",
        "description": "A grim reminder of the ever-present threat the desert poses. Territorial Claims: A Brass Dragon and a Blue Dragon fighting over territory creates"
      },
      {
        "roll": 7,
        "title": "thunderous noise in the distance",
        "description": "Their battle has devastated the local area and they are so caught up in the frenzy of battle, that they would attack any trespassers on what is rightfully theirs, even should they assist. Lost Knowledge: A blackened spire punches through the ground, much of its structure sunken beneath the sands. Exploring this ruin reveals its history as a grand library of countless tomes"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "stretching back throughout history, before a great inferno consumed all that it contained. Even the most novice of academics would be horrified at such a loss of knowledge, while the more cynical may simply lament the loss of fuel to keep them warm in the desert nights. Fat Cats: A lair of Lamias lounge lazily in a ruin, no longer interested in hunting. Several"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "Flesh Golems hang in cages, cruelly used as eternal foodstuffs ever since the Lamias learned to harness lightning spells to regenerate them. Far From Gnome: The upper half of a wizard's tower lays crashed in the desert, a teleportation"
      },
      {
        "roll": 10,
        "title": "spell gone terribly wrong",
        "description": "The gnomish Wizard himself has lost his sanity, struggling to cast another spell to return him without any of his equipment still functioning. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "as it swoops and dives, before turning around to land before the party",
        "description": "Creating instant thunderstorms, it challenges the party to battle, but it will flee should it risk losing the fight. Sand Sharks: A signpost juts out of the ground, stating in bold letters: “Beware of Sharks”."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "Though such a sign may seem amusing in the middle of the desert, those who ignore its warning will find themselves ambushed by Bulettes. Lord of the Scorpions: An intelligent Scorpion shouts out in a shrill voice that the party is"
      },
      {
        "roll": 3,
        "title": "to leave their tribute and flee his domain, for he is the lord of all scorpions",
        "description": "Should the party refuse his demands, he will retreat, while his Giant Scorpion servants attack. Fairest of Them All: A Lamia and a pack of Jackals ambushes the party, catching them in a"
      },
      {
        "roll": 4,
        "title": "metal trap",
        "description": "It purrs over their forms, choosing the most beautiful of the bunch to take home to their crumbling lair, allowing the rest of the party to leave peacefully. Too Good to be True: A group of Blue Dragons Wyrmlings are keen to show off their"
      },
      {
        "roll": 5,
        "title": "brilliance by setting up an ambush",
        "description": "Burying themselves in the sand and leaving only their horns jutting out of the ground, they circle a rocky outcrop studded with tempting aquamarine out in the open. Stalwart Guard: A lone figure towers above the sand, motionless until the party draws close,"
      },
      {
        "roll": 6,
        "title": "upon which they realise that it is a Shield Guardian",
        "description": "It moves to defend its master: a skeleton half buried in the sand, still clutching at its magical items and a tattered spell tome. Valuable loot, and potentially rare spells are just behind this stalwart guardian. Marginally Mad Magician: A lone figure ranting and raving at some imaginary being can"
      },
      {
        "roll": 7,
        "title": "be heard at some distance",
        "description": "Upon approach, this Mage nods his head in agreement with his companion, who, in a flurry of sand, reveals itself to be an Invisible Stalker, heading straight for the party amidst a dust devil. Fight to the Undeath: An undead Gladiator has been awakened by unwitting tomb raiders,"
      },
      {
        "roll": 8,
        "title": "who now serve them as Zombie minions",
        "description": "Searching for combatants to join its performative fight, they wander the wastes in search of those strong enough to contend. Sky Pirates: A floating ship explodes from beneath the sand, and looms overhead above the"
      },
      {
        "roll": 9,
        "title": "party",
        "description": "With shouts of orders, ropes are released, and sky pirate Veterans swing down to start a fight! If the pirates defeat seems evident, their captain decides to retreat, leaving behind any remaining crew and swearing that the party shall rue the day they crossed him! Holy Retribution: A Human Paladin in full plate wanders the sands, dragging her sword"
      },
      {
        "roll": 10,
        "title": "behind her as she suffers from heat stroke",
        "description": "She stands in the party’s path, believing them to be fiends or guardians of the holy item that she seeks, and claims her lord sent her to find. ENCOUANNTECRIESN: DTERSUERINTS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "with the ability to speak archaic Common, it points them in the direction of some ancient ruins over which it once stood guard, hiding the fact that it was the cause of the destruction. Wealthy Pilgrims: A pilgrimage of richly dressed travellers, including the wealthy king of"
      },
      {
        "roll": 2,
        "title": "their nation are making their way to a religious site",
        "description": "The king’s journey will take him many months, even years to complete, and secretly he is concerned that their wealth will soon dry up due to the lavish gifts they bestow on each town they visit. Wasteland Queen: With a thunderous beating of wings and whipping of sand, a Blue Dragon lands before the party, declaring that she is the queen of these wastes. She demands the party"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "gather or hand over a precious treasure in exchange for permission to pass her grounds. She has played this game before, hiding her own gems throughout the desert in order to send adventurers on a treasure hunt. Druid of the Sands: Amidst a stone circle stands a wizened woman wearing the trappings of a powerful Druid. She maintains the stones and makes swirling patterns in the sand,"
      },
      {
        "roll": 4,
        "title": "the significance of which is known only to her",
        "description": "Secretly, she is responsible for the spread of desertification in some areas, and the alleviation in others, as she slowly moves the desert across the continent. Riddles and Games: An Androsphinx blocks the entrance to a tomb complex lined with tomes of lost arcane knowledge. Though either boredom or its mystical nature, it will allow the"
      },
      {
        "roll": 5,
        "title": "party entrance to this tomb if they can pass its tests",
        "description": "Riddles, games of wit or chance, or even a physical contest may be issued. The sphinx is the only creature that knows the rituals described inside the tomes are a deadly trap, working only for their original creator. Brass Tacks: Approaching the party is an Ancient Brass Dragon polymorphed as a Tiefling. Excited by these new travellers and eager to learn about them and their travels, they will be"
      },
      {
        "roll": 6,
        "title": "quite persistent in pestering them with countless questions",
        "description": "Conversation is a gift to Brass Dragons, and it will be taken as a serious insult should answers be withheld. They will hold the location of their lair as a close secret, as it is filled with embarrassing poetry from its centuries as a young wyrmling. Lost to Time: An extremely pale, almost translucent Elf stands outside a cave, squinting in the harsh sunlight, inappropriately dressed for the desert. He speaks to the party in archaic Elvish"
      },
      {
        "roll": 7,
        "title": "initially, but does speak Common",
        "description": "He is very confused about where he is, as the kingdom he was returning to has been lost to the sands. He does, however, know the secret location of a lost temple nearby where he has been in meditation for millennia. The Sky is Falling Down: A Cloud Giant falls from the sky, having been cast out from her"
      },
      {
        "roll": 8,
        "title": "family",
        "description": "She is despondent at her exile from her kingdom, and is able and willing to take it out on the nearest people. She knows the hidden roads that transport people to the sky kingdom in the clouds above. Under the Rug: A worn and frayed Carpet of Flying struggles beneath a boulder after a bitter"
      },
      {
        "roll": 9,
        "title": "disagreement with its previous owner",
        "description": "It telepathically speaks Common and is hesitant to serve anyone new after its mistreatment. It knows the location of its Archmage creator at all times. Fair Trade: A tribe of living cacti stand firm in the desert, calling out to the party to come"
      },
      {
        "roll": 10,
        "title": "speak to them",
        "description": "They offer their fruit to the party in exchange for news from the outside world, though they know the fruit may have unusual effects on its consumers. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Farmlands": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "the newcomers to join their family for lunch",
        "description": "The mother explains the farm has been in her family for generations, and they hope to continue the tradition as long as they can. The children are polite and curious, asking many questions about the party’s adventures. Local Produce: A group of Humans lounge in a produce stand near a busy road. They politely"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "ask the party not to linger, but they are happy to strike a fair deal for their goods while they dispense folksy wisdom and espouse the importance of traditional values. Bemusement fills their faces whenever anyone discusses the world beyond this region. Desperate Alchemist: A travelling alchemist is having a difficult time selling her wares. The"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "locals don’t have much use for anything beyond elixirs for helping crops grow and tinctures to heal wounds, leaving her with a bunch of ‘boutique’ oils and potions that will spoil soon. She’s willing to offer them at a great discount… but is this sale too good to be true? Mistaken Identity: The party is treated with overwhelming hospitality by the locals, but it"
      },
      {
        "roll": 4,
        "title": "seems a little forced and desperate",
        "description": "There is a local bandit king that has promised to punish the farmers if they can’t meet their tithe quotas and the locals mistake the party as enforcers. The party may wish to bask in this misunderstanding, though the locals are truly terrified. It’s a Steal: A bedraggled man approaches and pleads with the party to buy his family’s"
      },
      {
        "roll": 5,
        "title": "heirloom necklace",
        "description": "The necklace is extremely valuable and if pressed, he readily admits to having stolen it, pleading again for them to take it off of his hands at any price. The necklace is actually cursed. Blessed News: Two jovial young women in simple dress offer the blessings of their goddess"
      },
      {
        "roll": 6,
        "title": "upon the party",
        "description": "They offer information about the area, compliment the party on their skills, and emphatically extol the virtues of their deity. Regardless of the party’s interest, the women offer informative pamphlets and assure them that all are welcome to worship. Class Act: Passing through a cluster of farmhouses, a Halfling school teacher calls out to the"
      },
      {
        "roll": 7,
        "title": "party",
        "description": "They insist the party stay for an interview with their students, informing them of life outside the village, and to warn them of the dangers lurking just outside the farmlands. Cottage Industry: A kindly Elf calls out to the party, lamenting their lack of fashionable"
      },
      {
        "roll": 8,
        "title": "headwear",
        "description": "She ushers them into her busy home, where a team of workers craft a multitude of hats. Speaking with each member of the party, she creates unique hats for each of them, banking on the free advertisement a group of adventurers would provide. The Tax Collector: A local tax collector greets the party as he approaches them. Assuming"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "they aren’t local, he asks them to accompany him on his rounds as the locals are quite adverse to paying him. He offers them a reasonable fee for their services, neglecting to mention the tax increase that the lord of the land has imposed this year. The Entertainer: The party encounters a travelling entertainer who is approaching a village. She"
      },
      {
        "roll": 10,
        "title": "pays her room and board in trade by playing her lute and singing for the locals",
        "description": "Unfortunately, she’s had a good run with songs critical of the current rulers, unaware she is about to sing for a village that is very pro-regime. ENCOUNTERASN: CFAIERNMT LRAUNINDS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "years ago",
        "description": "The surrounding fields lie fallow, and there are no signs of life. Beneath the wreckage and debris lie the intact doors to a root cellar. Its stocks aren’t prolific or perfectly preserved, but some of the stashed bottles of moonshine may be salvageable. Squirrelled Away: A glint of light alerts the party to a squirrel darting across their path. It"
      },
      {
        "roll": 2,
        "title": "leaps into a nearby tree, disappearing within",
        "description": "Minutes later, the squirrel leaves again, creeping into a nearby field. Inspecting the hollow in the tree reveals the squirrel’s nest. Though filthy, it’s replete with small trinkets presumably pilfered from the nearby farms. Exotic Cuisine: The party comes across a local rancher that is only too happy to sell them new"
      },
      {
        "roll": 3,
        "title": "provisions",
        "description": "While they have heard this pitch before, they do feel rather hungry. Unfortunately, his ‘livestock’ is made up of giant domesticated spiders. If the party can stomach them, they are quite tasty and filling when properly prepared. The Wellspring: The party arrives in a town that has a public well from which water may be"
      },
      {
        "roll": 4,
        "title": "drawn",
        "description": "When a bucket is lowered and water retrieved, they discover that a valuable ring has come up with it, along with the remnants of the hand that held it. Unfortunately, none of the townsfolk are eager to offer any information about either the ring or the hand. Golem Revolution: The party finds a wealthy plantation worked entirely by Stone Golems."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "The dwarven owners explain how the golems require neither rest nor food, thereby not only providing food for their village but wealth for their family in particular. The party can incite the golems to revolt, though the village will face a significant food shortage next season. Windswept Farmstead: A semi-collapsed farmhouse stands alone, its fence ripped from the"
      },
      {
        "roll": 6,
        "title": "ground and strewn haphazardly around it",
        "description": "Inside, farming implements and stored dry goods are recoverable along with a tiny pair of silver shoes, which have the same properties as a pair of Boots of Speed. Fertile Game: Even a cursory look at the untilled areas around the farm reveals a variety of"
      },
      {
        "roll": 7,
        "title": "wildlife suitable as game",
        "description": "Hares, squirrels, and deer are abundant. Setting traps in this area catches enough game to feed the party without the need for a Wisdom check, and a Wisdom (Survival) check nets double the usual total. The Cache: Many years ago, this farmland was a pivotal fallback position for an army. Many"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "weapons and provisions were stored here, and while most have either been eaten or long rusted away, the arms and armour remain. Hidden in the barns or buried in shallow pits there are a few pieces of valuable gear amongst them. Ashy Grove: The party happens upon the remains of a burnt orchard, with scorched trees that"
      },
      {
        "roll": 9,
        "title": "have been turned a variety of strange colours",
        "description": "An Intelligence (Arcana) check will reveal that the orchard was destroyed by a powerful spell. Some scorched fruits still grow on several of the trees. Despite their outward appearance, they taste wonderful. One Bandit’s Trash: A carriage sits still in the road, provisions piled up in the back. At the"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "front, the fresh corpse of a Human is keeled over, an empty coin purse discarded on the ground. All the signs of a highwayman attack are clear, but they were only interested in the money. The provisions, and the Horses that pulled them, are free for the taking. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "scarecrow, the field’s self-proclaimed king, with hundreds of crow courtiers",
        "description": "The Outrider must make a Charisma (Persuasion) check to convince the xenophobic creatures not to drive the party out forcefully. Waterspout: Water sprays violently from a stone well near the roadside, flooding the entire area. A raging Water Elemental is bound within the well, nonplussed at its inability to escape."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "The Outrider must make an Intelligence (Arcana) check to soothe the enraged creature or release it to its home plane, mitigating the obstacle’s intensity before it harries the party too severely. Storm Waters: The party arrives in a small village in the midst of a terrible thunderstorm."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "Deciding to wait out the weather in an inn, a dam breaks during the night and the entire town is flooded. Trudging through the waters requires a Constitution (Athletics) check, but the party may wish to stay and help the flooded farmers. Riddle Me This: The party meets a farmer who pesters the party until they stop and have a drink"
      },
      {
        "roll": 4,
        "title": "with him",
        "description": "He offers the Outrider several riddles, requiring an Intelligence (Investigation) check. While playing, it’s soon obvious that this is more than just a good-natured game and that this is no ordinary farmer, but a Satyr in disguise! Blockhead Blockade: Two Halfling caravans block a crossroads, their leaders ferociously"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "arguing over whose family the road belongs to and which caravan has right of way. This is an ancient blood feud. The Outrider must succeed on either a Charisma check of their choice to ease tensions or succeed on an Intelligence (History) check to determine the true owner. Bramble Wood: The road winds through a thicket of trees that is choked with brambles. The"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "Outrider must succeed on a Strength (Athletics) check to move aside the weeds and clear a Stampede!: The party is walking down a path between farms when the cattle on one side are"
      },
      {
        "roll": 7,
        "title": "disrupted by a wolf that has entered the farm",
        "description": "Panicked, the cattle stampede, easily breaking through the wooden fence and threatening the party. Dexterity Saving Throws are necessary for the party to leap out of the way of crushing hooves. Broken Wagon: A broken wagon lies in the centre of the road, blocking the passage of all but"
      },
      {
        "roll": 8,
        "title": "foot traffic",
        "description": "Characters with horses or wagons need to remove the broken wagon first, which can be accomplished via a Strength check or by repairing the wagon with the appropriate tools. Silent Treatment: The hungry party happens upon a farming village where absolutely nobody is willing to look at them, much less talk to them, or acknowledge their presence in any way."
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "If the Outrider succeeds at an Intelligence (Religion) check, they deduce this behaviour is connected to an old superstition regarding strangers. If they return the following day, everyone’s very friendly, being no longer unknown to the village. Toll Booth: An oppressive baron of the area has imposed a toll for the roads ahead, which"
      },
      {
        "roll": 10,
        "title": "the militia under his thumb is keen to collect",
        "description": "The toll is 5gp per head to pay, but a successful Charisma (Deception) check from the Outrider can trick the militia into thinking the party has already paid the toll to another guard on the road. ENCOUNTERASN: CFAIERNMT LRAUNINDS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "farm amidst the battlefield they fought each other upon decades prior",
        "description": "Blood no longer waters the fields, nor does rain, but if the party helps them carry water from a distant creek with a group Strength (Athletics) check, this year’s harvest might get them through the winter. Today an Ox, Tomorrow a Family: A field lies half-furrowed, the plough on its side mid-row,"
      },
      {
        "roll": 2,
        "title": "still yoked to a dead ox",
        "description": "The farmer’s family gathers nearby, worrying how they will finish the work without missing the impending season. The party can help finish ploughing the field with a group Constitution (Athletics or Nature) check. Danse Macabre: The party comes upon an isolated village in the midst of a festival. Everyone is cheering, singing, and dancing, yet looking closer reveals that no one in the village is happy."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "They are being magically forced to perform the festival in retribution for some trivial slight against the woodland fae. A group Charisma (Performance) check can appease the casters, relieving the village of their dancing duties. Unnatural Growth: A strange plant has infested a worried farmer's fields and it is taking over"
      },
      {
        "roll": 4,
        "title": "like an ornery weed",
        "description": "Worse, the plant is spreading into other farms, causing friction amongst the farmers. A group Wisdom (Nature) check can cut the plant strategically before it spreads, but this dissection indicates that the unnatural plant is not of this plane. Chasing Chickens: A Gnome farmer requests help repairing their broken henhouse and recapturing their scattered chickens. A successful group Wisdom (Animal Handling) check"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "recovers the chickens with ease while a successful group test with Carpenter's Tools fixes the coop for an extra reward. The Gnome offers them thanks with a warm bed for the night, a roast chicken dinner, and a dozen eggs for their help. Wolf in the Henhouse: A suspicious father requests the party watch his daughter who he believes has welcomed unwanted visitors into her bedroom, noting tracks outside her"
      },
      {
        "roll": 6,
        "title": "window",
        "description": "Characters speaking to the daughter and succeeding on a Wisdom (Insight) check or examining the tracks and succeeding on an Intelligence (Nature) check discern she is a Werewolf and has been sneaking out for her family’s safety. She offers a silver necklace for the party’s silence. Out of the Bag: A cat demands the party’s attention before speaking, revealing herself to be a cursed villager who had an affair with a farmer, only to be caught by his wife and transformed"
      },
      {
        "roll": 7,
        "title": "to hunt mice on their farm",
        "description": "She has slowly gathered all the components to reverse the curse, but due to her lack of opposable thumbs, needs the party to perform the ritual with a Intelligence (Arcana) check. Entitled Goose: A particularly aggressive goose is pestering a farmer, stealing small, but"
      },
      {
        "roll": 8,
        "title": "vital items, such as keys, purses, and tools",
        "description": "Exasperated, they ask for help, requiring a group Strength or Dexterity (Animal Handling) check to chase, wrangle, or outmanoeuvre this pesky poultry, ending its reign of terror. Stuck Helper: A farmer screams at the party for help as a Clay Golem stands in the middle of"
      },
      {
        "roll": 9,
        "title": "the field doing nothing, no matter what orders it is given",
        "description": "As it turns out, the golem has sunk into a muddy hole and doesn’t know how to get out. A group Strength (Athletics) check is necessary to pull it free. Quick Save: After a bad thaw, several farms need assistance as a nearby river is overflowing."
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "The party can help each farm by making a group Intelligence (Nature) check to determine the best way to build barriers to channel the water where it needs to go. A separate group Constitution (Athletics) check is necessary to build the structures. 97 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "the local lord is treating their peasants poorly and have been declared outlaws",
        "description": "Unfortunately, they tend to behave as such and a well-equipped party makes for a tempting distraction. Bandits surround the party as their leader demands their money, to pass onto the poor. Pillagers: Soldiers from a travelling army invade the village and demand food, board, and"
      },
      {
        "roll": 2,
        "title": "supplies",
        "description": "These Thugs are pretty aggressive and won’t take ‘no’ for an answer. Should a character react or even simply give them a dirty look, the soldiers decide to make an example out of them. Fortunately, the soldiers don’t realise that they’ve bitten off more than they can chew. One Way or Another: A well-fortified village is under siege by bandits and they appeal to"
      },
      {
        "roll": 3,
        "title": "the party for aid",
        "description": "These bandits seem to understand the village’s defences very well and are bleeding them dry. Turns out the ‘bandits’ are irate workers that built the wall for the village, only to be denied their full payment. Strange Tribute: The countryside is plagued by a Wizard in the hills. They implore the party"
      },
      {
        "roll": 4,
        "title": "to destroy him, offering a secret entrance into his fort",
        "description": "Unfortunately, the country folk are actually in league with the wizard, sending him well-equipped victims to trap and pilfer. Some goods are sold on the market, while others he keeps for himself. Bountiful Starvation: A village with a wealth of flourishing crops is somehow full of starving villagers. They inform the party they do not own their land and are forced to send all of their"
      },
      {
        "roll": 5,
        "title": "food to the nobles, leaving only small gardens for themselves",
        "description": "Unfortunately, the guards have recently decided small gardens take too much time away from their real work and banned them, tearing these precious plots to shreds. Plague on Their Houses: A farming village is overrun with wild animals and plantlife,"
      },
      {
        "roll": 6,
        "title": "choking the crops",
        "description": "The farmers are ill with a mysterious necrosis only affecting humanoids. Investigation reveals a circle of Druids are reclaiming the land for the local animals and, of course, their circle. River Uprising: The watchman of a village and his villagers beg the party for assistance in"
      },
      {
        "roll": 7,
        "title": "dealing with the ongoing raids they have endured from a band of Lizardfolk",
        "description": "They fail to mention that the Lizardfolk are angry at them for partially redirecting a nearby river to irrigate their fields, leaving the Lizardfolk’s downriver village a mudhole. Lottery Day: The party finds a village in the midst of a local celebration. Everyone seems to"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "be in a fantastic mood, except the ‘winner’ of a recent contest who looks miserable. The locals dissemble about what’s really going on, but the winner will be sacrificed to ensure a good harvest. If the party wishes to intervene, the farmers are all effectively Cultists. Village of Spores: The party encounters a small Dwarf village, seemingly abandoned in great haste. Tools lie where they were dropped, and meals stand unfinished. Stricken villagers are"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "found milling about the fields, covered in bulbous mushroom growths, victims of a magical fungal bloom triggered by working the soil. At first docile and insensate, the villagers react with mindless violence upon sighting the party. Protectors of the Realm: A band of Knights on horseback trot towards the party, believing them to be the group of bandits they were warned would be coming down this road. Though"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "clearly strong, these knights don’t seem too smart and are convinced the party are villains. Winning a contested Charisma (Persuasion) against their Wisdom (Insight) at Disadvantage will convince them otherwise. ENCOUNTERASN: CFAIERNMT LRAUNINDS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "water as the wind blows through the shallow valley",
        "description": "The farmer and their homes are nowhere to be seen, creating the illusion of a golden ocean stretching near to the horizon, catching the majesty of the setting sun in glimmering waves. Getting Comfortable: The ground ahead rumbles and splits, then rises above the surrounding"
      },
      {
        "roll": 2,
        "title": "land as a vaguely humanoid giant pulls itself out of the earth",
        "description": "Large enough that several farms remain fully intact on its back, it stretches and yawns before plodding off, only to lie down again between two nearby hills, relocating the farms with minimal harm. Flying Fish: A strange creature native to this countryside are flying fish that ‘swim’ through"
      },
      {
        "roll": 3,
        "title": "grains and grasses, occasionally flying through the air as they feed",
        "description": "They are natural pests to the locals, who often go ‘fishing’ to thin the schools that plague their fields. Unfortunately, the party may discover that similarly adapted sharks also plague the fields. Magic Lens: For as long as anyone can remember, the sky above the countryside has been"
      },
      {
        "roll": 4,
        "title": "enchanted",
        "description": "It has no effect on those below, but on clear nights it changes the colours of the stars, providing those viewing it with a brilliant multicoloured display. An Intelligence (Navigator’s Tools) check indicates that there’s a pattern to the colours that suggests a map. Truffle Hunters: A forested commune is a welcome spot for culinary-minded visitors, boasting"
      },
      {
        "roll": 5,
        "title": "fine cuisine and honey mead",
        "description": "The friendly proprietors are a Werebear and Wereboar couple who, along with their large family, excel at beekeeping and truffle hunting. Mystic Orchard: Delightful scents beckon from the fruits of an ancient orchard, their knotted"
      },
      {
        "roll": 6,
        "title": "trees winding skyward and creating verdant archways",
        "description": "The fruit from this orchard is believed to have provided prophecies, started wars, and opened the minds of ancient people. Will the characters take a bite? Bulette Train: A thriving farm boasts beautifully ploughed fields replete with bountiful crops, the result of an ingenious and brave farmer’s new technique. Trained Bulette plough through"
      },
      {
        "roll": 7,
        "title": "the soil, breaking up stones and mixing the earth to ensure fertile ground",
        "description": "Seeing them swim through the land in perfect formation is a sight to behold, though their deadly nature may leave some fearful of a nasty bite. Faerie Fields: The grain stalks of these fields are multi-coloured and the party can see swirling"
      },
      {
        "roll": 8,
        "title": "patterns from high points on the ground",
        "description": "While an interesting sight, the grain itself is normal. Long ago, the farmers helped a fey lord who enchanted their fields as a gift. Their grain grows full every season and the ground is always fertile. Terrible Punishment: The fields of this village are “protected” by scarecrows that are actually"
      },
      {
        "roll": 9,
        "title": "criminals",
        "description": "The party sees prisoners tied to a field post as a human scarecrow to keep the crows away. Each post is enchanted to deliver a slight shock whenever birds draw near to induce the prisoner to scream and scare them away, an awful sound to accompany an awful sight. Domestic Sprinkler: A small, dark cloud hovers low above a farmhouse, wrapped in chains"
      },
      {
        "roll": 10,
        "title": "that leash it to the ground",
        "description": "The farmer can be seen dragging the cloud across his fields, tugging on the chain to squeeze the water out like a sponge. A Wisdom (Nature) check can reveal the cloud as a Water Elemental and Air Elemental entwined together and somehow tamed. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "has been replaced by a Doppelganger who plans to gorge himself on the farmhouse supplies before moving to the next house. Fortunately, it has only imprisoned the family rather than killed them, but if the party doesn’t act it will do so before moving on. Diabolic Contract: A Halfling farmer has been having incredible luck growing crops during"
      },
      {
        "roll": 2,
        "title": "a bad season",
        "description": "Unfortunately, it’s because he made a pact with a devil. During the night, Hellhounds are unleashed to roam free. It is up to the party to protect the town from these hellish creatures and root out the source. Footprints: Someone’s been stealing livestock and the farmers believe it to be the work of"
      },
      {
        "roll": 3,
        "title": "a nearby Giant",
        "description": "They’ve hired the party to find the giant and either destroy it or otherwise convince it to leave the farms alone. Unfortunately, a Wisdom (Survival) check indicates that these are not giant footprints, but an unnaturally huge Ettin. Not Our Problem?: While camping, one of the party notices a Gorgon some distance away."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "The creature poses no threat to the party, but it appears to be heading towards a farm with a family that was friendly to the party. Unless the party is roused and follows the Gorgon, it will likely kill the family. Eggstra Harvest: Excited farmers report a massive speckled egg among their hens’ nests. A"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "successful Intelligence (Nature) check reveals this is not an extra special chicken egg, but a Cockatrice egg about to hatch. Sprite Stronghold: Ominous chittering carried by the wind spooks local farmers who point to"
      },
      {
        "roll": 6,
        "title": "their rusted tools as evidence of a curse",
        "description": "Following the path of verdigris sludge leads to a Rust Monster ranch tended by Sprites. None of them appreciate company, though they are happy to liberate the party of any iron they carry. Nobody’s Picnic: The party is invited by some farmers to join a local drinking festival. Because many different types of wine and liquors will be on hand, weapons are to be checked to avoid"
      },
      {
        "roll": 7,
        "title": "accidents",
        "description": "Unfortunately, this means no one is armed with anything more than daggers when a furious swarm of Ankhegs erupts from the ground to stop all the noise from the drunken carousing. Storm Born: Farmers claim that one of the fields they left fallow this season has been haunted since a massive storm and now a terrible spirit resides within it, attacking any that dare trespass"
      },
      {
        "roll": 8,
        "title": "upon it",
        "description": "They would be extremely grateful to any willing to exorcise the field, offering supplies for seasons to come. The field isn’t haunted however — the storm’s lighting awoke a Shambling Mound. What’s Cooking?: The sour scent of burning crops brings the party to a deep sinkhole between fields. Out of this fissure in the earth comes a long, winding line of jaunty Magmins. Their"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "migratory path brings them across fields of valuable wheat surrounding a small market town. If their destructive course is not stopped or deflected, the year’s harvest will be destroyed by their trailing flames. Wolf In Sheep’s Clothing: A sheep farmer requests aid from the passing party, claiming"
      },
      {
        "roll": 10,
        "title": "something is killing his sheep every few nights",
        "description": "Staking out the farm at night or a successful Intelligence (Nature) check will reveal one of the sheep is actually a Mimic. As thanks for disposing of the culprit, the farmer will reward them with modest payment. ENCOUNTERASN: CFAIERNMT LRAUNINDS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "country inn",
        "description": "The halfling is a Druid and vegan. His dishes are as unique as they are tasty; there is no one for miles around who can cook vegetable dishes like he can. He also brews a delicious and very satisfying beverage that he calls a ‘root beer’. A Proposition: A farmer approaches the party with a proposition. She offers free room and"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "board if they spend the night in her barn and discover what is eating the livestock at night. It turns out to be a pack of Giant Hyenas, as the party are woken by the cackling of the creatures and their slavering jaws. Not Quite Abandoned: The party finds the ruins of an old outpost on a hill amongst the farms,"
      },
      {
        "roll": 3,
        "title": "an ideal place to spend the night",
        "description": "Unfortunately, not all is as it seems. As the party makes camp, a Wisdom (Perception) check spots almost imperceptible markings on the walls. This outpost belongs to something intelligent that is slipping past the farmers unseen. Battle of the Bards: The party comes across a roadside inn with a friendly Half-Orc proprietor."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "She offers them free room and board if they can regale her other patrons with tales of their travels. Should the party agree, the regular tavern bard soon arrives and challenges them to a singing duel. Kiss Goodnight: A tavern is brimming with jovial but strangely dead eyed guests. The"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "handsome proprietor (a disguised Incubus) welcomes the party in, assuring them that once they settle in, they will never want to leave. Counting Sheep: A sheep shed appears to be a cosy, if noisy, place to bunk down for the night."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "The nearby farmstead shimmers in the dark, as if not truly on the material or ethereal plane. The Night Hag living there is eager to have overnight guests. Any Port in a Storm: A thunderous downpour sends the party hurrying for shelter. Sighting lamplight and following raucous voices, they find, under a low hill, a bar crammed with"
      },
      {
        "roll": 7,
        "title": "Kobolds",
        "description": "The merry clientele are welcoming, offering a peculiar metallic-tasting ale (potable on a successful Constitution check) and rest for the night. Of course, party members may find certain belongings missing in the morning… Smoky Lodgings: An old abandoned barn, clearly once used as a smokehouse judging by"
      },
      {
        "roll": 8,
        "title": "the aroma, offers the only shelter for miles",
        "description": "The main area of the barn has a hayloft, where a large flattened patch amidst the hay indicates that something very big has slept here regularly. Whatever it was, it does not seem to have been here recently. Oak Inn: Out on the edge of a vast farmland the party discovers an oak tree so massive, a"
      },
      {
        "roll": 9,
        "title": "family of Halflings have carved a small hostel within it",
        "description": "While it is cramped for bigger folk, their scrumptious meals more than make up for the inconvenience. Their hosts confess they are still worried about a Blood Hawk roost they drove out in order to start the inn. Hitchhike: A Centaur is pulling a carriage of hay bales and offers the party a ride in the back."
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "The well-travelled road is smooth and their destination is far enough for the party to have a pleasant nap on the hay. Though these roads are often peaceful, they are notorious for the occasional stick-up from bands of highwaymen. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "important, but over time its status was reduced to the point where the local nobles moved elsewhere. No villager dared claim the castle, so it has been crumbling on a nearby hill ever since, occasionally being occupied by bandits or monsters. The Red Weed: A strange weed affects the local farms. It randomly sprouts and, when it does,"
      },
      {
        "roll": 2,
        "title": "it quickly overruns the fields, destroying the crops",
        "description": "Despite its ruinous nature, the weed isn’t particularly troublesome and a good day or two of weeding eliminates it. Locals speculate that it may have been a food source for a forgotten monster. Echoes in the Land: The party comes into possession of an ancient map of an old city with"
      },
      {
        "roll": 3,
        "title": "hidden treasures",
        "description": "When they arrive at the site, they discover a village and farms that follows the old city streets, though none of the locals realise, making it an awkward prospect to dig up their land! Hold the Wall!: A group of militia are going through their drills before standing guard along the remnants of a ruined wall that lines one side of a valley. While there hasn’t been a threat"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "from the other side in over a century, the militia still dutifully perform their duties, shooting the occasional rabbit or pheasant, and its leaders have old titles and honours gifted during a half-forgotten war. Petrified Woods: A forest of stone Treant statues stand in combat formation. A reminder of"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "an ancient war with a Medusa? Digging up the earth reveals the Treants still have living roots and could possibly be revived. If they still believe themselves to be at war however, doing so could be dangerous. Vanished Village: An empty village on a river is perfectly preserved, as if everyone"
      },
      {
        "roll": 6,
        "title": "simultaneously vanished",
        "description": "Anyone spending the night in the village reports dreams of drowning and hears faint singing, accompanied by distant screams for several days. Dutiful to the End: The party encounters a flooded plain that was once covered centuries"
      },
      {
        "roll": 7,
        "title": "ago by fertile farmland",
        "description": "Under the placid water a dozen Clay Golems still carry out their daily tasks, reaping non-existent wheat and milking long-departed stock. Whatever powerful source of magic maintains the automatons still exists, somewhere beneath the water. The Old Ones’ Clock: All the farms within a day’s journey use an old series of menhir rings covered with various astrological symbols to accurately predict the coming weather. Those"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "that earn their trust will be shown the ‘real’ clock – an ancient tarnished device beneath the menhirs with far more disturbing sigils, which they claim warns when dangerous alignments between the planes will occur. Galloping Fields: A series of small tremors routinely shake an otherwise quiet area of farmland,"
      },
      {
        "roll": 9,
        "title": "causing minor damage",
        "description": "After returning from an adventure at exactly the right angle over the surrounding hills at twilight, the party perceives that the entire farm was laid out long ago in the shape of a herd of running horses, the careful labour of a century or more. Wishing Tree: A withered tree stands alone amidst a valley of crops. Though barren of leaves, an abundance of ribbons and trinkets hang in their place. Upon closer inspection, these gifts"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "are inscribed with wishes and prayers in all kinds of languages, weather-worn but still firmly attached. Any sign of the deity this tree was used to worship is long gone, but the sentiment remains. ENCOUNTERASN: CFAIERNMT LRAUNINDS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "trudge toward their farmhouses in the distance",
        "description": "Defeat and perhaps something darker hangs over them like a pall. A mile further, the party finds iron manacles bolted to a granite plinth, both spattered with still-wet blood and surrounded by dozens of fist-sized stones. Scorched Earth and Salted Fields: Smoke rises from a smouldering farm, its buildings razed"
      },
      {
        "roll": 2,
        "title": "and the fields salted",
        "description": "While the lack of corpses at first seems fortunate, the party quickly finds evidence that the farm was destroyed at the hands of at least a hundred creatures, and the lack of bodies can mean only one thing. The Hole: The country folk are all friendly and approachable, especially when encountered in"
      },
      {
        "roll": 3,
        "title": "the local tavern",
        "description": "A Wisdom (Survival) check reveals that there is one spot of good soil that no farmer will till, and if questioned they only respond that ‘the hole is there.’ It’s obvious that no one knows exactly what is in the hole, but they are all terrified by it. Infernal Unicorns: A local community is being slowly abandoned, as outlying farms are slowly"
      },
      {
        "roll": 4,
        "title": "being slaughtered by piercing adversaries",
        "description": "It soon becomes apparent that these are Unicorn attacks, but why would lawful good creatures do this? The answer may lie in the twisted woods they call home, woods that slowly encroach back onto the ‘cleared’ farmlands. Blood Fruit: A downtrodden village offers ‘blood apples’ for sale, noting they only grow on a"
      },
      {
        "roll": 5,
        "title": "hanging tree",
        "description": "The village, positioned at a waypoint between several outlying communities, is where the local nobles perform all their executions. The grove of hanging trees thrives on the blood that drips down from the poor souls left to rot among their branches. Sheep Slaughter: Ravaged and gutted sheep lie rotting for miles across the fields. Reaching the"
      },
      {
        "roll": 6,
        "title": "centre of the slaughter, “beware of wolves” is written on a sign in blood",
        "description": "As the party move on, the sun begins to set, and the howling begins. The Whisper Tree: There is an old tree in the woods that no local will go near, as it is reputed"
      },
      {
        "roll": 7,
        "title": "to be haunted",
        "description": "An old Ghost is anchored to the tree and can’t rest until a wrong is righted. Should the party investigate the tree, the ghost curses them until they make the descendents pay for their forebears’ crime. Sanctuary: On the night of the full moon, the farmers and villagers gather in their country"
      },
      {
        "roll": 8,
        "title": "temple to pray all night long",
        "description": "They claim that anyone that doesn’t pray inside with them is in danger. The party is free to join or ignore their pleas, but there is a good reason; a pack of Wereboars roam at night and the creatures are warded off by the temple’s holy ground. The Deluge: The party encounters a drenched village whose surrounding fields have been"
      },
      {
        "roll": 9,
        "title": "destroyed by a seemingly endless downpour",
        "description": "Once they ply the morose and sodden farmers with enough of the local rotgut to finally get their tongues wagging, they tearfully whisper that they prayed for rain to the wrong god. Reaper’s Harvest: On the not-so-distant horizon, skeletons walk through barren fields of"
      },
      {
        "roll": 10,
        "title": "tilled soil with a silent and stoic purpose",
        "description": "Though devoid of crops, they swing scythes toward the earth as if harvesting something unseen. With each wide cleave, faint sounds of tearing flesh are carried by the cold wind that chills the party to the bone. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "more fertile soil",
        "description": "This has upset a local druidic cult, who’ve decided to wipe out the farmers in response. Led by a Druid, these Cultists attack the nearest farm just as the party is passing by. Hunters: Whether staying at an inn or a farmhouse, the party is joined by another guest, an"
      },
      {
        "roll": 2,
        "title": "exhausted Scout who escaped an underground prison",
        "description": "Unfortunately, her captors won’t allow her to escape and have sent Driders in the night to reclaim her. The party finds themselves under siege as the driders have orders not to leave any witnesses alive. Not Quite Eagles: Local ranchers ask the party to help them deal with a giant eagle problem."
      },
      {
        "roll": 3,
        "title": "The eagles are swooping down during the night and snatching cattle",
        "description": "If the party agrees, they discover that the ranchers are mistaken; the culprits aren’t giant eagles but Wyverns! Worse, they are pets of a Stone Giant who comes after anyone that harms them. Look What I Found!: While spending the night at an inn, the party meets a farmer who dug"
      },
      {
        "roll": 4,
        "title": "up a strange object while ploughing",
        "description": "This proves to be a curse, as Wights rise from the local cemetery to reclaim the object. The inn finds itself under siege as they attempt to kill anyone who’s even seen the object. Fertiliser Fight: A long-standing feud between two farmsteads has become dangerous to"
      },
      {
        "roll": 5,
        "title": "everyone",
        "description": "One farmstead has cultivated magical fertiliser with the unfortunate byproduct of creating Shambling Mounds. The other has captured a pair of Blue Dragon Wyrmlings for protection and lets them roam unimpeded. Walk Behind the Rows: Several young farmers eagerly invite the party to participate in their"
      },
      {
        "roll": 6,
        "title": "harvest celebration",
        "description": "The “celebration” is a sacrifice to a Otyugh who the farmers believe keeps them safe from outside influences. Stalked by Scarecrows: The party notices a field with far more scarecrows (use the Flesh"
      },
      {
        "roll": 7,
        "title": "Golem entry) than necessary",
        "description": "The party are unwittingly herded into a darkened farmhouse where they notice the bodies of the previous occupants, their mouths stuffed with straw. During this discovery, scarecrows stare through each window, ready to attack. Extra Crispy: Farmers have been waking up to their guard dogs, sheep, cows, and horses having all been ripped apart, gorged upon, or burnt to a char late at night – though their goats"
      },
      {
        "roll": 8,
        "title": "are never touched and no one has ever heard a thing",
        "description": "They beg for the party’s help in stopping whatever fiend is responsible; a wickedly clever Chimera with a magic ring that lets it cast Silence once a day. The Blight Eternal: Farmers the party are friends with come to them, terrified, claiming an ancient evil has once again returned to menace their people. The party finds an entire village"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "obeying the whims of a young girl with glowing green eyes, who immediately demands their obedience, threatening terrible retribution if they defy her — she is the dominated emissary of a vicious Spirit Naga. The Rusted Knight: A lost Knight stumbles toward the party, his full plate so rusted so that any"
      },
      {
        "roll": 10,
        "title": "crest is undistinguishable",
        "description": "Grumbling incoherently, he seems to be overcome with madness. Cursed to never rest, he recovers 8d8 hit points shortly after ‘death’. A successful Intelligence (History) check recalls rumours of this curse, and a Remove Curse spell will grant him peace. ENCOUNTERASN: CFAIERNMT LRAUNINDS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "breeding and magic to exclusively raise giant animals",
        "description": "He’s happy to reprovision the party with whatever they need especially if they can gather rare herbs for him that happen to be in the areas that they plan to travel. Problem Mounts: A Wood Elf known as a renowned breeder is raising Hippogriffs as mounts"
      },
      {
        "roll": 2,
        "title": "for nobility",
        "description": "Despite living a rustic life, she knows a lot about the intrigue and machinations of regional politics. She is also willing to sell Hippogriff mounts to the party at a reduced price, with the caveat that these Hippogriffs are bad tempered, and loathe to take training. The Statue: There is a statue in the centre of the village. It seems out of place in the otherwise"
      },
      {
        "roll": 3,
        "title": "rustic setting and no one seems to know anything about it",
        "description": "No sooner does the party approach the statue than it animates, offering them cryptic useful clues before offering them a magic item. It then returns to stone having delivered its peculiar gift. I’m Retired Now: The party meets a Elf who is a former resident of the nearest major city, but"
      },
      {
        "roll": 4,
        "title": "they’ve long since retired and made amends for any wrong-doing",
        "description": "He now prefers the simple life of a village blacksmith, but he’s more than willing to share any secrets or useful information he has for a drink and good company. Barn Raising: The party is invited to a barn raising overseen by an exceedingly beautiful"
      },
      {
        "roll": 5,
        "title": "couple",
        "description": "The couple are Vampires who have “farmed” the local population for centuries. They are happy to provide knowledge or succour, for a price of course. Cattle Colony: Herds of Cats welcome the party to a massive barn filled with Panthers in"
      },
      {
        "roll": 6,
        "title": "large stalls",
        "description": "The felines are overseen by a Minotaur researcher determining how best to teach assorted felines to navigate mazes. She is happy to offer maps, knowledge, or even feline mounts to anyone who proves capable. The Property Bubble: Perambulating about in his own personal sphere of water, a Merfolk"
      },
      {
        "roll": 7,
        "title": "estate agent is looking for land suitable for his irrigation schemes",
        "description": "He is eager to pay those willing to assist in clearing the land of uncooperative farmers. If the party resists him, or his plans are irreparably derailed, there is always the option of flooding the desired area. Runs Like Thunder: Some villagers ask the party to act as their go-between to an individual they admire, but also admit they fear – a Ranger famous for her hot temper. The farmers"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "neglect to mention the ranger is a Centaur who wears beautifully engraved wooden plate armour and that she is angry because they broke their agreement to not expand their fields into the local woodland. The Rain Maker: The party meets a man that all the local villages are in absolute awe of,"
      },
      {
        "roll": 9,
        "title": "treating him with a nervous reverence",
        "description": "For the right fee, he is said to be able to bring much needed rain. Rumour also whispers that he can redirect the rain from rival villages to yours for an even higher fee. No one knows how he accomplishes this wondrous act. Extended Warranty: An odd looking Gnome pops up from seemingly nowhere, asking the"
      },
      {
        "roll": 10,
        "title": "party if they have been in any vehicular accidents lately",
        "description": "He implies they can earn large sums of gold if they report any collisions after signing for his insurance, hiding the fact he is actually an Imp in disguise who makes countless contracts imbued with curses. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Forests": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "than they already have",
        "description": "They berate the party over the many seemingly minor transgressions the party has committed against nature: startling the birds, scaring away the herbivores, and disturbing the flowers. Green Party: A singing Satyr has set up a long table in the middle of a glade. Lying next to"
      },
      {
        "roll": 2,
        "title": "it are his current party guests",
        "description": "the forest’s many plant eaters. The Satyr gladly welcomes these new guests to join the party and partake of the feast, though they may not find leaves and grass to be all that palatable. Stolen Name: A female Half-Elf approaches the party, demanding to know if they know who"
      },
      {
        "roll": 3,
        "title": "she is",
        "description": "Rather than hubris, she asks out of genuine confusion, not knowing her own name after an encounter with a Fey while she was out cutting wood. The Floor is Lava: A cry of alarm comes from above the party. Rather than an ambush or"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "attack, they can see the shocked expressions of a group of Forest Elves hiding in the treetops. They express their concern and amazement that the party is able to survive on the ground, having always believed it to be deadly. Barking Up the Wrong Tree: A Dryad is having an argument of some sort with a tree. She"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "will only half explain what is going on, throwing snarky remarks at the tree all the while, but as the party cannot innately hear what the tree is saying, her ravings tell only her side of the story. Friendly Flowers: Walking through a flower filled glade, a voice calls out in greeting, though"
      },
      {
        "roll": 6,
        "title": "its source is nowhere to be seen",
        "description": "After brief confusion, it appears to come from a small group of flowers underfoot. Rooted to the ground as they are, the talking flowers know much about the immediate area, though little beyond it. Bardic Pride: A fellow traveller greets the party: a wandering Bard who seems rough around"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "the edges, their clothes dirty and torn in places, though they are in good spirits. Though the Bard is extremely lost, their pride stops them from admitting so, leading to many dismissed questions and false confidence. The Defender: A bloodied and beaten Half-Elf Ranger approaches the party just as they’re"
      },
      {
        "roll": 8,
        "title": "settling down to camp",
        "description": "She claims to have stalked and destroyed a great evil in the forest, but she is very reluctant to talk about it, attempting to dissuade them from travelling where she has been. The Lost Ring: A band of Halflings are busy arguing with each other over who lost a valuable"
      },
      {
        "roll": 9,
        "title": "ring",
        "description": "Some of them are pulling up shrubs while others are digging in the grass looking for it. They are very concerned and they demand that the party stop and help, lest they accidentally pick it up. Secret Source: A Dwarven alchemist kneels over a small pond around a standing stone,"
      },
      {
        "roll": 10,
        "title": "collecting samples of water in glass vials",
        "description": "They claim the pond is blessed with healing properties, and intend to use this as a secret ingredient for their latest intoxicating brew. If the party promises to keep it a secret, the alchemist vows to send them a keg of the first batch. ENCOUNANTECRIES:NFTORRUESINTS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "food in the woods without disturbing the delicate balance of the forest",
        "description": "While the supplies can be invaluable, the knowledge the party gains can help them to avoid upsetting other, less benevolent forest creatures. A Helpful Warning: A circle of large standing stones surrounds a central stone laden with"
      },
      {
        "roll": 2,
        "title": "meat and berries",
        "description": "Looking over the area, the characters will find writing that has been drawn on the stone, marking out the words ‘Take it, and begone.’ Teasing Orchard: A lush orchard of apple trees dominates this area of the forest, yet very few"
      },
      {
        "roll": 3,
        "title": "apples litter the ground, dropping only when they are just right",
        "description": "If someone reaches up to take another apple, the branch whips away, pulling its delicious fruit just out of arm's reach. Carrion Cave: An opening in a cliff face reveals a large cavern inhabited by Dire Wolves."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Luckily, they don’t seem to be around right now, but their recent prey lies unprotected inside. If the party is quick, they could gather up a large amount of fresh meat and make their escape. Witches Brew: Standing alone in the middle of a clearing sits a large iron cauldron, blackened, and with a dying fire underneath it. The cauldron sits unattended, though bowls are left"
      },
      {
        "roll": 5,
        "title": "nearby",
        "description": "A cautionary sniff reveals that what’s been brewing here is soup, and a rather tasty one! Looking around the area, one can find a message left for the party carved into a tree, ‘Granny is always watching.’ Buried Stash: While exploring, the Quartermaster notices a suspicious patch of leaves that"
      },
      {
        "roll": 6,
        "title": "doesn’t blend in with the surrounding area",
        "description": "Investigating them will reveal that someone or something placed this covering over a hidden cache of a startling variety of mushrooms. None of them are poisonous or harmful, though some may have amusing side effects. Guarded Treasure: Sitting in a small clearing surrounded by large mushrooms sits a chest,"
      },
      {
        "roll": 7,
        "title": "old and worn",
        "description": "There is a small path free of the mushrooms that leads to the chest, though if the party approaches, the mushrooms reveal themselves as Shriekers, sounding an alarm. The chest contains helpful supplies, as well as 1d8 × 10 gp. A Treasure Map: The party finds a bottle with a message inside it, describing how someone has buried thrice their weight in treasure within this forest for the worthy to find, and warning"
      },
      {
        "roll": 8,
        "title": "those who travel it that there are great beasts and thousands of steps to take",
        "description": "However, following the map, the largest threat along the way is simply a few wolves, and they really don’t have to travel far. The “vast treasure” is contained in a rather small chest, consisting of a small number of valuables and some armour fit for a pixie. Adventurers’ Camp: The party discovers a campsite that was recently made by another party"
      },
      {
        "roll": 9,
        "title": "of adventurers",
        "description": "The adventures are gone, but their tents, supplies, and even some treasure and magic items remain, along with some clearly agitated pack animals. Where the adventurers have gone, and whether they will return, is a mystery. Grave Robbing: A Hobgoblin band lies dead just off the path, all having succumbed to their wounds. They have a plethora of equipment, both their own and what they purloined before"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "beating their hasty, and ultimately futile, retreat, giving the adventurers a chance to pick them clean. Some of the items that the Hobgoblins stole may still be of interest to those who dealt the killing blows. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "the party’s presence, shaking violently and expelling a variety of spores into the air. Once these spores are felt by the other mushrooms, they too release their spores, and the area quickly becomes a deadly trap. We Can’t Go Over It: A ravine marks the only path forward without taking a long detour,"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "but as the party descends, the path becomes increasingly blocked and marred by thickets of brambles and thorns that block the way. Taking it slow to clear them will hamper the journey, but moving through the brambles will harm the party. Uprooted: A storm has ravaged the area, uprooting the mighty trees that made their homes"
      },
      {
        "roll": 3,
        "title": "here",
        "description": "The mess of fallen trees and their uprooted networks of roots have made the area difficult to traverse, but should enemies strike, the area will be both defensible and combustible. Mysterious Pathway: The path the party follows suddenly breaks into a fork, with the well-"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "trodden route continuing their intended path, and a far less travelled path not marked by any guides or maps the party may have. The new branch of the road is overgrown with plant life but is still identifiable as a route that people once travelled. Fanged Path: A Dire Wolf is insistently remaining on a bridge over a river within the forest."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "The animal does not make any hostile actions unless the party approaches it, and then it will attempt to scare them off. Its behaviour is unusual for a reason, as its pup has gotten its paw stuck in the bridge and cannot get it out, leaving the animal scared and confused. Conservation Conflict: A long-held dispute between two bands of Rangers and Druids over their ideals and methods of protecting the forest has escalated into open conflict with"
      },
      {
        "roll": 6,
        "title": "skirmishes ravaging the thing they vowed to protect",
        "description": "Both sides of this conflict will distrust the PCs and only a Charisma (Persuasion) check can try to convince them that the party is unbiased in this war. Forest Fire: A section of the forest has caught fire, making the way ahead dangerous. Should they attempt to power through or fight the fire, the smoke and heat can harm them. Alternatively"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "retreating and waiting the fire out would be safer, but if the inferno grows too strong, it may devastate the entire forest and threaten them anyway. Whether they choose to fight it or ignore it, the protectors of nature will know. Abandoned Traps: A band of hunters once stalked this area long ago, and though what"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "happened to them is a mystery, their traps remain, the ravages of nature and time rusting them, making diseases a danger should there be a misstep. Bear traps, pitfalls, and snares are all possible dangers, as well as more inventive magical traps. Ants in the Pants: Stopping for a spot of lunch, the Quartermaster lays out a lavish feast hoping to invigorate the weary party. The second a crumb falls to the forest floor, however, a"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "nest of ants evacuate their burrow to scavenge any food they can find, necessitating a Dexterity (Acrobatics) or Intelligence (Nature) check to escape the scurrying insects. On a failed roll, the Quartermaster loses 1 Supply Die. Missing Path: While the map clearly shows a path through this part of the forest, there are no"
      },
      {
        "roll": 10,
        "title": "markers to show its presence",
        "description": "Worse, the foliage and terrain are completely different than what was expected, leaving no room for a possible path. A Wisdom (Survival) check is necessary to guide the party through rough terrain until the path resumes. ENCOUNANTECRIES:NFTORRUESINTS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "up to their necks in webs spun by Giant Spiders",
        "description": "The party can rescue the Gnomes with a group Strength (Acrobatics) check to climb up, cut them loose, and lower them to the ground safely, though surely the spiders will return to feed soon. Barking Up the Wrong Tree: An explorer has become lost, leaving behind a series of notes"
      },
      {
        "roll": 2,
        "title": "carved into tree trunks throughout the dense forest",
        "description": "The messages are each dated no more than two days ago, indicating where the explorer was heading next. A group Intelligence (Investigation or Survival) check allows the party to follow the clues to find the explorer. Puddle Trouble: After fresh rain, the party hears cries for help nearby. Looking underfoot"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "reveals that a few travellers are trapped within puddles, as if caught in a mirror image. An Intelligence (Arcana) check will determine how to free them, but there is a complication. The trapped victims aren’t alone, and their predator stands a chance of being freed as well. Under Siege: Cries for help lead the party towards a carriage beset upon by hungry Tigers (or"
      },
      {
        "roll": 4,
        "title": "any great cat not native to the area)",
        "description": "An Intelligence (Nature) check confirms that they are not local. In addition to helping the travellers from becoming a great cat’s dinner, the party must now worry over what other non-native dangers lurk nearby. Wood For the Trees: The sound of crying leads the party to a young Druid. His mentor is"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "gravely ill and he has been unable to find a rare healing herb needed to save him. With a successful group Wisdom (Perception or Survival) check, the party locates the herb and the Druid rewards them with whatever potions he has in his bag. The Silent Circle: A soft humming sound leads the party to a clearing where several people"
      },
      {
        "roll": 6,
        "title": "hover in mid air, slowly circling a sphere of brambles glowing with green light",
        "description": "Their faces are blank but the party can make a group Charisma (Persuasion) check to break them out of their trance and claim a green Elemental Gem. Motherly Instincts: Tracks and blood lead the party to a wounded Dire Wolf that has fought"
      },
      {
        "roll": 7,
        "title": "off opportunistic predators to protect its cubs",
        "description": "Mistrust and fear make it hostile to the party, but without a successful group Wisdom (Animal Handling or Medicine) check, it will surely perish from its injuries within the hour, leaving its cubs alone to fend for themselves. Slow and Steady: A family of Tieflings have taken a dubious shortcut through the forest"
      },
      {
        "roll": 8,
        "title": "in order to avoid being late to a wedding",
        "description": "Unfortunately, the father tripped over a gnarled root, breaking his leg and slowing them down considerably. A group Wisdom (Medicine or Survival) check can help him get back on his feet, with a makeshift splint and crutch. Hallowed Hollow: A frantically upset Gnome shouts requests for help from the party, as their"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "home within the hollow of a large tree is collapsing inward and has made getting their most prized belongings out almost impossible for them. A group Dexterity (Sleight of Hand) check can nab a few items out before its collapse. Itsy Bitsy Wyrmling: Angry roaring and childish cursing lead the party to find a Green"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "Dragon Wyrmling that has gotten themselves trapped within the web of a Drider, panicked and afraid. Helping them may prove difficult, and their noise may be a dinner bell for the Drider that made the web. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "the party",
        "description": "Unfortunately for them, they’ve chosen a couple of Treants to hide behind, which ruins their surprise when the Treants start eating them. When the chaos kicks off the party must choose whether to get involved or flee. Web Warning: The party enters a part of the forest covered in webbing. This is the domain of a"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "colony of Giant Spiders who use their webs to guide their prey into a position where they can be safely cocooned, stored, and eaten. Unfortunately, by the time the party realises just what they are walking into, it may be too late. Bait and Switch: Two roads diverged in the woods. One conceals a number of traps set up to"
      },
      {
        "roll": 3,
        "title": "catch humanoids",
        "description": "The other leads towards a Brown Bear den. A band of Scouts lay in wait to pick through the remains of any travellers through their woods, willing to finish the job themselves if they have to. Honey Trap: Following a sweet scent, the party discovers an overturned carriage. Loud buzzing"
      },
      {
        "roll": 4,
        "title": "can be heard, and a few bees can be seen flying around the carriage",
        "description": "Swarms of (Flying) Insects are inside, feeding on broken jars of honey, becoming aggressive in protection of their food. Should the party linger, the honey may attract Black Bears as well. Ring a Roses: Enticing music drifts through the forest and the party observes a group of"
      },
      {
        "roll": 5,
        "title": "Dryads performing a dancing ritual",
        "description": "They regard anyone who steps within the ritual grove as a sacrifice to appease the forest and root them to the ground or charm them so they cannot escape before bludgeoning them with ritual clubs grown from their trees. Woodland Friends: A group of Giant Badgers and a Giant Boar are stalking the party from"
      },
      {
        "roll": 6,
        "title": "the undergrowth",
        "description": "A successful Intelligence (Nature) or Wisdom (Survival) check identifies that the animals are acting strangely: a Druid is directing them to herd the party away from a sacred location in the woods and if the party decides to investigate anyway, the animals attack. Childhood Trauma: A young Half-Orc weeps amongst the trees, exhausted from chasing a"
      },
      {
        "roll": 7,
        "title": "mysterious group who swept into town and kidnapped only his mother",
        "description": "A group of Berserkers remain in the woods, though the main culprits have dashed away on horseback. Despite his weariness, the child demands to be a part of the fight, swearing vengeance. Forbidden Glade: A beautiful clearing in the deep woods is surrounded by sigils and warnings which indicate that trespassers are strictly prohibited. Parties that ignore the warnings will"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "swiftly be set upon by a band of haughty High Elves who claim that the glade belongs to their people. They ignore excuses and will attack without mercy if intruders refuse to leave immediately. Why Do It Yourself: A band of Halflings (use the statistics of Spy) have set up a series of traps"
      },
      {
        "roll": 9,
        "title": "through a section of the forest",
        "description": "They hide in the trees, hoping their contraptions will do all the work and then they can loot the corpses after. If the rope traps, pitfalls, and log swings prove unsuccessful then the Halflings will ambush the party themselves. Home Intruders: At the bottom of a forest gorge, cave openings line the cliff sides with trodden"
      },
      {
        "roll": 10,
        "title": "pathways of grass running between them",
        "description": "A successful Intelligence (Nature) or Wisdom (Survival) check will recognise the tracks of Ogres, making this gorge their home. A hungry growl rumbles from the caves, growing louder as the inhabitants creep closer. ENCOUNANTECRIES:NFTORRUESINTS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "branches",
        "description": "An inexplicable waterfall cascades down one side, splashing into a small lake at the roots of the tree. The water is crystal clear and steaming hot, suggesting an unusual confluence of elemental magic at work somewhere within the tree’s branches. The Angry Sky’s Scar: A blasted stump surrounded by charred fragments of bark marks the"
      },
      {
        "roll": 2,
        "title": "site of a lightning strike",
        "description": "The surrounding trees are little more than charcoal sticks, leaving a blackened scar amidst the rest of the verdant forest. The acrid scent of smoke still hangs on the wind, reminding the party of the awesome power of nature. Silver Lake: The party comes upon a small ridge and a clearing beyond that is set in a rough"
      },
      {
        "roll": 3,
        "title": "circular pattern",
        "description": "This crater has a pool inside, but, while it appears to be water, there are no reflections, nor are there any fish or other creatures inside. For those who’d hoped for drinking water, this is an unsettling and unwelcome find. The Patch: Deep within the forest, there is a small section, perhaps only a mile in diameter,"
      },
      {
        "roll": 4,
        "title": "that is unlike the rest",
        "description": "The flora and fauna are different, representative of another place. Even the weather is different. The unnaturalness plays with the party’s thoughts, giving them a sense of unease. Parliament of Fowl: Discordant chirping greets the party as they see tall, ancient trees filled"
      },
      {
        "roll": 5,
        "title": "with birds of all kinds",
        "description": "They twitter and caw as though in the middle of a heated argument, but fall utterly silent as the party approaches. If the party tries to speak to them, they all fly away in a great gust of feathers. Land Before Time: In a calm and sunlit grove, time seems to while away more slowly and it"
      },
      {
        "roll": 6,
        "title": "is tempting to sit and rest for a spell",
        "description": "The shadows do not make sense for where the sun sits in the sky and as animals pass through the grove, they seem to evolve backwards into earlier, more primal forms… The Scaled Hill: The party sees a strange hill of fungus in the middle of the forest with the"
      },
      {
        "roll": 7,
        "title": "bony remains of a Green Dragon’s wings protruding from it",
        "description": "For a low-level party, this is a dire warning that the dangers in this part of the forest are formidable, while others may start digging in the hopes of uncovering valuable dragon scales. The Tree Bridge: The party comes to a gorge within the forest, but two enormous trees from"
      },
      {
        "roll": 8,
        "title": "either side have grown into each other, forming an easily passable bridge",
        "description": "The beauty and care, especially to the trees’ health, put into its design must be the result of ancient magic and anyone who traverses the bridge feels calmness and reinvigoration. Druid’s Grave: At the centre of a small clearing lies a tree as white as polished ivory, surrounded"
      },
      {
        "roll": 9,
        "title": "by a bed of bright and fragrant flowers",
        "description": "The trees around the clearing bear fruit that tastes pleasantly sweet. Faintly in the bark of the ivory tree, a face can be seen with eyes closed in a peaceful slumber. Rooted Guardian: A shouting voice ahead warns the party to leave, or suffer its wrath."
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "Following the voice, a Stone Golem can be found, repeating empty threats as it struggles to move. A tree has grown around it, roots pinning the golem’s legs. Annoyed by the disturbance, the tree uproots itself, revealing it to be a Treant as it wanders away with the golem. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "deer are mauled, but surprisingly not missing big chunks",
        "description": "A Wisdom (Medicine) check reveals that the deer were sick, which means whatever killed them couldn’t eat their flesh. There is a Saber-toothed Tiger about, and it is still very hungry. Angry Tree: Recent logging in the area has caused a Treant to snap, killing anyone with a"
      },
      {
        "roll": 2,
        "title": "weapon that enters the forest",
        "description": "The party becomes aware of its actions when coming across loggers that have been stomped to death. Unfortunately, the treant can’t tell the loggers from adventurers and if the party remains then they’ll become a target. Suddenly Hunted: The party is camping for the night when a horde of Giant Rats scamper"
      },
      {
        "roll": 3,
        "title": "through the camp",
        "description": "These rats aren’t interested in feeding, though. A Wisdom (Perception) check reveals that they are running from a pack of Gnoll hunters who would happily trade hunting rats for hunting humanoids! Maze Trap: In a dense part of the forest the party is attacked by a group of Ettercaps. They hunt"
      },
      {
        "roll": 4,
        "title": "from a distance at first, creating a maze of webbing to trap moving prey",
        "description": "Not only does the area become Difficult Terrain, but party members must make appropriate Wisdom (Perception) checks or risk getting caught in the webs. Dangerous Shrubbery: The air stinks of rot and the flora nearby is malnourished: a wide trail"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "of brackish water and slimy plant matter indicates that a Shambling Mound has been through here. Caught up in its vile mass are the remains of animals and travellers that crossed its path, their possessions still embedded within it. Beware the Bull: An echoing bellow and the thunder of hooves gives warning that this is the"
      },
      {
        "roll": 6,
        "title": "domain of a large creature",
        "description": "The trail of smashed trees, deep cloven hoof prints and petrified plant matter leads to an enraged Gorgon, whose heavy metal plates could make fine armour or could be sold to a blacksmith for a good price. Hoo-hoooaar!: The party enters a stretch of woods lacking any other animals, where the trees"
      },
      {
        "roll": 7,
        "title": "have all clearly been heavily mauled",
        "description": "An Intelligence (Nature) check reveals these are the distinct markings of a very large Owlbear sharpening their claws. Owlbear talons and beaks are worth quite a bit, but claiming them is a dangerous undertaking. Lingering Ice: The party encounters a portion of the forest where the chill of winter remains"
      },
      {
        "roll": 8,
        "title": "and large patches of snow have failed to melt",
        "description": "If they choose to press on, they will soon be hunted by a Winter Wolf pack that lurks in the area. Dangerous and cunning beasts, their snowy-white pelts are highly valued by traders. Hectic Hog: Loud snorting and rustling leads the party to a Giant Boar that is digging through"
      },
      {
        "roll": 9,
        "title": "the forest floor",
        "description": "It has eaten some magical fungi, giving it the ability to cast Misty Step once per turn. The hole it digs holds an unusually large truffle the size of a boulder, while the beast’s tusks would also fetch a high price. Did We Shrink?: Flora in this section of the forest grow much larger than elsewhere, flowers"
      },
      {
        "roll": 10,
        "title": "and mushrooms towering over the party",
        "description": "This growth has gifted the insects too, as giant ants (use the statistics of an Ankheg) burst out of a large mound ahead. Clearing out this nest and descending inside leads to a horde of artefacts collected from the area. ENCOUNANTECRIES:NFTORRUESINTS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "the trees",
        "description": "They’ve built treehouses and rope bridges among them and have several means of protection against creatures that attack from below. They offer room and board to the party in return for stories of their travels and adventures. Waterfall Cave: The party encounters a large waterfall that forms a pool in the forest. Behind"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "the waterfall is a natural overhang that provides a good place to shelter for the night, as it is easily defensible and protected from the elements. Etchings are carved into the walls, perhaps offering clues to a nearby hidden treasure. Remnants: An Intelligence (Investigation) check reveals a hidden cabin in the woods, which is little more than a dug-out room with a small chimney and a camouflaged roof above it."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "While there is nothing inherently dangerous about the makeshift shelter, it does suggest that someone else has recently travelled this way. A Wisdom (Survival) check reveals their species and the disturbing fact that they had a captive. Small Comfort: As a storm brews, the party is approached by a tiny fey that offers them"
      },
      {
        "roll": 4,
        "title": "shelter",
        "description": "The catch is that the party must shrink themselves to take advantage of the offer, but the fey have the means. If the party agrees, then they spend the night with a unique perspective of the forest. Night Watch: A raised watchtower set up for seasonal use by a society of nomadic hunters"
      },
      {
        "roll": 5,
        "title": "contains a shrine to a forest spirit they pay homage to",
        "description": "There are packs and bedrolls tucked away from recent inhabitants, but the hunters seem to have been interrupted on their way back, as they have not returned. Snail's Tail: A giant, empty snail's shell the size of a small room provides a cosy shelter. The"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "pearlescent inner surface is covered with writing and drawings from past travellers who have spent the night here. One says ‘Beware the voice in the night. It is not who it claims to be!’ Seven Dwarves: An empty cabin is found in a woodland clearing, the inside piled high with"
      },
      {
        "roll": 7,
        "title": "clutter and covered in soot",
        "description": "Seven small beds line the upstairs room, each inscribed with the name of a school of magic at its foot. After a harrowing trek through the forests, these dwarven sized beds look very comfy… perhaps a quick clean first, though. Mush-Roomy: The largest toadstool the party has ever seen rises from the forest floor before"
      },
      {
        "roll": 8,
        "title": "them",
        "description": "A village of Goblins has made the giant mushroom their home and soon send guards out to discern the party’s intentions. If the party agrees to peace-bind their weapons, and provide some entertainment, they are welcomed to spend the night. Unstaffed: The sounds of cracking wood leaves the party sure there is a fight up ahead. Upon"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "investigating, they discover a teenage girl armed with a wooden staff, practising against logs and sticks hanging from the trees. She has lived alone in the woods for a year, and is preparing to fight those who destroyed her village. Her sheltered and well stocked camp is nearby. Hunter’s Cabin: There is a cosy log cabin sequestered away in the forest. It is lavishly, though"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "gruesomely, decorated with many animal pelts and taxidermied creatures stare out from the walls with glassy eyes. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "forest, stands beneath the shade of the canopy",
        "description": "Not a single fallen leaf appears within the immaculately clean circle, nor has anything spoiled the lavish spread of tea and cakes laid out on the central slab. The thick feeling of ancient magic hangs heavily over the scene. Silent Assembly: Humanoid statues formed from gnarled wood and living ivy stand gathered in a clearing beneath the bright sun. Clearing away the vines reveals Elven features and"
      },
      {
        "roll": 2,
        "title": "determined faces immortalised in wood",
        "description": "They do not appear carved, but rather grown or transformed. One statue holds a spear aloft, the sharp stone head gleaming white, its haft weathered and split. Displaced Ruins: The party comes upon ancient ‘stone’ ruins deep in the forest. An Intelligence"
      },
      {
        "roll": 3,
        "title": "(Nature) check, however, reveals that these ruins are not stone but coral",
        "description": "Deep in the past, this land was underwater and home to a grand civilization. Some ruins may be traversed, but they lack stairs and often have ceiling entrances. Who Came First?: An overgrown swamp lies before the party, with many old statues and"
      },
      {
        "roll": 4,
        "title": "columns sunk in its depths",
        "description": "It presumes an ancient culture, but a character fluent in the Orc tongue realises that this was once an Orc civilisation. Buried arms and armour indicate a style very different from the modern cultures nearby. Hand Over Hand: A sheer cliffside has handholds, runes, and mighty beasts carved into it, the"
      },
      {
        "roll": 5,
        "title": "designs taken from the surrounding area",
        "description": "Was this a training wall, a playground, or a religious site? Tucked into cubbies in the wall are keepsakes from those who loved and treasured this place, such as animal claws, ancient hammered coins, and beautifully-decorated beads. House of Healing: A collection of tumble-down buildings in a sheltered valley appear to be an"
      },
      {
        "roll": 6,
        "title": "old healers' station, from what remains of the furniture",
        "description": "The shelves are stacked with healers' tools, herbs crumbling away at a touch and dusty bottles containing murky liquids. Some of the varnished bark scrolls with instructions which hang on the walls have survived intact. Overgrown Circle: The party encounters several large stones buried among the brush and"
      },
      {
        "roll": 7,
        "title": "sprouting trees",
        "description": "The stones form a rough circle and was once a sacred place for a vanished Druidic culture. If the party takes the time to clear out the old circle, they receive a blessing from the “slumbering god” who is overjoyed at having new worshippers after so long. Petrified Forest: The party steps into a grove of petrified trees. The trees are actually Treants"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "that were turned to stone during a battle with a Gorgon, so many trees look distressed and contorted in strange ways. Should the Treants be returned to life they are very thankful and may have old information that is still useful in the present day. Bridge to Nowhere: An ancient span stretches part way across a gorge that has long since been"
      },
      {
        "roll": 9,
        "title": "filled in, with a mere trickle of water now running below it",
        "description": "The bridge was carved from the bones of some great creature and what remains is still impressively sturdy. Fruit of War: Faint remains of an Elven settlement lie half-buried and covered in moss. At the"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "centre of a forgotten courtyard stands a large tree, swords and arrows hanging from its bowed branches. These weapons seem sharp and capable despite being made from wood. ENCOUNANTECRIES:NFTORRUESINTS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "with fast growing fungus",
        "description": "These mushrooms have burst from beneath the ground, uprooting dozens of coffins and splaying their former residents on the forest floor, where more fungi have grown upon them. The stench is unbearable. Warning Remains: The forest’s trees become littered with the skulls of animals, deer, and"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "other antler bearing creatures, crudely nailed to the trees with sharpened iron spikes in a clear desecration of nature. Human Effigy: A wicker-work statue in the shape of a Human stands a dozen feet tall. Its"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "hollow chest is lined with thorns, and contains the remains of what may have been a prisoner or sacrifice. The sounds of manic laughter is carried on the wind, though there is no visible source for the sound. Blood from Stone: A circle of towering carved stones surrounds a central monolith, each"
      },
      {
        "roll": 4,
        "title": "stone stained with crimson markings of strange design",
        "description": "A sharp cursed dagger lies driven into a crack in the central table, and fresh blood oozes from the wound within the rock. Eerie Quiet: The lively sounds of the forest suddenly die out, leaving nothing but an ominous"
      },
      {
        "roll": 5,
        "title": "deafening silence surrounding the party",
        "description": "They are still able to speak, though may be too afraid or shocked to do so. The sounds of the forest will not return until the party has left the area, or dealt with what has caused the sudden silence. Devastation: A massive section of forest has been burned to the ground here, leaving a large"
      },
      {
        "roll": 6,
        "title": "clearing of burned out stumps",
        "description": "The scale of the destruction is heart wrenching to those who care for nature, while the more cynical will be concerned with the lack of chances to resupply while moving through this region. Muck and Mire: Within a boggy region of the forest, the recent movements of the earth have"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "caused the long buried ruins of a village to re-emerge, along with the naturally mummified bodies of the villagers, exposed to the air once again. Investigation reveals that however the village and its residents ended up here, it was not natural. Grim Grotto: This tree’s knots have warped into scowling faces, the branches grasping, and"
      },
      {
        "roll": 8,
        "title": "the vines threatening to tangle like a noose",
        "description": "A foul druidic magic has encouraged this grotto to claim the lives of any who enter, and the tangled bodies proved it has succeeded more than"
      },
      {
        "roll": 9,
        "title": "Bog Bodies",
        "description": "The collected corpses of a whole village were buried in a bog here. Movement in the earth has unsettled these peat mummies, and the dead are none too pleased. Petrified Wood: The trees, foliage, and undergrowth here have been petrified into a dense"
      },
      {
        "roll": 10,
        "title": "canopy of stone",
        "description": "The petrified area is a perfect circle, radiating out from a five foot hole in the centre. Where branches enter the circle and leave, they are petrified on an exact line. In the bottom of the hole is a humanoid skull made of black bone. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "hearts as proof of their demise",
        "description": "The hunter knows the forest well and is prepared to lay traps and ambush them, but should fortune turn against them, they are willing to flee and make their escape, only to return when the party is otherwise occupied. Thread Lightly: A network of webs stretches high into the trees, with the large shapes of"
      },
      {
        "roll": 2,
        "title": "Driders and their broods slumbering in the safety of their nests",
        "description": "Thin strands of webbing criss cross between the bases of the trees like tripwires, ready to snap and alert their creators should they be disturbed. Pseudo Wood: A comfortably sized hollow of a tree provides comfortable shelter from the"
      },
      {
        "roll": 3,
        "title": "elements, and has more than enough room for all of the party",
        "description": "However once inside, the sinister trap is revealed, with the tree itself being a rather hungry Mimic. The Shade of the Forest: The tree cover is especially dense in this region of the forest, reducing"
      },
      {
        "roll": 4,
        "title": "the amount of light available even more than usual",
        "description": "A Vampire and her Vampire Spawn have taken up residence to take advantage of this, and they spring ambushes on travellers with little fear of the daylight’s wrath. Words of the Wood: The call of a rare and valuable bird cuts through the usual forest sounds,"
      },
      {
        "roll": 5,
        "title": "easily identified as such by those with knowledge of nature",
        "description": "This is the trap of a Green Hag, using her powers of mimicry to lure the greedy hunters or enthusiastic hobbyists off the road."
      },
      {
        "roll": 6,
        "title": "Brute Force",
        "description": "A band of Hill Giants have been constructing a crude totem to an unknown deity. They’re looking to add some adventurers and their gear to the offerings pile. Guerilla Warfare: A Green Hag is determined to protect her portion of a dark and twisted"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "wood, invisibly following a band of adventurers and wearing them down by killing their beasts of burden, poisoning their food, and stealing their magic items. Once satisfied, the hag then picks them off one by one, starting with those on watch. Divide and Conquer: A Weretiger pretends to be an innocent victim, a youngster lost in the"
      },
      {
        "roll": 8,
        "title": "woods",
        "description": "It begs the party for assistance, but all it really wants to do is get close enough to strike. It works in tandem with another Weretiger, who draws some of the party away before the ‘victim’ reveals itself and strikes at the remainder. In the Thicket: The party find themselves wandering into an overgrown hedge maze guarded by an outraged Guardian Naga, intent on hunting down intruders that foolishly wander through"
      },
      {
        "roll": 9,
        "title": "its domain",
        "description": "Parts of the maze are sneaking Awakened Shrubs however, that close pathways behind the party and constantly shift the shape of the maze. This confusing labyrinth, and the creatures that guard it, must surely mean something valuable is hidden within. Fungal Hosts: The canopy of this forest section is overgrown with mould, spores floating down"
      },
      {
        "roll": 10,
        "title": "like snow",
        "description": "The animals wandering beneath find themselves infected with the parasitic spores, sending them into a blind rage. Deer, badgers, and boars throw themselves at the party (use the statistics of a Zombie) as well as bears and wolves (use the statistics of an Ogre Zombie). ENCOUNANTECRIES:NFTORRUESINTS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "has driven them from their homes and, if the party can help, then the Wood Elves will reward them with healing and gifts of magic once they’ve had a chance to rest. They may even offer a guide through the rest of the forest once their home is secure. The Singing Spy: The party hears a flamboyant Bard playing loudly as he travels through the"
      },
      {
        "roll": 2,
        "title": "forest on a donkey (he’s had a bit of bad luck at gambling)",
        "description": "He asks the party if he can join them, offering to sing stories of local events. He’s cheerful and friendly, but he hides a secret: he is a Spy, collecting intelligence for a powerful enemy. High Stakes: A distressed Bard approaches the party and vigorously signs that she’s in trouble."
      },
      {
        "roll": 3,
        "title": "She lost a wager with a nearby Fey and her voice was the reward",
        "description": "The Bard indicates that she was cheated and begs for help. Should the party agree then they may find themselves making their own wagers with the Fey! All for Love?: A young Human approaches the party with a proposition. His lover is locked"
      },
      {
        "roll": 4,
        "title": "away in a nearby house and he needs help to rescue her",
        "description": "He might be telling the truth, or maybe he’s looking for unwitting kidnappers to help him acquire the object of his desire. A Wisdom (Insight) check ascertains the truth. The Dragon Knight: The party overhears a cheery Kobold, clattering with the pots and pans"
      },
      {
        "roll": 5,
        "title": "he wears as armour, along with a helmet clearly meant for a larger creature",
        "description": "He is on a quest to prove himself worthy of becoming a squire for a Knight he admires, but the Knight has sent him into danger to get rid of him. Hunter's Kiss: A richly-bedecked Noble is examining the tracks on a game trail. On a hunt"
      },
      {
        "roll": 6,
        "title": "several months ago, she shot a deer and it turned into a beautiful Human woman",
        "description": "The noble took her back to her house for healing, but she was stolen away by a Green Hag who claimed to be the girl's mother. Master of the Four Winds: A few of the party's most valuable possessions get pulled off their"
      },
      {
        "roll": 7,
        "title": "persons and tossed about in the air, weaving in strange patterns",
        "description": "A laughing Monk retrieves them, apologising for his ‘playful friends’. He is evasive when questioned about the playful friends, as he doesn’t want the party to find out that he has befriended a pack of spiteful pixies. Forest Heart: The party is awoken late at night by a luminous silver furred Giant Elk. By his actions, the elk indicates he wants the party to follow him. If they choose to do so, he leads"
      },
      {
        "roll": 8,
        "title": "them to a large logging camp",
        "description": "The ancient trees the loggers have cut are all still slowly bleeding a thick flowing fluid which is as much blood as sap, and the moans of the trees float on the Bad Deal: A Sprite offers the party assistance in their travels, claiming they can summon any"
      },
      {
        "roll": 9,
        "title": "item their heart desires",
        "description": "The limitations of this wish seem rather extensive, and the Sprite does well to gloss over the fine details of the arrangement — that the wish-maker must cut off a thumb in order for this sparse wonder to be granted. Slimy Cleric: A Giant Snail slithers slowly through the forest, greeting the party in well-"
      },
      {
        "roll": 10,
        "title": "spoken Common as they pass",
        "description": "Rude and outspoken, he claims to have healing powers and boasts that he is able to remove any curse or condition afflicting them. Though his powers are real, the procedure is rather unsavoury, requiring him to slowly slither over the patient. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Frontiers": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "Circuit Judge",
        "description": "A mounted traveller introduces themself as the region's circuit judge on their way to the nearest town to preside over the trials of prisoners awaiting their day in court. The judge is pleased to share news with decent folk but also explains they are wary of strangers because circuit judges are prime targets for miscreants and ne'er-do-wells."
      },
      {
        "roll": 2,
        "title": "Grace for Sale",
        "description": "An itinerant priest crosses paths with the party, offering to bless them with a deity's favour for a reasonable price. Holy water and chanting precede sermons and counselling. Whatever the party members need, the priest is selling. And what luck! The priest is a physician, too, selling all manner of tonics, tinctures, and definitely not snake oil."
      },
      {
        "roll": 3,
        "title": "First Contact",
        "description": "Another group coming from the unknown frontier encounters the party. This group comes from an entirely different culture and speaks an unknown language. This group, however, is fleeing unidentified attackers that have destroyed their frontier communities. Through exaggerated actions, the group may communicate with the party to varying effect."
      },
      {
        "roll": 4,
        "title": "Dangerous Herbs",
        "description": "A friendly herbalist has learned of a patch of rare moss growing just beyond the borders of civilization and is just returning from the journey when she meets the party. She found the moss near a Green Dragon nest, but hides the fact that she absconded with an egg."
      },
      {
        "roll": 5,
        "title": "Wagons Retreat",
        "description": "The party stumbles upon a caravan arguing over which direction to turn. Their wagon leader has died of dysentery and the caravan has seen enough wilderness for a lifetime. They request the party's aid in finding their way back to their hometown."
      },
      {
        "roll": 6,
        "title": "Land Rush",
        "description": "An assorted group of Humans travel at breakneck speed, each bearing small flags. Their leader, a wealthy Dragonborn, informs the party that the surrounding million acres are available for settlement by whomever can claim them first. The party is invited to partake in the rush just as the sound of fighting breaks out in the distance."
      },
      {
        "roll": 7,
        "title": "Go Down to the River",
        "description": "Enthusiastic Humans dressed in lilac robes form a disorderly line as they make their way to the mouth of a river. Worshipping a newly encountered god of this river, they have brought new initiates to be cleansed in the water, confirming their faith. They are eager to tell the party all about their new religion, insisting they come to their baptismal ritual."
      },
      {
        "roll": 8,
        "title": "Pony Express",
        "description": "A horse rears as it nearly crashes into the party. The mounted man apologises, explaining that his service as a postman carrying letters between the new settlements and the larger cities requires that he be the fastest courier in the land, or else the frontier towns run the risk of total isolation."
      },
      {
        "roll": 9,
        "title": "Map Swap",
        "description": "The party encounters a Half-Orc pathfinder who is trying to help a neighbouring nation establish a fort along the frontier. He is willing to share his map and insights with the party in return for a look at theirs. He tells them that the fort captain is looking for a party to scout the area beyond the fort's immediate territory."
      },
      {
        "roll": 10,
        "title": "Amnesiac",
        "description": "A High Elf lies in the grass. She is well-dressed and speaks both Common and Elvish with a pronounced accent. She has no idea who she is but she has a surprising knowledge of the local area. Her fingertips spark with eldritch magic, though she can't remember how to wield it."
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "Abandoned Mining Camp",
        "description": "The party comes across the remains of a mining camp. It's obvious that the camp was abandoned suddenly, as all the mining equipment and much of the supplies remain, as do carts of unprocessed ore. Hopefully, whatever scared the miners away is no longer around, but for now the party can resupply with whatever is leftover."
      },
      {
        "roll": 2,
        "title": "Airship Wreckage",
        "description": "The remains of a magical airship lie broken above a jagged patch of rocks, its crew having long since abandoned it. Inside, the party finds not the equipment of the original fliers, but instead the gathered booty of a group of Gnolls that claimed the wreckage as their home. Fortunately, these humanoids are also long gone."
      },
      {
        "roll": 3,
        "title": "Icy Mystery",
        "description": "A small ice hill sits in the distance. Inside is a dead party of adventurers whose gold and gear may be chiselled out of the ice. Worryingly, the weather is cool but not ice cold, so questions remain regarding what caused the ice, and the age of the corpses within it. An Intelligence (Arcana or Nature) check reveals it was the frozen Sorcerer's own doing."
      },
      {
        "roll": 4,
        "title": "Old Lines",
        "description": "This part of the frontier receded over the last few decades, as dangerous monsters and lack of support forced frontier communities to pull back. Some of these communities retreated quickly, leaving deserted villages that still hold equipment and gear, though the threat of these monsters lingers in the silent air."
      },
      {
        "roll": 5,
        "title": "Liquid Gold",
        "description": "The party discovers a mine long abandoned after it flooded. Examining the water in daylight reveals it is vibrantly colourful and the ripples sound like singing. Drinking a bottle of the water provides the benefit of a Short Rest. Drinking three or more bottles in one day requires succeeding on a Charisma saving throw to avoid fixating on the water and taking one level of Exhaustion."
      },
      {
        "roll": 6,
        "title": "All Right Corral",
        "description": "Characters stumble upon an abandoned ranch filled with blood-stained hay and hoofprints. Behind the horse stalls are dozens of freshly dug graves, each with a bloody weapon sitting atop the crudely made headstone. No one living is present, except for a singular blood stained horse with mud caked-hooves."
      },
      {
        "roll": 7,
        "title": "Reanimation Ranch",
        "description": "The party come across a bustling farm, but on closer inspection, every worker is either a Zombie or a Skeleton. If they investigate, the farm owner is indeed a Necromancer, who claims to be trying to aid the community with 'efficient and basically free labour.' She offers the party as much produce as they can carry if they can help to improve her reputation with the neighbouring farmers."
      },
      {
        "roll": 8,
        "title": "Gold Rush",
        "description": "Sentient species, humanoid and monstrous alike, line the bank of a river panning for gold. A sense of camaraderie binds these creatures together, with plenty of food provided by a large Halfling family. Each party member can roll 1d20, striking gold on a 20."
      },
      {
        "roll": 9,
        "title": "Lizard Lounge",
        "description": "A group of Giant Lizards are lounging on an island amid a swamp. They barely react to the party's presence, placid and docile, happy to bathe in the sun. Though slow and often lazy, these beasts can wade through the bog water with ease and make for excellent mounts or draft animals."
      },
      {
        "roll": 10,
        "title": "Fool's Gold",
        "description": "A Mule trudges along the road, dragging the corpse of its rider along behind it. The dead rider is littered with arrows, their ankle stuck in a rope tied to the saddle made of fine leather. The packs tied to the sides are filled with food and travel supplies, as well as a small bag of precious gems hidden in a bag of dirt."
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "River Ford",
        "description": "Recent flooding has caused a river crossing the party's path to swell, overflowing its banks and washing away the only bridge in this region. Braving the swift currents to guide the party across the treacherous water requires the Outrider to make a Strength (Athletics) check."
      },
      {
        "roll": 2,
        "title": "Swampland",
        "description": "The party comes to the edge of a vast and dense swamp. Travelling around it would take a lot of time, but moving through it is also quite a challenge. The Outrider may make a Constitution (Survival) check to slog their way through the swamp and determine the best path."
      },
      {
        "roll": 3,
        "title": "Bovine Blockade",
        "description": "A herd of cattle, bison, or buffalo block the plains in massive numbers, the noise of their calls filling the air and making it hard to concentrate. Navigating a safe passage between these beasts without getting trampled or upsetting the herd requires the Outrider to make a successful Wisdom (Animal Handling) check."
      },
      {
        "roll": 4,
        "title": "The Holy Pass",
        "description": "A community at the mouth of a mountain pass believes that the pass leads to the home of the gods. They allow no one to enter the pass except to accompany funeral processions that leave bodies on a 'sacred ridge' not far from the village. An Intelligence (Religion) check or a Charisma (Deception) check by the Outrider can convince the community that the party should be allowed to pass."
      },
      {
        "roll": 5,
        "title": "Draw City",
        "description": "Passing through a one-horse town, the party find themselves unwittingly entered into a duelling competition. The party isn't allowed to leave the town without competing. The Outrider must succeed on a contested Strength (Athletics) or Dexterity (Sleight of Hand) check to win a round, while succeeding on a Charisma (Persuasion or Intimidation) check grants them leave without competing."
      },
      {
        "roll": 6,
        "title": "Caulk the Wagon",
        "description": "The party reaches a crossing impossible to ford. They can attempt to construct a ferry, with the Outrider making a Wisdom (Survival) check, or an Intelligence check with appropriate Tools, or they can swim across, following the Outrider's Strength (Athletics) check."
      },
      {
        "roll": 7,
        "title": "Secret Quicksand",
        "description": "Dense foliage and moss disguise quicksand as passable terrain. The Outrider must make an Intelligence (Investigation) check to notice the subtle indicators that the path is not as safe as it seems before the party wanders into the pool of quicksand. Fortunately, it only sinks them waist deep, but may cause other complications."
      },
      {
        "roll": 8,
        "title": "Infernal Isolation",
        "description": "Clear markers draw the border of 'Tiefling territory', where Tieflings have gathered to escape the prejudice found in the big cities. Should any member of the party not be a Tiefling, the Outrider must ask for permission to pass through with a Charisma (Persuasion) check. The party must pass through these lands as fast as they can to avoid offence."
      },
      {
        "roll": 9,
        "title": "Rolling Hills",
        "description": "The party must pass through a region of unmarred rolling hills. The continuous changes in elevation and visibility makes navigation more difficult. The Outrider must make a Wisdom (Survival) check to avoid getting lost."
      },
      {
        "roll": 10,
        "title": "Nothing Left",
        "description": "A village on the road that was once a peaceful pit-stop is now left a burning ruin, still smouldering from a recent ransack by unknown assailants. The Outrider must make a Dexterity (Stealth) check to get closer before they can tell if the raiders still linger. Success reveals a pack of Gnolls still sifting through the rubble."
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Buried Them Deep",
        "description": "A small town's graveyard issues rhythmic sounds, as though the dead were digging, but no one is willing to investigate. A group Intelligence (Investigation) check reveals the subterranean graverobbing that's been taking place, ending the mystery and the noises, though the culprits are long gone by the time the empty graves are found."
      },
      {
        "roll": 2,
        "title": "Wounded Soldier",
        "description": "An exhausted horse staggers along, approaching the party with a hollow look in its eyes. An unconscious Dragonborn slumps over its back. A group Wisdom (Medicine) check revives the Dragonborn, who begs the party to return the way he came and help the settlement he abandoned. The undead have risen and are attacking his home."
      },
      {
        "roll": 3,
        "title": "Trapped!",
        "description": "A child approaches the party seeking help. Their friend went foraging in the woods and tumbled into a hole. A group Wisdom (Survival) or Strength (Athletics) check can rescue the children, who have had a great time on their adventure. An Intelligence (Investigation or Nature) check determines that these holes are ancient mineshafts."
      },
      {
        "roll": 4,
        "title": "This Old Map",
        "description": "A friendly prospector is having trouble following the map she purchased that should lead to a valuable silver vein. An Intelligence (History) check reveals the map was made before an earthquake irrevocably changed the landscape. A group Intelligence (Nature) check may provide a reasonable guess as to the ore's current whereabouts."
      },
      {
        "roll": 5,
        "title": "Party Foals",
        "description": "The party hears shouts of frustration accompanied by thundering hooves. They find several Centaurs whose children have run away from the herd. Rounding up the foals requires succeeding on a group Charisma (Persuasion) check or Charisma (Musical Instrument) check to guide the children back home."
      },
      {
        "roll": 6,
        "title": "Dead and Unburied",
        "description": "A grieving woman approaches the party. Her recently deceased partner is banned from being buried in the town's cemetery for being a Wererat. The group can help her in one of these ways: a Carpenter's Tools check to create a beautiful casket, a Strength (Athletics) check to dig a fresh grave, or a Charisma (Intimidation) check to convince the town to bury her beloved."
      },
      {
        "roll": 7,
        "title": "Rhythmic Ribbits",
        "description": "A Giant Frog hops headfirst into the Sentry, apologising to the party in Common. He has escaped his arcane master, who only wished to use him in assistance to her spells. The frog has other dreams however; he wishes to be a musician. A group Charisma (Performance) or Charisma (Musical Instrument) check can help teach him some notes."
      },
      {
        "roll": 8,
        "title": "Forward Planning",
        "description": "A Gnome inventor has been tinkering away on an ingenious sailing ship, crafting it expertly on her plot of land. Unfortunately, she failed to take into account the lack of open water anywhere near her workshop. The party can help drag the boat to a body of water with a Strength (Athletics) check, doing so with Advantage if they have a strong pack animal."
      },
      {
        "roll": 9,
        "title": "Diversified Portfolio",
        "description": "The only bridge over a particularly tempestuous river is guarded by a Troll tollkeeper who is having trouble with the local tax collector raising their rates. The Troll charges an exorbitant fee to cross the bridge, clearly unconfident in his toll. A group Intelligence (Investigation or History) check can help them understand this new system and the ebb and flow of taxation."
      },
      {
        "roll": 10,
        "title": "Old Wounds",
        "description": "A large city's population has dwindled and local Druids are attempting to reclaim the land, causing tension with the settlers. A group Charisma (Persuasion) check can aid in an agreement between the two sides. Alternatively, a group Intelligence (Nature) check can allow the Druids to take over, or a Charisma (Intimidation) check can keep the town in the hands of the residents."
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "Lone Stranger",
        "description": "A Human Barbarian walks down a lonely road, never looking up from beneath the brim of his hat. If the party try to interact with him, he sneers, remarking that they've caught him at a bad time, and that he's feeling mighty feisty. He chugs a vial that he whips from his belt, growing in size as though under the effects of Enlarge/Reduce."
      },
      {
        "roll": 2,
        "title": "Unwelcome Refuge",
        "description": "After a tiring day, the Outrider spots a small hunting cottage in the distance. It looks inviting enough, a sturdy building that can protect them from both the elements and predators. Unfortunately, the front door is actually a Mimic lying in wait, with another Mimic disguised as a rocking chair on the porch."
      },
      {
        "roll": 3,
        "title": "Predator/Prey",
        "description": "Goblins have always been a problem for this community, so when a band of them comes out of the wilderness the town prepares to fight. It is soon revealed that the Goblins aren't charging the town: they're fleeing a larger predator. An Ettin crashes out of the woods, both heads shouting in unison."
      },
      {
        "roll": 4,
        "title": "Respecting Boundaries",
        "description": "The party finds, or is currently helping, a new community that has just established itself further into the frontier. Unfortunately, the move has inadvertently activated the long-dormant Stone Golem that was a sentinel for a lost empire. Unless the party assists, the new community is going to be crushed underfoot!"
      },
      {
        "roll": 5,
        "title": "Ghost Stories",
        "description": "Travellers tremble at the memory of the ill-fated Ferndream Party, a caravan of Halflings (use the Ghast entry) forced to eat their own before vanishing without a trace. Small footprints and drool near the party's campsite every morning imply they are neither gone nor forgotten. It seems they hunger still."
      },
      {
        "roll": 6,
        "title": "Too Good to be True",
        "description": "An abandoned wagon on the side of the road sporting a broken axle looks to be a serendipitous repository of supplies. Upon inspection, the party find their hands phase right through the food and equipment: a trap set by magical marauders (use the Bandit Captain and Mage stat blocks)."
      },
      {
        "roll": 7,
        "title": "Live Bait",
        "description": "A group of devil-worshipping Cultists led by a Spined Devil have constructed a set of linked treehouses above a dilapidated road, and are using long, hooked chains and nets to capture unwary passers-by to steal their goods. The party watches as the brigands snag a merchant by the voluminous robes they're wearing."
      },
      {
        "roll": 8,
        "title": "Tumbleweed Terror",
        "description": "A rumbling dust cloud of screaming tumbleweed rampages across the blasted landscape towards the party. Each tumbleweed is in fact a bandit that has been transformed into a plant by a witch with a strange sense of humour. There are dozens of tumbleweeds, each using the statistics of an Awakened Shrub."
      },
      {
        "roll": 9,
        "title": "Forced Providers",
        "description": "A band of Veterans approaches the party. They were tasked with destroying a raiding party menacing frontier villages, but soon discovered that the raiders were more formidable than previously thought. Unfortunately, they believe their mission to be more important than the party's needs, and demand their food and any useful magic items, or else."
      },
      {
        "roll": 10,
        "title": "Move Along",
        "description": "From over the crest of a hill, the sound of battle can be heard; but by the time the source is visible, the fighting is over. A number of Centaurs stand victorious over the remains of some kind of camp, and look to the party in a moment of tense hesitation before raising their weapons."
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "Stark Truth Beneath the Stars",
        "description": "Far from settled lands, the moonless night sky is awash with surreal colours and a breathtaking sea of stars. Beneath this humbling cosmic display, awe, wonder, and dread descend upon the party in equal parts, and each individual must make their own peace with existence and their place within the vast infinity arrayed before them."
      },
      {
        "roll": 2,
        "title": "Vast Herd",
        "description": "Out beyond the nearest population centres, a vast herd of cattle roams. The sheer abundance of life gathered in one place is a staggering sight. Unspoiled nature free from the influences of society, ambition, and settlement is an increasingly rare sight as the frontier expands and unexplored spaces recede into obscurity."
      },
      {
        "roll": 3,
        "title": "Crystal Canyon",
        "description": "There is a place beyond the frontier where a mighty river has carved a canyon to reveal layers of crystals along the banks. When the sunlight hits it just right, the entire canyon blinks in a kaleidoscope of colours. There are rumours that there is a message within the blinking, but thus far no explorer has identified it."
      },
      {
        "roll": 4,
        "title": "The Eversmoking Mountain",
        "description": "Just beyond the frontier there is a mountain volcano that discourages further encroachment due to its eversmoking vent. While it occasionally produces ash that harmlessly falls on the closest villages, the volcano has yet to erupt. Some wonder if it hides a Dragon's lair, or a Giant's forge."
      },
      {
        "roll": 5,
        "title": "Giant Golf",
        "description": "Massive arches of stone loom on the horizon, framing the scenery with rocky splendour. In the distance, the sound of rockfalls echo like thunder. Legends tell of ancient giants building these arches for their golf matches. Perhaps they return to play when no one is looking."
      },
      {
        "roll": 6,
        "title": "Dusty Dreams",
        "description": "The wind howls in the distance, whipping the dust into a storm. From certain angles, the maelstrom looks like wild Pegasi and Imps in an endless struggle. While the dust storm itself is deadly if approached, such visuals have for centuries inspired bards to write ballads of good versus evil."
      },
      {
        "roll": 7,
        "title": "One Man's Trash",
        "description": "A poorly planned settlement has been dumping its waste in a ditch outside the town border, and the town Wizard has also contributed with her magical dregs and runoff. This unseemly combination has led to an inverted waterfall of sewage, glittering beautifully with magical energy, though a thoroughly disgusting odour poisons the air for miles around."
      },
      {
        "roll": 8,
        "title": "Petrified Farm",
        "description": "A farm stands seemingly unoccupied, but on closer inspection it is evident that there are several farmers that have been petrified while going about their normal work in a perfect diorama. Further inspection reveals that only a single blind farmer still lives here, rearing Basilisk pups for a purpose they will not disclose."
      },
      {
        "roll": 9,
        "title": "Swamp of Resizing",
        "description": "Crimson red bubbles rise into the sky from a sulphurous, ever-bubbling blood-red swamp. Animals regularly drink from its waters, and all that do randomly increase in size. If the party linger here, they will observe a Swarm of Rats drink from the oozing pool and become 20 Giant Rats."
      },
      {
        "roll": 10,
        "title": "Eternal Honey",
        "description": "A towering lean-to constructed entirely of bee hives dominates the skyline. It is maintained by a single Clay Golem who dutifully cares for the bees day and night, continuously (if slowly) aiding in building and expanding the hives. They have a tremendous store of honey that is of no use to a golem, and are more than willing to part with it for anyone that is willing to provide assistance."
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "Giants Revealed",
        "description": "Frontier communities have receded after abandoning the further settlements, messages left behind warning of 'giants'. No sooner does the party venture forward into the unmapped wilderness than they learn what the 'giant' is. Loud roaring and thundering footsteps reveal that this area is the domain of Giant Apes."
      },
      {
        "roll": 2,
        "title": "Fiery Domain",
        "description": "The forest ahead is charred, with the remnants of a wildfire finally burning itself out. The party soon comes across a similarly burned village, which should have been outside the wildfire's range. A few discarded red scales soon reveal the truth. At least one Young Red Dragon calls this region home, and jealously guards its territory."
      },
      {
        "roll": 3,
        "title": "The Pristine Forest",
        "description": "Elf lore holds that none should enter the nearby forest. When this decree is violated, whether due to a community needing firewood, a party passing through, or even livestock wandering in, a band of angry Treants exacts a bloody toll in response. The bodies and loot of all those victims is a tempting haul for daring adventurers."
      },
      {
        "roll": 4,
        "title": "Missing Persons",
        "description": "People and livestock in a frontier village have been going missing one by one each night, causing mass panic. A Phase Spider is the culprit, snatching villagers and dragging their webbed bodies back to its hungry children for future consumption. The sheriff will pay a handsome reward to those who can squash the spider."
      },
      {
        "roll": 5,
        "title": "Welcome to Tyrannosaur Park",
        "description": "A local village excitedly shares news of their mines unearthing titan bones. The bones actually belong to a Tyrannosaurus Rex skeleton and the excitement has awoken the creature from its undead slumber. These bones would be valuable to any archeologist, or perhaps a necromancer."
      },
      {
        "roll": 6,
        "title": "Booters Beware",
        "description": "Frontier dwellers are accustomed to leaving their boots upside-down before resting, and shaking them out upon waking to avoid Scorpions. What leaves them utterly bewildered, however, is waking to find their left shoe missing. The culprit is a Kobold stealing shoes for its pet Giant Wolf Spider. Cobblers in the town will owe the party a great debt upon the boots' return."
      },
      {
        "roll": 7,
        "title": "Lost Labyrinth",
        "description": "A recent earthquake has left a fissure in the earth, where frightening roars and lonely whimpers emanate from within. A brief expedition inside reveals an underground labyrinth, where a Minotaur roams. The loot of lost adventurers is a tempting treasure to plunder from this subterranean maze."
      },
      {
        "roll": 8,
        "title": "Planar Pyromaniac",
        "description": "The town Wizard, locals say, has been experimenting with interplanar magic, and has not been seen for days. Lights shine from within her tower, flickering and moving. Summoning a horde of Magmins, the Wizard was overrun and killed, leaving any spell scrolls that haven't been used for kindling up for grabs."
      },
      {
        "roll": 9,
        "title": "Toad in the Hole",
        "description": "A Giant Toad lies in wait beneath the muddy waters of a swamp, poised to swallow whole any prey that wades nearby. A perceptive adventurer will notice that the ripples in the water are not natural, indicating movement below. Many travellers have succumbed to the toad's ambush, and as such it has swallowed a lot of valuable items."
      },
      {
        "roll": 10,
        "title": "Barely Wounded",
        "description": "Locals warn of a grizzled, monstrous bear (use the statistics for a Werebear) spotted in the forest, dozens of weapons buried into its hide. Many attempts have been made to poach this beast, though it shrugs off attacks with ease. Magical weapons are among those embedded in its back."
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "The Old Fleet",
        "description": "A small village in the frontier is built from the hulls of grounded ships. The villagers are descendants of a navy who were transported here through magic. They settled and turned their ships into new homes. This has proven surprisingly defensible, and the village thrives, though they are wary of landlubbing strangers."
      },
      {
        "roll": 2,
        "title": "The Giant Homestead",
        "description": "An old Hill Giant homestead sits out on the frontier, surrounded by giant animals still grazing in its gardens. The occupants are long since gone but the structure remains, which is especially welcome in bad weather. The inside is safe and warm enough, but the party may have trouble with the Huge-sized furniture and tools. The animals have grown unaccustomed to humanoids, and are easily spooked."
      },
      {
        "roll": 3,
        "title": "Monk Hospitality",
        "description": "A lone monastery sits atop a hill or nestled against a mountain cliff on the edge of the frontier. The monks and other residents keep watch for any lurking dangers or large-scale movements on the horizon. While martial in character, they are very hospitable to guests and offer food and shelter, though they may wish to spar."
      },
      {
        "roll": 4,
        "title": "Friendly Skies",
        "description": "A Dragonborn airship captain is performing maintenance on their small airship when the party encounters them. The captain is mapping the uncharted frontier and is happy to give the party a place to rest on their ship. Though their vessel is not yet ready for flight, their map points towards an Old Memories or A Dark Place encounter."
      },
      {
        "roll": 5,
        "title": "Hagspitality",
        "description": "Dancing lights in the darkness lead the party to a welcoming cottage with an unruly garden. The proprietor is a friendly older female Commoner with a half-dozen Cats, a Raven, and several Frogs as pets. She exclaims how delighted she is to have guests and immediately offers them freshly baked cookies and tea, though strangers aren't always to be trusted."
      },
      {
        "roll": 6,
        "title": "Tombstone Tunnel",
        "description": "The full moon rises over a small graveyard constructed between two rocky plateaus. Flat ground and defensible entrances make this a suitable campsite. The wind blowing through the tunnel sounds like crying, though the dead appear quiet for now."
      },
      {
        "roll": 7,
        "title": "A Town With No Name",
        "description": "The party finds a group of tents bustling with people, around them a swathe of cleared land and work sites. The locals explain it is the foundation of their new frontier town. They notice that everyone is arguing about what their new town should be named, and are soon approached for suggestions."
      },
      {
        "roll": 8,
        "title": "Tiny Home",
        "description": "An upturned boot lies amongst the scrub, unimpressive save for a tiny colourful garden surrounding it. Any who touch the boot immediately shrink, becoming Tiny while in the circle of the garden. Inside the boot is a pristine house, comfortable and well supplied. The party may choose to rest here, though the Sprite homeowner may not appreciate uninvited guests."
      },
      {
        "roll": 9,
        "title": "It Belongs in a Museum",
        "description": "A group of scholars led by an eccentric Gnome has set up camp around a fresh dig site, believing the ground beneath them holds some significant ruins of a long lost culture. The scholars are happy to share their findings and boast of their discoveries. The mercenaries hired to protect them, however, grow frustrated in their boredom."
      },
      {
        "roll": 10,
        "title": "Work Break",
        "description": "A camp of Humans are circled around a fireplace, sharing stories and laughing heartily. They invite the party to join them, offering portions from the pot of beans they are cooking over the fire. Conversation can turn sour however if the topic of why they're here is pressed, as this band of Thugs usually make their living by ambushing travellers."
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Poor Soil",
        "description": "This relatively gentle stretch of frontier looks perfect for farming and there are many barns, houses, and other structures indicating that previous occupants attempted just that. It is equally obvious, however, that the land proved unsuitable for farming, at least for the crops attempted, as the buildings are abandoned and falling apart."
      },
      {
        "roll": 2,
        "title": "The Wall",
        "description": "The party spots a partially-standing wall off in the distance, an obvious attempt to set a boundary and keep out the dangerous elements on the other side. Interestingly, the wall does not exist on any of the party's maps, nor does anyone recall hearing of such a wall. Further investigation reveals it is the corpse of a Grey Ooze."
      },
      {
        "roll": 3,
        "title": "Halfling Memories",
        "description": "The ground is a patchwork maze of open channels, the remnants of an old Halfling village. This was once an area of hills that have weathered down and exposed the old building interiors and linking passages. Intelligence (Investigation) checks may reveal hidden places where old treasures may lie."
      },
      {
        "roll": 4,
        "title": "Forgotten Monument",
        "description": "A crumbling old statue stands forgotten in the ruins of what was once a temple. The statue represents a god that is no longer worshipped, as its place in the pantheon was usurped by another. Wisps of the old god's spirit or those of dedicated followers still whisper in the wind."
      },
      {
        "roll": 5,
        "title": "Just Right",
        "description": "A home, long abandoned, holds three of everything: beds, chairs, bowls, and more. The name on the door reads 'Björnstad' along with a welcome mat reading 'Wipe Your Paws'. The lock has been broken by a previous intruder and it appears the family left in a hurry. An Intelligence (Investigation) check reveals strands of golden hair and blood stains."
      },
      {
        "roll": 6,
        "title": "Bad Sun Arising",
        "description": "A massive stone sundial marks the grounds of an ancient duel. No matter the weather conditions, the sundial always points to midday. An Intelligence (Arcana) check reveals remnants of a chronomantic abjuration spell. Breaking the spell via Dispel Magic results in the sound of two rapid explosions, which then allows the sundial to function normally again."
      },
      {
        "roll": 7,
        "title": "Harrowed Graves",
        "description": "An ancient graveyard lies inside an open glade, much older than the surrounding settlements. The weather-ravaged gravestones stand at awkward angles, some toppled over entirely. The plots around them are split open, some exposing planks of rotten wood. A scattering of used reagents from a necromantic spell are found along the borders of this site."
      },
      {
        "roll": 8,
        "title": "The Old Haunt",
        "description": "A long disused wayside tavern sits derelict and abandoned. The bottles of spirits gather dust or lay shattered, broken in a brawl between friends long passed. The lonely barkeep still tends to the place, even after death, their phantom spirit still polishing glasses."
      },
      {
        "roll": 9,
        "title": "Well-Intended",
        "description": "A well stands alone on an arid plain, looking relatively new in construction. Pulling the bucket up from below brings nothing but dust and dirt, despite the clear signs of water-wear on the inner walls. Whoever tried to settle here has long moved on, leaving only shallow pits around the well where building foundations once lay."
      },
      {
        "roll": 10,
        "title": "Crumbling Heavens",
        "description": "Escaping a minor rockfall, the party runs down a hill and tumble along the dry ground before falling through the dirt. Exposing a deep cavern, it appears this was once a family home of Duergar, neatly abandoned until now."
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "The Grinning Witch",
        "description": "A mass death site, marked by bleached humanoid skeletons lying in disarray around a single charred pole set into the ground. A blackened skeleton bound to the pole with chains grins out over the others, defiant in death. Evil permeates the site, but either party from the execution could be its source."
      },
      {
        "roll": 2,
        "title": "Cursed Road",
        "description": "This stretch of road is well-kept and well-marked. Each mile features a tall wooden post with a unique rune burned into it, though the language is unrecognisable. Scores of dead birds in various states of decay litter the ground around each post: some recent, others deeply decayed. A gap-toothed humanoid jawbone tops every third post."
      },
      {
        "roll": 3,
        "title": "Strange Bumps",
        "description": "A patch of land has several small mounds dotting the landscape. Digging up one of the mounds reveals the remains of a Dire Wolf. A Wisdom (Medicine) check reveals that the wolf was ritually slaughtered as part of a ceremony after it had consumed humanoid flesh. The party now stands on unholy ground; it is possible they are now afflicted with a curse."
      },
      {
        "roll": 4,
        "title": "Village Slaughter",
        "description": "The party arrives in a small town. Blood is smeared everywhere and corpses litter the streets. It seems everyone is dead except for a twitching body that is pinned to a cart by a large sword. The twitching body is a Zombie, and a Wisdom (Perception) or Intelligence (Investigation) check reveals that the bodies and blood are arranged in a pattern."
      },
      {
        "roll": 5,
        "title": "Another Mouse's Sky",
        "description": "A small empty town is filled with the bodies of Mousefolk. Bloodstains are smeared on walls and doors. Sounds of commotion lead to the culprit: a Giant Constrictor Snake fighting for its life against an Invisible Stalker, rodent in shape, summoned to avenge the town."
      },
      {
        "roll": 6,
        "title": "Two Bits a Play",
        "description": "On a lonesome road, one building struggles to stand against the skyline. Its windows are shattered, gambling tables lay broken, and corset-strewn balconies have collapsed. Strains of harpsichord music jangle tunelessly. A tiny clockwork child smacks at the keys of the piano, still animated by ethereal strings long after its patrons have left."
      },
      {
        "roll": 7,
        "title": "The Empty Altar",
        "description": "A stone altar stands within a copse of rotting trees. Three cadavers surround it, frozen in pain at the moment of their death, like their life force has been sucked right out of them. An Intelligence (Investigation) check reveals that whatever was enshrined upon the altar is now gone, residues of unknown magics surrounding where it lay."
      },
      {
        "roll": 8,
        "title": "Living Fertiliser",
        "description": "A stunning field of myriad mushroom species grows in seemingly infertile ground. The fungi tower overhead, some bioluminescent, some oozing a delicious-smelling ichor. Soon the party spots the upper body of a bandit submerged in the ground. Warnings in Druidic are etched into the stalks of these fungi."
      },
      {
        "roll": 9,
        "title": "Totem Boundary",
        "description": "The party comes up to a group of humanoid corpses lashed against standing poles. It is apparent that this is a warning to keep them from going further. What is also apparent is that these corpses are fresh. The party can still smell the stench of recent death and the bodies haven't even begun to decay."
      },
      {
        "roll": 10,
        "title": "The Church",
        "description": "An old, boarded-up church sits on a hill. It is inhabited by Wights who once refused to fight and sought refuge here. They were cursed by their god for their cowardice and refused entry into the afterlife until they can prove themselves worthy. They tell their tale solemnly to the party, still unwilling to draw blood, despite their curse."
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "Supper Interrupted",
        "description": "A frightened Halfling hunter comes stumbling back to town with a spike in one leg. She is the sole survivor of her hunting party, who had the misfortune of gaining a Manticore's attention. Unfortunately, the Manticore is hot on her tail, and its brought a friend or two along with it."
      },
      {
        "roll": 2,
        "title": "The Secret Threat",
        "description": "A friendly traveller from beyond the frontier stops at the same inn where the party is staying. They offer tales of life beyond the frontier and prove an exceptionally able drinker. Unfortunately it is all a ruse and, at night, this traveller transforms into an Oni. Its first victims will be the innkeeper's children unless it is stopped."
      },
      {
        "roll": 3,
        "title": "Meet the Deity",
        "description": "The party visits an isolated town deep in the frontier. The town has made sacrifices to survive, including adopting a local Young Black Dragon as their 'god'. This dragon demands regular humanoid sacrifices and, with the arrival of the party, the townsfolk need not sacrifice one of their own. They welcome the travellers even as they poison their food and drink."
      },
      {
        "roll": 4,
        "title": "Deadly Trophy",
        "description": "Frontier ranches have been plagued by wolf attacks. One old retired adventurer proudly proclaims that he killed the beast with his magical axe, only for the corpse to return to Human form. Needless to say, the deceased's Werewolf lycanthropic family isn't pleased by this turn of events and vow to kill everyone in town."
      },
      {
        "roll": 5,
        "title": "Ghost Riders",
        "description": "The howling wind disguises the sounds of screaming. The hunt of the infamous ghost riders (Wraiths on Nightmares) has begun. They travel the winds, killing the weak and inducting the strong into their eternal hunt across the plains."
      },
      {
        "roll": 6,
        "title": "Black Gold",
        "description": "A gold mine is quickly abandoned when their sudden excitement to strike the elusive 'black gold' is replaced with horror. The mine is home to a massive Black Pudding that devours all intruders. Only gold dust, corroded pickaxes, and unsent letters filled with hope remain of the original crew."
      },
      {
        "roll": 7,
        "title": "Putrid Plain",
        "description": "Settlements encircle an empty plot of land, where seeds die the second they are buried, and foul odours stink up the air. A band of Dretches have found their way to this plane and have sought to expand their vile territory into nearby settlements."
      },
      {
        "roll": 8,
        "title": "Firebrand",
        "description": "Bandits riding Nightmares ambush the party, their fiendish mounts burning brightly against the setting sun. These Bandits are unhappy with the party's recent good deeds, revealing that they were actually the cause of a previous encounter, and now intend to take the fight into their own hands."
      },
      {
        "roll": 9,
        "title": "Welcome to the Neighbourhood",
        "description": "The party arrives at a small village that has only been set up fairly recently. Several homes are still being built, but the settlers seem inexperienced and aren't too knowledgeable about the area. Their hubris is apparent when Gnolls arrive and surround the village, poised for a fight and filled with bloodlust. Among them are tamed Giant Scorpions."
      },
      {
        "roll": 10,
        "title": "There's a Snake in My Boot!",
        "description": "A towering mesa has left a number of rocks in the party's path from a recent landslide. Amongst these rocks, however, is a pack of Grick waiting in ambush. The dry ground has been disturbed by the recent geological instability and can crumble underfoot, sinking an unfortunate ankle into a vice-like trap that requires a successful Strength (Athletics) check to escape."
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Dual Plagues",
        "description": "While a mysterious plague ravages a nearby village, making matters worse, a farmer is having trouble with some Goblins in his fields. The farmer hires the party to catch them. When the party catches a Goblin, it explains that its community is also suffering from the plague, but there is a cure — wild herbs growing in the farmer's field."
      },
      {
        "roll": 2,
        "title": "Wolf's Clothing",
        "description": "After suffering a few demon attacks, frontier ranchers are noticing demonic symbols freshly painted around the outskirts of the community. The culprit is a sketchy Priest who is actually a retired demon hunter, the runes warding against future attacks. Removing the symbols allows the demons back in."
      },
      {
        "roll": 3,
        "title": "Strange Face",
        "description": "The party reaches a town at the outskirts of a famed ancient temple. The innkeeper looks strangely at a party member while he warns them of the temple's many traps. He recognises this member of the party, as their face is depicted in large murals on the temple walls."
      },
      {
        "roll": 4,
        "title": "Opposites Attract",
        "description": "A town of Humans is unusually run by two mayors: a Bearded Devil and a Deva. This balance of good and evil keeps the town neutral, and strict agreements are in place to ensure no violence between the angel and devil, though a secret love is blossoming between the two."
      },
      {
        "roll": 5,
        "title": "I Run This Town",
        "description": "A small outpost deals in secrets and favours instead of currency. Their leader, a Rakshasa disguised as an Elven noble, is keen to wrap the party in their web of debts and conspiracies. They offer whatever the party most desires and appear capable of fulfilling their promises as long as the party 'plays by town rules'."
      },
      {
        "roll": 6,
        "title": "Strange Omens",
        "description": "The party encounters a dazed Tiefling Acolyte at a crossroads. The young traveller states they have left their monastic school for orphans in search of their parents, whom they are positive still live thanks to visions they've received. In truth, their parents are a Pit Fiend and a Planetar who supervised this territory for millennia and abandoned their child for everyone's safety."
      },
      {
        "roll": 7,
        "title": "Not All Bad",
        "description": "A dishevelled Warlock spends the night in a frontier town before travelling into the unknown to 'meet his patron'. He has been seen leaving markings on several buildings. His patron has asked him to condemn this town, though an Intelligence (Arcana) check discerns that he has built in protective runes to spare the lives of the children."
      },
      {
        "roll": 8,
        "title": "A Time of Change",
        "description": "A teenage Half-Orc asks the party to tag along on their adventures, seeking to leave his podunk town behind and forge his own path. He is incessantly annoying in his enthusiasm, wanting to know everything about the party. He has recently discovered that he is the Changeling son of a Doppelganger and is running away from his family."
      },
      {
        "roll": 9,
        "title": "Low Noon",
        "description": "A mysterious stranger enters the taverns of outskirt towns at dusk, challenging individuals to a duel at midnight. A party member is challenged by this stranger, and they refuse to back down unless a Strength (Intimidation) check is passed. The stranger hides that they are a Vampire who uses these duels as a means of feeding unnoticed."
      },
      {
        "roll": 10,
        "title": "Right Place, Wrong Time",
        "description": "An Elf in unusual garb wanders into the tavern on the edge of the frontier. They speak in a strange dialect of Elvish, their only language. They claim to be from a faraway kingdom, and react sheepishly to mechanical contraptions. The distance they travelled is actually time, as they fell through a portal that brought them millennia into the future."
      }
    ]
  },
  "Grasslands": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "a feast for their nomad tribe",
        "description": "They are friendly enough, if a little competitive. Should the party have the means to help, they will gladly accept, making a contest of it. The party are more than welcome at the feast as well. Wrestling Tournament: A large gathering of locals is causing a stir as they celebrate or bemoan"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "the victory of a match between two fighters — the first of many in a day of martial might, drinking, and song. The locals will invite them to join and celebrate, and any stout fighters among them will receive an extra invitation to compete. Silk Road: A group of merchants are travelling to a trade post; a part of a much larger network,"
      },
      {
        "roll": 3,
        "title": "taking advantage of the well-worn roads crossing through these grasslands",
        "description": "The traders may be willing to offer the party a deal on fine silks and other luxury goods at a price much lower than the in the cities, cutting out the middleman. Sage Advice: A travelling sage approaches the party, offering to impart his wisdom upon them."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Before they can properly accept or refuse, they begin to give a rambling speech full of segues, repetitions, and contradictions. Worst of all, their wisdom seems to never end… Your Hands Only: A mounted courier is making his way across the plains, carrying a satchel"
      },
      {
        "roll": 5,
        "title": "of letters and other packages meant for distant lands",
        "description": "He will approach the party asking who they are, and will name one of them specifically with a package from home, from an ally, or from an enemy they have made during their travels. Seasonal Nomads: A nomadic tribe of druids is making its way across the region in order to"
      },
      {
        "roll": 6,
        "title": "prepare for the coming wet season",
        "description": "They have knowledge of the area, and will have plenty of tales of the gods and monsters responsible for the weather in this region. Disappointing Celestial: An explorer just bought a Unicorn, although he seems to be quite disappointed in it. It seems much bulkier and less impressive than he had heard in the legends."
      },
      {
        "roll": 7,
        "title": "Grey, thick skinned, and lower to the ground than he was expecting too",
        "description": "If the party tries to correct him by pointing out that it's a rhino, he will scoff at the idea of such a fantastical sounding creature. Fairy Festival: A band of travelling fae creatures crosses the party's path, on their way to a"
      },
      {
        "roll": 8,
        "title": "moonlit ridge to set up their circus",
        "description": "The party may have heard of their legendary status on their journey. Though unfamiliar with any surrounding towns and cities, these fae folk know the plains like the back of their hand. Return to Nature: A procession of nomads carry a silk wrapped body across the plains,"
      },
      {
        "roll": 9,
        "title": "followed by mourners",
        "description": "The body is placed in the middle of the plains and given no markings or significance — even the silk shroud is removed. When the tribe departs, vultures and other scavengers pick at the body until nothing remains. A Steppe Too Far: Jutting out from the plains, and half buried in the ground, lies the massive"
      },
      {
        "roll": 10,
        "title": "structure of a warship",
        "description": "Its masts tower high into the sky, and its sails bear the mark of a pirate crew. These pirates are too concerned with repairs to engage with the party, grumbling about getting their ship back to sea, and never angering a Wizard again. ENCOUNTERAS:NGCRIEANSTS LRAUNINDS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "meets three dwarven women harvesting reeds from the riverbank",
        "description": "An old tradition, these reeds will be used in weaving baskets and other crafts. The Dwarves are willing to teach this skill, if the party is willing to learn. Cool, Calm, Collected: When stopping at the bank of a watering hole, the party feels"
      },
      {
        "roll": 2,
        "title": "an overwhelming sense of calm",
        "description": "This serenity is mirrored in the nearby animals, who lackadaisically brush past each other, predator and prey alike, without fear of violence. This seemingly magical aura of harmony allows all to share in the bountiful food and water present. Magical Berries: A patch of berries stands out from the surrounding grasslands, their colours"
      },
      {
        "roll": 3,
        "title": "unnaturally vivid",
        "description": "Evidence of magic lingers in the area, and a Druid or detect magic spell may identify these as goodberries. When plucked and eaten, the juice stains all it touches for hours, leaving no doubt as to who has been scrumping, should the farmers return. Following the Leader: A family of Elephants plod through the expanse, calves running in"
      },
      {
        "roll": 4,
        "title": "between their parent’s legs",
        "description": "Following this herd could lead the party to clean drinking water, although an opportunistic adventurer could also attempt to use an elephant as a mount or beast of burden. Be wary though, as an elephant would not willingly leave its family behind. Delicious Drops: A bubbling font of water bursts from the top of a hill just as the party crest"
      },
      {
        "roll": 5,
        "title": "it, showering them in magical water",
        "description": "Should any attempt to drink this water, they find that it tastes just like their favourite meal, and fills them up just as much. The fountain dwindles quickly, leaving all scrambling for containers before this mystical spring dries up. Bountiful Burrows: The Quartermaster catches their foot in a burrow, which indicates the"
      },
      {
        "roll": 6,
        "title": "presence of hares in these fields",
        "description": "Clever traps and quick shooting may provide enough of these rodents for a decent meal, though the hares are quick, with plenty of hidey-holes. Quip Wits: An oxbow lake provides a nestled camping spot, with plenty of fish beneath the soft"
      },
      {
        "roll": 7,
        "title": "ripples of the water",
        "description": "Those skilled at fishing may catch a tasty meal, though tales of Quippers in these lands are common. A dip in the lake is ill-advised, lest the party wish to be fish food. Road Runners: A flock of Axe Beaks thunders through the steppe, squawking and flapping."
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "Older and weaker birds fall behind the crowd, relatively easy pickings should the party feel brave or foolhardy enough. Domesticated axe beaks have also been known to be good beasts of burden, or used as mounts by smaller folk, though these wild varieties could be harder to train. Army Aid: A regiment of soldiers has crossed paths with the party, on a training exercise in"
      },
      {
        "roll": 9,
        "title": "the grasslands",
        "description": "Having had no luck finding food, the Quartermaster can ask for aid from the colonel. Replace the normal Intelligence (Investigation) check for Hidden Reserves with a Charisma (Persuasion) check. One Dino’s Trash: The fresh corpse of a Triceratops lays on the open field, evidence of a rampaging Tyrannosaurus Rex who must have continued its pursuit of the rest of the herd."
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "There is plenty of meat to be harvested, and its leathery skin and pointed horns could make good materials, if the party feels safe enough to spend time exposed while a T-Rex is on the prowl. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "tallest of people",
        "description": "A Constitution (Survival) check determines how well the Outrider can keep their sense of direction in this never ending obstruction. Local predators lurk in the thickets, using the grass as cover before striking at their prey. Choking Smoke: Dry weather has caused the already arid grasses to become increasingly"
      },
      {
        "roll": 2,
        "title": "prone to wildfires, one of which has cut a swathe across the path of the party",
        "description": "The wind has carried choking clouds of smoke in their direction, and a successful Wisdom (Medicine) check can help alleviate any effects of smoke inhalation. Storm A-Comin’: The already harsh winds pick up strength. This storm threatens to throw"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "medium sized members of the party to the ground, and hurl smaller sized members into the sky momentarily. A successful Strength (Athletics) check can allow the Outrider to find an anchoring point in time, perhaps a lone tree, a cave, or a sheltered nook. Concealed Canyon: A sudden drop into a large gorge has been hidden by an illusion, only noticeable at the last second as the party nears the edge. A dastardly trick of magic, a successful"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Intelligence (Arcana) check will reveal what the spell covers, allowing the Outrider to find a safe crossing. Who cast this spell? Was it to trick travellers, or to hide something at the bottom of this canyon? Crude Awakening: Sticky tar pits block the way, their noxious smell evident for miles around."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "With no avoiding their oily clutches, the best the party can do is nimbly hop between safe mounds with a Dexterity (Acrobatics) check, hoping to escape the fate of the many oily animals around them. Hungry Vultures: The area ahead seems uneventful, though overhead a large pack of Giant"
      },
      {
        "roll": 6,
        "title": "Vultures circles high in the sky",
        "description": "They are desperate and hungry, and a successful Dexterity (Stealth) check is all that can be done to crawl through the grasses to avoid their gaze. Dust Bowl: A recent dry season has turned much of the soil to dust, with strong winds"
      },
      {
        "roll": 7,
        "title": "whipping it up into the air",
        "description": "A Constitution (Athletics) check tests how well the Outrider finds their way as they brace themselves through the blinding storm, the effects of which will last for weeks after the event. Burning Rain: The path ahead is worn and lifeless, with even the grass shying away from"
      },
      {
        "roll": 8,
        "title": "this area",
        "description": "As the party continues, clouds in the sky grow dark and sinister above, with an Intelligence (Nature) check alerting the Outrider to acid rain beginning to fall. Some may interpret this cloud in the shape of a skull… a sign that this phenomenon is not natural at all. Magical Mist: A strange mist twists and weaves itself around the party, cutting them off"
      },
      {
        "roll": 9,
        "title": "from each other as its enchanting embrace ensnares those who pass through it",
        "description": "Calling out to each other in the mist, the Outrider must listen out and gather up the party with a Wisdom (Perception) check and so they can push their way through this cloud together. Cow Patch: A herd of large horned cattle are travelling across the plains to a new grazing"
      },
      {
        "roll": 10,
        "title": "site",
        "description": "The herd is huge, and their path cuts right through the road ahead, blocking it. The party must navigate through this herd with a Wisdom (Animal Handling) check from the Outrider, being careful not to spook the creatures and cause a stampede. ENCOUNTERAS:NGCRIEANSTS LRAUNINDS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "they may eat, though pride means she refuses to ask for help",
        "description": "She will, however, ask if the party would join her for a hunt, a Strength (Survival) check allowing for the takedown of some meaty prey. Pauper Prince: A young man in chains runs towards the party, beaten, bruised, and close to collapsing. In the distance horsemen are approaching, chasing after him. Hiding in the tall and"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "tangled grass, he begs the party to point his pursuers in the wrong direction with a Charisma (Deception) check, telling them that he is a prince and those chasing him are the rivals of his family. Pack Horses: A caravan of traders is under attack by a group of Centaurs, who are trying to"
      },
      {
        "roll": 3,
        "title": "chase them off so that they can liberate their subjugated pack animals",
        "description": "A successful Charisma (Intimidation) check can assist the side of the party’s choosing, convincing the centaurs the fight is not worth the trouble, or the traders to release their chained chattel. Bottled Rage: A group of Wizards are fleeing from a Djinni, begging for help from the party,"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "while keeping from them that they had attempted to trick it into eternal servitude. The Djinni will be upon them soon if not for a successful Dexterity (Stealth) check, seeking to teach them the error of their greedy ways with a cruel lesson. The Perfect Steed: Horses are scattered across the area, with a naive young Elf chasing after"
      },
      {
        "roll": 5,
        "title": "them on foot to no avail",
        "description": "The herd is in danger of fleeing entirely unless he receives help, and a successful Wisdom (Animal Handling) check can wrangle the perfect horse for the grateful Elf before they gallop into the distance. As Good as Gold: An elderly Halfling woman wandering the plains approaches the party"
      },
      {
        "roll": 6,
        "title": "and asks if they have any alms to spare for the poor",
        "description": "The old beggar is secretly more than she seems, a Gold Dragon in disguise, and a Wisdom (Insight) check allows the party to act appropriately around such a creature, avoiding its ire and remaining on its good side. Gone With the Wind: A finely dressed Dragonborn is riding his horse while shouting out"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "across the plains, searching for his brother after they were separated from their caravan during a raid. A successful Intelligence (Investigation) check can find evidence of the missing brother, though the Dragonborn has less than a day to track him down before the caravan moves on. Seeking Salvation: A desperate Gnome prays at an overgrown shrine, pleading for the help of whatever god will listen. He has gambled away all of his life’s savings, losing friends and"
      },
      {
        "roll": 8,
        "title": "family along the way, and seeks atonement",
        "description": "However, unsure of where to start, he doesn’t even recognise this shrine, though a successful Intelligence (Religion) check can help him get started on the way to salvation. Back Breaking Work: A Dwarf is laying on his back crying out in pain, a fall from his horse"
      },
      {
        "roll": 9,
        "title": "having injured him greatly",
        "description": "The horse has long since run away, and predators are watching and waiting for their new meal to stop screaming. A successful Wisdom (Medicine) check can stabilise the Dwarf, but he will need carrying to the nearest settlement. Lost Cub: A baby tiger cries out and looks around desperately for its parents. A Wisdom"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "(Animal Handling) check determines how well cared for it is for the day, before the party encounter worried Weretiger parents, relieved to find their baby unharmed, and thankful for its rescue. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "party",
        "description": "Demanding their food and camping supplies, they strangely make no mention of gold. Their ferocious mounts, willingness to fight dirty, and desperate hunger will make them a challenging fight. Desecration: Hidden away in a hilly region of the steppes, a cabal of Cultists led by a Cult"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "Fanatic are preparing a sacrifice to their dark god, planning to taint the grounds here with the blood of their Halfling captive to further their goals. With the party catching them off guard, they’ll fight to the death to keep their preparations secret. Bring Out Your Dead: A pair of Flesh Golems are looting the corpses of a recent conflict"
      },
      {
        "roll": 3,
        "title": "between two raiding parties",
        "description": "one carries gold and equipment of value, while the other piles corpses onto a cart. Should they see the party, they will attack, to ensure their work remains uninterrupted. Private Property: Galloping Centaurs surround the party, claiming they have passed through"
      },
      {
        "roll": 4,
        "title": "their territory without the permission of their clan",
        "description": "Insulted by this disrespect, they will hear no apologies, and will attack the party, seeking to bring them back to their settlement to stand trial. Remnants: The remnants of a great battle stir here: a large number of undead Knights riding"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "skeletal horses ride for war, fighting and dying with each rise and fall of the sun. Trespassers will find themselves attacked by both sides. River Raiders: Travelling down a larger river that cuts through the landscape is a small boat"
      },
      {
        "roll": 6,
        "title": "crewed by Halflings and Gnomes",
        "description": "Should they sight the party, they’ll move closer to the shore, the Veterans and Bandits pelting them with javelins and arrows. Get Off My Lawn: A pair of Druids watching over these lands warns the party not to trespass"
      },
      {
        "roll": 7,
        "title": "on their domain",
        "description": "They guard a vulnerable nature spirit somewhere in the area, and fear for its life, attacking all who they fear may wish it harm. Terminal Velociraptor: While the party is preparing their camp for the night, a pack of"
      },
      {
        "roll": 8,
        "title": "Velociraptors catches their scent and prepares to ambush them in the dark",
        "description": "Should anyone in the party wander off by themselves, or have obvious wounds, they will be the first target."
      },
      {
        "roll": 9,
        "title": "On the Prowl",
        "description": "A pride of Lions prowls the area, hunting for food. Withered and starved, they have had little success lately, and must be desperate to attack a group of humanoids. Violent Herbivores: A herd of Triceratops is moving through the area, though a recent attack"
      },
      {
        "roll": 10,
        "title": "by predators has left them agitated and hostile",
        "description": "Should anyone draw too close, they will defend themselves. ENCOUNTERAS:NGCRIEANSTS LRAUNINDS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "of graceful dives, impressive twists, and rapturous calls",
        "description": "With no interest in the party below, the group may take a moment to watch this display of love, admiring nature’s beauty, or fearing what such loud squawking may attract. Sacred Mountain: A small mountain rising above the steppes provides a home for trees and"
      },
      {
        "roll": 2,
        "title": "animals to flourish in surprising serenity",
        "description": "Many of the local people of the area have set up small personal shrines to their gods and ancestors here, with no rhyme nor reason to their devotion, a true mix of faiths. Grazing Giants: A pair of colossal Diplodocuses roam the plains, their swooping necks bringing giant heads close to the ground to graze. Trampling through the grasslands they crush"
      },
      {
        "roll": 3,
        "title": "any aspiring trees, leaving the landscape flat",
        "description": "Seeing families of these gargantuan dinosaurs is a sight to behold, their placid nature and low calls contrasted by their immense size and strength. Suitable Steeds: In the distance, dozens of Giant Weasels race across the plains, each mounted by a Halfling rider who expertly guides the creature with calls and prompts. A contest seems"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "to be underway between the Halflings at the front of the procession, while younger members of the group canter calmly towards the back, learning how to handle their mounts and work as one. Great Wall: A great wall of stone towers high above, cutting through the flat lands. Untouched"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "and unworked for many hundreds of years, this once mighty border wall has since fallen into disrepair, nature reclaiming this artificial structure for its own purposes. Fairy Garden: The continual sea of green gives way to a beautiful multi-coloured patch of"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "flowers, tended to lovingly by Pixies who flutter between each bloom, caressing the petals and encouraging growth with their fae magic. Sprites guard the borders of these gardens, poised to attack the party if they do more than just observe and admire. The Forest for the Trees: Tall trees in the distance break the flat monotony of the plains,"
      },
      {
        "roll": 7,
        "title": "but the party are quick to notice that these trees are not rooted in place",
        "description": "Treants are herding animated trees and shrubs between them, seeking a suitable place to set up a new forest, the sound of their creaking branches and rustling leaves carrying on the wind. Foreshadowing: While stopping to rest at night, a Giant Elk crests the hill, regally assessing"
      },
      {
        "roll": 8,
        "title": "the party",
        "description": "Its majestic antlers seem to nestle the moon within their grasp as it stares, before it snorts and strides away across the plains. Visitations by these animals are often omens of important events, though what occasion might be on the horizon is left to interpretation. Air Show: From atop a hill the party spots unusual yet rhythmic movement across the"
      },
      {
        "roll": 9,
        "title": "grasslands",
        "description": "An Air Elemental dances along the plains, almost invisible to the naked eye save for the rippling of grass beneath its feet. The wind rushing through the grass and over the hill creates a musical effect, all combining into a stunning performance brimming with power. Call of the Wind: The harsh winds have calmed down momentarily, with still occasional flurries amidst bracing breezes. If the party remains silent, however, they can almost hear"
      },
      {
        "roll": 10,
        "title": "voices in the wind… voices of friends, lovers, and allies",
        "description": "Snatches of conversation can be heard, magic carrying their words as though the party were beside them, revealing insights otherwise unobtainable. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "The dinosaur is guarding a pair of eggs in its nest, and will fight to protect them from threats, but such eggs are a tempting target for greedy adventurers. Carrion Feeders: The picked carcasses of a band of adventurers can be found in a clearing. Their armour is destroyed, and their adventuring gear seems to be missing. Feathers that litter"
      },
      {
        "roll": 2,
        "title": "the area give a clue as to the perpetrators",
        "description": "a flock of Giant Vultures. Tracking them to their nest will reward them with the gear of these adventurers, and that of the other unfortunate souls that the vultures have picked at. A Mammoth Task: The tracks of a herd of Mammoths, noticeably lacking in numbers, the"
      },
      {
        "roll": 3,
        "title": "old and sick having fallen behind",
        "description": "The tusks and pelts from mammoths are valuable, and the amount of meat available would replenish supplies for the journey. As I Lay Down to Sleep: A crude camp has been set up by a wandering Hill Giant, who loudly"
      },
      {
        "roll": 4,
        "title": "prepares his meal and bed for the night",
        "description": "Attached to his pack of crude camping supplies is a large chest full to the brim with valuables and trinkets he has gathered across his journeys, along with the skulls of those who’ve tried to take it from him. Sparkle in the Sun: The mutilated body of a unicorn sits abandoned at the side of the road,"
      },
      {
        "roll": 5,
        "title": "having been slain for its blood by a Vampire Spawn, its horn also stolen",
        "description": "The creature’s bloody tracks lead off into a secluded cave hidden in a crag in the earth, where the long dead remains of other similarly drained magical creatures can be seen. Landlocked: A Wyvern with torn wings drags its way across the plains, struggling to catch"
      },
      {
        "roll": 6,
        "title": "food as it slowly makes its way back to its nest",
        "description": "Striking it while it is wounded would be an easy way to claim its valuable scales and venom, but its nest may contain collected treasure, eggs, and of course more Wyverns. Smiling Hunter: A large buffalo has been turned into a pincushion by a Manticore. The"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "predator’s spines are useful alchemical components and can be used in making arrowheads. The Manticore will need to be tracked as it takes off and lands intermittently. Stealth Phase: The fields ahead are coated with a blanket of webs from a clutch of Phase"
      },
      {
        "roll": 8,
        "title": "Spiders",
        "description": "The silk made from the webs is said to have magical properties. Tracking the miniscule footprints and partially encased prey may be worth the risk. Wind on the Prairie: The long blades of grass are parted like wakes on the water. Air"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "Elementals have taken up residency here and glide across the surface of the plains like ships. Following their whimsical trails will be confusing at best, but the ritual site that summoned them has magical components that would make it worthwhile. Crouching Dinos: A pack of Velociraptors have recently chased down some gazelle. Their"
      },
      {
        "roll": 10,
        "title": "feathers and teeth are prized trophies to nearby tribes",
        "description": "The bloody trails left in the grass blades are not hard to follow, but finding the hidden raptors will be. ENCOUNTERAS:NGCRIEANSTS LRAUNINDS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "with signs of recent use and some fishing supplies left behind",
        "description": "A picturesque spot, though any thrashing in the water may indicate signs of Quippers, and may explain the absence of the owner. Windward: A wooded mountain provides great cover against the strong winds, if not the rain."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "With these rains, however, come abundant wildlife and foragable food, a fact known by the party and many other predators, such as Wolves. Trading Post: A small settlement of tents and temporary housing has sprung up along a major"
      },
      {
        "roll": 3,
        "title": "trade route, only used during this season",
        "description": "Finding shelter here is easy, and there are many traders looking to buy and sell. Spots with many travellers and traders like this often draw opportunistic rogues looking to make some quick coin. Shoes Off: A Giant Eagle leads the party to a sheltered campsite, evidence of past travellers"
      },
      {
        "roll": 4,
        "title": "noticeable by the Quartermaster",
        "description": "Several pairs of boots line the end of each bed, provoking questions as to who would leave such necessary equipment behind… questions the eagle doesn’t seem to appreciate. Uneasy Alliance: Two Orc guardsmen surprise the party with their stealthy arrival, and bluntly"
      },
      {
        "roll": 5,
        "title": "insist the group follow them",
        "description": "Unthreatening, they lead the party to their nomadic campsite, where the chief coldly offers them shelter and supplies for the night. Unfamiliar social cues leave the party on edge, feeling that the slightest insult may cause an outrage. Hollowed Hill: The party face yet another grassy mound, only to notice a small wooden door leading inside the hillock. Though suitable for small members of the party, medium sized"
      },
      {
        "roll": 6,
        "title": "members must hunch over to enter this empty Halfling house",
        "description": "Modern furnishings tell that this house isn’t abandoned, but a layer of dust indicates that it is rarely used; a safe house, perhaps, or a holiday home. Water Relief: A scenic pond comes into view just as the party begin complaining about the"
      },
      {
        "roll": 7,
        "title": "humid heat of the day, relieving all",
        "description": "While insects buzz around this water source, they are mostly harmless, making this an ideal campsite. Meeting Grounds: A sheltered ridge seems the perfect site for a camp, with flat space and"
      },
      {
        "roll": 8,
        "title": "protection from the wind",
        "description": "During set up, the Quartermaster notices recent signs of use, and carvings on the walls indicate that this may be a meeting point for various tribes of the land. The party can only hope they aren’t intruding. What Lies Beneath: Open grasslands don’t always provide adequate shelter, and sometimes"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "an empty patch of land carpeted with soft and springy grass is the best the Quartermaster can find. While the party rests for the night, a rumbling can be heard beneath the ground: nests of burrowing insects. Hopefully these bugs stay in their underground warrens. Fortunate Forest: The party chances upon a thicket of trees, shielding them from sight and"
      },
      {
        "roll": 10,
        "title": "an oncoming storm",
        "description": "The trees take the brunt of the winds, leading to a cacophony of rustling leaves, though rain still trickles down. Wild animals may also have taken shelter here, and may not be so willing to share. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "crossroads",
        "description": "Multicoloured signs adorned with images of gynosphinx, rakshasa, and bugbears point the way to regions unheard of. Attempts to follow the road are unsuccessful, as they quickly wind back into the wilderness. Ancient Battlefield: Harsh winds have partially exposed what had long been buried"
      },
      {
        "roll": 2,
        "title": "underneath the ground",
        "description": "the dried bones, broken arms, and armour of countless warriors from a battle fought in ages past. With no settlements nearby, it is unclear who these armies were or what they were fighting over. Banner Ground: A circle of metal banner poles jut out from the ground around a mound of"
      },
      {
        "roll": 3,
        "title": "stones",
        "description": "Each banner displays the symbol and name of a long dead tribe. Buried beneath the mound is a chest containing their ancestral relics, arms and armour. While they are interesting artefacts, time has worn away their market value. Standing Stone: Standing proudly upon the steppes is a large stone slab. Once expertly carved"
      },
      {
        "roll": 4,
        "title": "and smooth, it has been eroded and warped by time",
        "description": "An archaic form of Common carved in the stone speaks of a long voyage across sea and land, and how Orc explorers chose to settle these lands from their frozen home. Lone Fort: A ruined fortress sits isolated on a rise in the terrain, its walls crumbling and most"
      },
      {
        "roll": 5,
        "title": "of its buildings collapsed",
        "description": "A sturdy watch tower holds firm, commanding an impressive view of the lands around the fortress if climbed. Judging by the rusty armour left behind, this fort was built by Tiefling soldiers in an unknown war. Court Order: A paved area with chairs carved out of stone lays atop a hill, worn smooth from"
      },
      {
        "roll": 6,
        "title": "repeated use",
        "description": "A central altar sits in the centre of this structure with delicate weighing scales poised atop, indicating some sort of judgement took place here. If the party sits on these chairs, they must be truthful as if under the effects of Zone of Truth. Abandoned Farmstead: Nomadic life on the plains and grasslands is not suitable for all, with"
      },
      {
        "roll": 7,
        "title": "some attempting to settle down and eke out a meagre harvest from the poor soil",
        "description": "Most, if not all, attempts end in failure as with this crumbling homestead, the aspiring farmers leaving for more promising prospects, or returning to life within city walls. Crash Landing: A village of unfamiliar architecture seems to have crashed violently onto the"
      },
      {
        "roll": 8,
        "title": "plains, debris littering the fields for miles around",
        "description": "Strange propellers dot the landscape or lay crushed and warped on the outskirts of this structure, suggesting that this village once flew through the skies. Lonely Pool: A small pond, unconnected to any source of flowing water, glitters temptingly"
      },
      {
        "roll": 9,
        "title": "in the sun",
        "description": "Upon inspection, this mystical pond reflects to the viewer their loneliest moment, evoking feelings of despair in some, while reminding others how much they have overcome. Winter Wonderland: A frozen town hugs the south bank of a mighty river, also locked in"
      },
      {
        "roll": 10,
        "title": "ice",
        "description": "The weather in this region is not cold enough for this frosty phenomenon, nor is the air here similarly freezing. Attempts to melt the ice are met with a cold shoulder, though the ice covering the river is thick enough to cross safely. ENCOUNTERAS:NGCRIEANSTS LRAUNINDS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "find three dead Halflings inside, their legs elongated unnaturally, their clothing stretched and torn. Their peaceful faces indicate no pain, but an empty bottle of ‘Granny’s Longstrider Concoction’ lies nearby. Hunter Becomes the Hunted: The titanic corpse of a Tarrasque lays half buried into the earth,"
      },
      {
        "roll": 2,
        "title": "rot and decay slowly working their way through the creature",
        "description": "This colossal cadaver sends shivers up the spine of even the bravest adventurers… but not as much as the thought of what could have possibly killed such a titanic beast. Tainted Ground: Blood has seeped deep within the earth here, tainting it forever in the eyes"
      },
      {
        "roll": 3,
        "title": "of the native nomads",
        "description": "Their beliefs are not without good reason, as when night falls the bodies and spirits of the long dead stir once more, waging war upon each other as they once did in life. Arboreal Atrocity: A lone tree towers above the landscape, heavy branches creaking in the"
      },
      {
        "roll": 4,
        "title": "wind",
        "description": "Thick chains tied around its trunk trap the bodies of the condemned, their rotten remains withering in the sun. An air of malevolence surrounds the tree, as if it craves more. Bird Feed: Vultures circle overhead, warning the party of death along this dirt track. An"
      },
      {
        "roll": 5,
        "title": "overturned wagon spills its remains on a dirt track",
        "description": "seeds and farming tools, and two dead Humans. Their corpses have been decimated by the carrion feeders, and a Giant Vulture perches menacingly at a distance, assessing the party and weighing its chances. Smoke and Bones: The smoking remains of a village are visible in the distance, its buildings"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "and crops torched, the soil salted, and the people’s corpses piled together on a pyre. Such a deliberate slaughter chills even the coldest of adventurers, and instils a desire for justice for the victims. The Earth Bleeds: A great gaping wound in the earth has been carved here, and a violent"
      },
      {
        "roll": 7,
        "title": "expulsion of furious flames pours from it ceaselessly",
        "description": "Whether this strange sight is caused by natural gas igniting beneath the earth, or from something far more sinister like a devil or demon, the sight of such a firestorm is unnerving on a primal level. Draconic Demise: A dragon's remains sit slumped against the entrance to a small cave, a"
      },
      {
        "roll": 8,
        "title": "strange sight in itself",
        "description": "Inside is a chamber that once held a vast amount of treasure, now looted save for a few scattered coins. Smashed up remains of eggs can be found, the pillagers ensuring none of the dragon's kin would come seeking retribution. Fallow Year: Farmland has been carved out of the wilderness, an impressive feat in itself."
      },
      {
        "roll": 9,
        "title": "An empty farmhouse bears evidence of attack, its stores plundered by raiders",
        "description": "Whether an opportunistic raid, or an attack by a nemesis to sow fear, the party feel disheartened by the waste of life along this journey. Beat a Dead Horse: Instead of the normal herds of horses roaming the lands, the arid region"
      },
      {
        "roll": 10,
        "title": "here is home to a macabre species",
        "description": "the Warhorse Skeleton. These bony beasts behave just as they did in life, running free and wild, even trying to graze. Skeletal foals huddle near their mothers, the sound of clacking bones heard in place of whinnying. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "challenging enough, but being unable to identify the troll or even locate it will prove to be deadly complications. Quick thinking and luck will be needed to survive the night. Pack Territory: A group of Orc Werewolves have seen the party trespassing in their hunting"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "grounds, and will not only fight to push them out of their territory, but punish them for the transgression. Skilled hunters and trackers, they’ll pursue the party until they are sure they’ve learned their lesson."
      },
      {
        "roll": 3,
        "title": "Cavalry Ambush",
        "description": "A squad of armoured Centaur soldiers attack, in search of a good challenge and better plunder. Their mobility and reach make them difficult opponents to fight. Inflight Meal: Though Dragons rarely take up residence within the wide and seemingly empty"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "plains and steppes of the world, they can be seen in the region, often travelling to another by wing. Long flights can leave a Dragon quite hungry, and a Blue Dragon has spied the party as a quick snack. A Bad Joke: A group of Oni disguised as jesters approach the party in the midst of performing"
      },
      {
        "roll": 5,
        "title": "tricks and other entertaining feats",
        "description": "Their leader asks if they’d like to see the show — it's especially popular with children, but all ages are welcome! The deadly circus tricks they perform will surely not end well… Precision Strike: A powerful Assassin has been hired to deal with the party. The Assassin"
      },
      {
        "roll": 6,
        "title": "rides a tamed Wyvern, and is armed with a bow and longsword",
        "description": "The assassin is not fanatically loyal to their employer, and will not fight to the death unless forced to, though should they escape, they may strike again."
      },
      {
        "roll": 7,
        "title": "A Show of Force",
        "description": "A powerful Sorcerer has recruited a following of Apprentice Sorcerers and means to instruct them in the art of violence. Armour on the Wing: A favoured mount of the martial forces of Hobgoblins is the Griffon"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "— a squad of them are tracking the party, whose weapons and plunder are ideal loot for the legions. Crushed Under Hoof: A band of Wights and Zombies ride the plains astride flaming"
      },
      {
        "roll": 9,
        "title": "Nightmares",
        "description": "Their hunt leaves wakes of scorched earth in their path, and any who have survived their pursuit speaks of it in tones of dread. Raise Dread: A Necromancer has begun experimenting with more exotic remains to resurrect,"
      },
      {
        "roll": 10,
        "title": "and in doing so, has restored an Allosaurus to life",
        "description": "The Necromancer is eager to test the limits of their creations, and is capable of using any available ‘resources ’ to further their experiments. ENCOUNTERAS:NGCRIEANSTS LRAUNINDS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "of his faith, travelling lightly and with only a small retinue of his most experienced warriors and closest companions. Despite his friendly demeanour, he works for the party’s nemesis or another powerful malevolent force, and his final destination is a site of evil power. Testing, Testing: A voice calls out to the party, its source unknown. It pleads for assistance,"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "claiming to be a Wizard whose experiment into invisibility went a little too successfully. Requesting to tag along, he is of little help due to his clumsy nature, but hides the fact that he is actually a respected professor out of embarrassment. Cowardly Giant: A Hill Giant is attempting to hide from the party once he spots them,"
      },
      {
        "roll": 3,
        "title": "crouching behind a thin copse of trees and sucking in his belly",
        "description": "Hands over his eyes, he refuses to look at the party, hoping that if he can’t see them, they can’t see him. He has run away from his tribe of violent hill giants, but is still reluctant to give up their location. Gentle Goblins: A trio of Hobgoblins are leading a band of Goblins across the plains. The Goblins are agitated and try to provoke a fight whenever they think their leaders are not"
      },
      {
        "roll": 4,
        "title": "looking, but their masters keep them on a tight leash",
        "description": "They do not wish to fight the party, claiming they are peaceful, but in actuality they are riling up their army to cause the most destruction once they reach their quarry. Plant Dad: The party almost stumbles over an Elf druid as he crawls through the plains, head"
      },
      {
        "roll": 5,
        "title": "buried in the long grasses",
        "description": "He claims to be learning the names and stories of each individual blade of grass, a daunting task, even for those as long lived as the Elves. He is extremely familiar with the area, and knows the lost history of many sights along these roads. Dual Purpose: A great sage is known to reside atop a secluded hill, and has telepathically"
      },
      {
        "roll": 6,
        "title": "asked for the party's presence at their camp",
        "description": "The seer is a Gold Dragon in disguise, wishing to assess the skills of the party in an attempt to recruit them to aid in dangerous quests. Despite this, she is eager to help the party on their travels, providing aid and assistance. Seeking Destiny: A Unicorn canters serenely over the hills, stopping with a fantastic neigh"
      },
      {
        "roll": 7,
        "title": "beside the party",
        "description": "Speaking telepathically, it demands to know the identity of each member and their reason for travelling through these grasslands. It is searching for the chosen one who will purge the world of chaos through holy fire, though none of the party are the one it seeks. Odd Alliance: An envoy of a powerful local lord offers to travel with the party for a while,"
      },
      {
        "roll": 8,
        "title": "as their journey’s paths align",
        "description": "He and his escort may ward off trouble along the way, as those who would harm him will incur his lord's wrath. However, his lord has a sour reputation as a despot and a tyrant. Spreading The Word: A Cleric is delighted to meet the party, mistaking them as members of a"
      },
      {
        "roll": 9,
        "title": "local tribe",
        "description": "She is on a quest for her god, ruler of the skies above these plains, to unite the tribes under one banner and cultivate the land. She is wary to talk of her success in this mission, as she has only been met with mockery and aggression. Bridal Train: A large procession of nobles, envoys, and guards trek through this land on their"
      },
      {
        "roll": 10,
        "title": "way to a wedding of the accompanying lord’s daughter",
        "description": "She is terribly upset at this forced wedding, wishing to be united with her true love. Her family, however, are secretly very poor, and this marriage is the only way to ensure her town prospers. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Great Cities": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "Charismatic and compelling, he easily draws a crowd wherever he goes",
        "description": "His dream is to become a bard, but he lacks the confidence. Should the party help him, he would be forever grateful. We Built This City: A drunken Dwarf offers to share secrets in return for ale. He was part"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "of the construction crew that built this city and he knows the secret passages that the thieves guild paid to have threaded through it. Not Again!: A member of the party quite literally bumps into a character they’ve brawled with"
      },
      {
        "roll": 3,
        "title": "previously",
        "description": "This could be played straight as a rematch, or maybe the character has changed since the last encounter. Privileged Annoyance: An obnoxious young dilettante is attracting the wrong kind of"
      },
      {
        "roll": 4,
        "title": "attention in the wrong part of town",
        "description": "Whether the party assists, harasses, or ignores them, they are later revealed to be a relative of the party's patron. Street Preacher: An older man with a voice seemingly amplified by magic shouts at passersby of"
      },
      {
        "roll": 5,
        "title": "his dead god",
        "description": "Heedless of harassment heaped upon his head by the jeering crowd, he threatens the party with eternal damnation unless they confess their sins and convert immediately. Tourist Trap: A sparkling edifice is filled to the brim with enthusiastic workers, eager to provide"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "information on the history of the building, its founder, and the surrounding area. Their eyes betray a hollowness and exhaustion in direct contrast with their overly cheery surroundings. The Chosen Ones!: An emaciated, raggedly robed priest barrels toward the party, spitting ‘You"
      },
      {
        "roll": 7,
        "title": "are the Chosen Ones!’",
        "description": "The priest is enraptured with the party, and demands that they follow him to ‘the prophesied location, on this, the most sacred of days!’, which may or may not be where the party is already headed. Chuck & Hurley’s High-Flying Transport Service: Hurley is a loud, extravagantly"
      },
      {
        "roll": 8,
        "title": "moustachioed Halfling, proudly announcing their high-flying transport service",
        "description": "The service involves purchasing a rickety hang-glider, then being thrown in vaguely the correct direction by Chuck, a friendly and exceedingly well-fed Hill Giant. A Disagreeable Sign: Two carriages have crashed at a city crossroads. The scene is under"
      },
      {
        "roll": 9,
        "title": "control, being managed by an Ettin watchman",
        "description": "The Ettin is trying to direct traffic, but its two heads constantly argue with one another about the best path. The Harmonic Expert: An upset Tiefling is trying to persuade several business owners to"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "evacuate their buildings immediately as there is ‘something wrong with the street’s flow’. The shopkeepers are suspicious and hesitant, but passersby note she is a famous architect who knows the feng shui of the city better than anyone. ENCOUNTERAS:NGCRIENAT RCUITIINES 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "suspicious patron purchasing a sealed flask",
        "description": "The proprietor is actually an unlicensed alchemist willing to sell potions at a discount. Many come here to buy Potions of Poison. No Room Service: A rented room turns out to be a gold mine as the previous guests left"
      },
      {
        "roll": 2,
        "title": "quite a bit of equipment and even a few minor magic items behind",
        "description": "In fact, they were killed performing an overnight adventure, but since they paid in advance the lazy innkeeper didn’t notice, nor did he bother to clean the room. Wrong Alley: The party encounters a few deceased adventurers in a random alley. While"
      },
      {
        "roll": 3,
        "title": "they’ve obviously been killed, their bodies are strangely unlooted",
        "description": "If the party tries to take the few common magic items, the city guard will spot them and assume the party are the killers. Peepers Peri: A friendly Halfling approaches the party claiming intimate knowledge of the city,"
      },
      {
        "roll": 4,
        "title": "from its darkest streets to its noble mansions",
        "description": "She offers her services as a guide for a reasonable fee. While Peri is very knowledgeable, she can’t resist taking the scenic route, pointing out all the ‘more fun’ locations, people, and events along the way. Estate Sale: A Halfling cheerfully announces discounts from their shop, boasting the finest"
      },
      {
        "roll": 5,
        "title": "antiques for the cheapest prices",
        "description": "Their entire supply of family heirlooms is pilfered from homes foreclosed by their clever cousin, a noble breaking mansions down into smaller rooms for short-term ownership. Paid Research: The local mage’s college is hiring test subjects. The fee is moderate and involves"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "testing first-year students' spells and potions, but requires signing a lengthy non-disclosure agreement. Fast Food: As the party passes a small bakery, they are treated to a surreal sight — dozens of"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "small baked goods have grown legs and dashed into the street, smearing passers by with cream and frosting. The sobbing baker explains that his new oven was made from stones taken from a fairy ring, and he is desperate to make amends. Tempting Treats: In a busy square a table packed with baked goods, pies, and pastries is"
      },
      {
        "roll": 8,
        "title": "unattended and ignored",
        "description": "A sign in half a dozen different languages declares they are free for the needy and the curious. Should a player character consume one, a scholarly individual begins to follow them for the rest of the day, taking notes. There is otherwise no effect. Hey You!: A sight above a stall declares it to be ‘Sybil’s Speaking Sundries.’ As the party passes"
      },
      {
        "roll": 9,
        "title": "by, several objects on the table begin to cry out, begging to be bought",
        "description": "Each boasts of its own merits, and most seem well made. They have all been enchanted by the eponymous ‘Sybil’, who completely ignores the many ethical questions raised. Everything Must Go!: A Dwarf trader loudly proclaims the imminent closure of his trading"
      },
      {
        "roll": 10,
        "title": "emporium",
        "description": "All his goods were originally incredibly overpriced, so they are now mostly average; however, there are some real bargains to be had amidst his adventurer’s gear, and a modest selection of potions are all half-price. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "the party over in the process",
        "description": "The children are pickpockets, who rob the party as they pass. The Outrider must make a Wisdom (Perception) check to notice the scheme in time. Pressed into Service: An enemy army is approaching and the local defences need to be shored"
      },
      {
        "roll": 2,
        "title": "up quickly",
        "description": "Having assessed the party’s capabilities from a distance, a fearsome army recruiter aggressively tries to press them into service, refusing to take no for an answer. The Outrider must make a Charisma (Intimidation or Persuasion) check to drive off the recruiter. Magical Duel: The party finds themselves on a street at the precise moment that two rival"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "Mages, fortified by one too many ales, decide to settle their differences once and for all. It requires a Dexterity saving throw from the Outrider to avoid the worst of the Fireballs, but there are innocent people caught in the crossfire. Inconsiderate Carriage: The party is travelling down the street when a noble’s flying carriage"
      },
      {
        "roll": 4,
        "title": "swoops down and parks right in front of them",
        "description": "The magnificent carriage and pegasi take up the entire street, causing a traffic jam and drawing a crowd of gawking pedestrians. The Outrider must make an Intelligence (Survival) check to identify the most optimal route around. Ghost Tour: The party bumps into a group of ten Commoners led by a Ghost. The ghost is giving a tour of the neighbourhood to those with an interest in life after death. The tour guide"
      },
      {
        "roll": 5,
        "title": "immediately accuses the party of joining the tour without paying",
        "description": "A successful Charisma (Persuasion) check soothes over the situation while a Dexterity (Stealth) check allows them to dissolve back into the crowd. Roadblock: The roads are blocked by several Stone Giants tearing the street up to make way for new construction. The giants refuse to stop their work or let anyone see what they are"
      },
      {
        "roll": 6,
        "title": "building",
        "description": "Speaking to them in Giant may convince them to build a veiled ramp around their work to ease traffic. Those unable to speak Giant can reach the same result by arm wrestling the giants via a Strength (Athletics) check. Mimely Manner: An annoying street performer pesters the party as they pass, imitating each"
      },
      {
        "roll": 7,
        "title": "member in a comical fashion",
        "description": "If the party are good natured with this mime, and offer coin for his performance, he jauntily strolls away. If they refuse to tip, the mime will create invisible walls to block the way, requiring a Dexterity (Acrobatics) check to scale. Running of the Chuuls: The party’s path is blocked by a cheering crowd. An odd festival is"
      },
      {
        "roll": 8,
        "title": "taking place, in which several Chuuls are released into the blocked off streets",
        "description": "Participants flee from the creatures, clearly in danger despite the festive mood. PCs who join in can make an Acrobatics (Dexterity) check — they may even be crowned this year’s Chuul Champion. Toll Road: The party discovers a wide-open street in an otherwise crowded city. If they use"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "it to cross between dense neighbourhoods, they will eventually be accosted by a contingent of guards asking to see their travel pass. They’ve taken the ‘Noble’s Way’ and it will take a Charisma (Deception or Persuasion) check to avoid a heavy fine. When You’re a Jet: A long-anticipated knife fight between rival gangs has drawn a raucous crowd, blocking several streets. Passing unharmed through the wildly swinging youths takes"
      },
      {
        "roll": 10,
        "title": "a Dexterity (Acrobatics) check, causing the surrounding crowd to cheer",
        "description": "Stopping the fight is unpopular, and requires the Outrider to make a Charisma (Intimidation) check or a Charisma (Persuasion) check. ENCOUNTERAS:NGCRIENAT RCUITIINES 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "The gathering crowd is desperate to get through",
        "description": "The gates themselves may be smashed open with an Athletics (Strength) check. An Intelligence (Arcana) check can be made to recover the rod instead. Collapse!: A building near the party begins to crumble. Several people are trapped inside"
      },
      {
        "roll": 2,
        "title": "and will be crushed if they don’t escape",
        "description": "A group Intelligence (Athletics) check is needed to determine how to best support the structure long enough for everyone to get out. Miniature Madness: A pet shop owner purchased a number of exotic “miniature pets” from"
      },
      {
        "roll": 3,
        "title": "an unsavoury peddler",
        "description": "The Enlarge/Reduce spell that was placed on the animals is wearing off, making them instantly spring back to normal size, confused and panicked. The owner implores the party to help wrangle the creatures. Arms Race: A cart was upturned in the street, spilling a pile of umbrellas and canes into the"
      },
      {
        "roll": 4,
        "title": "street",
        "description": "Each is actually a +1 Club and while the owner managed to collect most of them, a few children ran off with some to play Catacombs & Critters. The purveyor of self-defence weapons begs the party to return them before someone gets hurt. Granny’s Groceries: An older woman is struggling with her shopping bags. Her walking speed"
      },
      {
        "roll": 5,
        "title": "is 5 ft",
        "description": "and she lives a long way from the town square. Carrying Granny’s groceries is easy, and a Strength (Athletics) check allows a PC to carry Granny herself. She offers 1 cp per party member and cookies as recompense. Cat Carriage: The cat carriage — a massive carriage pulled by tamed Tigers — is late, leaving"
      },
      {
        "roll": 6,
        "title": "a line of frustrated commuters",
        "description": "Characters with access to a vehicle can transport the irritated townsfolk with a successful Navigation (Land Vehicles) check or track down the cat carriage with a successful Wisdom (Survival) check. The Tigers are sleeping on a rooftop nearby. Closed for Construction: An Iron Golem leads a procession of constructs protesting for the"
      },
      {
        "roll": 7,
        "title": "rights of automaton workers",
        "description": "They refuse to budge unless given support, and the party can make a group Charisma (Performance) check to join in the chanting. The protestors become aggressive if any member shows intolerance of their plight. Big Kids: A young pixie plays a ball game with her much larger Human schoolmates. Adopted"
      },
      {
        "roll": 8,
        "title": "by a Human family, she is disheartened that she is ‘not like the other kids’",
        "description": "A group Charisma (Persuasion) check may help her realise that true strength comes from within. Fire!: A building explodes in flames, leaving those on upper stories trapped. If the party thinks"
      },
      {
        "roll": 9,
        "title": "fast, they can scrounge a large blanket to catch them",
        "description": "It takes a group Dexterity (Acrobatics) check to properly stretch out the blanket and safely intercept falling victims. Hissy Isn’t Well: A desperate wizard is afraid for her beloved pet ‘snake’, as it has recently been"
      },
      {
        "roll": 10,
        "title": "sprouting strange new growths",
        "description": "It will take a collective group Wisdom (Animal Handling) check to figure out how to care for a young Hydra. The grateful wizard offers her magic item identification expertise as payment. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "has hung an old Rug of Smothering on a washing line",
        "description": "The party hears the muffled cries of a hapless citizen caught in its suffocating grasp. Ouch!: A sloppy wizard's apprentice has accidentally summoned a pack of Steam Mephits."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "The mephits have been running along steam pipes and jumping into carriages, scalding locals in their wake. Trash Collector: The party walks through an unusually clean stretch of alleyway. A Wisdom"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "(Perception) check is required to notice the tentacles emerging from the sewer grate, otherwise someone is grabbed by the waiting Otyugh, who has gained a taste for human flesh. Flush of Death: An assassin is employing a Water Elemental to attack victims from the"
      },
      {
        "roll": 4,
        "title": "plumbing system",
        "description": "The party finds themselves in the vicinity of such an attack and a character with an appropriate tool proficiency can make an Intelligence or Wisdom check to notice unusual activity in the pipes. Tigers Den: An Oni disguised as a Human runs several back alley card games taking advantage"
      },
      {
        "roll": 5,
        "title": "of the city’s more desperate denizens",
        "description": "A PC in the area can make a Dexterity (Gaming Tools) check to discern the cheating or a Wisdom (Insight) check at disadvantage to realise that the house shouldn’t be winning by this much. Kobold Dueling Ring: A group of Kobolds, angry their local fight club has been closed down, have decided to turn their aggression towards the building’s new owners. Whispers of the"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "Kobolds launching an attack on the new venue reach any characters who speak Draconic, otherwise characters may spot the Kobolds stockpiling weapons with a successful Wisdom (Perception) check. Familiar Sounds: A Wererat attempts to lure passersby into an alley by mimicking the sounds"
      },
      {
        "roll": 7,
        "title": "of a person in distress",
        "description": "If the party follows the sounds, they are ambushed. The thief shapeshifts and attempts to escape, but if cornered, will lash out with its cadre of Giant Rats. A Fruitful Life: A Green Hag disguised as a greengrocer is selling cursed apples, claiming they will bless consumers with a ‘fruitful life’. The morning after eating one, the victim wakes"
      },
      {
        "roll": 8,
        "title": "with a miniature apple tree sprouting painfully from their head",
        "description": "While under this curse, a creature’s Hit Point maximum is reduced by 3, but the tree provides 1 Ration of small, bitter apples each morning. Oops!: A flock of Axe Beaks have escaped from a crashed circus carriage, and are causing"
      },
      {
        "roll": 9,
        "title": "chaos",
        "description": "To make matters worse, the driver demands that the bird not be harmed, as they are a gift to the lord of the city. Abandoned Rickshaw: The party spots an abandoned rickshaw in a nearby alley. It is lavishly"
      },
      {
        "roll": 10,
        "title": "decorated, but there is no driver attending it",
        "description": "A Wisdom (Perception) check reveals the wallet and coin-purse sitting upon the seat, ripe for the taking. The rickshaw is a Mimic, and it attacks anyone who attempts to steal its lure. ENCOUNTERAS:NGCRIENAT RCUITIINES 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "twilight below",
        "description": "The residents never look up for fear of agitating their silent ruler, a powerful sorcerer and warrior. Their fear is palpable, as any who displease the Overlord faces retribution. The despair is infectious, threatening to take root in the party. The Magical Zoo: The party comes across a massive zoo that contains exotic beasts from"
      },
      {
        "roll": 2,
        "title": "around the world and magically restrained monsters",
        "description": "It is an awesome sight to behold, as many of the monsters interred within would be almost insurmountable challenges to the party. Prophetic Stone: A large stone sits in the oldest part of the city. Its provenance is lost to time"
      },
      {
        "roll": 3,
        "title": "but it has become a huge tourist attraction",
        "description": "An Intelligence (Masonry Tools) check reveals carvings in an ancient language. If deciphered, it spells a prophecy of great danger. Healing Waters: A cathedral is built around a healing spring. The water acts as a Potion of"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Healing or a Potion of Poison, depending on the drinker’s fidelity to a local god. Dark rumours about the spring’s true nature persist. Tiny Town: In the town square, roped off for its own safety, is a tiny scale model of the entire"
      },
      {
        "roll": 5,
        "title": "city",
        "description": "The magical miniature city is enchanted to change along with its full-size counterpart. Sprites offer tours, but non-tiny tourists must allow themselves to be reduced in size to participate. Root for the Home Team: In anticipation of a massive sports competition, brightly coloured"
      },
      {
        "roll": 6,
        "title": "magical lights fill the horizon",
        "description": "Every building is illuminated with the local colours, and encouraging messages to the team flash through the skies. Prancing Through the Sky: Elegant Pegasi dash above the city, pulling enchanted carriages"
      },
      {
        "roll": 7,
        "title": "behind them",
        "description": "Their celestial grace is a sight to behold as they cart wide-eyed passengers between beautifully maintained stables. In Memoriam: A narrow alleyway between two buildings is a lush tunnel of vines and dancing"
      },
      {
        "roll": 8,
        "title": "lights",
        "description": "The roots can all be traced back to an old, thorn-covered quarterstaff, said to have once belonged to a heroic Druid. The Mirrored Market: An ancient enchantment causes all solid surfaces in this market to"
      },
      {
        "roll": 9,
        "title": "take on a polished-mirror shine",
        "description": "The inhabitants embrace this, filling the streets with coloured lights and bright fabrics, ensuring the market is a riot of colour, day and night. A Towering Miscalculation: A half-formed Wizard’s tower hovers above the street, broken"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "into shattered fragments and spinning and rotating at all angles, in an unpredictable dance of gravitational pulls. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "war",
        "description": "Each side approaches the party seeking help to eliminate the other. Alleyways have been scraped and scratched by claws and teeth. The two families have built up collections of stolen goods from each other's homes. Infestation: A recent spate of floods has led to an infestation of Stirges in the uncollected"
      },
      {
        "roll": 2,
        "title": "refuse",
        "description": "The city council is paying handsomely for pest control, but unfortunately, the Stirges are attracting larger predators to the area. As no-one has been able to clean out the area, riches hidden in the debris are not yet taken. New Tenant: A Phase Spider has taken up residence in a dilapidated tenement. It has been"
      },
      {
        "roll": 3,
        "title": "preying on people in the streets and in surrounding tenements",
        "description": "It has amassed quite a horde for any courageous adventurers willing to kill it. Jelly Cleaner: A Gelatinous Cube has escaped from an ailing Wizard who was using it as a"
      },
      {
        "roll": 4,
        "title": "cleaner",
        "description": "It sits on a window sill, waiting to drop on anyone who dallies in the alley behind the house. At night, it gets more brazen and lurks on a shadowy part of the pavement. Sewer Struggles: A group of Giant Crocodiles have grown to a massive size, having fed off"
      },
      {
        "roll": 5,
        "title": "of the growing rat population as well as lost pets",
        "description": "Many of the town guards have been sent to deal with the beasts, but have fallen prey to them, leading to a large stockpile of arms building up in the sewers. Bats in the Belfry: The skies are blotted out by Swarms of Bats every dusk. Following the"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "bats reveals that they tend to circle religious buildings and magnificent abandoned halls. An ancient Vampire has grown tired of their accommodation and is scoping out new real estate. Regent of Rats: As the party passes near an open sewer grate, a filthy Halfling tumbles out."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "She takes one look at the party, whispers ‘Run!’, and then follows her own advice. A moment later, a wounded Rat King emerges from the sewer, screeches, and dashes towards the party. Seeing Double: This market square has many vibrant stalls and shopkeepers selling their"
      },
      {
        "roll": 8,
        "title": "wares",
        "description": "Several of the shopkeepers are Doppelgangers running a scam, they only have a few personas to disguise as currently, and the party may notice duplicate merchants. They have a hidden cache of money they have made by dodging commerce taxes by changing identities. Feral Alley: All the wild dogs and cats in the district have been dropping dead of a grisly"
      },
      {
        "roll": 9,
        "title": "wasting disease",
        "description": "Fearful rumours suggest the curse of a witch, and fear it might spread to pets. In reality, a Death Dog has been hunting the smaller animals for sport. Mind the Verge: A newly restored tenement building has been abandoned amidst rumours of"
      },
      {
        "roll": 10,
        "title": "its haunting",
        "description": "Multiple inhabitants died in their sleep, their bodies already rotting by morning. The true culprit is a beautiful nocturnal variant of Violet Fungus which was accidentally planted all around the apartments. ENCOUNTERAS:NGCRIENAT RCUITIINES 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "patrons",
        "description": "During the night the innkeeper wakes the party Bard (or other suitable character), as another performer is challenging them for the room. Should the party Bard lose or refuse, then the whole party is turned out and must pay for their food and drink. Illusions: This inn is magically enchanted by a Gnome mage to appear as the mountaintop"
      },
      {
        "roll": 2,
        "title": "retreat where she grew up",
        "description": "The tables and benches are all ‘outside’ and food is being prepared on spits and fires. Each room in the inn is an isolated cabin. Behind the illusions is a filthy hovel. Hidden Fighters: A Gnome approaches the party near an alley, offering them free room and"
      },
      {
        "roll": 3,
        "title": "board if they join his ‘gym",
        "description": "’ The inn’s entrance sits in the alley with no identifying marks. In truth, it hosts illegal boxing matches in the basement. Entertain Us: A bored noble offers the party rooms in their mansion in return for entertainment."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Over the course of the evening, requests progress from simple stories and songs to humiliating trials. If the party falls short, then they are unceremoniously thrown out. Feeding the Faithful: This simple tavern is staffed by disturbingly friendly Acolytes who offer"
      },
      {
        "roll": 5,
        "title": "free housing and food to all in need",
        "description": "Before eating, the entire inn takes part in a group prayer and all spending the night must attend a reading of spiritual literature. Priests stand at every door, eager to hear confessions. Best Inn Town: A hotel with vivid flashing lights and blaring music promises to be the most"
      },
      {
        "roll": 6,
        "title": "‘authentic’ place to stay",
        "description": "Far more expensive than any other inn or tavern in the area, they offer bland versions of local food, group activities, and themed bedrooms. Perfectly Normal Pub: The party strides into an inn, only to be met with complete silence as"
      },
      {
        "roll": 7,
        "title": "surprised patrons turn and stare",
        "description": "Uncomfortable conversation with the innkeep can secure a room for the night, although they insist on cleaning the room. It soon becomes obvious that the party has stumbled into a cult meeting. Urchin’s Cove: A Human boy sitting lazily on a wall tosses back the purse he stole from one"
      },
      {
        "roll": 8,
        "title": "of the party members",
        "description": "He claims to feel a kinship with the party, and offers to show them the warren of alleys that the urchin children all call home. Den of Thieves: One of the players accidentally trips a guard in hot pursuit of a waif carrying"
      },
      {
        "roll": 9,
        "title": "stolen food",
        "description": "The guard berates them, giving the thief enough time to escape. Later on, the thief offers the party a key and an address for a safe house. Not all of the thieves who frequent this safehouse agree the party should be allowed to know of its whereabouts. Dream a Little Dream: A wizard styling themselves ‘The Oneiromancer' offers a place to rest"
      },
      {
        "roll": 10,
        "title": "to all who volunteer as test subjects",
        "description": "The subject is given a draught of ‘Sunset Coast’ and that night they dream about watching the sunset on a frigid beach. If they report this, the wizard mutters that ‘It wasn’t meant to be cold!’ but is otherwise satisfied. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "planners simply built over it, leaving several streets and former ground floors buried. The undercity was promptly taken over by the thieves’ guild, who now operates it as a safe haven from the city’s laws. Grounded: This city was a Cloud Giant paradise before it plunged to the ground. Now, its current residents have transformed it into a Human city, although ample evidence of its"
      },
      {
        "roll": 2,
        "title": "original form remains",
        "description": "Giant staircases are chiselled down the middle to allow the people of the city to ascend the enormous staircase, and old floors have had two or three storeys retrofitted into them. Poor Advertisement: An old statue sits in front of a tavern that’s named after it. The tavern"
      },
      {
        "roll": 3,
        "title": "owner has woven great tales about the statue’s source",
        "description": "An Intelligence (History) check reveals that the statue’s subject was a cowardly figure who did terrible things to save their own skin. Publicly revealing this sends the tavern into financial ruin. The Tunnels: Centuries ago, the city was under constant threat of dragon attacks. In response,"
      },
      {
        "roll": 4,
        "title": "an undercity of tunnels and shelters was built into the hill",
        "description": "Most of these tunnels are filled in or repurposed, but some of the old maze remains, making for strange connections between buildings. Pave Paradise: A historic temple, once deemed a wonder of the planes, is being torn down to"
      },
      {
        "roll": 5,
        "title": "create more stalls for a local noble’s carriages",
        "description": "Historians and devout citizens alike bemoan the loss by holding a silent vigil of protest, while a Gnome bard composes a song about the temple. We Want You:. In a destitute area of town, old propaganda murals encourage the populace"
      },
      {
        "roll": 6,
        "title": "to sign up for the military",
        "description": "The art style of the ancient campaign and its outdated recruitment slogans are now used ironically in local advertising and slang. Gone and Forgotten: An unremarkable statue stands in the centre of this square, covered"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "in the waste of city birds and ignored by the locals, who can’t even identify the figure. An Intelligence (Investigation) check can scrape some detritus away from the base and reveal the statue to be the founder of this part of town, who fought hard for its construction. Walls of Old: The walls of an older city are present here, mostly demolished to make room for"
      },
      {
        "roll": 8,
        "title": "expansion",
        "description": "Hundreds of scraps of paper, cloth, and cracked pottery have been shoved into the cracks of the crumbling edifice, each bearing a message of hope, despair, or longing. As the party watches, a small child adds another note. The Glory Within: The largest cathedral within the city is a massive structure, filled with"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "stained glass and beautiful statuary, the whole built with both expert engineering and magic. It was built about a small shrine said to be old as time. Its stones are inlaid with the luminous script of angels, their meaning endlessly debated. Blue’s Lair: All the city stretches out from a tavern set within the side of a mountain. The tavern"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "boasts a beautiful view of the surrounding countryside and a strangely shaped, incredibly smooth stone floor. Long ago, it was once the lair of a Blue Dragon. So vast was its hoard that settlers came in search of fortune. ENCOUNTERAS:NGCRIENAT RCUITIINES 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "over their tables, dead",
        "description": "Purple veins criss cross their skin, and a look of surprise is etched onto their lifeless faces. A successful Intelligence (Investigation or Nature) check reveals the tea has been tainted with the poison of a Purple Worm. Work Doesn’t Pay: The party struggles against the tide of people returning home from work."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "From children to elderly folk, these labourers are filthy with grime and sweat, many of them lacking limbs and digits from countless workplace accidents. Their endless toil sits uneasy with party members who have traversed through wealthier districts. The Sentinels: Decades ago, a cult opened a portal beneath the city to spawn an undead army."
      },
      {
        "roll": 3,
        "title": "While that army was destroyed, the portal remains",
        "description": "Clandestine sentinels stationed in the sewers fend off any undead that make it through, but occasionally, one gets past them. By Invitation Only: A band of young nobles patronise taverns in poor and questionable"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "districts, making fast ‘friends,’ especially passing travellers, and inviting them back to their club. As it turns out, these nobles are bound to a demon, devil, or other powerful creature, and their ‘new friend’ is due to become the latest sacrifice. Shantytown: There are more guards stationed in this section of the city, and the air is thick"
      },
      {
        "roll": 5,
        "title": "with the cries of infants and putrescent miasma",
        "description": "The guards stop and frisk anyone on the streets who seems suspicious, something determined by each guard individually. Alley of Woe: Between a gated community for nobles and the merchant quarter, runs the dark"
      },
      {
        "roll": 6,
        "title": "alley where ‘broken things are thrown away",
        "description": "’ The party sees an assortment of starving people staring dead eyed as they pass, too hopeless to ask for food. Great Fire: The party finds themselves in a ghost town. This neighbourhood is a burnt out"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "husk, the damage so extensive that little still stands, and a dreadful sense of loss oozes from the ashes. The city has closed off and built around this section, cutting its losses and leaving this disaster in the past. The City Beneath: A sinkhole opens within one of the deep cellars of the city. It leads down to"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "a grim revelation — the city was built upon the ruins of another city, one that was populated by serpent folk who built temples to their strange gods. The underground city is clearly long abandoned, but disturbingly well preserved. Who’s in Charge?: At first glance, this seems to be a safe city. The party observes no criminal"
      },
      {
        "roll": 9,
        "title": "activity even when there are no guards",
        "description": "City residents whisper reverently of ‘the burgomeister,’ although no one is willing to discuss them. The burgomeister’s house is heavily guarded, with no one coming in or out, yet their proclamations are routinely read to gathered crowds. Beware the Cats: Everyone in the city takes care of the numerous alley cats, leaving food and"
      },
      {
        "roll": 10,
        "title": "letting them roam free through buildings",
        "description": "At night, however, all cats go outside, with those stuck inside wailing until they are let out. Residents warn the party not to seek out the cats at night, for they are the servants of a powerful lunar god. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "afoul of the local thieves guild",
        "description": "Unfortunately, this is no ordinary thieves guild, for it is run by Wererats, who attack the party when they are sleeping or otherwise about in the night. Walls Won’t Stop Them: A colony of Ankhegs has moved in under the city. While the party is"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "in a park or garden, several of them burst through the dirt, perhaps catching them by surprise before bathing them in corrosive acid. Carnival of Terror: A risk-taking carnival owner purchased a half-dozen Cockatrices and"
      },
      {
        "roll": 3,
        "title": "is displaying them as ‘lizard-chickens",
        "description": "’ On the night that the party is perusing the carnival, several Cockatrices escape. Several people are turned to stone before the party has a chance to react. Cosy Killer: A Cloaker has discovered a clever way of finding victims. During the night, it"
      },
      {
        "roll": 4,
        "title": "finds a grand party and slips into a carriage, pretending to be a blanket",
        "description": "When the occupants arrive and pull up a ‘blanket’ to stave off the evening chill, the Cloaker strikes. It uses its moan to frighten the driver and horses, leaving its victims unable to escape. Defenders of the Night: A thousand year old ritual awakens the city's Gargoyle population."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "They have been created to punish sinners, but what was ‘sin’ a millennium ago is now common behaviour and the entire city is threatened. Urban Coyotes: Improved waste disposal has left the local coyote (treat as Wolves) population"
      },
      {
        "roll": 6,
        "title": "without food",
        "description": "In their desperation, they've turned to attacking and eating people. Their larger packs have begun to congregate in parks during the day before roaming the streets at night. Wasting Away: A horrid smell wafts from an open manhole that leads into the sewers below"
      },
      {
        "roll": 7,
        "title": "the city, where brown streaks lead to alleyways all along this road",
        "description": "Walking a few paces further, the party is swarmed by Mud Mephits, creatures formed by, or attracted to, the waste beneath the city, seeking to create more organic waste to supply their brethren below. Hiding as Hide: A leatherworker’s shop has been the lair for an opportunistic Cloaker feeding"
      },
      {
        "roll": 8,
        "title": "every night on drunken stragglers from the tavern across the road",
        "description": "When the party spots this attack, the Cloaker moans hauntingly, fighting to keep its hunting techniques hidden. Wrath Unseen: To a witnessing crowd’s horror, a merchant is beaten to death in the street by"
      },
      {
        "roll": 9,
        "title": "an unseen enemy, his head crushed on the cobblestones",
        "description": "The Invisible Stalker was unleashed by a demented Mage, upset with the way the merchant haggled. The Mage doesn’t much like the look of the party, either. A Deadly Mistake: One of the city’s most ruthless criminal lords, a Rakshasa who has long"
      },
      {
        "roll": 10,
        "title": "disguised himself as an Elf drug dealer, mistakes the party for enemy agents",
        "description": "He and his gang of Veterans ambush the party as they make their way home from a tavern one night. ENCOUNTERAS:NGCRIENAT RCUITIINES 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "they help deal with the Thugs bullying her staff, as she thinks having the party inside might dissuade them. She turns out to be knowledgeable about other cities in the region and even knows a few helpful rumours and tips on handling individual merchants and nobles. I Want a New Life: The heir to a powerful merchant family has run away from home, and"
      },
      {
        "roll": 2,
        "title": "wishes to accompany the party",
        "description": "They are willing to be a servant, apprentice, or squire to pay their way. Unfortunately, the child is likely to be more hindrance than help, although they do have many family connections in the region. Inconvenient Test: A Deva serving a character’s deity decides to test them at an inopportune"
      },
      {
        "roll": 3,
        "title": "time",
        "description": "While the character is busy doing something else, the Deva approaches as a beggar and asks for aid. If the character stops and helps them, the Deva rewards them with something that will help their quest. If the character dismisses them, then they draw their deity’s ire. The Protégé: One of the characters has attracted a young Commoner that wants to train"
      },
      {
        "roll": 4,
        "title": "under them",
        "description": "At first, they seem eager enough and won’t take ‘no’ for an answer, but it quickly becomes apparent that they are running from something. Eventually, that ‘something’ is going to catch up to them. Lichbrary: A local library is spoken of only in whispers. Thought to hold any scroll or"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "spellbook imaginable, its powerful patron has never been seen and only provides entry to the most powerful mages or spymasters. The patron, a Lich who stayed alive to learn everything in the world, is hungry for knowledge and secrets. Bootleg Merchandise: A shapeshifting scam artist sells bootleg magic items with disastrous"
      },
      {
        "roll": 6,
        "title": "effects",
        "description": "Bags of Devouring sold as Bags of Holding, Potions of Poison sold as Potions of Health, and cursed weapons sold as +1 weapons. The shapeshifter’s family was killed by adventurers, and this is their way of taking revenge. Sweet Dreams: The mystical store ‘Salamun’s Sumptuous Sweets’ has been following the party"
      },
      {
        "roll": 7,
        "title": "through the city; they’ve noticed the sign in different neighbourhoods",
        "description": "The shop is run by an elderly Elf, whose sweets allow the party to astrally travel to fae lands whenever they dream. The Moonlit Circus: A gaudy circus tent promises a daring acrobatics show every night this week. The performers wear elaborate costumes and masks, performing amazing feats"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "of physical prowess, astonishing the crowds who come to see their midnight shows. A peek backstage reveals that these performers are all lycanthropes, hiding their cursed forms from the cruel public. Very Old Money: The city bank is an ancient institution. Their interest rates are steep and their"
      },
      {
        "roll": 9,
        "title": "agents are ruthless when collecting on unpaid debts or hunting thieves",
        "description": "The bank is owned by a Mummy Lord who knows many buried secrets and is always in need of skilled agents with negotiable ethics. The Mimic Man: A Dwarf entertainer, famous for his troupe of well-trained Mimics and the"
      },
      {
        "roll": 10,
        "title": "delightful shows he puts on with them, is the talk of the town",
        "description": "He always has interesting news to share, as his charges are the delight of every level of society. Some whisper that a body eaten by a Mimic completely dissolves without a trace, but that’s just jealousy talking. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Haunted Lands": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "here a decade ago, and it took all her money to buy the information needed to find her grave. Now that she is here, the grave is empty, and her hopes of giving her mother a proper burial are dashed. The Village: A necromancer once slaughtered a village and raised them up as an army, but"
      },
      {
        "roll": 2,
        "title": "he was felled before using them",
        "description": "Now the Zombies go about their business, performing their usual daily tasks as they await orders that will never come. They look to the party for assistance, silently pleading for a release from this neverending half-life. The Lone Grave: The party notices a simple tombstone on a barren mound. When they approach the tombstone, a disembodied male voice sings of a lost love, and a Ghost floats out"
      },
      {
        "roll": 3,
        "title": "of the tomb",
        "description": "The ghost asks the party to retrieve his wedding ring from his corpse and destroy it so that he may find peace in the afterlife. The party will have to dig into the foul muck to grant his wish. Cult of the Seven Moons: It is night but the light of a distant campfire burns with eldritch"
      },
      {
        "roll": 4,
        "title": "colours",
        "description": "The campsite belongs to cultists who worship the Gods of the Seven Moons. The cultists whirl around the campfire, chanting. They offer the magical blessing of their gods in exchange for a profane sacrifice from the party. A Game of Chess: Two nobles, one a Half-Hag and the other, a Half-Vampire, play chess in a"
      },
      {
        "roll": 5,
        "title": "public garden to resolve a feud between their families",
        "description": "People form a ring around the nobles, watching them, hanging on every move, as this may well decide the fate of the entire village. Dance of Death: A motley procession of skeletal musicians caper behind a necromancer"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "Bard who has declared that he wishes to remind people of the joy of life through his undead performers. They travel from town to town playing merry tunes to celebrate death as a natural part of life and as a reminder to be humble and grateful for everything they have. 'Til Death: A Vampire, turned to fight in a war by a vicious vampire lord deserted in order to"
      },
      {
        "roll": 7,
        "title": "return to his husband",
        "description": "He’s terrified of what his love will think of him, and frightened that he will not be able to control his newfound bloodlust. Paying A Debt: A soldier asks to sit around the party’s campfire and offers to take a watch. She is travelling to a well-known inn at a crossroads, where the unusually capable innkeeper"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "protected her sister when she was fleeing one of the nearby bands of roaming undead. The soldier wishes to thank him for his kindness, and find out more about his odd proficiency with a blade. The Caravan Macabre: Along the dusty road comes a covered wagon, pulled by a skeletal Griffin. Glimpsed within its velvet interior is an undead Archmage, a proud practitioner of"
      },
      {
        "roll": 9,
        "title": "the necromantic arts",
        "description": "Pleasant and affable, the expansive Archmage sells a selection of corpse- waxes and liniments. Each will heal the party for 1d10 hit points, while also secretly marking their souls for collection upon death. Soul Hunt: The party encounters a ragged group of wild-eyed Mages. Festooned with strange and unwieldy silver devices of their own creation, the Mages are attempting to suck errant"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "spirits of the dead from the air, with the aim of converting them into blocks of magical fuel. The scheme doesn’t seem to be working, the spirits unwilling to power the arcane devices, and the irate investors have already sent Thugs to recoup their investment. ENCOUNTERS: HAANUCNIETNEDT LRAUNINDS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "them to follow it to a makeshift gravesite",
        "description": "In life, the ghost was a Paladin and his comrades left his equipment for fear of angering his god. Still, the ghost wants his items to be put to good use, so he can continue to serve the innocent even in death. The Church Grave: The burnt out remains of an old church contains the magic items and"
      },
      {
        "roll": 2,
        "title": "equipment of the last people who sought sanctuary here",
        "description": "They’d expected a final stand, but the enemy simply put the church to the torch and burned them all alive. Much of their gear remains for the taking, if the party doesn’t mind their provenance. Flowers in the Attic: The attic of a Vampire lord’s manor was converted into a garden, Full of"
      },
      {
        "roll": 3,
        "title": "edible flora that can be made into medicines or used in spells",
        "description": "The vampire lord will allow each person in the party to take an item from the garden if they agree to let him drink their blood. All That Glitters: An abandoned mine is rich with veins of gold ore but the people of a nearby"
      },
      {
        "roll": 4,
        "title": "village claim a terrifying beast lives there",
        "description": "Unbeknownst to the villagers, the beast is a cursed man who owns the mine. A witch transformed him into a beast for his greed and to end the curse he must agree to share the wealth of the mine with the less fortunate. The Stars Above: A meteor shower streaks across the sky, the bright lights appearing once every twelve years. A few shards of rock tumble to the earth, each chunk glowing a different"
      },
      {
        "roll": 5,
        "title": "hue",
        "description": "Possessing one of these grants the user resistance to a certain type of magic damage, but only if the wielder willingly submits themselves to the type first: a terrible burn or biting frostbite, for example. Death Mask: In a quiet mausoleum complex, the party encounters a sect of Clerics whose"
      },
      {
        "roll": 6,
        "title": "specialty is in preparing the dead for burial",
        "description": "They happen to have a fresh, unused Disguise Kit that they use to restore the corpses to their living complexion and offer it to the party as a gift if they aid in the burial of one of their own order. Pipes of the Dead: A grieving woman sits at a graveside holding a box of dark wood. She"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "shows the party that it contains a very finely-carved bone pan flute, which belonged to her father before he died. She is weeping, having never learned to play, but promises to give it to the party if they can just play her one last tune. Requiem: A tarnished marble altar in a graveyard holds a pale blue flame and the words ‘An"
      },
      {
        "roll": 8,
        "title": "elegy for the dead is its own reward’ carved into it",
        "description": "If the party speaks an elegy for someone who has died, the ghostly flame burns brightly and then goes out, leaving a Component Pouch containing 50 gp of spell components. Ghost Light: In a cairn of skulls upon a low hill, the party finds one filled with a ghostly azure"
      },
      {
        "roll": 9,
        "title": "glow",
        "description": "Once belonging to a famous undead hunter, the skull speaks in an incomprehensible dialect (even Comprehend Languages struggles to decipher it). The skull bobs along at head height, casting low light in a 60 ft radius. A Drop Before You Go: In a flooded gully between overcrowded graveyards sits a crooked"
      },
      {
        "roll": 10,
        "title": "and emaciated tree",
        "description": "Hanging from its branches are hundreds of wards and trinkets from every faith and religion. The tree is in fact a kindly Treant and will gift each of the party a powerful ward against the undead in return for a drop of blood. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "out of the ground and try to restrain them",
        "description": "Each round within the field requires a Strength (Athletics) or Dexterity (Acrobatics) check and the field is treated as difficult terrain. Bloodstream: The Outrider comes across a stream of blood that winds its way across the"
      },
      {
        "roll": 2,
        "title": "parched earth",
        "description": "While the stream isn’t wide and could be easily crossed, a Wisdom (Perception) check enables the Outrider to notice a few birds crossing over the brook drop dead as the blood is pulled from their bodies into the stream. All Eyes On You: The party enters a mysterious tunnel. A thousand gleaming cats’ eyes on the"
      },
      {
        "roll": 3,
        "title": "walls of the cave blink open and stare at the party as they pass",
        "description": "They grow larger and larger, until the party notices that the vertical slit pupils are jaws with sharp teeth. The Outrider must fend off the eyes by succeeding on a Strength (Athletics) check. The Bells: A lost cathedral looms from across the wastes, and inside the pews are smashed to pieces and the organ is a tangle of twisted pipework. The bells ring the hour and the tremors"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "begin, and with every peal the shaking grows worse, threatening to bring the cathedral tumbling down. To stop the tremors, the Outrider must play the organ with a successful Charisma (Performance) check, its discordant sound counteracting the earthquake. The Hardest Climb: The party ascends a rocky path up the snowy mountains. Pebbles tumble"
      },
      {
        "roll": 5,
        "title": "down from the cliffside at irregular intervals",
        "description": "an avalanche is imminent! The Outrider must find a safe way to navigate the mountains by succeeding on a Wisdom (Survival) or Intelligence (Nature) check. Elephant Graveyard: The huge bones of ancient creatures that came here to die jut out of the"
      },
      {
        "roll": 6,
        "title": "landscape",
        "description": "The ground is thick with bone dust that eddies in the breeze and the endless rib cages, skulls and spinal columns make it hard to navigate. The Outrider must make a successful Wisdom (Survival) check to keep their sense of direction. Winds of Memory: A violent storm scours the landscape, but the howling winds are not the"
      },
      {
        "roll": 7,
        "title": "greatest obstacle",
        "description": "With them ride a shrieking torrent of ghostly figures on horseback buffeting the party and bringing to the surface all the memories of all those they have lost or killed. The Outrider must make a group Constitution (Athletics) check to press on through. Profane Ground: The mile surrounding a profane ritual site has been left corrupted by the"
      },
      {
        "roll": 8,
        "title": "necromantic energies of the cult worship performed there",
        "description": "The soil is sickly black and it strikes those who approach with unnatural fear. The Outrider must make an Intelligence (Religion) check to ward off the foul energies of this place or go around. Unnatural Disaster: A shallow mire contains the perfectly preserved dead of some long"
      },
      {
        "roll": 9,
        "title": "forgotten battle",
        "description": "Unfortunately, the levee around the marsh has failed and the waters have spilled out, taking the dead with them. The Outrider must delicately pick their way through the undignified logjam of ancient warriors with a successful Dexterity (Acrobatics) check. A Pitiful Sight: The Outrider encounters a deep pit in the scoured landscape where the fossilised bones of a vast herd of Giant Elk were slaughtered for devious rituals. The sloping"
      },
      {
        "roll": 10,
        "title": "sides are easy to navigate",
        "description": "The real challenge comes from pushing through the thousand screaming ghosts of maddened Elk at the base of the pit, achieved on a successful Charisma (Survival) check. ENCOUNTERS: HAANUCNIETNEDT LRAUNINDS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "someone calling from beneath the ground",
        "description": "The person claims that they were buried alive and they need help before the air runs out. A group Strength (Athletics) check uncovers the human Commoner in time. Unfortunately, there are bite marks on his neck… Help, I’m Drowning!: A young woman screams that she’s drowning, having accidentally"
      },
      {
        "roll": 2,
        "title": "ridden her horse into deep quicksand",
        "description": "It’s too late for the horse, but the woman can be saved if the party can make a human chain or find a rope and make a group Strength (Athletics) check. If the woman is saved, she gratefully tells them why she was running in the first place… Hunted: An antlered nymph runs across the moors while fur-clad hunters and their baying hounds chase her. She stumbles across the party and begs them to save her. The hunters"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "are hostile to anyone that stands between them and their prey but a successful Charisma (Intimidation) check can turn them away. The grateful nymph leads the party to a hidden cache of treasure. Family Matters: A king looks out from his tower at the massed undead armies of his son, a"
      },
      {
        "roll": 4,
        "title": "necromancer, far below",
        "description": "They are at war over the love of a woman, a wyvern herder from the east. To broker peace between the king and the necromancer, the Outrider needs to succeed on a Charisma (Persuasion) check. The Rite of Spring: A spring witch needs help with a complex ritual to capture a three-headed"
      },
      {
        "roll": 5,
        "title": "monster",
        "description": "She needs someone to watch over the ritual area to ensure no creature enters it while she completes a series of incantations and arcane rites. The Outrider can complete this task by succeeding on a Wisdom (Perception) check. Injustice Served: A wary Dragonborn still wears the remains of enchanted manacles beneath her cloak. She unwittingly purchased a necromantic amulet and was imprisoned by the local"
      },
      {
        "roll": 6,
        "title": "Noble, but managed to escape during a riot",
        "description": "With a successful Dexterity (Thieves Tools) or (Strength (Athletics) check, the party can remove the manacles, which would otherwise allow her former gaoler to hunt her down. Good For What Ails You: A timid alchemist is taking samples of the soil near a rotted tree."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "The alchemist explains that his mercenary companion has been infected by a necromantic poison: the alchemist is looking for a cure before it kills them. The party must pass a group Wisdom (Survival) check to locate the soil the alchemist needs for the cure. What Doesn't Kill You: A whispering voice comes from the shadows and reveals that she"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "was a Wizard whose spirit was torn from her body during a divination spell, and now she is trapped in this ephemeral state, unable to find her body. With a successful Intelligence (Investigation) check, the party can locate her body where ivy has grown over it. Grave Confusion: A foppish, one-legged Skeleton in faded finery flags down the party. He"
      },
      {
        "roll": 9,
        "title": "outlines his problem",
        "description": "a recent landslide has swamped his graveyard, breaking up and scattering his fellow residents, leaving them searching for lost limbs and absent skulls. If the party aids in the search, sorting, and reassembly, he promises gold for each successfully completed skeleton. Affairs of the Heart(s): Entering a town of Flesh Golems, the party is approached by a lovelorn"
      },
      {
        "roll": 10,
        "title": "inhabitant",
        "description": "She wishes to demonstrate to the object of her affections that she possesses a good heart. Literally. If the party will take the still-beating organ to the Flesh Golem Princess in the nearby castle, they will be rewarded with a fleshy Bag of Beans. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "these are not the victims of a recent attack, but rather a ravenous pack of Ghouls looking to make the party their next meal. A Wisdom (Perception) check may enable a character to notice that some of the loose dirt is shaking. No Heroes’ Welcome: The party finds a small walled community that looks desperately in"
      },
      {
        "roll": 2,
        "title": "need of assistance",
        "description": "Unfortunately, the last thing that the peasants (Veterans after all they’ve been through) want is for adventurers to attract attention from the local Vampire. They quickly organise an assault, hoping that their enemies will be satisfied with fresh corpses. Let Sleeping Dogs Lie: Death Dogs guard an abandoned house in the middle of a graveyard."
      },
      {
        "roll": 3,
        "title": "Though they are asleep, they are alert and can smell intruders up to 60 ft away",
        "description": "They are hungry, and will attack anyone who is unfamiliar. Shine a Light: Will-o-Wisps cling to the ceiling and walls of a cave illuminated by glow worms."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "They are territorial beings, and will swoop down upon anyone entering the cave, aggressively protecting their subterranean dwelling. Ghost Ship: A sunken ship has been recovered from the seabed but no one dares enter it after"
      },
      {
        "roll": 5,
        "title": "the exploration team entered the cabin and never came back",
        "description": "They were killed by Wraiths, the spectral remnants of the crew who perished in the deep. River of Ghosts: A fast-flowing current is not the only danger as the party tries to cross a river"
      },
      {
        "roll": 6,
        "title": "just downstream from a graveyard",
        "description": "With recent rainfall disrupting the bodies, Ghosts try to drag the party under as they cross the river. The party can try and push through with a group Strength (Athletics) check, or they can dispatch the Ghosts. The Forgotten Banner: An eerie trumpet blast echoes across a lonely moor and out of the"
      },
      {
        "roll": 7,
        "title": "mists a group of Skeletons riding Warhorse Skeletons comes into view",
        "description": "The remains of an army, they are re-enacting the battle that slew them over and over again, killing anyone in their way that they perceive as their enemy. They can be avoided, outrun, or fought. Lambs to the Slaughter: A group of Cultists led by a Cult Fanatic are in the process of"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "slaughtering a caravan of people they have been travelling with, sacrificing them to a dark god of death in a profane ritual. If they are not interrupted quickly, any travellers they manage to kill rise as Zombies to join their forces. Dead Men’s Words: In a forest clearing the party encounters the remnants of a travelling troupe. On the tattered stage the Zombie actors mumble their half-remembered lines while"
      },
      {
        "roll": 9,
        "title": "undead stagehands clatter about with broken scenery and props",
        "description": "What remains of the audience blankly stare at the interminable show. The Zombies attack if the party interrupts proceedings or refuse to buy tickets from the rotting vendor. The Aristo-Ghasts: Proceeding along broken roads in sedan chairs held aloft by teams of Skeletons, the party encounters a gathering of Ghasts. Dressed in powdered wigs and fine"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "clothing a century out of style, the monstrous undead assemble for their yearly feast. A group of Commoners huddle nearby. If the party try to rescue them, they refuse — their sacrifice means the hungry phantoms won’t feast on their village. ENCOUNTERS: HAANUCNIETNEDT LRAUNINDS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "feeding on the corpses of fallen warriors",
        "description": "The mosses and spongy toadstools are a spray of colour in this dark place, but who dragged the bodies here to feed these hungry mushrooms is a mystery. Seasonal Changes: Due to a magical oversaturation, this region cycles seasons every night."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "This change affects the party as well; they age three months for every night they spend in this area. This means that they are well-rested, but their hair and nails grow from three months’ neglect and any food they are carrying is spoiled. New Moon: A second moon appeared in the sky recently: in stark contrast to the existing"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "moon, this one had a light green glow, a visible aura that throbs like the beating of a heart. Is this moon a sign of good fortune or a bad omen? Water Music: At midnight, the silvery waters of a forbidden oasis sing, softly at first, before"
      },
      {
        "roll": 4,
        "title": "rising into a crescendo like an ocean wave crashing upon the rocky shore",
        "description": "It fills the listener with awe, reducing all sense of ego into a mote of humility. Sanctuary: A sage’s favourite meditation spot is a small lookout at the top of a mountain,"
      },
      {
        "roll": 5,
        "title": "surrounded by pine trees and cedar",
        "description": "From here, one can see the rolling plains and the river snaking its way down to the coast. Birds sing from the trees above, and the breeze blows gently, providing a majestic view and a restful atmosphere. Rocks of Ages: A ring of weathered standing stones is lit by ball lightning that dances atop"
      },
      {
        "roll": 6,
        "title": "them, even when there is no storm in the sky",
        "description": "The grass beneath them is blasted and blackened and the air shivers with electricity. Those who look closely might think they see faces in the balls of lightning, but that is impossible, surely? The Witch's Hut: A large hut stalks across a swamp on two monstrous legs, colourful smoke"
      },
      {
        "roll": 7,
        "title": "and flashes of light occasionally appearing at the windows",
        "description": "Where the hut walks, animals and insects scatter out of the way, but a flock of crows swoops round the chimney letting out loud caws, settling on the roof when the house stops to rest. Web of Bones: The party comes to a deep natural chasm in the ground where the sea rolls"
      },
      {
        "roll": 8,
        "title": "in and fills a pool beyond",
        "description": "Spreading across the pool is a vast and intricate web that seems as though it has been naturally formed by bones that have grown into strange patterns to fill the space. The Dead Spire: Near the tumbled ruins of a necromancer’s fort rises a slender pillar of blue-"
      },
      {
        "roll": 9,
        "title": "green ice, its summit cloaked with strange restless clouds",
        "description": "Up close, the ice is transparent and spinning within are the countless souls used in the pillar’s creation. The ice is warm to the touch and trembles with the barely discernible voices of the dead. Stairs Ever Downward: The party encounters a deep shaft in the blasted heath. Within, a spectral spiral staircase descends. Out of the air, spirits coalesce along its length and trudge"
      },
      {
        "roll": 10,
        "title": "mournfully downwards",
        "description": "Their goal cannot be seen, for the depths are swallowed up in a dull red light. A living character who steps onto the staircase is rendered intangible until the following morning. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "inside",
        "description": "Fortunately, they aren’t very quiet about it. A group Wisdom (Perception) check allows the party to hear their babbling, otherwise they may enter the gate only to become the monsters’ next victims! Roaming Free: A Hell Hound pack roams the area, eating every humanoid, beast, or other"
      },
      {
        "roll": 2,
        "title": "monster they can to satiate their hunger",
        "description": "Fortunately, an Outrider may spot them with a Wisdom (Perception) check, noting their fiery breath as they hunt for more food. The party may avoid them, but it’s only a matter of time before the pack gets their scent. Leave Me Alone: The party approaches a nice house with a beautiful garden, the gate bearing a sign that says, ‘Go away or I’ll bite you!’ A paranoid Vampire Spawn lives here. It is in the"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "garden trimming the rose bushes, and will attack if bothered, wanting nothing more than to be left alone. The vampire wears a number of fine jewels, including an ornate ruby pendant, and several fine gold rings. The Guardian: A Wight haunts Dwarven burial grounds near the sea. It is bound to this place, sworn to protect the burial grounds from treasure hunters and grave robbers. It can be seen"
      },
      {
        "roll": 4,
        "title": "from a distance, striding solemnly between the headstones",
        "description": "Vanquishing it allows the party to dig to their heart's content for the gold buried with the bodies, though grave-robbing may well leave a black mark upon their souls. Behold, the Nightmare!: A Nightmare has been seen roaming the lands, driving away the"
      },
      {
        "roll": 5,
        "title": "native wild horses",
        "description": "At the same time, its burning hooves have sparked forest fires, devastating the surrounding woodland. A successful Intelligence (Arcana) or (Nature) check will reveal that the creature can be driven off with holy water, which can also quench its unnatural flames. The Harvest: In a wide field of blighted corn, several scarecrows stand amid the rotting crops."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "The broken stalks mark where others have traversed the field but all of them stop halfway across — if the party follows them, they pick up on trails of blood, and the gentle creaking as the Zombie scarecrows begin to move towards them. The Labyrinth of Death: A black stone maze has been carved into a mountain pass, silent but"
      },
      {
        "roll": 7,
        "title": "for the sound of something’s hooves",
        "description": "They deep scratches where horns have marked the walls and the gory remains of someone who was pinned against the stone by a Minotaur Skeleton. The Darkness Within: A writhing mass of smoke descends across the moors: the warm, foul-"
      },
      {
        "roll": 8,
        "title": "smelling stuff swamps farmsteads and forests, leaving ruin in its wake",
        "description": "Within the cloud is a vicious Cloaker, cursed to remain forever hungry. If the party chooses to end its suffering, they will find 1d20 gems embedded in its body that perpetually cast the Darkness spell. Consumed by Revenge: Even in death, two villages of Zombies either side of a valley maintain an ancient enmity. Daily, they march to engage in mindless conflict. Waiting at the"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "marshy bottom of the valley is a bloated Oytugh, who indiscriminately gobbles up the Zombie villagers. Defeating the Oytugh allows the party to carve open its distended belly and grab the trove of magic items it has swallowed up. Lifedrinker: A human necromancer Mage leaves a trail of blighted plants and animals behind"
      },
      {
        "roll": 10,
        "title": "them",
        "description": "They are crossing the lands, consuming the life forces of any helpless beings in their path. On their person they have a collection of rare magical components and a spellbook containing many necromantic spells. ENCOUNTERS: HAANUCNIETNEDT LRAUNINDS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "who says that ‘the master’ is not home but that they are more than welcome to stay the night. If they accept they have a restful night's sleep despite the occasional creaking floorboard and whispering behind the walls. Necessary Grave Robbing: A severe lightning storm sends multiple bolts of lightning into the"
      },
      {
        "roll": 2,
        "title": "ground, causing the party to seek shelter in a nearby cemetery",
        "description": "An old mausoleum looks large enough to shelter them and pushing the rusting gate aside they find a dry place for the night: though making an offering to the spirits resting here is probably a good idea. Ancient Ruins: The party comes across ancient Elven ruins in a forest clearing. Though old and"
      },
      {
        "roll": 3,
        "title": "worn, they offer shelter from the elements",
        "description": "Magical wards once protected this place and can be invoked again for one night only by succeeding on a Intelligence (Arcana) or (Religion) check, warning the party of any approaching menace. Owlbear Den: After trudging through the forest, the party arrives at an abandoned Owlbear"
      },
      {
        "roll": 4,
        "title": "den",
        "description": "The skeleton of the creature and its cubs lie at the back of the cave, and its throaty screech echoes through the space. The spirit of the beast can be appeased with some fresh meat, allowing the party to fall asleep against its ghostly warmth. Treehouse: A hollow in the middle of a banyan tree holds a small altar and a bone carving"
      },
      {
        "roll": 5,
        "title": "of an unknown deity, incense burning either side ot it",
        "description": "Praying before this altar invokes the protection of the deity, causing a wall of thick bark to grow out of the tree and surround the party, forming a makeshift hut. Sleeping Like the Dead: A weathered facade leads to a set of catacombs delving deep into the"
      },
      {
        "roll": 6,
        "title": "earth",
        "description": "Here, rows of skulls are ranked in the cubbies carved into the walls, each one painted with delicate tracery around its cranium to resemble wreaths or jewellery. A deep sense of peace pervades this hall of the dead. Silent Watchers: A ruined church is too windswept and damaged to provide much in the way"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "of shelter, but a ladder leads up to the top of the spire which has remained surprisingly whole. Around the edges of the roof are gargoyles clinging to the gutters, but they are either inanimate or disinclined to pay the party any heed. No-one’s Home?: Out of the forest looms a slanted tower of wet black stone. Once inhabited by"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "a dread necromancer, the now empty the tower offers the party respite for the night. However, they soon discover the necromancer’s magic lives on. Every item in the tower, the beds, chairs, tapestries, even the stones themselves, are animated and writhe in vengeful, mouthless agony. Dragon Inn Flight: Swooping low to the ground is a great Black Dragon. Light spills between"
      },
      {
        "roll": 9,
        "title": "its scales and delicious smoke emanates from its snout",
        "description": "The dragon, stuffed and mounted on wheels, has been converted into a pub, piloted by a trio of green, red, and yellow Pseudodragons. In exchange for riddles and stories they offer lodgings in the snug, lavish interior. Sanctuary: A shrine to ancient gods has been kept clear of the undead forces by a powerful Hallow spell. A Cleric tends to the shrine, and administers healing to the needy. They have the"
      },
      {
        "roll": 10,
        "title": "required material components to cast any healing spell of 3rd level or lower",
        "description": "There are Knights who serve a rival order that seek the destruction of this shrine, and may attack in the night, interrupting any rest. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "A diary stashed in one of the houses tells of how the village would sacrifice the local goblin population to appease the dark power, and once they were wiped out, the villagers turned on each other. Ozymandias: A rough sculpture of a Hobgoblin warlord looks over a blasted landscape."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "Beneath her are words declaring the glory of the Hobgoblin Empire, the capital city upon which it stands, and the imminent divinity of their chief. No sign of the city remains, the gods having long cast down the warlord for her hubris. Bleeding Earth: An archaeological dig site next to the river contains an assortment of ceramics"
      },
      {
        "roll": 3,
        "title": "and broken weaponry, stained with faded crimson smears",
        "description": "Long ago, an earthquake shattered this place and the earth itself bled from the destruction. Lucky Soup: An old woman sits by a fire, stirring a large pot of delicious smelling stew, cackling"
      },
      {
        "roll": 4,
        "title": "joyfully",
        "description": "She claims to be the last descendant of a long line of royal chefs, and their secret recipe was said to fill the belly and lift the spirits. She is the last who knows how to make it, and offers the party a bowl that has them smiling ear-to-ear… Broken Bridge: A long bridge constructed of bones lies broken over a yawning chasm. Beyond"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "it lies the island that it connected to the mainland, where a lonely prison stands, the wails of those kept there still just audible on the whispering wind. The Sunken City: Half-submerged towers and roof ridges emerge from an unnaturally still"
      },
      {
        "roll": 6,
        "title": "lake",
        "description": "A bell tolls mournfully from the spire of the church and shadowy figures lurch across the waters, seemingly able to walk across the surface of the lake. The strangest thing is that the windows of the houses still glow with bright firelight, inviting and lively. The Nightmare Halls: A series of vast echoing halls are carved into this mountain in which the pillars, floors, and even the ceilings are painted with endless nightmarish monstrosities."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "Hundreds of silver amulets bearing these leering faces hang on hooks from the pillars, each one designed to contain the nightmare its owner painted upon the building. Surely there is no harm in taking one or two? Phantom Castle: Drifting above the misty hills is the ghost of a splendid castle. Pale flags festoon its battlements, while in its tallest tower stands a maiden. Her voice carries across the"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "moors, her voice changing from a beautiful ethereal song to a sorrowful screeching lament. Those who see the ghost castle will, for days afterwards, hear her song in their dreams until they wake. Ancient Appetites: Between the low hills a mossy and much-weathered statue sticks up from"
      },
      {
        "roll": 9,
        "title": "the ground",
        "description": "It seems to be of an old Ogre king, his broad face smiling, and tongue lolling between sharp teeth. In his hands he holds a massive knife and fork, and on the massive stone plate in front of him, Skeletons dance, waiting to be eaten. Ancient Orator: An aged Tiefling stands atop a crumbling watchtower, the long wasted away"
      },
      {
        "roll": 10,
        "title": "skeletons of his people laying around its base",
        "description": "He sings a song of the fall of an ancient empire, and looking around the party can see the ruins of this vanished civilisation, and its last lonely guardian. ENCOUNTERS: HAANUCNIETNEDT LRAUNINDS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "A crude sign sits nearby, the message upon it painted in blood: ‘You said you’d defend the village with your lives. Now fulfil your promise.’ The eerie stillness betrays no sign of who committed this atrocity. Ominous Cave: Trying to stay out of the elements, the party finds a nearby cave in the hills."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "The cave seems to go deep, possibly providing a tunnel to the other side of the hills. The deeper the party delves however, the more they can hear the soft rhythmic sound of a heartbeat, until it is a deafening roar of pumping blood. The Eye: The party opens a door in a haunted mansion and finds a neverending void,"
      },
      {
        "roll": 3,
        "title": "dimensionless and silent",
        "description": "From the blackness, a colossal eye opens, its purple glow lighting the darkness eerily. It does nothing but gaze upon the party, watching them carefully, snapping shut when they leave. Wormhole: The party falls into a deep hole in the ground, the dank cave at the bottom walled"
      },
      {
        "roll": 4,
        "title": "with fleshy clumps of organic matter",
        "description": "From the turgid walls, small worms wriggle free, each one emitting a tiny scream. The Cellar: This wine cellar is dank and smelly, the floor littered with dead rats and bugs. The"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "wine stored here is no longer drinkable, but a large cask smelling of fine brandy sits nearby. Pulling open the cask reveals a sallow corpse, pickled in the delicious buttery spirit, its face frozen in a rictus of terror. Whispering Down the Halls: The party comes across a beautiful mansion in perfect condition, dust sheets across the furniture and windows intact, though the garden has not been tended"
      },
      {
        "roll": 6,
        "title": "in some time",
        "description": "It’s almost like the place has been frozen in time: a good place to sleep maybe, but what is that sound? A choking gurgle and the slapping of wet feet as something wanders the halls late at night, before retreating to its attic hideaway, leaving bloody footprints upon the carpets. The Curious: A small hill turns out to be a barrow, an ancient gravesite, with a dolmen entrance."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "The heavy stone that sealed the barrow has split down the middle, providing a narrow crack by which to squeeze inside. Under the barrow, the body of a man lies with eyes staring in horror at the entrance, where he had tried to pile up earth to keep something out. Bodies in Silver: An orb of silver light floats eerily above a lake of liquid metal. From the"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "mercury-like liquid, corpses frozen at the moment of death reach up towards the orb, their silver-stained fingers forever reaching for the light. Though the scene seems frozen in time, the corpses are rising almost imperceptibly, the mire of metal tugging at their waists. Animal Town: Deep in the forest, the party enters a town stricken by some terrible curse. Its inhabitants crawl on all fours, snuffling like swine or whining like dogs, trailing their clothing"
      },
      {
        "roll": 9,
        "title": "behind them",
        "description": "In the houses confused cows and cats, clad in stolen clothes and standing on their hind legs, attempt to explain what happened with sad eyes and mangled, unintelligible voices. Big Goblinoids Don’t Cry: A campsite littered with the corpses of a dozen Goblins is tucked"
      },
      {
        "roll": 10,
        "title": "away in a copse of trees",
        "description": "A lone blue-nosed Hobgoblin kneels beside his troop, crying loudly in grief, as they had recently absconded from their violent kin. Overwhelmed by his sadness, he holds a sword up to the party, not able to end his misery by his own hand. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "they will be punished",
        "description": "The beleaguered town elders are about to acquiesce when the party arrives, and seeing their salvation, the elders refuse. The incensed vampire sends an army of dominated Knights to teach them a lesson. The Gauntlet: The party is travelling through a low gorge when a Mage materialises in front of them. He tells them that he will be waiting at the end of the gorge, then animates several"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "Skeletons, who burst out of the dirt walls and menace the party, promising the if they should make it out he will reward them. The Mage hurls magical spells at them while they fight their way through the skeletal gauntlet. A Watery Death: The party finds themselves in an arena with one wall made of thick glass, the"
      },
      {
        "roll": 3,
        "title": "view seeming to peer into the watery depths of some far off ocean",
        "description": "Behind the glass an Aboleth swims to and fro until a spectral whistle blows and the glass shatters. Water floods the arena, the Aboleth roaring out to strike at the party. Spiders, Spiders, Spiders!: Exploring a dusty library the party comes across a trapdoor leading"
      },
      {
        "roll": 4,
        "title": "to a shadowy basement",
        "description": "From within a faint blue glow can be seen, a clutch of Phase Spider eggs. The party has no time to react when the parents drop from the bookshelves, skittering and blinking to defend their brood. Sacrifice: A Cult Fanatic leads a group of Cultists in sacrificing a group of caged humans, the"
      },
      {
        "roll": 5,
        "title": "blood of each one allowed to drip over a golden sarcophagus",
        "description": "With each sacrifice, the Mummy Lord inside gets closer to awakening, and slaughtering both cultists and PCs alike. Rat Run: A group of Wererats along with their pet Swarms of Rats have made a long abandoned mansion their home. They specialise in graverobbing and have accrued rooms of"
      },
      {
        "roll": 6,
        "title": "gems, jewellery, books and even the clothes the dead were buried in",
        "description": "Highly protective of their loot, they’ll spring on any who try to take it in a chittering mass of sharp teeth and scrabbling claws. Endless Screams: In a mouldering prison filled with whispering voices of those who died in"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "their cells, a Cult Fanatic has merged the bodies of the prisoners into a Gibbering Mouther. He keeps his creation in a pit in the courtyard, but is now ready to let it loose to devour more bodies and grow in size. Hag Whispers: The party is stalked by a coven of Night Hags. A disagreement threatens to split the coven, so they decide to use the party to settle matters, using their magic to attempt"
      },
      {
        "roll": 8,
        "title": "to turn the PCs against one another",
        "description": "Should the party resist their influence, the Hags manifest to destroy them. If the disagreement is settled, the losing Hag takes out her frustration on her failed pawns. Meat for the Mound: A young Mage perches on the shoulder of her creation, a Shambling"
      },
      {
        "roll": 9,
        "title": "Mound made from the remnants of her school field trip",
        "description": "To strengthen the Mound, she seeks out adventurers to feed it. Preferring to let the Mound fight, she only uses her powers if it seems in danger. Should the Mound be destroyed, she flies into a reckless rage. In Their Element: A young Sorcerer only just discovering her wild powers has unwittingly summoned a variety of Mephits: Dust, Ice, Magma, Mud, Smoke, and Steam. Squabbling"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "amongst themselves, their argument has grown violent, whipping their elements up in a tempest that threatens to destroy the land. The Sorcerer pleads with the party to intervene and send them back to their home planes. ENCOUNTERS: HAANUCNIETNEDT LRAUNINDS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "the party where their now feral spawn dwell, and even offers to show them how to bypass the various deadly traps. Has the creature truly been reborn, or is this part of an elaborate trick to ensnare adventurers full of rich blood? Revenge from Beyond: A ghostly king appears before the party, telling a tale of how he"
      },
      {
        "roll": 2,
        "title": "attempted to vanquish a cruel Mummy Lord but was defeated and entombed",
        "description": "Still wearing his bandages, he is not aware that the Lord he speaks of was himself, and he details all the cruelties he performed in life as well as where he was entombed and the treasure hidden within. Lost in the Maze: The party find themselves lost in a colossal hedge maze, wind whipping"
      },
      {
        "roll": 3,
        "title": "eerily through the labyrinth",
        "description": "They are not the only ones lost however, meeting a Young Gold Dragon in Human form, confounded by the puzzle. If the party can help him escape the maze, he’ll happily part with any magic item in his hoard. Doomsday Clock: A young girl has an intricate puzzle box in her possession, the complicated mechanism incomplete. She tells the party that she is a seer, and if the puzzle box is completed"
      },
      {
        "roll": 4,
        "title": "then it would grant a glimpse of the end of the world",
        "description": "She is terrified of what it might show her, and leaves the box in the party's possession, fleeing into the dark. Will they attempt to solve it, and what will they see if they do? Bone Dust: A Minotaur necromancer is fighting the skeletons of his deceased family, pulversing their bones to dust beneath his hooves. Each night the bones reform from the bone"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "dust, coming to punish their son who used their bodies in his necromantic experiments. The Minotaur is tired and old now, and it may not be long before he is reunited with his fallen family. Trick or Treat: A group of Goblins are travelling to villages dressed up in elaborate costumes, performing a mummer's play and demanding to be given something of value in return."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "While some see it as harmless fun, others who have turned them away have encountered fatal misfortune shortly afterwards, the word ‘TRICK’ scrawled upon their doors and the laughing face of some cackling trickster god. High Stakes: A village toils under the oppressive yoke of a nearby Vampire who dwells in a"
      },
      {
        "roll": 7,
        "title": "lordly castle",
        "description": "Vampire Spawn rise nightly, but salvation seems to have come in the form of a man who claims to be a legendary vampire hunter. Unfortunately he is nothing more than a grifter, and will take what he can before leaving the villagers to their fate. Unlovely Bones: Cradled in his Ogre manservant’s arms, an Archmage has been reduced to"
      },
      {
        "roll": 8,
        "title": "a puddle of skin",
        "description": "His own Skeleton has abandoned him, absconding to seek a new life. He implores the party to help him find his wayward bones. The Archmage doesn’t know that his skeleton plans to raise an army against him, to free the undead in his thrall. Witch Blunder General: The party encounters the most famous Witch Hunter in existence — though a curse has transformed them into a Baboon, they have continued, crossbows in"
      },
      {
        "roll": 9,
        "title": "hand, to hunt and eradicate evil",
        "description": "The curse, however, is strengthening, their mind becoming ever more bestial and irrational. Out of shame, they hide the source of the curse: their twin, a legendary witch of immense power, the very thing they have vowed to destroy. Immortali-Tea: A blinded Medusa runs a tea room just outside a town, his eyes willingly"
      },
      {
        "roll": 10,
        "title": "gouged out years previously",
        "description": "He tries to put his immortality to good use, providing good food and conversation to those brave enough to visit, though he is reluctant to tell the story of the devil he fell in love with who turned him into this monster. 175 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Hellscapes": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "concocting a foul-smelling brew in a cauldron at a campsite",
        "description": "The witches offer a taste of the brew to the party. They speak of its numerous nutritional benefits and would like the party’s feedback on what it tastes like. Good Omen: A hellish creature, half bat, half wombat, shuffles across the cracked earth. It"
      },
      {
        "roll": 2,
        "title": "drags a ball and chain secured around its left ankle",
        "description": "It reaches a pimpled arm toward the party and screeches good tidings at them. It foretells the presence of a blue comet in the skies and says that it is a sign of good fortune for the party. Deal's a Deal: A Fiend runs into the party at a drinking establishment and makes an offer:"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "retrieve a scroll for him from a demonic library and he will reward them handsomely with magic items or knowledge from his vast collection. Betray him, and he will make sure they suffer for the rest of their miserable lives. An Intellectual Disagreement: An exciting amount of purple smoke leads the party to a Human Mage who has decked themself out in tastelessly infernal paraphernalia. They are"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "performing some sort of magical experimentation with various substances from the infernal realms and reveal that they are currently in competition with a rival Mage to prove their theories about fiendish magic. Hellish Hunter: A Gladiator with infernal brands on her forehead and collarbone, dressed in"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "blood-red armour shaped to resemble flayed musculature, stalks through a shanty town near a portal to another plane. She has two large Mastiffs with a row of bony spines growing along their backs and is hunting a soul who has escaped the Devil she is indebted to. Bird Brains: A group of Cultists who all have bird legs give praise to a Vrock they worship."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "They throw green berries into the air to represent the spores it exudes and caw raucously in imitation of its frightening screech. Anyone who joins in their worship can ask the cultists questions about the local area. Need a Hand?: Wreathed in cloying smoke, a Tiefling trader appears. In her ornate chest of drawers are sundered arms in every shape and size. They attach easily to either sternum or"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "flank, providing swiping claws or sucking tentacles or simply another hand with which to wield weapons. The only downside is their predictable urge to strangle their new owner at night. Fellow Traveller: Squeezing up through a grate comes an amorphous blob of putrescence. A"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "sightseer travelling up from the foetid regions below, the stinking mass is a companionable sort and eagerly passes on any knowledge it has gleaned of the surrounding areas in its booming, cultured voice. The blob has no concept of personal space, and the party will taste it for days. Better Late Than Never?: Clanking along within a rusting mechanical suit, a quartet of quarrelling Gnomes, devoid of skin, seek directions to a family reunion. While they can"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "impart some knowledge of the area to the party, every detail becomes a source of contention, and a fight will inevitably break out amongst them. In truth they have been searching vainly for the reunion for seven centuries. A Hard Bargain: A three-legged creature, four-eyed with skin half-flayed, pulls a creaky"
      },
      {
        "roll": 10,
        "title": "wagon across the barren plains pock-marked with shallow craters",
        "description": "It sells simple weapons and ammunition but at an exorbitant price. A successful Charisma (Persuasion or Intimidation) check reduces the asking price by 20%. ENCOUNTEARNS:CHIENLLTSRCUAIPNES 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "chemicals",
        "description": "Many of these are stored in glass bottles and vials. Some are useful for extending the durability of equipment and items, some are explosives, and some can be used to corrode surfaces. Hot, Hot, Hot!: Big Momma Moosie has a diner inside a crater. She serves generous portions"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "of fried hell-chicken seasoned with a delicious blend of twelve herbs and spices. Her diner is a well-kept secret. Only gourmands who are brave enough to scour the world for the finest dishes know of her establishment. Signed in Blood: A miasma of flies suggests that something is amiss, and the party finds"
      },
      {
        "roll": 3,
        "title": "the corpse of a messenger",
        "description": "Inside his bag are a number of messages inscribed on a variety of materials, including what appears to be human skin, but also a glowing gold infernal contract signed in blood that looks like it belongs to someone important. Sanctuary: Those who are not Evil aligned who pass through this sheltered circle of marble"
      },
      {
        "roll": 4,
        "title": "feel their hearts lighten",
        "description": "Within is the ethereal presence of the Cleric who sacrificed herself to create and hide this sanctuary. On an altar before her are three scrolls of Dispel Good and Evil with the words ‘Use them well’ inlaid in silver on the altar. A Mirror Darkly: In a hermitage by a frozen sea, a diviner with a bandage over his eyes invites"
      },
      {
        "roll": 5,
        "title": "the party to partake of his fire",
        "description": "He offers the party his scrying mirror, a disc of polished black glass with a silver rim, which acts as the material component for a divination spell up to three times before it cracks. Not Good Enough: A human-sized Giant Fire Beetle skitters past, dragging behind it the"
      },
      {
        "roll": 6,
        "title": "tattered remains of a robe patterned with holy symbols",
        "description": "The robe belonged to a Cleric who was turned into a scarab in the course of his holy mission, but still has a holy symbol and a couple of bottles of holy water in its pockets. Healing Worms: Creaking slowly across the blasted plain, a herd of arching spine worms are"
      },
      {
        "roll": 7,
        "title": "nearing the end of their migration",
        "description": "the rotting cadaver of a Red Dragon. The dull, docile spine worms can be turned onto their clattering backs to reveal their soft underbellies. Embedded in the warm flesh are scarlet carbuncles that, if laid upon the tongue, heal 1d6 Hit Points. The Taste of Heartbeats: On a rocky promontory stands a stooped and withered tree. Hanging"
      },
      {
        "roll": 8,
        "title": "from its branches are soft, pitted fruit in the shape of shrunken heads",
        "description": "The fruit, throbbing and gently moaning, can be used to detect the presence of life within 60 ft: if the fruit’s heavily lidded eyes are turned in the direction of a beating heart, it begins to lick its shrivelled lips. A Skinful: Snagged on a field of barbed wire, the party finds billowing sheets of pastel coloured Lemure skin. The tough, knobbly material can be converted into a waterskin, or a"
      },
      {
        "roll": 9,
        "title": "sack, or simply draped around the shoulders",
        "description": "Doing so allows the party to blend into their surroundings, though it does bring them into close proximity to the wretched voices of the skins’ former owners. An Egg-citing Discovery: Fire-pigeons nest in scorched trees nearby. They lay numerous eggs to account for the low survival rate of their young and the poor parenting skills of the adults."
      },
      {
        "roll": 10,
        "title": "When the parents are clumsy, an egg falls out of the nest",
        "description": "The shell is rock-hard and can only be broken with a successful Strength (Athletics) check. Consuming the yolk grants resistance to fire damage for a day. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "cackle at the party and throw stone fruit at them for fun",
        "description": "They are cowards at heart and the Outrider can scare them away with a successful Charisma (Intimidation) check. Lava Flood: A violent earthquake rips the basalt plain. Lava flows out of a deep crack, widening"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "quickly into a river of hot liquid that threatens to destroy everything in its path. It takes a successful Wisdom (Perception) check for the Outrider to notice blocks of broken-off basalt floating on the lava, safe enough to cross. The Slough of Despond: A deep bog of scummy water, sulphurous mud, and stinging insects"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "stretches in all directions, draining the energy and willpower of anyone who travels across it. The Outrider must make a successful Wisdom (Medicine) check to identify and treat the malaise, removing the clinging sludge without giving in to despair. Heavenly Fire: The air pressure grows more intense, and the ground begins to glow as"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "hundreds of meteors burning with a baleful light are flung from the sky and rain down on the surrounding landscape. The Outrider must make a Dexterity (Athletics) check to dash through the wave of meteors without getting too close to any of the impact sites. Horrific Voyage: The party starts to move through a passageway into a larger cave complex"
      },
      {
        "roll": 5,
        "title": "where everything feels very organic and sticky",
        "description": "The humid air smells of blood and bile and the walls drip acid. With a successful Intelligence (Medicine) check, the Outrider realises this is the body of some huge humanoid and guides the party through its dangers. Search Party: A horde of Imps and Hellhounds comb an area of broken ground for escapees"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "from a Bearded Devil's fighting pit, spreading out in an efficient search pattern as the Bearded Devil barks orders to keep them moving. The Outrider must make a Dexterity (Stealth) check to find a way through without alerting the many enemies nearby. Shut That Damned Door!: Some inconsiderate wretch has conjured up a portal to a fiery plane, leaving it ajar behind them. Now purple and yellow flames roar from the diabolical"
      },
      {
        "roll": 7,
        "title": "aperture across the road ahead",
        "description": "The Outrider can close the door with a successful Intelligence (Arcana) check, but a failure leaves them wreathed in the living flame for 1d6 days, damaging their armour. In Your Face: The Outrider encounters a vast plain composed of gigantic, fleshy faces. The tormented souls roll their eyes and gnash their teeth in ancient agony, the air filled with their"
      },
      {
        "roll": 8,
        "title": "exhausted, breathless voices",
        "description": "Navigating pores and pockmarks, the Outrider must pass a Dexterity (Acrobatics) check to ensure they do not plummet into any number of writhing orifices. Words of Power: Without any warning, the clouds above are torn asunder, replaced by mile- high runes that burn with terrifying demonic power. The Outrider, caught in this unholy"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "demonstration, must pass a Wisdom saving throw to avoid staring too long at the runes as they carve a path. If the Outrider fails, they age rapidly, getting 1d10 years older in a matter of moments. Sweet Deception: A sickly sweet smell wafts through the narrowing gorge. Squeezing through this cleft, the party arrives at a patch of giant tulip-like flowers. They sway in the breeze,"
      },
      {
        "roll": 10,
        "title": "hypnotically enticing the party to climb inside them",
        "description": "A successful Wisdom (Nature) check by the Outrider reveals these flowers for what they are, carnivorous plants with teeth on the inner side of their petals. ENCOUNTEARNS:CHIENLLTSRCUAIPNES 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "playing for an eternity and are tired of it, but pride prevents them from making concessions and quitting. The party can resolve the game for them with a Wisdom, Intelligence, or Charisma (Persuasion) check, gaining advantage on Intelligence checks for a day on a success. Genie in a Bottle: The party comes across a mountain of trash that is on fire. A glass bottle"
      },
      {
        "roll": 2,
        "title": "with an ornate stopper lies at the top of the heap",
        "description": "A Djinni is trapped inside the bottle. The party can free the djinni by removing the arcane seal with an Intelligence (Arcana) check and pulling the stopper. The grateful Djinni gives the party immunity to fire damage for a day. The Sentinel: A suit of Animated Armour patrolling the road explains that they are actually a mortal, bound into this suit of armour as a result of their contract with a Devil. To free"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "them, the party must make a successful Intelligence (Investigation) check to identify that the contract does not specify that the soul within the armour must patrol, only that the armour must, so the soul is free to depart. Line in the Sand: A Halfling monk sitting in the middle of an area inscribed with demonic"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "sigils asks for assistance in breaking the bindings laid on this place, as she trusted the wrong person and they imprisoned her here for a demon to eat. With an Intelligence (Religion or Arcana) check, the party can disrupt the sigils and free her. Twisted Sisters: The party is surprised when a Night Hag asks for help. She and her sister witches made a foolish mistake and were transformed into Hags. They are losing the memories"
      },
      {
        "roll": 5,
        "title": "of who they were before",
        "description": "She offers her coven's help in the future if the party restores them to their true selves with a group Charisma (Performance) check to recite back to the Hags a tale of their past lives. We Had an Agreement: A scholar Tiefling is trying to convince a Devil to honour a historical"
      },
      {
        "roll": 6,
        "title": "agreement with her people and give her a valuable artefact",
        "description": "An Imp ran off with some of her papers and now she can't remember the agreement’s details! With a successful Intelligence (History) check, the party can help her figure it out. Champion of Boils: Reclining in a rotting bower is a pustule-covered Satyr. He implores the party for help, not to cure his ailment but to ensure its proliferation. A recent bout of health"
      },
      {
        "roll": 7,
        "title": "threatens his lauded position as the Champion of Boils",
        "description": "Directed to a disease-ridden puddle, the party can, with a successful group Wisdom (Medicine) check, re-infect the Champion. The reward? His autograph. Trading Faces: Glumly seated together on a tussock, the party encounters an Ogre and a Halfling. Their facial features have been swapped around or stolen by a gang of juvenile Quasits"
      },
      {
        "roll": 8,
        "title": "in a nearby barn",
        "description": "The party can help by intimidating the Quasits into returning the stolen body parts with a Charisma (Intimidation) check. Traders in rare cloth, the duo reward the characters with their pick of wares. Jewel Purpose: A gigantic Balor has come to rest on the roof of a riverside building, its massive"
      },
      {
        "roll": 9,
        "title": "weight causing the structure to buckle",
        "description": "The panicking owner, a Tiefling jeweller, implores the party to rescue his wares from within using a group Dexterity (Slight of Hand) check. There is no chance the slumbering Balor will waken, but the building is close to collapse. Roadside Assistance: A crotchety old woman and her Imp familiar are stranded on a trail, their rickshaw in a broken heap. They are struggling to mend the conveyance because they are"
      },
      {
        "roll": 10,
        "title": "both weak and infirm",
        "description": "The party can assist them with a successful skill check of their choice. This may include using Carpenter’s Tools. The old woman rewards them with a good luck token that grants advantage on saving throws for a day. 181 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "presence",
        "description": "They swoop down upon the party, using their Stunning Screech ability first before releasing spores on their victims. They cackle wickedly as they tear at the party with their beaks and talons. Preaching to the Choir: A Barbed Devil preaches to a choir of Lemures and directs them"
      },
      {
        "roll": 2,
        "title": "to sing hellish hymns",
        "description": "The party may witness their performance. However, the overwrought vocals of the lemures threaten to give the party headaches, and the performance agitates the Lemures into a violent frenzy. Impudent: A group of Imps are clinging to the facade of a tower among the inanimate"
      },
      {
        "roll": 3,
        "title": "gargoyles there, ready to spring down on passers-by",
        "description": "They are competing to see who can cause harm to the most mortals, as their commander, a Bone Devil, has sent them out into the world to punish mortals who dare to trespass in the lands of fiends. Dretch Tunnels: The party find themselves in a set of tunnels filled with growling shrieks."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "A group of Dretches has colonised the tunnels and they drag small prey down into the passageways to consume them. The Dretches are between the party and the exit, but can the characters sneak past, or will they put an end to the fiends? The Wild Hunt: A pack of Hell Hounds surrounds the party, pushing them back towards a"
      },
      {
        "roll": 5,
        "title": "sheer drop",
        "description": "The Hell Hounds are hungry and desperate, evident in their behaviour and in the way their internal fires are guttering. They are willing to fight to the end if it means they might get a feast, and tireless in pursuit of their prey. Kiss of the Succubus: A cult has been bringing prisoners to their mysterious patron, a shadowy"
      },
      {
        "roll": 6,
        "title": "figure with huge bat wings and burning eyes",
        "description": "The whole mess is actually orchestrated by a Succubus who is manipulating a group of fanatically loyal Cultists by creating the illusion of a godlike mystical figure that drives them to torture and kill for her. Fallen Idol: To the lamentations of its Acolyte worshippers, a gigantic carnelian idol of a twin-headed demon slips from its wooden scaffolding and breaks upon the stony ground. The"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "party have the misfortune of arriving upon the scene at this very moment, and the Acolytes, driven into a frenzy at the breaking of their god, blame the intruders rather than their shoddy workmanship. Gems for the Gem Head!: While navigating a narrow canyon, the party is ambushed by a"
      },
      {
        "roll": 8,
        "title": "ragged group of Bandits. These are no ordinary brigands",
        "description": "in place of a head, each has a hovering multi-faceted gem the colour of blood. Uninterested in robbing the party, they instead wish to force them to ingest blood gems that will transform them into more of their kind. Noble Pursuits: Unfolding bonelessly out of a deep cleft, two Nobles suddenly appear before the party and challenge them to a duel. They move clumsily, their flapping mouths out of sync"
      },
      {
        "roll": 9,
        "title": "with their voices",
        "description": "They are attached by fleshy umbilical cords to whatever resides in the cleft. At the fight’s conclusion the unseen puppeteer thanks the party for the fun and withdraws the mangled bodies. Hungry Eels: The party is crossing a bridge over a river of bubbling lava. Hungry fire eels (Fire"
      },
      {
        "roll": 10,
        "title": "Elementals) swim in the river",
        "description": "They leap out of the lava at anyone on the bridge or close to the edge of the river. The party can cross the bridge safely if they feed the eels with their rations or the corpses of creatures they’ve killed. ENCOUNTEARNS:CHIENLLTSRCUAIPNES 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "as ebony",
        "description": "Its leaves are grey and laced with red veins. Its flowers are bloodshot eyes surrounded by five fleshy petals. The petals unfurl at night but close tight during the day. Hellish Tornado: A tornado blows through the waste. It carries swirling dust, fine specks of"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "ground glass, and metal shavings that threaten to cut and shred any living creature that gets sucked in. The tornado leaves a trail of destruction behind it. The party sees this from afar, at the top of a cliff overlooking the waste. Loathsome Hollow: Immensely tall trees stretch up towards the sky, and among them hang flesh nests of large buzzing insects swollen with blood. Hammered into the trees are black"
      },
      {
        "roll": 3,
        "title": "metal masks, grinning mouths and staring eyes watching those who pass through",
        "description": "Whether they are protective measures against the things that haunt this place or allies of the flies is a mystery. The Frozen Sea: A wide sea stretches to the horizon, clearly once filled with mighty waves that"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "threatened to overwhelm the coast but now frozen with such suddenness that the waves are still poised to break, preserved like sculptures of the ocean's fury. A pale glow beneath the ice shows the shapes of large sea creatures frozen in place. The Ash Wastes: The remains of trees and buildings stretch out in all directions, stone"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "crumbling underfoot as though something destroyed everything here in a matter of seconds. It does not seem like fire, but rather something that disassembles the structures, plants, creatures, and even the ground itself into ashes that catch in the throat and burn the skin. Hellish Design: Canyons spread between impassable mountains; their walls laced with rich veins of ore. There is something intentional about the canyons’ shapes, as though designed by"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "an impossibly huge being, and looking down on them from above unsettles even the stoutest of hearts. To walk amidst their hideous geometry would surely cause an even greater disturbance to the mind. Wandering Oasis: Crab-walking across the cracked desert on a hundred spindly legs, comes a great bowl of earth and water many miles high. Densely covered in thick green foliage and"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "teeming with life, its awkward shuffling causes an intermittent deluge of crystal water to inundate the desert below. Its random path across the plain is marked by patches of slowly dying green. Scab Lake: The party reaches the shore of a lake of clotted blood, stretching to the horizon. On"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "the surface, thick brown plates of scab meat bump and buckle, while on the shore a settlement of wingless green bottle flies build scab-huts for their maggot young and tend to herds of fat, skittering ticks the size of elephants. Clashing Ice: From two opposing mountain ranges come tongues of crushing blue ice. Unwilling to give way to each other, the two glaciers meet in a grinding, splintering maze"
      },
      {
        "roll": 9,
        "title": "of inconstant paths",
        "description": "Encased within each glacier are countless bodies of Frost Imps. As the ice fractures and melts, they are released, warring in the sky over which glacier will achieve supremacy and swallow the other. Wall of Fire: A high wall of fire separates the desert from the rocky plains. No one knows"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "how or when it came about, but it clearly marks the territory of a clan of Salamanders who communicate in dance and rhyme. The fire does not burn, but gently bathes those who dare walk through the wall with a gentle warmth. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "them to dig a pit",
        "description": "The couple, a Human man and a Human woman, sold their souls to this fiend in exchange for wealth, and now they are indentured to him. The Human woman notices the party and pleads with her eyes for their rescue. Her Royal Highness: Mouthless humanoids carry a palanquin made of bone and gold and"
      },
      {
        "roll": 2,
        "title": "festooned with crimson fabric",
        "description": "An Erinyes sits inside this palanquin, cooling herself with a fan. She demands the party bow to her and address her as their queen. She attacks the party if they show her disrespect. Hell Hound on My Trail: In a field of scrubby bushes and black sand, the trail of cinders,"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "charred meat, and burning footprints of a larger-than-average dog are easy to follow. The Hell Hound is hard to take by surprise, but it is currently distracted by tracking a group of hellishly mutated pigs, ready to pick off the weakest. Demonic Stench: Following the trail of bodies, the party knows they are up against something"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "immensely strong with sharp claws, but it is not until they find the withered plants and asphyxiated vermin that they realise it must be giving off some kind of toxic stench. From there, they only need to follow their noses to track down the Hezrou. The Hag Stone: To retrieve her Heartstone, a Night Hag has put a village of people into"
      },
      {
        "roll": 5,
        "title": "nightmare-filled slumbers",
        "description": "A set of footprints the size of a child's lead into the village and then transform into larger tracks when they reach a stone in the centre of town with a chunk gouged out of the middle of it, seemingly by a clawed hand. Really Terrible Lizard: Bellowing with the voices of those it has devoured, a demonically corrupted Tyrannosaurus Rex stalks the ruins of a settlement. Its blue and purple scales are"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "pitted with a thousand unblinking eyes, while along its back and tail the tormented faces of its victims push up through the flesh. Upon death it disgorges soft eggs, each containing a soul it has consumed. Strange Fruit: A valley floor is littered with the burst bodies of soft green Manticores. Following the trail to a cave, the party discovers within a gigantic plant, unripe Manticores"
      },
      {
        "roll": 7,
        "title": "weighing down each of its branches",
        "description": "To protect itself, the plant releases its fruit. The blind, half-formed Manticores attack. Once the beasts are defeated the plant withers, revealing a Ring of Animal Influence amid its roots. The Devil's Steed: The ground is branded with fiery hoofprints that melted the stone, and"
      },
      {
        "roll": 8,
        "title": "there are clear signs of a person who ran ahead in the same direction",
        "description": "The tracks lead to a tumbledown chapel where the shapes of two hoofprints are burned into the door, beyond which someone whimpers as the Nightmare shrieks and canters around the building. Dance of the Dust Devils: Dust Devils dance in the desert to celebrate the crowning of a"
      },
      {
        "roll": 9,
        "title": "Rakshasa of the lower hells",
        "description": "They cause a sandstorm, annoying an infernal capitalist who is building a holiday resort nearby for the well-heeled. The investor offers a bounty to get rid of these pesky dust devils. Avoiding a Rampage: A Nalfeshnee has sworn vengeance upon its rival, a minor warlord of hell. It goes on a rampage, destroying everything and everyone the warlord holds dear. Its"
      },
      {
        "roll": 10,
        "title": "blind rage eventually extends to unfortunate bystanders who cross its path",
        "description": "If the party takes the time to listen to gossip at an inn, they can avoid travelling near this Nalfeshnee’s trail of destruction. ENCOUNTEARNS:CHIENLLTSRCUAIPNES 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "with teeth lining the entrance",
        "description": "A large uvula dangles at the back of the cave. Though there is no tongue, the cave walls are made of flesh and are damp with saliva. If the party lights a fire or damages any part of it, the cave mouth will scream loudly, drawing unwanted attention. The Nest: The nest of a giant hell hawk, recently vacated, is in a secure location on the cliffside."
      },
      {
        "roll": 2,
        "title": "Eggshells and down still litter the base of the nest",
        "description": "Though the chicks are fully fledged and have left the nest, who is to say these birds won’t return? Overnight Education: A ruined library filled with burned books provides a defensible location"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "for a rest, as well as edible mushrooms that cluster in the piles of mildewed book remains and vermin that can augment dwindling food stocks in a pinch. Stray too far into the dark and the party may encounter the Giant Rats in the walls. Pack Life: The party find a dry cave that they quickly realise is the home of a pack of Hell"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Hounds, but instead of attacking, the Hell Hounds chase off anyone who might try to interfere with the characters. The Hell Hounds are still risky to be around, but they seem to want to protect the party while they rest. Sleep of the Just: An abandoned iron prison bounded on three sides by a fast-flowing acidic"
      },
      {
        "roll": 5,
        "title": "river provides a defensible position",
        "description": "The cells are strong enough to hold the most horrific of fiends, as well as being carefully warded to prevent the passage of more ethereal beings, though some of the inmates might never have left. Curious Cabinet: A Tiefling trader appears, driving a cart behind a creature half-horse, half- fly. She invites the party to rest in the little cabinet upon the cart. Made of ornate red wood,"
      },
      {
        "roll": 6,
        "title": "the cabinet is two feet tall, one foot deep, and filled with shelves",
        "description": "The Tiefling disassembles the party, placing their limbs snugly upon the shelves. Reassembled next morning, they find themselves fully rested. Stay for the Knight: In ages past, a contingent of Dwarven Knights established a squat bastion of stone amidst a tangled forest. An explosion of demonic energies melted the Knights into"
      },
      {
        "roll": 7,
        "title": "the walls of the structure where they remain to this day",
        "description": "They are an affable lot, trading stories and jokes with the travellers who come to the fort, only occasionally screaming with unending agony. Shelved: A tower rises from a plain of firestorms and battles between Demons and Devils. The"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "path to the tower is sown with protective magic, meaning the Fiends ignore those who walk it unless the party angers the arbiter who dwells within. The arbiter is an indistinct judge of neutrality for the Fiends, who can grant sanctuary to ‘outstanding cases’. Island in the River: A smelly, polluted river, its waters tainted by the organic refuse of villages"
      },
      {
        "roll": 9,
        "title": "upstream",
        "description": "The stench is so bad that even fiends refuse to come near. A little wooden bridge leads to a tiny island with a small tree growing in its centre. Notwithstanding the smell, it seems like a safe place to camp for the night. Down in the Peat Bogs: An abandoned fisherman’s hut is hidden amidst the fog that clouds the peat bog from view. There is no furniture but a small table, a chair, and a bedframe, all"
      },
      {
        "roll": 10,
        "title": "rotting from the damp",
        "description": "The sigil of a foul infernal presence decorates one of the walls, marking this as the territory of a swamp devil. Those who take shelter here are under this swamp devil’s protection. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "the crimes and sins committed in the world",
        "description": "The last statue is that of the sculptor, a celestial. The plaque affixed to this statue explains that the sculptor became an advisor to the Lord of all the Hells after he completed this work. Mirror of Re-creation: A mirror framed in dragon onyx shows a vivid re-enactment of the"
      },
      {
        "roll": 2,
        "title": "creation of this plane of hell",
        "description": "Minor devils guard this mirror but are canny enough to know that this is a tourist attraction popular with historians. They charge a hefty price for admission. Clash of the Titans: Vast lakes of blood give way to islands of twisted bone upon an old battlefield scattered with huge broken weapons far too large to be wielded by mortals."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "Scavengers pass through, searching for opportunities to mine demonically forged metal from swords driven into the ground, and massive helmets have become shelters and outposts for the inhabitants. The Gates of Hell: A vast metal and stone gate rises at the end of a narrow bridge over a lake of"
      },
      {
        "roll": 4,
        "title": "fire",
        "description": "Waterfalls of lava pour down through gaps in the gate and brilliant blue sigils are carved into its bulwarks. Piled in front of it are hundreds of keys of every material, size, and design. High Drama: A once-rich theatre with old dusty velvet curtains, the remains of magic"
      },
      {
        "roll": 5,
        "title": "footlights, and rows of stalls",
        "description": "The stories performed here are not yet forgotten as music, the voices of actors, and the thunder of applause still echo around the wings and catwalks, while the props have taken on a life of their own and crawl in the shadows. Deity DIY: In the flooded basement of an abandoned temple, the party discovers a chamber that is half-chapel, half-laboratory. Scattered on the floor are the bodies of a dozen raven-"
      },
      {
        "roll": 6,
        "title": "headed Cultists, some still holding surgical equipment",
        "description": "Sitting cross legged on an altar is the thing they were building out of demon bits, a raven-headed god of their own. Its empty chest awaits the addition of a heart. All That Remains: Half-consumed by silver sands, an ancient city of crystal and glass is"
      },
      {
        "roll": 7,
        "title": "glimpsed in the deep desert",
        "description": "Its inhabitants are long gone, but its streets are not empty. Shadows once cast by its absent populace still flit along the streets by day, and at night their voices and laughter can be heard until, at the moment of daybreak, they are suddenly silenced. Cabinet of Curiosities: A locked-up mansion built into the side of a red stone mountain"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "contains a collection of monstrosities turned to stone or otherwise imprisoned by a Medusa who kept extensive notes on her acquisitions. She herself sits petrified before a mirror that has the touch of the infernal about it and shimmers darkly. The Pool: A dark pool of water sits inside a subterranean cavern, gleaming in the shadows."
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "Looking in, one sees one’s reflection along with the ten thousand other paths that one could have taken in life. It can be too much to take in all at once. The ache of ‘What if?’ becomes a constant source of regret for months. Art Gallery: A fiend has erected a small art gallery featuring works of art painted on the skins"
      },
      {
        "roll": 10,
        "title": "of flayed enemies",
        "description": "The artwork is mostly historical scenes from the wars between the forces of heaven and hell. Illusion magic abounds here. Some of the artworks project animated scenes that seem real and vivid. ENCOUNTEARNS:CHIENLLTSRCUAIPNES 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "extracted souls of the sinful dead into a machine that looks like a water wheel and a steam engine combined. With every grind of the gears, the machine ejects a puff of acrid green smoke and a vision of the dead one’s life. The Central Chamber: The prison has a central chamber that connects all the wings. A lava"
      },
      {
        "roll": 2,
        "title": "pool occupies the centre of the chamber",
        "description": "Above it, chains dangle from the ceiling. Lemures hang from the hooks at the end of these chains. They wriggle, keening for release as they are slowly lowered into the lava. The Worm and the Woman: In a large, covered pig pen, a woman plays a haunting melody"
      },
      {
        "roll": 3,
        "title": "on the flute before a bloated horned worm",
        "description": "The worm burrows into a mountain of carcasses, munching noisily. The woman smiles and kisses the worm. Gallery of Sorrows: A crowd has gathered around the front of a building advertising an exhibition of desire. Inside are dozens of portraits of attractive, beckoning people, something"
      },
      {
        "roll": 4,
        "title": "for everyone, as the charming proprietor says",
        "description": "When nobody is looking at the paintings, they shift into desperate people warning those present not to make deals with the Incubus who runs the gallery, as they did. Crossroads Devil: At a crossroads, several racks with flayed corpses are arranged with the"
      },
      {
        "roll": 5,
        "title": "words ‘Be careful what you wish for’ burned into the road",
        "description": "The Barbed Devil that does its deals here is brutal in its punishments for those who try to weasel out of payment and takes pleasure in trapping its victims with overly literal wish interpretations. The Corrupted Beacon: A guiding light draws the party through a dark place where things"
      },
      {
        "roll": 6,
        "title": "grab at them with long, thin fingers",
        "description": "As they slam the door to the lighthouse, the blazing beacon atop the tower begins to flare with a terrible brightness. As a breathy laugh echoes through the building, the light goes out, and the shadows begin to move. The Taste of Memory: In a long, low chamber of stone a hundred emaciated Halflings are"
      },
      {
        "roll": 7,
        "title": "chained to stone tables",
        "description": "In the air above their heads their worst memories are coalescing in monochrome bubbles. On a gantry suspended from the ceiling three corrupted Dwarves, massively bloated and wearing leather proboscises, greedily inhale the painful memories. Captive Audience: A forest of brass trees emerges from a shallow lake. Pinned to their sharp"
      },
      {
        "roll": 8,
        "title": "branches are burning bodies, trapped on the very edge of death",
        "description": "In the light of these fires their tormentor can be seen: a lithe, dancing Vrock. It plays a mad sawing melody on its brass violin. As the music reaches its violent crescendo, the burning bodies flare ever brighter. My Creation: A metal doorway, distorted after being wrenched open from within, leads to an underground laboratory belonging to a Warlock who was experimenting with combining"
      },
      {
        "roll": 9,
        "title": "the blessings of her patron with various captives",
        "description": "They are suspended, unconscious or dead, in large crystal tanks filled with a viscous purple liquid, cruelly mutated with horns, wings, goat legs, and other Fiendish features. The Abandoned Campsite: This initially innocuous abandoned campsite reveals more of its"
      },
      {
        "roll": 10,
        "title": "prior occupants’ identity once the party comes closer",
        "description": "Bones, hurriedly buried, were crudely hacked off and bear teeth marks. Someone’s been chewing on them. Charred remains sit amongst the ashes in the campfire. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "party by pretending to be a Human man who is on the run from an evil demon and draws them into a spike trap. Regardless of whether the spike trap is triggered, the Incubus’s army of Dretches ambush the party. A Hungry Devil: An Ice Devil hungers for the flesh of brave adventurers. It spots the party"
      },
      {
        "roll": 2,
        "title": "travelling from afar and trails them",
        "description": "At an opportune moment, perhaps while the party is camping for the night, it sneaks up to the weakest member of the party and strikes. Pay Up: A Rakshasa is affronted when the party stumbles into his lands without paying"
      },
      {
        "roll": 3,
        "title": "the entry tax",
        "description": "He sends a group of Imps to annoy the party before facing them himself. He demands a very rare magic item from each member of the party. If they refuse, he will engage the party in mortal combat. The Kindly Ones: In a small outpost of mortal traders and mercenaries, the party learns that"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "an Erinyes has been trying to claim the area as her own and the inhabitants refuse to bow down to her. As punishment, she commands a horde of Lemures to swarm the outpost, and the party is caught in the middle. An Offer You Can't Refuse: A Glabrezu sets up a trap for the party, luring them in with a"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "homely-looking inn along the road, filled with illusions specifically designed to tempt each of them to give up their journey. When they give in or realise the Glabrezu's true nature, it tears the illusion apart in rage and attacks them. Winter's Grasp: From the depths of an icy lake, a pair of Remorhazes and their Young"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "seek out prey by vibrations on the ice until they can track the party and surround them. The Remorhazes burst out of the lake, breaking up the ice with the burning spines on their backs so they can isolate their chosen prey. Foul Descent: The party descends into what seems to be a narrow stretch of marsh. Crossing it should be trivial, but the marsh is hexed. The party find themselves walking in circles as"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "a noxious stench rises, and they begin to encounter, with ever greater frequency, butchered torsos on lengths of rusted chain. Only by reaching the centre of the marsh and defeating the Hezrou can they ever escape. Angel of Death: Falling through the clouds like a sword of fire, a Deva crashes into the earth before the party. Hideously corrupted, with a mouth opening in its stomach and tiny quivering"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "legs growing across its neck and shoulders, the once-angelic creature rants about ‘failing in its mission’ and how it must ‘start over’: but to begin again, everything must first end, the party included. Unchained Melody: A Chain Devil with a particular fondness for tormenting Bards has a"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "new recruit cowering on his knees, the devil sending out its living chains to choke the Bard and threaten to break his fingers. By destroying it, the party would rescue not only the Bard, but the keening Lemures that were once musicians themselves, now chained to the Devil. A Challenge: Once a year, a Horned Devil puts out a challenge: fight him and win a prize, a rare magic item from his hoard. This year, he holds the challenge on the top of a jutting ledge"
      },
      {
        "roll": 10,
        "title": "that overlooks a bed of lava and cracked earth inside the crater of a volcano",
        "description": "He expects an audience and has hired a band of musicians to play rousing but discordant music during the fight. ENCOUNTEARNS:CHIENLLTSRCUAIPNES 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "accompany the party since their next destination is along the way",
        "description": "They want to be helpful to atone for their sins and will take the Help action to assist a member of the party in combat or in undertaking a skill check. Helping the Devil: This part of hell has frozen over. The road, the mountains, and literally"
      },
      {
        "roll": 2,
        "title": "everything is covered with ice",
        "description": "A lone Bearded Devil stands by the side of the road, stuck in the ice. It has been trapped there for seven weeks and is on the verge of death. If the party breaks it free from the ice, it offers to come to the party’s aid on the day they need it the most. The Enemy of My Enemy: A Succubus lounges in the parlour. She is surrounded by several"
      },
      {
        "roll": 3,
        "title": "suitors",
        "description": "She dismisses them and beckons the party to come to her. She tells the party that they have earned her favour since they share a common foe. She will assist them in their journey, but she will leave the party if she is badly injured in battle. All in the Family: A Tiefling sees the party win a fight and approaches them to ask if they"
      },
      {
        "roll": 4,
        "title": "would like to partake in a lucrative business opportunity",
        "description": "They are part of a criminal family of Tieflings on the material plane who are distantly run by a Spined Devil and could potentially provide some low-commitment work for the party. One of the Guys: A Bearded Devil follows the party and shifts back into its natural"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "Doppelganger form as it explains that it turned into a Bearded Devil to stay alive. It offers an alliance to help the party with their journey on this plane in return for travelling back to the material plane with them when they leave. Puzzle Within a Puzzle: A Gynosphinx has been assigned to guard a puzzle box used to trap"
      },
      {
        "roll": 6,
        "title": "a powerful demon",
        "description": "She waits patiently, despite the jeering Quasits that dare not get within her reach, for someone worthy to take the puzzle box and protect it. The party must demonstrate their worth by telling her the true weakness they see in themselves. Gluttonous Gourmands: Trundling across a plain of bone in a silver horseless carriage, a group of epicurean Wereboars are sloppily dining on meats in various states of decomposition. Their"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "food of choice is demon flesh, and its consumption has resulted in various startling mutations in the diners. They ask the party to provide flesh they have never tasted before. Their own will do in a pinch. Hungry Book: A young Acolyte stalks the desert, covered in burns, scars, bruises, all marks left by the thousand exorcisms she has performed. She carries a thick tome of scarlet leather,"
      },
      {
        "roll": 8,
        "title": "into which the demons have been consigned",
        "description": "In reality the book is a transformed Balor, and the Acolyte has been unknowingly feeding it. It only needs to consume one more demon to regain its true form. Scraps of Grace: Powerful Demons in this area have an unusual affectation: they each have an"
      },
      {
        "roll": 9,
        "title": "incongruous orb of bright white light floating beside them",
        "description": "The orbs radiate the sensation that they represent a corruption of something pure. The orbs are the remains of a Deva that was separated into many pieces by a profane spell and are carried now as trophies. The Caged Bird Sings: A giant cage hangs from the top of a rocky ledge. It swings to and fro,"
      },
      {
        "roll": 10,
        "title": "slowly, gently in the breeze",
        "description": "Inside it, a Couatl in the form of a songbird sings a mournful melody. This celestial is chained to the base of the cage. If the Couatl is released, the party gains a companion who will assist them until they reach the end of their journey in this hellscape. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Jungles": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "with hissing boxes, barrels, and baskets",
        "description": "He deals in meat, skins, and venoms should the party have such an interest. Take to the Bush: A lone Human painted in green camouflage journeys downriver, seeking a"
      },
      {
        "roll": 2,
        "title": "young Halfling who has run away from home",
        "description": "A skilled tracker, this is his first foray into the jungle, but he has helpful tips to share with those who journey in any wilderness. Fair Warning: A Lizardfolk is gathering herbs when they are surprised by the party’s arrival."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "They warn them that they have crossed ‘Sssilik’s boundary’ and that Sssilik requires an apology, a sacrifice, and a retreat past the line. This sacrifice may be any item of value, although the more personal it is the more Sssilik will smile on them. Not Those Mushrooms: The party meets a caravan of refugees fleeing from a danger on the"
      },
      {
        "roll": 4,
        "title": "other side of the jungle",
        "description": "They request medical aid as some of their number have been poisoned by jungle plants. The refugees may be a good source of rumours about what lies ahead. Talking Flower: A flower the size of an elephant grows from fallen logs. The stench of it is"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "enough to drive even the most desperate of animals away, but it speaks to the party telepathically and with a gentle tone. It asks them about themselves and their adventures. Laugh, Kookaburra, Laugh: The party arrives at a watering hole at the edge of the bush."
      },
      {
        "roll": 6,
        "title": "Laughter rings out from behind the gum trees to the west",
        "description": "A kookaburra sits on the closest gum tree to the party. It laughs maniacally once again and mocks the party, happily telling them about the insurmountable dangers ahead. One of the Pack: A young Human boy walks alongside a pack of Dire Wolves who snarl at the"
      },
      {
        "roll": 7,
        "title": "party before he hushes them",
        "description": "He became separated from his family a year ago after an attack and was protected from harm by these wolves. He is on a quest to scour the jungle with his new family in search of his parents. Through the Grapevine: A flutter of paper drifts from the canopy above, only to be snatched"
      },
      {
        "roll": 8,
        "title": "out of the air by a woman swinging deftly on a vine",
        "description": "She declares herself a postwoman who specialises in crossing the dangerous jungle. She has adapted her methods to increase her efficiency, and claims to only touch the forest floor when hand delivering a parcel. Tag Along: An overenthusiastic Human treasure hunter is surveying the area, following"
      },
      {
        "roll": 9,
        "title": "rumours of lost ancient ruins containing an untold cache of gems and jewels",
        "description": "Delighted at encountering a friendly face in the depths of the jungle, they are eager to join the party in order to explore more of the woods, as they have not been successful in their search thus far. The Birdman: A Halfling dressed in a bright, feathered costume, replete with a large fake"
      },
      {
        "roll": 10,
        "title": "beak, works on a large scaffold containing a massive, half-built slingshot",
        "description": "He mutters aloud to himself variations of ‘I can feel it. This is the one. It will work this time!’ He politely declines any offer of assistance, though his knowledge of the landscape is extensive. ENCOUNATNECRISE:NJTU NRUGILNES 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "the dense canopy, within easy reach of those flying and climbing creatures",
        "description": "Monkeys and birds frequent this clearing, and enough skill or effort could grant the party access to this wealth of nutritious delicacies, as well. Coconut Grove: The party comes across a grove of coconut trees with very ripe coconuts upon"
      },
      {
        "roll": 2,
        "title": "them",
        "description": "An Intelligence (Investigation) check reveals that part of the ground beneath one of the trees has been recently disturbed. Digging in that area reveals a buried treasure chest, as this grove of trees is used by a pirate band to hide their gains. Just Ripe: The party comes across a grove of evergreen trees bearing inviting-looking fruit."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "To characters used to being in warmer climes, this is obviously a variety of ackee. While most ackee are okay to eat once ripened, an Intelligence (Nature) check reveals that this variety imbues the Poisoned condition for 1d3 days unless cooked. Stonewood: The party finds an interesting tree with a particularly hard bark. It requires Mason’s Tools to harvest, but, once removed, the bark can be fashioned into a version of scale"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "mail armour that does not impart disadvantage on Dexterity (Stealth) checks while offering camouflage while in wooded area, imposing disadvantage on Perception checks to see the wearer. Magic Fungus: The party finds the trail of a missing hunter, which leads to a cave behind a"
      },
      {
        "roll": 5,
        "title": "waterfall",
        "description": "Blue fungus luminesces along the cave walls. The fungus can be harvested and made into a potion that restores a Spell Slot when consumed. Boneyard: As the party pushes on through the jungle, the thick undergrowth gives way to"
      },
      {
        "roll": 6,
        "title": "a large clearing",
        "description": "Here, the bones of ancient gargantuan animals lie scattered, as if this is a graveyard for such beasts. The bones can be fashioned into mundane weapons and tools. Healing Pool: The party discovers a small grotto with a sparkling pool. An Intelligence"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "(Religion) check reveals it to be sacred to a local deity and drinking from the pool acts as a Potion of Healing. The magic only works while in the grotto, and any waters taken from the grotto act as a Potion of Poison. Acid Digestion: The party discovers a dense growth of purple-speckled pitcher plants in a clearing. Each of these throat-shaped plants contains a virulent acid used to digest their diet"
      },
      {
        "roll": 8,
        "title": "of rodents and frogs",
        "description": "A vivid, bubbling purple, this liquid can even melt metal. If the party passes a Dexterity (Sleight of Hand) check, they can decant this acid without suffering too many burns. Mobile Supplies: A keen-eyed forager spots a long trail of honey ants wending along the"
      },
      {
        "roll": 9,
        "title": "jungle canopy",
        "description": "A particularly nutritious and sweet insect for any willing to eat them — a small handful can provide a whole day’s rations, using the same rules as a Goodberry spell. Better Than Rope: A rare cluster of jungle vines is discovered. They are near immune to cutting"
      },
      {
        "roll": 10,
        "title": "and strong enough to hold far more weight than any would imagine",
        "description": "Even better, they can be coiled into small, light bundles when not in use. Unfortunately, no form of preservation, even magical, prevents them from crumbling after a few months. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "home here, making it unclear which animal these were laid for",
        "description": "The Outrider can painstakingly lead the party through the deadly area to safety with a successful Wisdom (Investigation or Survival) check. Ant Infestation: The party is interrupted by painful ant bites: a few at first, then dozens more"
      },
      {
        "roll": 2,
        "title": "within minutes",
        "description": "Swarms of angry ants are infesting their clothes and supplies, biting and stinging indiscriminately. With a Dexterity (Animal Handling) or Wisdom (Nature) check, the Outrider can remove or repel the ants before they do permanent damage. Quickswamp: The party stumbles into a swamp hidden beneath thick, floating vegetation. Anyone failing a Wisdom (Perception) check as they approach sinks waist deep into the mud"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "and require a Strength (Athletics) check to hoist themselves up, taking 1d6 bludgeoning damage on a fail. The Outrider’s Intelligence (Investigation) check reveals safe spots to pass through the swamp. Muddy Gorge: A chasm splits the path the party is on. There are no bridges, and the gorge"
      },
      {
        "roll": 4,
        "title": "is too wide for felled trees",
        "description": "The Outrider must make a Strength (Athletics) check to help the party safely climb down and back up the gorge. Wisdom (Perception) checks note that Giant Crabs make their home in the mud below, though they are not aggressive. Venus Fly-Fishing: A forest of snake-like vines hang down from the canopy, coiling around"
      },
      {
        "roll": 5,
        "title": "prey with sticky thorns and snapping them up into the floral jaws above",
        "description": "The Outrider must make an Intelligence (Nature) check to navigate through these vines safely, or a Strength (Athletics) check with a slashing weapon to cut a path through the constricting tendrils. Great Falls: The sound of crashing water gets louder as the party travels east. When the party emerges from the cover of the trees, they see rivers and cataracts from all directions"
      },
      {
        "roll": 6,
        "title": "plummeting into a deep and narrow cleft in the earth",
        "description": "A rainbow rises from the mist. The Outrider can demonstrate a leap of faith with a Dexterity (Acrobatics) check, or find another path around with a Wisdom (Survival) check. Dense Foliage: Jungle branches grow closer and thicker, making it impossible to pass without"
      },
      {
        "roll": 7,
        "title": "slashing and cutting one’s way through them",
        "description": "The Outrider must make an Intelligence (Nature) check to determine the path of least resistance, or they can skip all checks and find an alternate route, adding another Encounter to the Journey. Headaches: The heat and humidity become oppressive. While scouting, the Outrider must"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "succeed on a Constitution saving throw to acclimate to the weather as they lead the group. During the next Encounter, the party can only see as if they were in dim light, as the sweat blurs their vision and headaches hamper their awareness. Hush Little Fungi: The party must pass through a jungle region heavily infested with Shriekers,"
      },
      {
        "roll": 9,
        "title": "which are well concealed amidst other fungi",
        "description": "With the Outrider’s Intelligence (Nature) check, the party can avoid the fungal blooms that look most likely to hold them. On a fail, hostile Myconids chase the party out of their territory. Slip and Slide: The steep forest floor is completely covered with slick slime moulds, making"
      },
      {
        "roll": 10,
        "title": "staying upright an increasingly difficult challenge",
        "description": "A careful Outrider can pick out a stable path with a Dexterity (Acrobatics) check. Otherwise, one or more of the party are headed for a rapid, mud-covered plummet. ENCOUNATNECRISE:NJTU NRUGILNES 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "are following a highly inaccurate treasure map and it’s obvious that they are in way over their heads — they don’t even know how to get home. With their supplies dwindling and their nerve failing, a group Intelligence (History) check can direct them home through the party’s route. Tree Surgeon: The party comes across a badly burned jungle Treant. If they tend its wounds"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "and help it recover, it tells the party that it is a guardian of a sacred place that a group of scoundrels tends to violate. An Intelligence (Medicine or Nature) check can patch it back up, though it seems that is the least of its worries. Language Barrier: An Elf comes running out of the brush begging for assistance (her family"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "is being menaced by Saber-Toothed Tigers and barely fending them off), but her language is unfamiliar. Unless a party member speaks Deep Speech, a group Wisdom (Insight) check is needed to make enough sense of her words and gestures to aid her family in time. Sinking Cart: The party encounters a Gnome trader whose horses are sinking in quicksand."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "He is trying to coax them out without success, and it is only a matter of time before they get the wagon stuck as well. A group Wisdom (Animal Handling) check lets the party guide the horses and the wagon to safety. Missing Person: A middle-aged woman in the village longhouse seeks the party’s assistance. Her husband went into the woods to gather herbs a week ago and has not been seen since. She"
      },
      {
        "roll": 5,
        "title": "hands a rough sketch of her beloved to the party",
        "description": "A successful group Wisdom (Survival) or Intelligence (Investigation) check tracks her husband. She rewards the party with two spell scrolls upon his safe return. Eco-Warrior: A Druid is replanting a bare patch of land with the seeds of native plants. There"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "is a lot of land to cover and she cannot do it on her own, and implores the party to help her. It takes a successful Intelligence (Nature) check to complete the planting task, upon which she rewards the party with three Potions of Healing. A Spicy Situation: On their latest trek into the jungle a trio of Halfling spice merchants have"
      },
      {
        "roll": 7,
        "title": "run afoul of the local plant life",
        "description": "Accidentally stumbling into a pit of Violet Fungus, they were forced to abandon their consignment of saffron. Snatching their crates out while avoiding the stalk of this plant requires the group to make a Dexterity (Sleight of Hand) check. Harping On: A village elder asks for help defending against nightly raids by a flock of Harpies."
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "While they don’t attack the villagers, the Harpies carry off supplies to their cliffside roost. If confronted, the starving Harpies ask the party to mediate a diplomatic solution with the oblivious villagers, requiring a group Charisma (Persuasion) check to broker a deal. Monkey Business: A small caravan of Dwarven merchants frantically try to fend off a troop of monkeys scampering rampant over their camp, rifling through bags, and stealing anything"
      },
      {
        "roll": 9,
        "title": "small that is not nailed down",
        "description": "They recommend tricking the monkeys with worthless supplies as they flee, requiring a group Dexterity (Deception) check to check to throw convincing distractions their way. Need for Speed: Rapid floods brought on by torrential rain threaten to sweep away a struggling"
      },
      {
        "roll": 10,
        "title": "sloth",
        "description": "If the party helps the creature through a Constitution (Athletics) check, all the sloth can offer in gratitude is a very slow smile; however, a jungle Druid later comes to greatly aid them unexpectedly, telling the party the sloth passes along her regards. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "is getting closer",
        "description": "When they finally catch up, it is revealed that a band of Driders have perfectly adapted to jungle life and are hunting the party from the trees. Flying Threat: While trekking through the jungle, the Sentry hears a shrieking roar from"
      },
      {
        "roll": 2,
        "title": "above the treetops, and soon sees evidence of a Manticore in the area",
        "description": "With feathers caught on branches, hairballs coughed up on the forest floor, and scales glinting in the sunlight as they float from above, there is no denying its presence. Ominous Footprint: The Outrider comes across a set of tracks belonging to a Tyrannosaurus"
      },
      {
        "roll": 3,
        "title": "Rex",
        "description": "Upon further investigation it becomes evident that the party is in the dinosaur’s hunting ground. A Wisdom (Animal Handling) check alerts the party to its irregular footprints, indicating that this dinosaur is already wounded and limping. Dead Swamp: A Shambling Mound floats in a small jungle swamp, awaiting its prey. A"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "successful Group Check allows the party to notice that the usually lush swamp is devoid of life, before this plant attacks. Stampede: The party is travelling through a gorge that was once a river when there is a rumbling"
      },
      {
        "roll": 5,
        "title": "in the distance and the ground trembles",
        "description": "A herd of Triceratops soon stampedes through the gorge, kicking dust clouds in their wake. Usually docile, these dinosaurs are spooked and will fight anyone in their way. Not Vultures: Pteranodons (use the Gargoyle stat block) swirl overhead, circling around the"
      },
      {
        "roll": 6,
        "title": "corpse of a dead Tyrannosaurus Rex",
        "description": "They are hostile, attacking anyone approaching their find, though with the body of such a large beast, they are impossible to avoid. Running Amok: The party encounters a vast pool of gently bubbling mud. The warm muck"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "offers a relaxing respite from the jungle slog, as well as camouflage for a group of stealthy Lizardfolk. Should the party take a mud bath, the Lizardfolk will attack as soon as they are unarmed. Otherwise they will patiently stalk their prey. Hunting the Hunters: Crashing through the jungle comes a young albino Giant Ape."
      },
      {
        "roll": 8,
        "title": "Wounded, it seeks to escape its pursuers, a cadre of Hobgoblin hunters",
        "description": "The Hobgoblins will not countenance anyone interfering with their hunt and will not lose such a valuable pelt. Large Reduction: Finding a perfectly rounded iron pot amidst the natural chaos of the jungle"
      },
      {
        "roll": 9,
        "title": "perplexes the party",
        "description": "If the party peers over the lid, which stands 8 ft. off the ground, they notice it is filled with a steamy broth of many bones. This is a Hill Giant camp, and this fresh batch of soup means that this huge creature is not far away. The Infernal Creeper: The party reaches the outskirts of a cursed region. The trees and foliage"
      },
      {
        "roll": 10,
        "title": "all show signs of unnatural corruption",
        "description": "Rotting corpses of beasts and travellers hang suspended in strangling vines. If they investigate, they will face a Bearded Devil wielding thorny vines, bound here long ago. ENCOUNATNECRISE:NJTU NRUGILNES 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "might have once been here",
        "description": "Half-legible carvings and marking suggest an ancient language. Characters proficient in Sylvan recognise it as an archaic variation invoking a growth curse. Triple Waterfall: From a distance, a Wisdom (Perception) check enables a character to hear"
      },
      {
        "roll": 2,
        "title": "the sounds of falling water",
        "description": "Moving closer, the jungle gives way to the gorgeous sight of a triple waterfall. Each waterfall cascades down the ledge to separate pools of water which then all decant into a large pool beneath it. Animal Gathering: From a distance, the party sees a variety of beasts gathering at the foot of"
      },
      {
        "roll": 3,
        "title": "a rocky outcropping",
        "description": "The apex predator holds court, a great lion that roars commands that the other beasts seem to acknowledge. They bow in deference to him, and some party members may also feel obliged to kneel. The Tunnel: The party encounters the hollowed-out corpse of a Giant Constrictor Snake that"
      },
      {
        "roll": 4,
        "title": "now forms a tunnel through a particularly rough patch of jungle",
        "description": "It appears to have been magically preserved for this purpose, although with no connecting paths it’s obviously been abandoned. Rare root vegetables may be cultivated from the interior. Fragrant Garden: The party stumbles upon a clearing where strange, colourful flowers bloom."
      },
      {
        "roll": 5,
        "title": "They fill the air with a sweet perfume that triggers joyful memories",
        "description": "Soft beds of leaves and grass make for comfortable seating, and the party can sit here in comfort and reminisce about happier days. Walking on Water: A lake covered with lily pads and pink lotuses is home to sacred Water"
      },
      {
        "roll": 6,
        "title": "Elementals",
        "description": "Pilgrims come to worship here, placing offerings at the bottom of the lake before walking across the water to the other side. The hands of the Elementals reach out from below to support their feet, like stepping stones. Size Isn’t Everything: A cloud of ash and smoke spews from the summit of a nearby volcano,"
      },
      {
        "roll": 7,
        "title": "while lava courses down its slopes, sending villagers fleeing their homes",
        "description": "The volcano is three feet tall, the panicking villagers no bigger than dust motes. Some party members may be fascinated by the variety of life, while others see yet more suffering in the world. Eldritch Bones: Preserved in a cliff of crumbling chalk, the party discovers the mile-high"
      },
      {
        "roll": 8,
        "title": "remains of some great primaeval beast",
        "description": "Its weathered black bones bear no resemblance to any creature living or dead. In what is presumably its skull, a single red eye, the size of an elephant, rolls with abhorrent life. Night Chorus: As the party makes camp on the edge of a valley, a tumult of animal sounds and"
      },
      {
        "roll": 9,
        "title": "calls rise as twilight deepens, cheering those with primal connections",
        "description": "Though loud, it is also strangely beautiful, until a distant, but staggering, predator’s roar dampens the rest. The Tree Eternal: At the jungle’s centre the party finds a tree like no other. Its vine-draped bark"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "is pale and its leaves are a lustrous silver, changing to purple as the sun sets. No flame can catch upon the tree, nor can any blade cut it. Some great beast roosts high up in its branches, beyond the party’s vision and predators avoid it. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "in frost",
        "description": "The chittering of an Ice Devil can be heard amongst the shrieks of slain animals. Banished here for its treachery, its strength is sapped by the heat, though its carapace can be fashioned into a Ring of Warmth. Swampy Graves: As the party traverses a waist-deep swamp, they notice rotting corpses"
      },
      {
        "roll": 2,
        "title": "beneath the water, many showing no signs of violent death",
        "description": "These are the unfortunate victims of a Will-o’-Wisp that haunts the swamp, and the party catches glimpses of it reflecting on the stagnant water. A bejewelled noble is among the victims, their jewellery valuable to any buyer. Pain in the Head: An illness is ravaging villagers, and the village doctor says she needs the"
      },
      {
        "roll": 3,
        "title": "blood of a Hydra to brew a cure",
        "description": "Fortunately, she knows the lake where one lives, and she stresses that she only needs one head in order to brew the potion. If the village is cured, they offer beds for a Long Rest to the party. Marked Boundary: The party comes across very realistic statues in the mud, marking the territory of a Medusa and they are a warning to travellers to steer clear. The Medusa is horrified"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "at what she’s become, and wants no one to see her, but any who do must be turned to stone, lest they spread word of her hideousness to others. She wears the finest of silk garments to hide her form. Bog Monsters: The rainforest gives way to a mangrove bog. Steam wafts from the water,"
      },
      {
        "roll": 5,
        "title": "draping the area in a humid fog",
        "description": "Earth Elementals sit in the peaty soil waiting for unsuspecting victims. The peat they protect can be used as efficient fuel, or sold to local villages. Kill the Hag: A Green Hag has been kidnapping villagers to boil and eat, to preserve her"
      },
      {
        "roll": 6,
        "title": "immortality",
        "description": "She lives in a wooden hut surrounded by wooden barricades and decked with talismans made from the bones of her victims. Though filled with dark magic, they function as a Ring of Spell Storing, storing one spell at a time. The Pudding is Off: Descending the shallow slopes of a crater, the party encounters the"
      },
      {
        "roll": 7,
        "title": "shimmering, magic-infused bones of an Ancient Brass Dragon",
        "description": "Within its snout is the roiling, gelatinous mass of a Black Pudding, slowly but steadily devouring the creature that tried to make a snack of it. Abandoned God: At the base of a towering hill is a cave mouth, surrounded by stone plinths,"
      },
      {
        "roll": 8,
        "title": "many fallen, all stained",
        "description": "The sacrifices that were once laid upon them are no more and the Grick which emerges from its treasure-filled cave, once revered, is now emaciated, maddened by neglect. Valuable offerings litter the cavern floor. Falling Stone: The party finds a number of unusual figurines amidst piles of broken rock."
      },
      {
        "roll": 9,
        "title": "The intact statues depict big spiders, predatory birds, monkeys, and the like",
        "description": "A tree dwelling Basilisk hunts in this area. Basilisk eyes are highly valuable to alchemists and wizards. Distant Thunder: The undergrowth here has been trampled flat, and many trees bear deep"
      },
      {
        "roll": 10,
        "title": "gouges",
        "description": "The party can feel the ground occasionally shake. The source is a territorial bull Triceratops. His meat could feed an entire village, to say nothing of his valuable horns, but hunting him may be considered taboo. ENCOUNATNECRISE:NJTU NRUGILNES 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "jungle swamp that offers a reasonably dry place to rest",
        "description": "Even better, there are some dead branches surrounding a shady tree atop the mound, and the tree’s large leaves will help shelter them from the frequent rain. The Upside-Down Tree: The party finds a squat baobab, short enough for the party to climb"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "up and set up camp between the branches, but high enough to dissuade most predators. The branches are too spread apart to provide shade, but it is easy enough to rig tents and blankets between them. Hunter’s Hut: The party spots a hunter’s hut high up in a tree. Not only does it provide"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "protection from both animals and elements, but it also offers a sweeping view of the entire area. The hut is well-stocked. It has obviously been used recently, so there’s a chance that the hunter(s) using it will return during the night. The Outcropping: The party comes across a shelf of rock jutting into the sky, pushing aside"
      },
      {
        "roll": 4,
        "title": "the trees",
        "description": "While the party wouldn’t be protected from the sun or the elements, it does provide dry ground and the opportunity to notice any predators before they get too close. The slope is gentle enough to sleep comfortably. Treehouse: A family of explorers built a home for themselves in the canopy of the rainforest."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "Lianas drape down from the branches, allowing one to swing from the treehouse to the surrounding trees. An elevator operated by a pulley system allows safe travel between the structure and the jungle floor. Watering Hole: The party follows a herd of elephants to a watering hole surrounded by lush"
      },
      {
        "roll": 6,
        "title": "tropical vegetation",
        "description": "Animals of all kinds flock to this place at the end of the rainy season. There is an unspoken accord amongst all the animals here. Predators and prey rub shoulders, as if this place is neutral ground. Spa Break: The party discovers a clearing where geysers drain into hot, mineral-rich pools."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "A flutter in the air reveals itself as a Steam Mephit, the host of this jungle resort. It invites the party to enjoy the facilities. The fee is exorbitant but the Mephit is an impeccable host, offering relaxation and a fine selection of steamed fruits. House of Temptations: High in the jungle canopy, the party discovers woven platforms upon which dwells a hermit Acolyte. Devoting herself to a life without material possessions, she"
      },
      {
        "roll": 8,
        "title": "offers to share her food and lodgings with the party",
        "description": "On nearby woven platforms are magical weapons, potions and other treasures, placed there to test the Acolyte’s commitment. They are protected by Invisible Stalkers. Shimmering Cave: Behind a glorious waterfall lies a hidden grotto which glistens with"
      },
      {
        "roll": 9,
        "title": "reflected light",
        "description": "The falls are so loud that all other sounds are obscured, making conversation difficult and perhaps allowing other creatures to approach unnoticed if the party is not careful about keeping watch. Fallen Giant: The party finds shelter within an ancient downed tree, so large they can easily"
      },
      {
        "roll": 10,
        "title": "camp within its trunk",
        "description": "There are signs and pawprints indicating some other creatures, great predatory cats most likely, have also recently made use of the tree. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "(Arcana) check suggests that the meteor was laced with magic, as the plants growing here aren’t like those in the surrounding areas. A character proficient with Alchemist's Supplies or a Herbalism Kit realises that some of these plants are magical. The Great Gate: A large rounded arch rises ahead of the characters, a disused water gate,"
      },
      {
        "roll": 2,
        "title": "from when a river flowed beneath it",
        "description": "It is a monument to a long-dead civilisation and, while crumbling and littered with plants growing within its cracks, it is still very impressive. Revealed Ruins: A wildfire recently burned through the jungle, revealing the ruins of an"
      },
      {
        "roll": 3,
        "title": "ancient city",
        "description": "Given the remoteness, it’s unlikely that many treasure hunters have delved into hidden chambers, but it is only a matter of time until word spreads. Reliefs indicate that a feline humanoid species resided in the city. The Serpent Face: The head of a giant cobra is carved into the side of a cliff, water pouring"
      },
      {
        "roll": 4,
        "title": "from its mouth and into a pool below",
        "description": "Nearby caves contain a snake folk civilization, with the humanoids being able to transform into medium-sized snakes. Many of the cave rooms are difficult to get inside without magic or tools. Ghost of the Past: In a small clearing, the party finds the graves of soldiers who gave their"
      },
      {
        "roll": 5,
        "title": "lives to a lord who dreamed of conquest",
        "description": "A soldier’s Ghost lingers here, telling the tale of this ill-fated mission to those who stay and listen. A Town No More: The party comes across the remnants of a town overrun with vines and"
      },
      {
        "roll": 6,
        "title": "ferns",
        "description": "Behind the crumbling walls and broken pillars, the party finds children’s toys and broken crockery. This was once a place bustling with life and commerce. The people that lived here were both reptilian and mammalian. Mobile Home: Slowly drifting through the upper levels of the canopy, trailing vines and canted"
      },
      {
        "roll": 7,
        "title": "sharply to one side, is the ancient tower of a long-departed wizard",
        "description": "Constructed from multi- coloured brick and with a bewildering array of turrets, the party can access the structure by climbing the vines. Within is a colony of intelligent Axe Beaks. Black Stone Maze: The jungle ends abruptly at a looming wall of black stone, as if all foliage"
      },
      {
        "roll": 8,
        "title": "is loath to encroach upon it",
        "description": "This is one flank of a vast and ancient maze of unknown origin. There are no inscriptions or markings to attest to its makers. Even under the jungle sun the oily stone is cold to the touch. The Nursery: A decaying grove beside a river is filled with what appear to be old, strangely"
      },
      {
        "roll": 9,
        "title": "shaped toys",
        "description": "A single ancient Treant is the last of a once thriving community. The decay has damaged her and she has long forgotten how to grow more saplings. On the Wind: On a blustery day, the party hears a beautiful and sorrowful melody. If they"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "search out its source, they discover an abandoned elven village high within the trees. Many of its buildings are heavily damaged, and clearly torn open. A series of cunningly wrought instruments plays the haunting tune whenever wind blows through the wreckage. ENCOUNATNECRISE:NJTU NRUGILNES 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "Crocodiles lie in wait, snatching animals as they drink",
        "description": "The local population knows not to venture too close, but their apprehension is to do as much with the restless dead as the crocodiles. Every night, the river’s victims emerge from the water as Zombies and Skeletons. Orchestrating Oozes: The intense aroma of coffee leads the party to a Halfling grotto carved"
      },
      {
        "roll": 2,
        "title": "into a giant tree, a dainty sign showing today’s special meals",
        "description": "Inside, however, nothing is left but the bones of the patrons and servers, piled against the doors in their efforts to escape. Gelatinous residue indicates the combined attack of a Gelatinous Cube and an Ochre Jelly. Pool of Crimson: The party arrives in a grotto surrounded by twisted, terrible trees, and"
      },
      {
        "roll": 3,
        "title": "carvings of demons",
        "description": "A Wisdom (Medicine) check reveals that the pool is filled with blood. There is nothing feeding the pool, so where the blood is coming from is a mystery. Skeletal Warning: Just ahead, the trees are adorned with skeletons strapped to their trunks,"
      },
      {
        "roll": 4,
        "title": "forming a formidable boundary",
        "description": "An Intelligence (Nature) check reveals that some of these skeletons are Ogres, and all of the victims were killed by a large puncture wound to the skull. A Blighted Place: A blight has tainted this part of the rainforest. The fruits are poisonous, the"
      },
      {
        "roll": 5,
        "title": "flowers drip acid and the trees have thorns that rip flesh from bones",
        "description": "A foul air permeates this place, giving a level of Exhaustion to those who fail a Constitution saving throw. The Cursed Altar: Deep in the heart of the jungle, a bloodthirsty cult has erected an altar"
      },
      {
        "roll": 6,
        "title": "made of animal bones and hide",
        "description": "A successful Intelligence (Arcana) check reveals that all who spend the night here become cursed. Twisted Foliage: As the party approaches a wizard’s tower deep in the jungle, the foliage"
      },
      {
        "roll": 7,
        "title": "dramatically changes",
        "description": "While the surrounding jungle is full and lush, the trees and shrubs about the tower are pale and sickly. No birds can be heard in the sky, nor are any animals or insects grazing on the warped grass. Weeping Faces: The party steps onto a path lined with palm trees. Each tree is bent away from"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "the sun and their trunks have twisting patterns reminiscent of faces with pained expressions. These are the work of Dryads hoping to deter travellers from wandering into Troll territory. Thunderstruck Down: A squall lingers here perpetually, lightning occasionally lashing down"
      },
      {
        "roll": 9,
        "title": "into a hollow surrounded by vast trees",
        "description": "At its centre lies the corpse of a Storm Giant, impaled on a massive iron spike. Bloody runes that glitter with electricity fill the hollow in vast circles spiralling away from the body. The Alabaster Ape: A massive statue of a snarling gorilla carved from white stone stands amidst the wreckage of a fallen temple. The broken stones and surrounding trees are filled"
      },
      {
        "roll": 10,
        "title": "with monkeys and baboons who silently stare at the party",
        "description": "The longer they linger, the more monkeys arrive, all of them silently staring, unblinking, and then they all begin screaming as 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "from the water, studying them",
        "description": "This is followed by another head, and then another. The party has inadvertently caught the attention of a Hydra, and it has no intention of letting them pass. False Idol: Just inside a jungle cave, the warnings lost to time, an old statue sits with a large"
      },
      {
        "roll": 2,
        "title": "ruby set in the centre of its head",
        "description": "This ruby contains a Glabrezu, trapped long ago by demon hunters that were unable to destroy it. Disturbing the ruby sets it free to wreak its vengeance. Encroachment: The party inadvertently walks into the territory of a Lizardfolk community"
      },
      {
        "roll": 3,
        "title": "and they are in no mood for negotiation",
        "description": "Indeed, they believe that the characters would make for a tasty supper. They attempt to surround the party first, pelting them with javelins, before rushing in with clubs and spiked shields. Lost Guardian: A Stone Golem stands covered in vines. It was once the guardian of a tomb"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "that has since been destroyed, and it now protects the area where the tomb used to stand. Unfortunately, the party enters that area and the stone golem attacks. It only stops if the characters leave the area that it is ‘protecting.’ I Dare You: A Hezrou was accidentally summoned into being by teenagers on a dare to prove"
      },
      {
        "roll": 5,
        "title": "their courage",
        "description": "It rampages through the village, killing everyone it sees. One of the teenagers is overcome with guilt and pleads with the party to save his village. Protectors of the Wilds: Hidden warnings in Druidic warn of the oncoming assault of Treants"
      },
      {
        "roll": 6,
        "title": "and Shambling Mounds",
        "description": "These plants abhor the encroaching hand of civilization, and attack any non-plant creature who wanders through their territory. If any party member can read Druidic, the Sentry automatically succeeds on their check to spot the threat. Heavy are the Heads: On a plateau above the jungle canopy is a ziggurat of gleaming platinum."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "Before it, hundreds of supplicants kneel in servitude to an Ettin dressed in jewels and fine fabrics. When this giant spots the party, it and its personal Guards attack, seeking to add to their collection of worshippers. Heart of the Jungle: On the shores of a lazy river a dozen scarlet Skeletons grub through the"
      },
      {
        "roll": 8,
        "title": "silt and muck, overseen by a girl in a spotless red dress",
        "description": "She is secretly a Horned Devil, and her undead minions are searching for the lost gemstone heart containing half her power. She will attempt to conscript any travellers into her search. Raging Failure: A furious Guardian Naga has awoken from a brief slumber to find that their"
      },
      {
        "roll": 9,
        "title": "charges were slaughtered by invaders while they slept",
        "description": "They are feeling vengeful and have decided to blame the party."
      },
      {
        "roll": 10,
        "title": "Venomous Thoughts",
        "description": "A Green Dragon has made her lair deep in the jungle in order to research deadly venoms. The party look like ideal test subjects. ENCOUNATNECRISE:NJTU NRUGILNES 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "actually a polymorphed Silver Dragon and her family was slaughtered by dragon hunters. If tended to, she begs the party help her get revenge, offering her treasure trove in payment. But can she be trusted? Reality or Illusion?: The party meets an old man who claims that this jungle shouldn’t be here."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "Its presence, and their memories of it, are the result of a powerful spell that wiped away an entire civilisation. The jungle threatens to cover the entire world unless the ‘source’ is destroyed. The Artefact Hunter: The party meets a young Half-Orc with a treasure map. They claim that"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "a hidden tomb holds an Orb of Dragonkind, but they are unable to make sense of much of the map. They are grateful for any assistance and offer shares of the treasure should the characters join them. Polite Hunter: The party stumbles into a Tiger leaping out of the jungle brush to catch a Boar,"
      },
      {
        "roll": 4,
        "title": "only for it to transform into a Weretiger",
        "description": "The Weretiger invites them back to its cottage to share its dinner and offers them information regarding the jungle. It means no harm to the party, though its siblings may not be as peaceful. Local Advice: Silent Dryads peer from the foliage. They judge the party without expression"
      },
      {
        "roll": 5,
        "title": "and then beckon for them to follow",
        "description": "They take the party to the base of a giant raintree where their leader sits upon a throne of balsa wood and clay, holding a stone chalice in one hand and a spear in the other. They offer counsel and advice on anything within the region. The Healer: The party meets a Druid who is resting under a banyan tree. The Druid suffers from"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "a bad limp and requires protection while she forages through the jungle for rare ingredients. She blesses the party with resistance to one damage type for a week. The Last King: In the long-abandoned ruins of a fort, the party discovers the last survivor of"
      },
      {
        "roll": 7,
        "title": "a doomed expedition",
        "description": "The filthy, bedraggled Elf has crowned themselves Eternal King of the Jungle and rules over their ‘court’ of their mummified fellow travellers. The King knows all the secrets of the local area but expects deference and tribute in return for their kingly knowledge. Polite Request: A gentle cough draws the attention of the party. In a tangled grove lies the"
      },
      {
        "roll": 8,
        "title": "disassembled remains of a Shield Guardian, its head the only functional part",
        "description": "It promises to lead the party to a magical forge where it was made if they rescue it. Its memory is faulty however, and it will insist on telling excruciatingly boring stories. Subtle Guardian: An old man dressed in brightly coloured robes greets the party and asks"
      },
      {
        "roll": 9,
        "title": "for news",
        "description": "The information he gives in return directs the party to a great evil yet to take place. If they return, he will send them to other troubled places in the future, as he is a Couatl and always knows more than he lets on. Lord of the Jungle: The party are saved from dangerous beasts by the Jaguar King, a Barbarian"
      },
      {
        "roll": 10,
        "title": "with pointed teeth",
        "description": "He offers some guidance, but is adamant that they are trespassers in his lands. If the party leave a good impression, then he reveals to them the safest way to leave the jungle. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Lands of the Fae": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "The child holds a faded pink balloon and shows an expressionless face",
        "description": "When spoken to, the child speaks in rhyme and cryptic sentences. The child points a finger eastward, as if directing the party to travel in that direction. A Feline Friend: A one-horned calico cat licks its paws by the window of a quaint little cottage"
      },
      {
        "roll": 2,
        "title": "in the woods",
        "description": "She pays the party no heed but will rub her cheeks against the legs of anyone who offers her a tasty morsel of food. If the party showers her with gentle pats and chin scratches, she will accompany the party in their travels. A Very Important Date: A rabbit the size of a Halfling wearing a fine waistcoat hops backwards"
      },
      {
        "roll": 3,
        "title": "along the road",
        "description": "It speaks to the party as though it has already met them, and then a moment later introduces itself. It complained out loud near a Fae’s wishing well that it was running late, and now seems to be cursed. Building Bridges: A Troll with a tool belt is in the middle of building a bridge, using its"
      },
      {
        "roll": 4,
        "title": "immense strength to haul the stones into place",
        "description": "It explains that the toll road will soon be open, but for now it is happy to let the party cross the scaffolding instead of paying the toll. Pick Up Sticks: An old woman carrying a bundle of sticks stumbles in the road. If the party"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "helps, she asks them to help her carry the wood to her house, which is across a wide chasm with no obvious bridge. If they refuse, she casts a spell, afflicting them as though with Bestow Curse for their next encounter, but if they help, she casts Bless for their next encounter. A Real Boy: A small figure walks along the road with a jaunty stride, whistling with an oddly"
      },
      {
        "roll": 6,
        "title": "reedy timbre",
        "description": "At first, he appears to be a Human child, but upon closer inspection, he is a wooden puppet the size of an eight-year-old Human, sent on a quest by a Fae patron to become a real Human child. Les Mots Juste: Languidly reclining in a pond of words, the party encounters a Giant Frog."
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "Wearing a powdered wig and pale makeup, the Frog proclaims himself Court Poet to the Tadpole Prince. He is searching for fine, rare words to add to his Lexical Pond. If the party whispers a choice word or two into his ear, he disgorges the fine additions into the water. Spriteful Acts: Barrels of honey bourbon roll to a rest in a ditch as a group of bickering Sprites"
      },
      {
        "roll": 8,
        "title": "blame each other for losing control of the casks",
        "description": "One Sprite lies on the ground, whimpering. The Sprites implore the party to attest to witnessing the accident. This is in fact an elaborate insurance scam, and all involved will find themselves caught up in endless litigation. Toy Goat: A Satyr with a ludicrously full pack, larger than he is, and a fully loaded pony, skips"
      },
      {
        "roll": 9,
        "title": "along singing merrily",
        "description": "He’s headed to a faerie market carrying his wares which mainly consist of clever and slightly magical toys. He isn’t worried about bandits because a few of his toys are far more dangerous than they look. Sinister Company: A series of darkly appointed travelling wagons with pitch black horses"
      },
      {
        "roll": 10,
        "title": "carries a group of grim Tieflings along a desolate road",
        "description": "They regard the party with unfriendly eyes, but are actually delightful folk and kind; they’re an acting troupe who’ve faced abuse due to their heritage and so present themselves as dangerous to strangers to ward off trouble. ENCOUNTERS: LANDCSI EONFTTHREU FINAES 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "and twigs",
        "description": "A giant squirrel keeps its cache of fruit and nuts inside a tree hollow hidden behind a curtain of ivy. There is enough to last two winters. The Herbalist: A crafty Gnome herbalist has set up shop at the base of a hill. Her warehouse is"
      },
      {
        "roll": 2,
        "title": "built inside the hill and is well supplied",
        "description": "She knows of the party’s reputation, and will happily brew a potion for each member whenever they drop by to visit her, if they can stomach the noxious fumes. Pixie's Boon: The only way through a nasty-looking patch of thorns is an underground"
      },
      {
        "roll": 3,
        "title": "passageway that barely fits the party",
        "description": "They have to crawl on their hands and knees, but inside, the bare earth walls glow with the amount of pixie dust that has seeped into the ground from above. When they emerge, the party can all Fly for ten minutes. One Man's Trash: A vast pile of shiny objects dropped by the giant magpies passing overhead"
      },
      {
        "roll": 4,
        "title": "carpets this shady hollow",
        "description": "Searching through it yields gems, strange coins, and even more esoteric items like a mirror with looping handwriting scratched onto it, or a crown that melts into the air. The magpies react badly to anyone trying to steal, but will happily trade. The Huntsman's Cache: The party finds a statue of a hunter, made of stone and covered with"
      },
      {
        "roll": 5,
        "title": "ivy",
        "description": "Her stone quiver is hollow and holds a collection of unusual types of ammunition. The party can empty the quiver, and if they come back this way in the next month, the quiver has refilled itself under the light of the full moon. Golden Eggs: A goose wanders into the road, looks sharply at the party and then runs off into"
      },
      {
        "roll": 6,
        "title": "the undergrowth",
        "description": "If they pursue it, they find a golden egg that makes a ringing sound when it is shaken. This egg gives the person who breaks it one use of the Magnificent Mansion spell. It cannot be broken by accident, proving surprisingly resilient. Fetch!: Out of a twinkling rift trots an albino Blink Dog. Though she does not speak, an enchanted wooden sign around her neck informs the characters of the wares that she sells."
      },
      {
        "roll": 7,
        "title": "She dips back and forth through the rift to retrieve them",
        "description": "These otherwise mundane items are all strange: oddly coloured or constructed, bizarrely scented or textured, as if fetched from far distant planes. Natural Cycle: In a shallow gully between hills the party finds a bush of black and amber"
      },
      {
        "roll": 8,
        "title": "leaves. The bush brings forth a unique fruit",
        "description": "little silver bicycles, fit to be ridden by Small and Medium creatures. The jingling, tinkling conveyances can be used for up to two days. After that point, the fruit becomes soft and tacky, sticking to the skin of unfortunate riders. Boozy Shrooms: A shady copse of odd-looking trees, which all seem to grow at unusual"
      },
      {
        "roll": 9,
        "title": "angles, hides several large toadstool rings",
        "description": "The mushrooms are edible, but they hold a faint taste of alcohol. Eating too many at once will result in the imbiber rapidly becoming very drunk, though the ‘shrooms are quite filling. Bottled Resources: Searching a long-abandoned Fae workshop yields a number of glass jars and a variety of other strangely shaped containers holding various preserves. While the"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "majority hold tasty jellies, fruits, and honey, a few hold far more esoteric substances that can be released by opening them, such as shadows (as the spell Darkness), wind (Gust of Wind), and time (Haste). 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "court recently insulted a witch",
        "description": "The witch cursed them to sleep for an eternity inside a castle overrun with thorny brambles. All entrances and windows are blocked. The brambles must be hacked away with a successful Strength (Athletics) check by the Outrider. Everlasting Snowmen: Winter has arrived in the fairy dell. However, the snowmen have come"
      },
      {
        "roll": 2,
        "title": "to life and they stage a protest at the entryways of the valley",
        "description": "The snow is enchanted, twisted by magic, and new snowmen grow out of the drifts every night. Unless a magical flame can melt them, the Outrider must temporarily dispel their forms with an Intelligence (Arcana) check. Amazing: A maze of thorns has sprung up in this area, preventing passage except by those"
      },
      {
        "roll": 3,
        "title": "who can navigate it",
        "description": "The walls of the maze grow impossibly high, and their roots dig deep into the ground, so climbing over or digging under is out of the question. The Outrider must make a successful Intelligence (Survival) check to reach the end of the maze. Roses are Red: A lush garden beckons, filled with rose bushes that have the most perfect red"
      },
      {
        "roll": 4,
        "title": "roses the party has ever seen",
        "description": "Only as they investigate further do they feel the tendrils of plants tugging at their feet, and the Outrider needs to make a Strength (Athletics) check to prevent the party becoming food for the roses. Party On: A group of Satyrs are playing music, drinking and dancing in these woods, and they"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "are not keen to let the party pass through without at least spending some time in the revelry. If the Outrider makes a successful Charisma (Performance) check with a piece of music or story, the Satyrs can be distracted long enough that the party can pass by. The Bouncing Goats: Ahead of the party is a narrow mountain path with a drop to one side"
      },
      {
        "roll": 6,
        "title": "and a solid rockface on the other",
        "description": "The path is made even more dangerous by the goats merrily leaping from rock to rock, heedless of who they might bump into, unless the Outrider makes a successful Wisdom (Animal Handling) check to herd them. Making Do: On the bank of a rippling brook, a coterie of Dryads build a stage for their seasonal fair. Naturally eschewing the use of wood in its construction, they are instead utilising"
      },
      {
        "roll": 7,
        "title": "various meats from animals and unwary travellers",
        "description": "While the Dryads look for more building materials, the Outrider can summon their best shrub impression and endeavour to sneak past with a successful Dexterity (Stealth) check. Mood Marsh: The Outrider ventures out across a wide expanse of marshland, every step sinking into the soft earth and releasing a puff of gas that affects those who inhale it. The bog is"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "striated with bands of vivid colour, each indicating what emotion the released gas engenders. The Outrider must stuff their face with rags, making a Constitution (Medicine) check to guard against these effects. Crystal Wood: The party’s path runs through a dense forest of gleaming trees and luminous plants not grown, but carved entirely out of crystal. The translucent razor-edged plants are"
      },
      {
        "roll": 9,
        "title": "very difficult to avoid",
        "description": "The Outrider must make a Wisdom (Perception) check to navigate this bizarre forest, and each character must also make a Dexterity (Acrobatics) check or take 2d6 slashing damage from their passage. Fluttery Field: A vast flutter of butterflies in a riot of scintillating colours sweeps through"
      },
      {
        "roll": 10,
        "title": "the fields on a migration",
        "description": "A level head and a successful Intelligence (Nature) check by the Outrider will figure out a way to navigate past without harming them. Failure will coat the party in butterfly corpses, making them an irresistible lure for the Giant Toads that live nearby. ENCOUNTERS: LANDCSI EONFTTHREU FINAES 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "party notice shards of glass sticking out of the rabbit’s side and left foot, and it will take a group Wisdom (Medicine) check to safely remove them. Once healed, the grateful animal becomes a trusty mount. Missing Equipment: Farm tools and equipment are reported missing. The villagers wonder if"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "it is the work of mischievous ‘Brownies’, and they ask the party to stop the troublesome Fae. A successful Intelligence (Arcana) check leads the party to a rabbit warren where a ritual can be performed to appease the Brownies. Speak No Evil: Three bickering stone heads arrayed along a wall beside a pool shout for the party's attention. They ask for a story that is sufficiently entertaining to alleviate their boredom."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "The party make individual Intelligence (History) or Charisma (Performance) checks and whoever gets the highest result may retrieve the assorted coins from the pool, as well as a Scroll of Stoneskin. A Little Familiar: A Homunculus intercepts the party, hopping from one foot to the other as"
      },
      {
        "roll": 4,
        "title": "it asks for their help",
        "description": "Its master and creator, a mighty Wizard, has trapped himself in a crystal prison. With a successful Intelligence (Arcana) check, the party can rescue the Wizard and learn that he is only a student whose spell went wrong. Nature Warriors: A group of river Merfolk are in ill health, their iridescent scales falling"
      },
      {
        "roll": 5,
        "title": "away and their skin dull",
        "description": "They explain that something is contaminating their river, a pipe to a magical forge that has burst and is emptying oily alchemical ingredients into the water, but can be fixed with Tinker's Tools or a successful group Dexterity (Sleight of Hand) check. Tainted Purity: A Unicorn whinnies in pain and charges around a glade uncontrollably, a"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "seeping corruption bubbling up from a spring on the other side of the glade staining its fur. The spring can be cleansed with a group Wisdom (Religion) check, and in return the Unicorn offers to cast Healing Touch on three members of the party. Filthy Mouth: An elderly Dwarf flags down the party. The Dwarf ’s foul-mouthed partner has"
      },
      {
        "roll": 7,
        "title": "been punished by mischievous Sprites, who have stolen its mouth",
        "description": "The party can track the hollering of the stolen mouth with a Wisdom (Perception) check. It has been stuck to the belly of an Elk. It can be retrieved, but will need a good wash. Protection Racket: A pair of Trolls, dressed in dark suits and shades, are attempting to"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "convince the Halfling owner of a pottery store of the benefits of their ‘insurance’. The party can diffuse the situation with a successful Charisma (Deception) check by pretending to be law enforcement, or better yet, actual insurance salespeople. Keep-Away: A mischievous pair of Blink Dogs lead a group of shouting Halflings on a merry"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "chase as they toss a satchel back and forth, disappearing just before they’re grabbed. It will take a group Wisdom (Animal Handling) check to coax the satchel from the playful hounds. The grateful Halflings share lunch and a local map if their satchel is retrieved. Tea Time: A dishevelled-looking Ranger sits beside a large stump in a woven-leaf skirt, along"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "with a hedgehog, a rabbit, and a Giant Badger, all being served tea by a green-haired girl. They’ve all clearly been having tea for days on end. Rescuing them will take a group Charisma (Persuasion) check to convince the young Dryad to let them go. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "valley but the abundance has attracted many dangerous monsters who do not want to share. Ettins and Sprites are at war for the valley’s produce. They do not take kindly to any interlopers. Arcane Robbers: A Mage and their Grimlock companions are transporting an ancient artefact"
      },
      {
        "roll": 2,
        "title": "that they’ve stolen from the Temple of Desire",
        "description": "They ride on horseback along the highway. Golden sigils glow upon their foreheads, as if they have been marked by protective wards. They will strike down anyone who stands in their path. Raging Elements: A Fire Elemental and an Earth Elemental are having a mighty battle"
      },
      {
        "roll": 3,
        "title": "across a valley, tearing up the ground and scorching the grass",
        "description": "From their argument, it sounds as though they disagree on the correct placement for a house they were tasked with building from fired earthen bricks. The party risks getting caught in the middle if this continues. Unfortunate: A beautiful singing draws the party towards a sea cave where they spot a Sea"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Hag surrounded by stolen things, combing her long lank hair with a silver comb and mouthing along to a music box containing the stolen voice of a fine singer. Her lair contains riches and important items that could be returned, but is risky to enter. The Mightiest Dragon: A Bronze Dragon Wyrmling snaps at his captors, a group of Gnolls"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "who have managed to fit the Wyrmling with a collar and wing shackles that stop him from using his breath or flying away. Despite his bravery, they are dragging him towards a portal through which they can make an escape to another plane and sell him. Brothers in Arms: A Dryad has enchanted a pair of brother Centaurs to protect a tree beside"
      },
      {
        "roll": 6,
        "title": "the road from anyone who even walks near it",
        "description": "They can be seen from a distance driving off a group of Kobolds, a strange green shimmer to their eyes from the Dryad's control. She watches from the branches of her tree, amused by their obedience. Raptor Bouquet: In the midst of a tangled forest, the party encounters a grove filled with gigantic, brightly coloured tulips. In reality, these flowers are the tightly curled bodies of"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "extravagantly frilled Lizardfolk, propped up on their rigid green tails, their presence detectable only by their glacially slow breathing. Once the party is entirely encircled by them, they silently pounce. Crashing the Party: The thunderous sound of mighty feet echoes across the fields. Suddenly a boisterous band of young Drow appear, each pair sitting atop a maddened Rhinoceros. These"
      },
      {
        "roll": 8,
        "title": "joy riders, brave with moon brandy, target the party with their cruel japes",
        "description": "Poisoned from drinking such a powerful brew, the Drow are barely able to control their mounts. The Rhinos don’t care who they trample. Gory Gathering: A large band of Ogres sit about a massive rough-hewn table, engaged in a grisly eating contest. They have not been subtle in gathering the materials for their ongoing"
      },
      {
        "roll": 9,
        "title": "competition",
        "description": "From some distance away, blood-stained rocks and gore-splattered clearings mark a staggering number of brutal deaths. Their yelling voices carry even further than the crunch of bones. On Wary Tides: A well-appointed, seemingly abandoned, skiff slowly drifts down a trilling"
      },
      {
        "roll": 10,
        "title": "purple river near twilight, but it’s a trap",
        "description": "Invisible Duergar pirates lurk in ambush on the boat and nearby along the river. Perceptive characters may notice the supposedly empty skiff rides low in the water, or spot hastily concealed boot prints in the mud near the shore. ENCOUNTERS: LANDCSI EONFTTHREU FINAES 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "above the water like dots of burning gold in an intricate ballet",
        "description": "The lake shimmers with their reflection. The lights of the fireflies turn into laces of illumination carried by the gentle ripples of the water. Stagfight: Two stags fight for dominance in a clearing in the woods. Woodland animals form"
      },
      {
        "roll": 2,
        "title": "a circle around these sparring males",
        "description": "Behind them, the rock wall forms a natural alcove where a large stone shaped like an Elven god watches over all before it. The Lantern Grove: The party find a circle of trees with large fruits hanging from their"
      },
      {
        "roll": 3,
        "title": "branches",
        "description": "They glow with a warm orange light that recalls memories of candles, campfires, and a cosy hearth. Within the circle, darkness and despair are driven away and rest is particularly restorative, but the shadows prowl all the more eagerly around the perimeter of the light. A Game of Cones: Two mountains with craggy features and large stony hands pick up trees,"
      },
      {
        "roll": 4,
        "title": "rocks, and livestock as playing pieces in some inscrutable game upon the plains",
        "description": "They are very careful not to damage their pieces as they set them down precisely, though sometimes their deep laughter sets tremors running through the earth for miles around. The Bright Spring: A cool spring in a mossy hollow with water as clear and fine as glass,"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "suspended in the air in shimmering beads and fluted sculptures that send refracted light in all directions. Dragonflies trailing brightly coloured dust dart amidst the suspended water, alighting to delicately craft the solid but malleable liquid into a beautiful but strange shape. Fallen Sky: Sitting in the midst of a rolling meadow, a chunk of sky has fallen from above. The"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "thick, jagged shard of eggshell blue still shows the uninterrupted movement of the clouds. It is cold and brittle and impossibly light. Above, in the dark wound left by its absence, a great bodiless eye can be fleetingly seen, peering down on the world below. Fish Fashion: At the same time every day they emerge from the river, a procession of fish with"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "human legs, strutting along the causeway in a fashion show of leggings, socks, and (of course) fishnet tights, then dropping back into the water. No-one knows why they do it, or where the music and lights come from, but they are easy to catch and taste delicious. Shoreline to the Sky: Sticking up perfectly perpendicular to the shore, the party encounters a"
      },
      {
        "roll": 8,
        "title": "slab of vertical beach",
        "description": "It has its own native gravity, and anyone can walk without aid along its white sands. At its furthest extent, just as the oxygen begins to give out and the stars emerge, there are towering castles of sand, their shadowy occupants glimpsed within. Rock Concert: A valley of strangely shaped stones begins ‘singing’ as the party traverses it."
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "Slowly increasing reverberations echo about the vale till the entire valley is rumbling with the sound. To some, the music formed by the stones is beautiful and serene, but others hear deep and ancient anger within the resonant tones. Set in the Stars: As twilight falls, the sky is starless. Stars slowly begin to rise up, gradually"
      },
      {
        "roll": 10,
        "title": "depicting an epic story across the vault of night",
        "description": "Two stand together, first clearly as friends fighting against many foes, then as bitter rivals, till one kills the other in a duel; the survivor slowly fades. Some see a tragedy, others a tale of glory. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "marks the boundaries of his territory with obelisks bearing his sigil",
        "description": "He has gathered great wealth from raiding the empires of the mountains. The Council of Emperors has placed a bounty on the head of this menace. Temple Temptress: An abandoned temple is home to a beautiful Lamia. Locals say she holds"
      },
      {
        "roll": 2,
        "title": "many men hostage, all in thrall to her",
        "description": "She keeps them for labour and for her own nourishment. Her bowls of burning incense numb the senses, reducing Initiative rolls by 2 and halving Movement Speed. Call of the Wild: When the party hears howls in the night, they know that wolves must be"
      },
      {
        "roll": 3,
        "title": "near",
        "description": "As they travel, they see ice-coated plantlife, huge tracks from which frost has spread, and the frozen remains of a stag in the path, and realise that this is no ordinary wolf: it is a Winter Wolf, a mighty predator who leads its pack of Wolves. Lair of the Snake: The party can trace the origin of the dark magic coalescing in the nearby"
      },
      {
        "roll": 4,
        "title": "area to a ruined academy where enchantment still permeates the architecture",
        "description": "They find the tracks of a huge snake winding through the ancient pathways of the academy and shed scales that indicate it is a Spirit Naga coiling through this place of secrets and magic. White Hot: The land cracks around a fiery forge that was once a major holding of the Azer in"
      },
      {
        "roll": 5,
        "title": "this realm, but something terrible has clearly happened here",
        "description": "The ground has been turned to glass by the heat of the conflict, indicating something of equal fieriness slew them. A scorched path leads to the heart of the forge and the Salamander within. Half Hidden: On the shores of a small green lake, the party finds the still-smoking ruins"
      },
      {
        "roll": 6,
        "title": "of a Halfling settlement",
        "description": "Bodies litter the streets and the town square, while the remaining survivors are barricaded alone in their homes. An Oni has broken into the realm. By night it kills and destroys, by day it takes the form of a Halfling and hides amidst the terrified populace. Sweet Tooth: An abandoned bakery stands beside a winding country lane. Spilling out of its"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "broken storefront are hundreds of delicious cakes, the remnants of an unwise spell cast by an under-pressure chef. Biting into any of the cakes, handling them, or even stepping near them, releases what is inside: Gelatinous Cubes of fondant and crème. Always Floss: Emerging from a chalk cliff is the monstrously outsized skull of a Cloud Giant,"
      },
      {
        "roll": 8,
        "title": "its dark interior as large as a cave",
        "description": "Sitting at the rear of its mouth, just visible from outside, is a pile of glittering treasure. In the roof of the Giant’s mouth, hidden amongst the teeth, is a colony of Ropers, patiently waiting for anyone foolish enough to enter the trap. Check Mates: The grounds of an abandoned keep have been turned into a vast chessboard."
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "An Ettin searches for some new chess pieces, as they smashed several flat when the ‘pieces’ dared move out of turn. While there is loot to be had from searching amidst the broken former pieces, staying in the area may result in involuntarily joining the next game. Mind the Topiary: A garden of exquisitely snipped creatures stretches out into the distance,"
      },
      {
        "roll": 10,
        "title": "but a central figure is missing",
        "description": "A massive topiary elephant (use Mammoth stats) with flower eyes wanders the hedgerows, roaring and snuffling as it slowly searches for trespassers. The elephant's thorny tusks are worth a great deal to Druids who know their mystic properties. ENCOUNTERS: LANDCSI EONFTTHREU FINAES 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "comfort to the weary",
        "description": "The woodcutter offers the party broth from the boiling pot on the stove. Although this place is sparsely furnished, the woodcutter has sufficient bedding for all in the party to take a Long Rest safely. Mushroom Village: The party comes across a fairy ring. When they step into it, they are"
      },
      {
        "roll": 2,
        "title": "teleported to a grove of giant mushrooms",
        "description": "This is a fairy village, and it is not difficult to find shelter here and traders to trade with. Feisty Sprites breeze through town on occasion, a formidable foe when they are the same size as the party. Castle in the Clouds: In the middle of the landscape sits a castle with dozens of spires in different styles. Inside is a sunlit hall with rich tapestries and beautiful marble floors, far too"
      },
      {
        "roll": 3,
        "title": "spacious to fit inside the castle you saw",
        "description": "A roaring fire starts in the hearth and the furniture moves of its own accord to accommodate travellers. Is this harmless magic, or the work of Invisible Stalkers? The Forget-Me-Not Inn: A warm and cosy inn with clean beds, but everyone inside is a"
      },
      {
        "roll": 4,
        "title": "memory made flesh",
        "description": "They cause no trouble and go about their everyday business, but as soon as they leave the inn they dissipate, only to return that evening. In exchange for a night's rest, the barman asks for an inconsequential memory, though the process can be painful. The Autumn Queen's Camp: In the middle of a forest where it is always the most perfect"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "autumn day, the scoundrels serving the banner of the Autumn Queen have set up camp, with their tents the colours of turning leaves and a campsite that smells of woodsmoke and sweet wine. They welcome travellers, though they are constantly suspicious of spies. Flower Beds and Breakfast: A glistening glade has a circle of queen-sized beds made entirely"
      },
      {
        "roll": 6,
        "title": "out of flowers and petals",
        "description": "There is an edible arrangement of lucious fruits laid out on each bedside table. The glade smells of nectar and hums with the songs of bumblebees. Hopefully the Fauns who built this place don’t return during the party’s stay. Fully Booked: Drifting along a sunlit forest path, the party encounters a floating storybook. It"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "flips open to an illustration of an elderly Ogre Knight and his Halfling Scout companion. They invite the party to step inside the magical tome and partake of their lodgings. The next morning the party emerges from the book fully rested but, for 24 hours, perfectly two-dimensional. Site Unseen: A rather inebriated Satyr invites the party to the finest hotel in all the realm."
      },
      {
        "roll": 8,
        "title": "He leads them to a ring of weathered stones atop a rain-lashed hill",
        "description": "From the outside the ring contains nothing but a patch of Violet Fungus, but stepping through, the party finds a wooden tower of sumptuous furnishings and the most exquisite cuisine. Resonant Hills: A series of earthen caverns have naturally formed splendid stone bells which slowly ring in time with the wind. The caverns are secure and have cool water, but the sounds"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "of the bells make it difficult to linger long, for they cause strange dreams of participating in magnificent balls beneath hollow hills. If the party have a nightmare, it forms around them upon awakening. Field of Fire: A glorious field of brightly coloured wildflowers ripple as if they were living flame."
      },
      {
        "roll": 10,
        "title": "When night falls, they still burn, throwing back the dark",
        "description": "While the flowers are incredibly beautiful and nearly mesmerising, their constant swaying may hide predators. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "trees",
        "description": "Each tree has the face of an elder carved into it, which gaze upon visitors with curiosity, sadness, or knowing looks. The smell of cedar and oak, moss and vetiver permeate the air. The Hall: The main hall in a castle is untouched by time. It is a circular room covered by a"
      },
      {
        "roll": 2,
        "title": "dome",
        "description": "The stained-glass windows depict warriors in victory poses. Sunlight streaks through these windows, and the warriors are bathed in a halo of gold. The mosaic floor shows the night sky in its full glory. Its tiles form swirling galaxies studded with suns, stars and moons. The Garden of Stone: A formal garden smelling of fresh herbs is built around what was once"
      },
      {
        "roll": 3,
        "title": "the field of a great battle",
        "description": "The soldiers locked in combat were transformed to stone, now statues that act as decoration for the timeless gardens. Sometimes, the sounds of battle can be heard near the statues as though it still rages on somewhere within this place. The Ineffable Training Room: A long hall with bright murals covering every inch of the walls,"
      },
      {
        "roll": 4,
        "title": "ceiling, and floor seems empty at first",
        "description": "Then the murals slowly start to come to life, changing to represent mighty foes, cunning traps, and overwhelming environments as dusty weapon racks rise up from the floor containing a dizzying array of practice weapons to train with. A Doll's House: In a shed filled with porcelain doll faces sitting on every shelf, a tiny version of an elaborate castle sits on a table as though only just finished. If the party opens the front of"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "the castle, they find themselves miniaturised and transported inside, where they may realise it is actually a true castle shrunk down. Leaving the castle grounds returns visitors to their rightful size. Once Upon a Time: A heavy tome drops from the sky amongst a flurry of snow. When opened,"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "vivid dreams of popular fairy tales fill the mind of the reader, activating every sense, though these stories do not have happy endings. They end in apathy, with unfulfilled desires, and mundane lives befalling favoured heroes and heroines. Swan Song: Through the morning sky comes an ancient ship of peerless white wood, its prow gracefully carved in the likeness of a swan. Trailing pink and blue smoke, its slender oars still"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "and its great white sails billowing, it slips across the sky, its origin and destination unknown. Any attempts to touch the boat result in it dispersing in a heavy mist before reforming again, not quite tethered to this world. Carnival Out of Time: Deep in the forest, swamped in tangled undergrowth, are the remains"
      },
      {
        "roll": 8,
        "title": "of an enchanted fun fair",
        "description": "Ornately constructed from gold, rose quartz, and glass, the various rides still operate. Pride of place is the carousel, where strange chimerical animals, unseen for thousands of years, are recreated in amber and onyx. Laughter can be heard faintly on all sides. The First Court: At the centre of a hoary grove of trees stand a series of armoured knight"
      },
      {
        "roll": 9,
        "title": "statues in a great circle",
        "description": "Each is unique, all clearly bearing different weapons and stances, but time has worn away their features and covered them with plantlife. A symbol resembling a star can still be seen on several shields, but none now live who remember its significance. Luminous Shore: On a moonlit beach, where the churning sea strikes the shore, the tide flows"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "out and a magnificent and intricate mosaic of brightly coloured shells embedded deep into the rocks can be seen. There is nothing left to indicate who placed the shells, but the patterns they weave across the shoreline speak to all who value beauty and loss. ENCOUNTERS: LANDCSI EONFTTHREU FINAES 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "the pouring rain",
        "description": "Lightning streaks across the dark and stormy sky. The earth shakes, rattling nearby towns. The Giants pay no attention to the party, transfixed as they are in their ritual dance, though squished evidence can be seen surrounding their site. The Stables: The king’s stables are dimly lit. The horses are fed a diet of Human flesh and"
      },
      {
        "roll": 2,
        "title": "ground bone",
        "description": "They are born in the dark, and kept in the dark, let outside only to train and to be ridden into battle. Trainers nurture the horses’ ferocity here. When the horses sight the party, they pound the ground with their forehooves and neigh threateningly. The Scent of Fear: On the roadside, a perfumer's workshop is found, where specimens are suspended in oils to leech the scent from them. It smells at first of flowers and spices, but"
      },
      {
        "roll": 3,
        "title": "beneath those scents are more unsettling smells",
        "description": "pain, fear, and death. People are suspended in the perfumer's oils, kept alive in a heightened emotional state to extract the smell of their passions. Wormwood Forest: There is a wood of gnarled trees with twisted branches where the morning"
      },
      {
        "roll": 4,
        "title": "mist never burns away",
        "description": "Paths wind between the trees in patterns that defy logic, never the fastest way, but sometimes a beam of sunlight pierces the canopy to gild something enticing: a soft bed of moss and primroses for the tired, or a crystal-clear pool for the thirsty. The Thorn Tower: A doorway leads up the stairs of a tower that rises into a mirror world"
      },
      {
        "roll": 5,
        "title": "where the sky is made of churning clouds split by lightning",
        "description": "On every floor of the tower, young princes and princesses are encased in glass, asleep or dead. Some have discoloured lips, pricked fingers, or lacerations from the thorns that wrap around them. Little Play Things: A sequestered hollow in the ground is littered with discarded Pixie wings."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "An obsessive Dryad has been trapping the tiny beings in wickerwork cages and toying with them, plucking off one wing at a time. She cannot conceive that anyone but herself is real, with the full suite of emotions she feels. Trophy Collection: In the deepest part of the woods, where tangling shrubs grow so tall and"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "thick they form impenetrable walls of verdure, the Sprites keep their collection. Pressed in rows into the green are the severed heads of their victims, their eyes decorated with flowers, their mouths filled with luminous moss. When the Sprites sing, the heads mumble and weep. Jade Harvest: Encased in glowing armour of jade, faceless Knights move along the underground"
      },
      {
        "roll": 8,
        "title": "crypt, stopping to ensure the blood continues to flow from their bound captives",
        "description": "The liquid trickles down into runnels on the stone floor, carried on to shallow pools. In each, a fresh crop of glowing jade pushes forth from the blood, ready to be harvested. Worm Sign: A massive pit stands open at the centre of an utterly shattered village. Once-"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "quaint little houses lie smashed and broken, their occupants mostly missing, though a few bodies lie crushed flat against the cobblestones. A single intact corpse is bloated, their skin a bright purple around a deep puncture wound, their face locked in a horrified grimace. Dyeing Cave: A grindstone sits at the centre of a dark hollow, beside a many-notched stump,"
      },
      {
        "roll": 10,
        "title": "and a large vat filled with a thick residue of congealed blood",
        "description": "Nearby, a clothesline sways, a single brilliant crimson red cap left behind to flap in an ill wind. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "They peck the party relentlessly, aiming for their eyes and noses",
        "description": "An Oni flies out from a hollow in the largest tree and cackles. It swoops at the nearest member of the party with its glaive and challenges the strongest one to a one-on-one fight. Silver and Gold: A Young Silver Dragon and a Young Gold Dragon fight each other for"
      },
      {
        "roll": 2,
        "title": "the love of a Young Red Dragon",
        "description": "The party can choose which suitor to side with, but the sly Young Red Dragon would rather see a bloodbath than settle for a boring courtship. Her idea of entertainment is to taunt the victor and mock the party in battle. Web and Weave: Sounds of distress lead the party towards an area of woods covered in webs,"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "where a number of Sprites struggle to escape the traps laid by a group of Ettercaps. The Ettercaps are approaching quickly, and they will undoubtedly eat the Sprites at the earliest opportunity if the small Fae are not freed before they arrive. Heartbroken: A murderer in town has been cutting out the hearts of his victims and taking"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "them to a plateau where he nails them to a post for a flock of Perytons to feed on. Hungry for more hearts, the Perytons have followed him back to town and attack the townsfolk to rip out and consume the organs direct from the source. Teeth in the Dark: A family of travellers is being stalked by an Oni who enjoys toying with"
      },
      {
        "roll": 5,
        "title": "its prey's nightmares before it attacks",
        "description": "It takes the forms of these travellers to lure the party towards it, striking from the shadows when its prey is isolated. A terrifying fight in the dark with a shapeshifting hungry trickster Giant ensues. Pious Paddock: A beautiful Solar sits upon a throne of pearl, a herd of Pegasi and Unicorns"
      },
      {
        "roll": 6,
        "title": "laying gracefully around them, as if bowing to their master",
        "description": "Extremely bored at the lack of worthy opponents, they have decided to raise battle steeds to throw at their enemies, and order their celestial horses to put on a spectacular fight. Endless Questions: Squatting on a crystal platform, a great grinning Gynosphinx taunts the party. Below her, in the town which she has taken as her own, crowds of charmed Satyrs"
      },
      {
        "roll": 7,
        "title": "advance from all directions",
        "description": "The Gynosphinx asks endless riddles of the party, and with each wrong answer, sends another wave of defenceless Satyrs into combat. The only true solution is to defeat the Sphinx. Contract Killer: Attacking without warning, the Assassin falls upon the party. Butterfly- headed and with backward bending mantis legs, it moves with preternatural speed, its"
      },
      {
        "roll": 8,
        "title": "shimmering multi-coloured armour fracturing the light",
        "description": "Sent from one of the countless Fae courts to exact revenge for some minor slight, it has imbibed Contractual Nectar and cannot be reasoned with. Gruesome Twosome: An unlikely lovestruck pair of a burly Troll and a lithe Merrow hunt the"
      },
      {
        "roll": 9,
        "title": "party as the main course for their planned lovers’ picnic",
        "description": "They continually prattle sickeningly sweet terms of endearment to one another and discuss which bits of the party look the tastiest, even in the midst of combat. Tulgey Wood: A disembodied voice demands tribute from the party in the form of all their"
      },
      {
        "roll": 10,
        "title": "magical items for daring to trespass into a forbidden forest",
        "description": "Failure to swiftly comply causes a ruthless and clever invisible Green Hag to unleash an immense Treant on the party. ENCOUNTERS: LANDCSI EONFTTHREU FINAES 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "for greener pastures but she was too attached to this land",
        "description": "For a very long time, she has been content living by herself, but secretly she has grown lonely, and she can be encouraged to leave her comfort zone and accompany the party. The Lady at the Lake: A Sea Hag sits on a rock by the lake, mourning the death of her daughter."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "If the party helps her conduct the funerary rites to honour her daughter and send her spirit to the afterlife, she will gift them with a Cloak of the Manta Ray, an item she fashioned out of the skin of a trespassing Tiefling. Any Owl Soul: A dejected-looking owl sits by the roadside. He explains that he was a Human"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "scout caught in a love triangle between two Fae lords, and one of them turned him into an owl to drive the other lord away. He is happy in this form, free from the burdens of his former life, though he does secretly keep an eye on both his former lovers. Parental Troubles: A Veteran has an infant in a knapsack and keeps finding that the child"
      },
      {
        "roll": 4,
        "title": "disappears at inconvenient times",
        "description": "The child was his sister's, but she died before she revealed who the father was. Now the Veteran is trying to find out why the child is constantly shapeshifting playfully, and protect her as he seeks answers about her nature. The Amazing Race: Following a bet between some powerful Fae, riders have assembled to"
      },
      {
        "roll": 5,
        "title": "race various mythical creatures",
        "description": "A Knight rides a Unicorn, a Mage rides a Pegasus, and a Berserker rides a Manticore. They ask the party to adjudicate, though they all are secretly willing to pay a bribe to ensure their success. Nothing to See Here: A very normal-seeming Human couple from the material plane are"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "walking around the lands of the Fae, creating elaborate portraits of the people they find on the way. They are evasive when asked about their origins or past lives, as they are secretly agents of the Fae nobility, spying on all of the travellers of the realm. Unearthly Visitor: On the shore, the party encounters an amnesiac Mage. She cannot recall"
      },
      {
        "roll": 7,
        "title": "her origins, but when she moves, tiny stars follow her",
        "description": "In truth she is the avatar of the universe, and the stars in her wake are those that have abandoned the night sky to search for her. To halt this exodus of lights, she must be returned to the heavens. Power Chord: Sweet music brings the party to a sun-dappled dell, where a young Hobgoblin"
      },
      {
        "roll": 8,
        "title": "strums on a golden lute",
        "description": "He asks to accompany the party. In actuality, the young Bard is long dead, his body animated by the malevolent musical instrument. The lute’s goal is to be taken to a city or magical college, any place of power where it can extend its control. Scaly Vengeance: A Dragonborn Gladiator riding a Giant Owl accosts the party and demands to know their business. He was once the champion of a dark Fae lord who charmed him,"
      },
      {
        "roll": 9,
        "title": "using the gladiator to kill many innocents for sport",
        "description": "Now, he hunts his former lord for revenge and asks information as to the sadistic Fae’s whereabouts from travellers, but is paranoid they might be spies. A Dream to Some: The party meets an unusual Fae Sorcerer whose business revolves around"
      },
      {
        "roll": 10,
        "title": "the trading of dreams and nightmares",
        "description": "The Dream Merchant is obtuse in her dealings, though she does warn potential customers that her prices are unusual and the effects of giving up, or gaining, even the simplest of dreams can change entire destinies forever. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "Mountains": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "on the back of a long suffering Ogre trudges uphill",
        "description": "The pair are interested in buying supplies from the party, and have crude equipment for sale. They also have information about a Goblin camp nearby that banished them. Safety In Numbers: The ravines and rifts are not easy to navigate, so a group of Human"
      },
      {
        "roll": 2,
        "title": "merchants are hauling their goods together over the rough terrain",
        "description": "Having been stuck in traffic crossing a busy mountain road, they have decided to stick together for safety, and have already survived attacks at night by local creatures. Forgotten Refuge: An Elf in their later centuries has begun to lose their memory. They recall"
      },
      {
        "roll": 3,
        "title": "once staying in a druidic glade, impossibly lush… somewhere in the peaks nearby",
        "description": "They remember the pass phrase that grants entry to the glade, and wish to return and hopefully gain back some lost recollection. Shields of Vigilance: A Dragonborn knight, sworn to justice and protection, is patrolling the"
      },
      {
        "roll": 4,
        "title": "pass attended by their squire",
        "description": "They are sceptical of the party, who are well armed and may bear signs of recent combat — they look like bandits to this stern upholder of the law and will have to convince him otherwise. Squabbling Siblings: A squabbling clan of Dwarves are moving delicate products in armoured"
      },
      {
        "roll": 5,
        "title": "wagons",
        "description": "They are each independently trying to secure trade deals with a monarch at their destination city. If the party has a Dwarf, the DC for this encounter check is reduced by 2. Predators and Prey: A group of Orc hunters are tracking animals for furs, and are willing to"
      },
      {
        "roll": 6,
        "title": "trade pelts, food, and hides in exchange for ammunition",
        "description": "They are aware of the passes that have become blocked off ahead by rockfalls and can provide shortcuts around them. Holy Herbs: A group of Elf and Halfling monks are gathering herbs, bones, and other spell"
      },
      {
        "roll": 7,
        "title": "components for a nearby temple",
        "description": "The plants are essential for a ritual being performed to rejuvenate the land. They can inform the party about the local flora and fauna and how they can be best used to make life easier in the peaks. A Noble Quest: A noble envoy from a neighbouring kingdom is crossing the peaks with a"
      },
      {
        "roll": 8,
        "title": "bedraggled retinue to the same destination as the party",
        "description": "They are seeking peace between rival houses, and can help the party with information about the people in power at their destination. Saved From the Beast: A Werebear who struggles with their animal nature has cut themselves"
      },
      {
        "roll": 9,
        "title": "off from the rest of society by hiding in the mountain ranges",
        "description": "The party finds the Werebear in the aftermath of saving some Gnomes from a wolf attack, and his animal nose tells him that some bigger monster is inspiring the wolves to boldness. Refugee Camp: A camp of many different cultures has been set up in a cleft between two"
      },
      {
        "roll": 10,
        "title": "mountain ridges",
        "description": "They have fled to the highlands to avoid Goblin raids. They have been watching traffic along the trails for weeks and can inform the party about what travellers they can expect on the road. ENCOUNTERASN: MCIOENUTNRTUAINS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "cold can freeze food stores",
        "description": "The Quartermaster has stumbled across a cache of potatoes and strips of jerky that have been frozen and stashed for lean times; perhaps more are stashed nearby. Who could have left these here? Woolly Rations: The Quartermaster has been able to hunt sheep, goats, and llamas. The strips"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "of meat, having been smoked over a fire, make for convenient portable rations, while the wool can line clothing and bedrolls. Potluck Supper: A long abandoned Dwarven mine shaft still has a functional kitchen. The"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "Dwarven appeal for long lasting construction appears to have also applied to their cooking. Pots containing surprisingly edible goat meat stew are a hearty meal indeed. Offerings Shrine: A shrine to a deity that the party doesn’t recognise has an abundance of"
      },
      {
        "roll": 4,
        "title": "offerings, including some healing potions",
        "description": "Many of the offerings have been blown away into the underbrush or weathered by the conditions here, though some are still useful. Reelin’ in the Meals: A frigid mountain lake is a brisk yet relaxing location to fish for one’s"
      },
      {
        "roll": 5,
        "title": "supper",
        "description": "The cold water fish are unique to this region, and flavourful. There is no guarantee of good eating, but there is satisfaction in working hard for a well earned dinner. Spiced Wine: Volcanic slopes and geothermal vents make for ideal grapevine terrain. The"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "abundance of berries and vineyards on this mountain slope make for a giggly yet restful time, even in the face of an active volcano. Roll a d100: on a 1, the volcano erupts during the party’s stay, meaning they must flee tipsy down the mountain. Shrimp Cocktails: The pools of steaming water around these hot springs are a warm reprieve"
      },
      {
        "roll": 7,
        "title": "from a strained journey",
        "description": "In addition, the warm, mineral rich water has led to an abundance of shrimp. Rich food and relaxing bathing improves morale for the remainder of the journey, restoring one Hit Dice for each member that succeeds their check. Afternoon Tea: The Quartermaster notices clumps of herbs, including sorrel and chicory, that"
      },
      {
        "roll": 8,
        "title": "can be brewed into a piping hot tea",
        "description": "This dramatically improves a cold, blustery hike through the mountains. An Unfortunate Reveal: A rockslide has collapsed in part of a cave, revealing the winter stores"
      },
      {
        "roll": 9,
        "title": "for an abnormally huge bear",
        "description": "The bear’s misfortune gives the party a comically large number of berries. Rise to the Occasion: A hot air balloon of Gnomish invention has tragically malfunctioned"
      },
      {
        "roll": 10,
        "title": "and crashed, killing all aboard",
        "description": "Their detailed logs of weather patterns and aerial surveys will be put to good use, alongside the preserved goods. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "distance to jump but failure would result in a terrible fall",
        "description": "The Outrider must make a Strength (Athletics) check to leap the gap and inspire the group to follow. Already Occupied: A snowstorm has rolled in and is making every step forward agonising."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "The only available shelter is an abandoned watchtower that is already occupied by a group of Humans. Convincing the occupants to squeeze and make space requires a Charisma (Persuasion) or Charisma (Intimidation) check from the Outrider. Road Block: An abandoned wagon has become the keystone in the formation of a natural"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "road barricade, a great drift of ice and snow that has become an impassable wall. A Strength (Mason’s Tools) or Constitution (Athletics) check is needed from the Outrider to slowly break apart the blockade. Valley of Thorns: A dense thicket of highly flammable thorns chokes the valley ahead. The"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Outrider must make a Wisdom (Survival) check to pick out a new path through the valley. Any open flame put to the thorns quickly starts a wildfire. To save themselves from the wildfire, have each player make a Dexterity saving throw or take 2d6 fire damage. Too Steep: The path the group has chosen in the mountains is too steep for simple hiking and"
      },
      {
        "roll": 5,
        "title": "climbing is becoming necessary in places",
        "description": "The Outrider must make a Strength (Athletics) or Dexterity (Acrobatics) check to keep their footing. Using a Climber’s Kit grants advantage on this check. Airsick: The altitude is starting to make the lowlander player characters woozy, and air sickness"
      },
      {
        "roll": 6,
        "title": "due to the thinner atmosphere has disoriented the party",
        "description": "The Outrider must make a Wisdom saving throw to avoid confusion over their direction and route."
      },
      {
        "roll": 7,
        "title": "Cold Snap",
        "description": "The air temperature plummets while the party is travelling. The Outrider must succeed on a Wisdom (Survival) check to find a place to shelter from the elements. Steam Vents: Cracks in the ground along the roads release jets of steam. The Outrider has to"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "make an Intelligence (Nature) check to attempt to predict and notice which vent will erupt at what time, taking 2d6 fire damage on a failure. Rockslide: A landslip has occurred and the path forward is now blocked by rubble and rocks."
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "A Dexterity (Acrobatics) check is needed from the Outrider to clamber over the debris. Using a Climber’s Kit grants advantage on this check. Suspense: A rickety rope bridge, suspended over a wide gorge, is the only passage across. The"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "Outrider must make a Dexterity (Stealth) check to gently cross the bridge without snapping it. Failure can lead to a treacherous drop and a lengthy detour to save them. ENCOUNTERASN: MCIOENUTNRTUAINS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "Fortunately, the party manages to stumble across the farmstead just as the building has caught fire. The characters must make Strength (Athletics) checks to fight the blaze directly or make Intelligence (Nature) checks to know where to cut firebreaks to rescue the farmhands inside. Trapped: There are many ancient mine-shafts in these hills. A group of miners has become trapped — perhaps an earthquake collapsed the shaft or rising waters threaten to drown them."
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "Only group Strength (Athletics), Intelligence (Investigation), or Wisdom (Survival) checks can aid the trapped miners in escaping, potentially with some of the precious stones they’ve uncovered. Stuck Caravan: It has rained for days on end, thus it is unsurprising to find other travellers in distress. The party comes across a caravan of bogged down farmers’ wagons heading to"
      },
      {
        "roll": 3,
        "title": "a merchant craft run aground along the river",
        "description": "Each party member should make a Strength (Athletics) check or an Intelligence (Investigation), to either push the wagons free of the muck, or figure out how to lever it free using physics. Evergreen Love: An evergreen Treant has taken to fawning over a family of Dwarves, keeping"
      },
      {
        "roll": 4,
        "title": "them captive within its boughs",
        "description": "The Dwarves quite badly want to be allowed back home — a group Charisma (Persuasion) check is needed to convince the Treant to release them. Cliff-hanger: The group finds a mountain climber in a terrible predicament: they’re not badly"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "hurt, but their ropes and safety devices are only barely holding them on the cliffside and they need assistance to get back to a safe place. A group Strength (Athletics) or Dexterity (Sleight of Hand) check will be needed to hoist the climber to safety. The Cornered Club: A bear has a group of travellers backed up against the mountain. With"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "a clever plan or just a lot of noise or other distractions they might be able to free the people without any danger to themselves. A group Wisdom (Animal Handling) check can manoeuvre the bear away from the unlucky souls. Buried in the Drift: A group of exotic travellers, possibly Tieflings, Dragonborn or even stranger folk, have become trapped in a collapsed snow drift. Their unfamiliarity with the"
      },
      {
        "roll": 7,
        "title": "land has led them astray",
        "description": "A group Strength (Sleight of Hand) check can carefully dig out the travellers, or a group Wisdom (Survival) check can advise them on the best routes to take and the best methods to avoid danger. Busted Axles: The rough terrain of the mountains can be fatal for wagons as a group of"
      },
      {
        "roll": 8,
        "title": "Halflings have discovered when the axle on their caravan snapped",
        "description": "A group Dexterity (Sleight of Hand) check can assist in realigning and repairing the broken axle, gaining advantage on the check if Carpenter’s Tools are used. A Miner Problem: A group of disgruntled mine workers are shouting insults into the office of"
      },
      {
        "roll": 9,
        "title": "the foreman of the mine",
        "description": "Aside from the personal insults, they’re mostly complaining about the dangers posed by a Mimic infestation. A group Charisma (Persuasion) check to negotiate with the foreman can convince them to hire some adventurers to deal with the problem. Killer Suspense: A thrill seeking Halfling was using an enchanted rope of extension to bungee"
      },
      {
        "roll": 10,
        "title": "jump off of the cliff edges here",
        "description": "The enchantment appears to have been all used up and he is stuck dangling from a rock. A group Dexterity (Sleight of Hand) can untie the rope and free him, or a group Intelligence (Arcana) can renew the enchantment and renew the fun! 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "plan is to abseil down the cliffs and cut off any path of retreat",
        "description": "An observant party may notice the pitons and freshly disturbed snow along the walls of this ravine, suggesting people waiting at the top. Troll Toll: A Troll is squatting on the only bridge crossing a fast mountain river. They want"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "to collect payment from travellers, and will not tolerate people ‘dodging their taxes’ by taking different routes. The party may be able to smell the squalid conditions the Troll lives in before catching sight of them. Agents of the Noble: The party gets attacked by a squad of soldiers working for a noble. The"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "team is composed of Veterans and Guards, and are attacking the party for political motives, or potentially through an unfortunate case of mistaken identity. Loot Lizards: The party may notice a series of crudely constructed traps along the slopes"
      },
      {
        "roll": 4,
        "title": "ahead",
        "description": "Kobold raiders have trapped the area to steal loot for their dragon master. The cowardly creatures hope the traps will do most of the legwork in killing travellers. Hobgoblin Blockade: A squad of Hobgoblins have set up a ‘checkpoint’ to shake down"
      },
      {
        "roll": 5,
        "title": "travellers moving through the area",
        "description": "If the party pays up, they can obtain information about others who have travelled in the region lately. Otherwise the Hobgoblins will fight viciously to protect their gathered plunder. Ravenous Raiders: A tribe of starving Human Druids ambush and attack the players for their"
      },
      {
        "roll": 6,
        "title": "food",
        "description": "Some are in animal form, others casting spells to ensnare the party. The druids in Human form are not particularly quiet with their vocal plotting to kill the party, which may give away their position. Roper Bridge: A pack of Ropers have latched themselves to an overhead bridge, their unusual"
      },
      {
        "roll": 7,
        "title": "snowy skin making them easy to mistake for icicles",
        "description": "Only the small pile of bones collecting under the bridge gives away their location. They hunt by hoisting unwary travellers into the air and consuming them piece by piece. Elemental Flurry: A whirling pack of Ice Mephits barrel their way across the ridges and"
      },
      {
        "roll": 8,
        "title": "headlands",
        "description": "They attempt to ambush the party under cover by casting Fog Cloud. The Mephits are travelling crosswind, and a party noticing this has time to brace before the combat begins. Reckless Vengeance: The party is attacked by an undead Revenant who, in the midst of the"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "fight, keeps shouting and demanding information about the troop that abandoned him in the mountains to die. His screaming and sprinting through the mountain passes are a dead giveaway for his presence, but it takes a discerning party to pinpoint how close he is. Pack Trackers: A clan of Lizardfolk are pursuing the party through the canyons, with Drakes"
      },
      {
        "roll": 10,
        "title": "acting as bloodhounds to sniff out and trace them",
        "description": "They are gathering precious materials for their dark altar, and the bones of some travellers would be ideal offerings. ENCOUNTERASN: MCIOENUTNRTUAINS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "were created by the artistic Stone Giants who spend most of their lives in their caves. This is one of their art galleries, situated out in the open as a means to enhance appreciation as people enjoy the art. Blooming Valley: A rift in the mountainside is overflowing with blossoms and petals. The"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "edges fray with exposure to the elements, but inside is a verdant grotto of flowers. It’s inspiring to see the flowers bloom despite the cold, but it is a temporary beauty, as the ice threatens to overwhelm the burst of colour at any moment. Hot Springs: The steam vents and lakes in this valley have created a series of multicoloured"
      },
      {
        "roll": 3,
        "title": "pools of various mineral waters and acidic lagoons, blanketed with a humid fog",
        "description": "The mesmerising patterns in the water and rocks are vibrant, but the caustic waters means this is a wonder best viewed from a distance. Hollow Peaks: The party finds an opened void in the rock leading to a hollow bubble in the"
      },
      {
        "roll": 4,
        "title": "mountain",
        "description": "The bubble holds a lake of molten rock, and emits scorching heat and jets of smoke. The power and vitality of the earth is awe inspiring, but the sweltering heat may make any heavy laden travellers pass out. Sky Henge: Floating above the jagged peak of a mountain is a circle of slowly oscillating rocks"
      },
      {
        "roll": 5,
        "title": "of dark stone",
        "description": "At a distance, this impossible halo is difficult to discern, but up close, they are inscribed with elaborate runes in a Dwarvish script. The powerful magnetic magics that hold them aloft are impressive, yet lost to modern wizardry. Mammoth Graveyard: The valley between the peaks is littered with the bones of countless"
      },
      {
        "roll": 6,
        "title": "woolly mammoths",
        "description": "The white ivory takes on a warm glow in the sunset, but offers a foreboding cast when viewed at night. Golden Dawn Peak: This mountain top is made of distinct bands of different coloured rocks,"
      },
      {
        "roll": 7,
        "title": "and the apparent shades change as the sun rises and sets",
        "description": "The peak remains visible to the party throughout several days of travel, and lingers in their memory. Talking Echoes: As a conversation begins between two party members, an echo of the"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "conversation murmurs back to them in the same volume, pitch and tone, but no matter the language the players are speaking, the echo responds in Giant. Temple on the Peak: Perched atop of one of the mountains several peaks away, there is an"
      },
      {
        "roll": 9,
        "title": "elaborately designed temple",
        "description": "The temple is dedicated to a specific order of martial artists, an ancient order vowed to exclude themselves from the world — if the party attempts to climb towards it, it magically relocates to another peak when they’re not looking. Father of the Forest: An ancient evergreen tree spreads over an enormous section of"
      },
      {
        "roll": 10,
        "title": "mountainside",
        "description": "The lowest branches reenter the ground and seed new trees again. Reverent Dryads tend to its delicate branches. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "of underground tunnels",
        "description": "A hungry Bulette is patrolling the area and views the players as snacks with good meat on their bones. Flash Cooked: A Remorhaz lurks in the snow drifts of the mountain. If the party is not an easy victory, it will attempt to retreat behind cover and then set up a new ambush. Snow half"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "melted by the extreme body heat of the Remorhaz could tip off the players but the very things that generate and contain that heat, the fangs, thermal glands, and carapace of this creature are rare alchemical components. Wandering Behemoth: A bull Mammoth is grazing in the tufts of grass nearby. The creature"
      },
      {
        "roll": 3,
        "title": "will not attack without provocation, but will fight brutally once enraged",
        "description": "Broken tree branches and deep prints left in the snow are telltale signs of mammoth activity. The mammoth’s meat and tusks are both valuable and good for sustenance and crafting materials. Fanged Assailants: A pack of Sabre-Toothed Tigers are enjoying a fresh kill nearby. The smell"
      },
      {
        "roll": 4,
        "title": "of blood and a red trail through the snow are the only signs of danger",
        "description": "The tigers are attempting to drive off any intruders on their feast, but if the party is desperate and in trouble, slaying them may be the only chance for food and shelter. Rock Bandits: Shattered trees and tossed boulders are signs of nearby giant activity. A group"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "of Hill Giants have been setting up a camp nearby and have been hoarding stolen wealth from nearby residents. Bolt From Above: A rampaging Behir has been gouging holes in the sides of the mountains"
      },
      {
        "roll": 6,
        "title": "and releasing lightning bolts in the distance",
        "description": "The party could follow the trail left behind by its many legs and serpentine body towards its cave lair, lined with precious metals warped by its magical lightning. On the Surge of a Wing: Feathers the size of doors litter the hillside nearby. A trail of them"
      },
      {
        "roll": 7,
        "title": "leads to a mountain peak with an enormous nest at its height",
        "description": "A Roc has roosted here, and has laid several large eggs that would sell at phenomenal prices if anyone was brazen enough to try and take them. Clutches in the Air: A cliff face is dotted with nesting caves for a huge flock of Pteranodons."
      },
      {
        "roll": 8,
        "title": "When tamed, these make for prized show pets",
        "description": "Their eggs are also highly sought after, but are stored in deep caves and are zealously protected. Saved for Later: The bodies of adventurers are strewn about a ravine, stuck halfway through the cliff walls. A hungry Xorn has been hunting in this area, suffocating adventurers by burying"
      },
      {
        "roll": 9,
        "title": "them in the stone",
        "description": "Following the trail of bodies would be the best method of tracking the creature and finding the collection of precious gems in its lair, transported here from another plane. Statues of Fear: A cave entrance is scattered with incredibly detailed statues of very frightened"
      },
      {
        "roll": 10,
        "title": "adventurers",
        "description": "In truth, they were once real, but have been petrified by a Gorgon. The possessions of the slain adventurers can be pried loose from the bodies. ENCOUNTERASN: MCIOENUTNRTUAINS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "the base of an impossibly tall peak",
        "description": "Old offerings lay untouched, with notes attached to each, seeking foresight into the future from the prophetic Storm Giants, who appear completely uninterested in engaging with these worshippers. Hot Springs: A naturally occurring thermal bath has cropped up around a series of steam"
      },
      {
        "roll": 2,
        "title": "vents",
        "description": "The heat and water are intensely relaxing and the mineral rich water feels like it must have medical benefits. Steam Mephits prance between the jets of air, and may attack if bored. Freeze and Thaw: A snow free cave keeps the wind off and the worst of the cold out. The faint"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "whistling and howling from the air blowing across the entrance begins to soothe once the party grows comfortable with it. This is the perfect residence for any Brown Bears, who will not take kindly to visitors. Resting Place: A colossal mammoth died some years ago. The husk of the body, with layers of"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "matted fur, acts as an effective windbreak, making it an ideal campsite with shelter for a fire. A group of Hobgoblin hunters have sighted the mammoth, intent on harvesting the body for its pelts, though a storm may delay their arrival. Run Aground: Stranded on a rocky bluff, there is a run aground ship of an archaic design."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "The sails and flags have long since rotted away, but the hull seems mostly intact. The sanctuary within is a welcome, if mysterious reprieve. A band of Halfling Bandits want to take the ship for themselves and may be willing to evict the players to do so. Tipsy Turvy: A dwarven brewery has an obscure liquor ageing process that somehow involves the volcanic geysers that are abundant here. The party can have a relaxing time at the brew"
      },
      {
        "roll": 6,
        "title": "house, with liquor and company to entertain themselves with",
        "description": "There is word of a jealous tribe of Stone Giants who want to get a hold of the liquor, and will tear the roof off the building to get it. Halfling Bothy: The party finds a small, stone bricked house with the doors left unlocked. This"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "house is a bothy, a communally built place to act as a safe haven for any weary travellers to stay in. The only catch is that it is proportioned for Halflings. A snoozing Grey Ooze has nestled itself inside, and will wake up hungry if disturbed with too much shuffling. Quarrelsome Neighbour: An open pit mine has several work sheds to shelter within. The"
      },
      {
        "roll": 8,
        "title": "miners are nowhere to be seen",
        "description": "A Cloaker has taken up residency within the mine hunting by any noise that the party may make. Dome Sweet Home: A small stone pillar juts out from the mountainside. From it, a permanent"
      },
      {
        "roll": 9,
        "title": "Tiny Hut spell is projected, giving an ideal place for the party to stay",
        "description": "A Sorcerer has crafted this hut as a trap for unwitting adventurers and their precious treasure, though it seems as though it has been abandoned, perhaps as it has been an unfruitful trap. Roof and Roost: At the peaks of mountains, vegetation grows sparse, making the giant pile of"
      },
      {
        "roll": 10,
        "title": "uprooted conifers and animal bones obvious to distant observers",
        "description": "This ancient Roc nest has many pockets of shelter inside it but it’s quite possible that its owner could return at any time. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "in rubble at the bottom of a crater",
        "description": "Sculptures of volcanic rock line the caldera, seemingly formed straight from the earth. Relics of War: A colossal fortress city of dwarven architecture lies ruined and melted by"
      },
      {
        "roll": 2,
        "title": "acid",
        "description": "Throughout its streets, caustic pools of liquid tell of a bygone Black Dragon attack from centuries ago, their breath attack still potent enough to burn. Swimming with the Fishes: A glacier fills the valley between this peak and the next. Underneath"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "the surface, the peaks of spires and towers are visible, with frozen Merfolk locked in the ice around them, trapped by their freezing fate. Memories of Heroes: A Dragonborn city, with once elaborate spires and statues, has been long"
      },
      {
        "roll": 4,
        "title": "abandoned by most",
        "description": "There is a small clan of Dragonborn that live in a mausoleum dedicated to their fallen heroes, but they are the last family of this previously mighty empire. Bountiful Preserve: There is a monolithic statue of an ancient deity of the harvest. At its base"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "lies a huge cornucopia — the foods inside are preserved indefinitely, but none of the plants are recognisable."
      },
      {
        "roll": 6,
        "title": "Titan’s Wake",
        "description": "The body of an ancient primordial being made of stone lays cold and dead over the ruins of a city. Across its back are scores of impact craters from the spells that slew it. Giant’s Realms: A cyclopean keep designed to house a gate to an alternative plane of existence"
      },
      {
        "roll": 7,
        "title": "stands nestled in the rift between two peaks",
        "description": "The gate has had its power source cut off, and its Giant engineers have been slain. The Labyrinth: Nested walls and spiralling streets lead to a central mountain peak, whose"
      },
      {
        "roll": 8,
        "title": "tunnels all intersect, contradict, and turn back on themselves",
        "description": "The architecture of the Minotaurs that built this city is unintuitive and confusing and it is unclear if the labyrinth was intended to keep something inside, or to keep something out. The Eternal Cycle: A pilgrimage trail through the mountains is lined with the Ghosts of"
      },
      {
        "roll": 9,
        "title": "former pilgrims, caught in an eternal loop of worship",
        "description": "The paths follow a circuit and do not permit the souls of those who have died on the trail from ever leaving. This bizarre afterlife does not appear to bother most of the phantoms. Dragon’s Grave: A gargantuan Dragon’s skeleton lies exposed, halfway inside a cave entrance."
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "Between its ribs, a sharp stalactite has been dropped from the roof of the cave, the final blow that slew the beast. There is evidence of a large-scale battle being fought against it, with the shattered remains of ballistae and arrows everywhere around the body. ENCOUNTERASN: MCIOENUTNRTUAINS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "of offerings for an Ancient White Dragon",
        "description": "The entire vicinity has been blast frozen, with scores of worshippers to the dragon frostbitten and encased in ice while prostrated in worship of the beast. Strange Aeons: Jutting out from the slopes of the mountain, at an extreme angle, is a tangle"
      },
      {
        "roll": 2,
        "title": "of city streets made of iridescent stone",
        "description": "Scattered throughout the buildings are dozens of Gibbering Mouthers, and people trapped by the confusion and insanity brought on by the transplanar architecture. The Bone Pit: There is a narrow cave, its entrance littered with bones. As the cave deepens, the"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "mounds of bones grow larger and larger, until the floor of the cave is completely covered. The bones are almost completely undamaged, with only faint scratch marks to suggest a filleting knife. Fallen Empire: A hastily assembled castle has collapsed due to a recent earthquake. The"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Human occupants; nobles, knights and servants, have been buried alive, trapped in air pockets deep beneath the earth. Disturbed Sleep: The players find a mausoleum dedicated to the ancestors of rulers of a nearby"
      },
      {
        "roll": 5,
        "title": "kingdom",
        "description": "The building has been vandalised and several of the tombs have been opened. Dark rites have been performed inside in order to profane this holy place. Fungal Infestation: What was at one stage a beautiful glade nestled in a deep rift, it has now"
      },
      {
        "roll": 6,
        "title": "been invaded and corrupted",
        "description": "The moss that lines the walls has been infected and blossoms with fungal growths. The once clean and crisp mountain spring water has turned a muddy brown. They All Float: Nestled in a valley is a frozen lake. The top layer of ice is thin, and once"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "brushed off, reveals the presence of dozens of corpses, floating belly-up, preserved in the water. A village here was once prosperous, but some sudden force melted the peak snow, flooded the village, freezing into this new cold hell. Deadly Hubris: Along the slopes to a dramatic peak, there is a ravine that splits the clear path"
      },
      {
        "roll": 8,
        "title": "apart",
        "description": "The opposite side rises 15 ft. above the side the party stand on, and there is evidence of plenty of snapped ropes and dislodged climbing equipment. Hidden in the shadows of the ravine are scores of dead mountaineers who fell to their demise. Cloud of Death: The flat valley floor at the foot of this volcano holds the remains of a nomadic"
      },
      {
        "roll": 9,
        "title": "village",
        "description": "The tents are all still intact, but the rotting corpses of its occupants are plainly visible. There are newer corpses too, all lying face down in the ground. This valley routinely fills with poisonous gas from the volcano, and has asphyxiated each new band of rescuers. Trapped and Starved: A troupe of settlers got caught moving through the range too slowly"
      },
      {
        "roll": 10,
        "title": "and too late in the year, and got snowed into their tents",
        "description": "The party finds them weeks later, having perished due to a combination of exposure, starvation, and attacks from scavengers. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "sooner or later they will abandon the treeline and strike",
        "description": "The Wraiths are trying to raise new spectres, and are not sated by the life drain offered by small game in the woods. The Legion Marches: A squad of Hobgoblins with a Hobgoblin Captain attacks the party to"
      },
      {
        "roll": 2,
        "title": "plunder their equipment and wealth",
        "description": "They are operating out of a nearby watchtower and will have been keeping an eye on the party’s movements for some time. Smash and Grab: A Dragonborn sorcerer has gathered a team of Bandits to work at collecting"
      },
      {
        "roll": 3,
        "title": "offerings for a nearby White Dragon",
        "description": "They will attempt to capture the party and offer them, and their possessions, as gifts. Brimstone Keep: A squad of Salamanders have been summoned to this plane of existence."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "They’ve been recruited by an Efreeti to help establish a new kingdom in the active volcano nearby. The Salamanders seek to drive the players away for trespassing on their new borders. Birds of a Feather: A small troop of Dwarves have decided to raid a Harpies nest, looking to"
      },
      {
        "roll": 5,
        "title": "take the shed claws and feathers for crafting crossbow bolts",
        "description": "The party have stumbled across the Dwarves mid-heist, with the Harpies furious at the intrusion. Winter’s Hunger: A Human Hunter has become the leader of a pack of Winter Wolves,"
      },
      {
        "roll": 6,
        "title": "possibly with the aid of druidic magic",
        "description": "After a string of unsuccessful hunts, the wolves are ravenous, and the party looks like a tasty meal. Bait in the Trap: A huge Remorhaz bursts out from the snow drifts, and jumps to attack the"
      },
      {
        "roll": 7,
        "title": "largest party member first",
        "description": "A nearby wizard has been leaving bait for the Remorhaz in this area for weeks, to encourage it to stay close to the wizard's lair and kill any nosy adventurers. Twin Strike: An Elf Ranger is protecting the last grotto of their people in this region. Their"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "Mammoth animal companion is a loyal ally, and the two fight aggressively to ward off any who attempt to intrude on the sacred grotto. Sound and Fury: A Dwarf Berserker stands on a rock outcropping surrounded by corpses,"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "raging at the loss of their dwarven companion, mindlessly slaying all who approach in a grief induced rage. Stone Guardians: A grouchy Xorn is guarding this pass, recruited by a Stone Giant camp to"
      },
      {
        "roll": 10,
        "title": "keep the road clear, and intruders out",
        "description": "After some warding shouts, it uses its Earth Glide ability to close the distance and attack the party. It will get distracted by any precious gems it notices the party carrying. ENCOUNTERASN: MCIOENUTNRTUAINS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "Polite and well spoken, this Elf tells of an ancient god who they worship, but dares not speak their name. They claim their god is too powerful to comprehend, hiding the fact that most worshippers are driven completely insane through their devotion. The Goodness of Goblins: The party follows the sound of chanting to find a circle of Goblins"
      },
      {
        "roll": 2,
        "title": "holding hands and singing songs",
        "description": "They invite the party to join their group, presenting them with flower crowns made in warmer climes. Investigation reveals that they are under an extremely powerful pacification spell. Never-Ending Climb: Human hikers greet the party briefly, before hurrying onwards up the"
      },
      {
        "roll": 3,
        "title": "mountain, claiming to be hot on the trail of a tricky but playful Wizard",
        "description": "A few hours later, the same scene repeats itself, and again another few hours later. If questioned about the date they set off on this hike, it is revealed they have been stuck in this loop for over a century. Adorable Snowman: Booming sobs can be heard echoing between the peaks. A huge Yeti is"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "found crying in a small cave, upset over the hunters pursuing its trail from a mountainside town. It had been the protector of this town for years, fighting off unseen threats, but a recent sighting of it has spooked the townsfolk into defensive manoeuvres. Grumpy Ol’ Giant: A Frost Giant angrily shuffles through the snow, kicking it around and sieving through it with his hands. He grumpily acknowledges the party, unhappy at being"
      },
      {
        "roll": 5,
        "title": "caught off his peak",
        "description": "He enlists the party’s help in searching for his keys that he dropped off the mountain. Despite his size, he is actually a teenager, and will be in trouble with his mother if he doesn’t find them. Claymation: Huge sculptures mark a cave entrance, where the walls are painted and sculpted"
      },
      {
        "roll": 6,
        "title": "masterfully",
        "description": "Inside, a Clay Golem is mechanically creating more artwork, unwavering from the purpose given to it by its master. In fact, its master's bones form its magnum opus, the Golem having killed them when it needed new material for its art. Horrid Hospitality: A friendly mountain guide offers the party help in crossing the peaks,"
      },
      {
        "roll": 7,
        "title": "knowing all of the sheltered spots and speedy shortcuts",
        "description": "He insists on tidying up the camps before the party enters, as he has secretly been killing other hikers for their loot. He dares not fight the party, knowing that they are much stronger than him. Stone Cold: Sheltering in a cave from a blizzard, the party notices stone statues of humanoids"
      },
      {
        "roll": 8,
        "title": "neatly lining the walls",
        "description": "A Gorgon speaking Common ushers the party in from the cold, offering to grant them a thick stone coat to keep them warm. It proudly shows off the people it has ‘helped’ in the past. When alone, it secretly arranges them and acts out domestic scenes. Darkness into Life: A jovial group of Elves encounter the party, all wearing white robes that"
      },
      {
        "roll": 9,
        "title": "blend in with the snowy peaks of the mountain",
        "description": "They believe they have died, and are delighted to arrive in this heavenly afterlife despite their evil actions in life. Nasty Nip: A wounded Tiefling calls out for assistance getting down the mountain after being"
      },
      {
        "roll": 10,
        "title": "bitten by a monster in a dwarven ruin",
        "description": "The pain in her head grows worse and worse should she travel with the party, and she hides the voice she hears in her head, as it demands she bites the Leader and infect them too."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "UNCHARTED JOURNEYS"
      }
    ]
  },
  "Open Waters": {
    "A Chance Meeting": [],
    "Hidden Reserves": [],
    "A Bump in the Road": [],
    "Needing Assistance": [],
    "Danger Afoot": [],
    "Natural Wonders": [],
    "Monster Hunt": [],
    "A Place to Rest": [],
    "Old Memories": [],
    "A Dark Place": [],
    "Deadly Fight": [],
    "Fateful Encounter": []
  },
  "Underground": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "what they’re doing once discovered",
        "description": "A cursory inspection of the area reveals the Dwarves are digging beneath a graveyard to loot graves undetected. They gladly share news or plunder to convince the party to leave them to their dubious work. Scaly Hospitality: A pack of Kobolds crouch around a tiny fire, roasting a lizard as the"
      },
      {
        "roll": 2,
        "title": "firelight glints off their metallic scales",
        "description": "They alert the party with a cry, chittering a warning about dozens of traps they’ve set. The apparently good-natured crew might be playing a deeper game, but they seem genuine, more interested in catching dinner than adventurers. Nicely Spicy: A Dwarf trader approaches the party, carting her goods aboard a Floating Disk"
      },
      {
        "roll": 3,
        "title": "that carries her wares",
        "description": "She specialises in procuring trade goods from underground civilisations, specifically spices that don’t grow on the surface and command a high price in noble kitchens and dining halls. She eagerly offers her wares to the party. Ship of Secrets: A large merchant ship sits leaning against the cavern wall. How it got here is anyone’s guess, but more importantly are the goods inside, already being scavenged by"
      },
      {
        "roll": 4,
        "title": "entrepreneurial Duergar, uninterested in the party",
        "description": "Intelligence (History or Nature) checks indicate that this ship comes from a part of the world nowhere near the land above this part of the underground. The Hunter: The party meets an Elf Druid who is setting snares. The Elf wears no metal armour"
      },
      {
        "roll": 5,
        "title": "nor carries any metal weapons",
        "description": "She is a trapper and was hired by miners to rid them of a Rust Monster infestation. She insists the party doesn't help her, as she is a professional exterminator and will lose her bonus if she enlists others to do her work. The Lost: A tired and hungry Fighter wanders through the caves. They lost the rest of their"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "party ‘ages ago’, and they’ve gone half-mad trying to find their way back to the surface. They are now at their breaking point, and they beg the party for help, tearfully offering a treasured magic item in trade. Culinary Delights: A new restaurant has opened up next to a popular inn in an underground"
      },
      {
        "roll": 7,
        "title": "city, offering fusion cuisine dishes for the adventurous",
        "description": "The owner, a rotund Svirfneblin, is offering limited-time-only half price meals to inn patrons as part of a promotional launch campaign. The party may partake of this offer of fine dining. Inspiration: Lolloping gently through a shale gallery, quill in one hand, lutes in the others, comes a massive Xorn minstrel. Craving inspiration for a new ballad, it eagerly seeks out the"
      },
      {
        "roll": 8,
        "title": "tales of travellers",
        "description": "While it takes a Comprehend Languages spell to understand its songs, even the most tin-eared of adventurers can tell its titanic rumblings have a sweeter timbre than its kinfolk. You’ll Be Back: Suspended from a pair of buzzing Giant Fire Beetles, a legless Goblin trader"
      },
      {
        "roll": 9,
        "title": "rises from a vent in the ground",
        "description": "Promising deals the likes of which the party has never seen before, the goblin sells minor magical items and potions. Each is subtly cursed: weapons quickly need replacement parts; potions cause a thirst that only they can slake. Shroom Brewer: The party meets with a cheerful Myconid brew master who is searching for"
      },
      {
        "roll": 10,
        "title": "new ingredients for their next batch",
        "description": "They offer to trade some of their work, which they keep in small stone flasks, for promising ingredients, especially ones from the surface. Their drink is a bit loamy, very potent, and near the best thing a dwarf will ever taste. ENCOUNTERS:AUNCDIERNGTRROUINDS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "crates, sacks, and barrels, the supplies clearly came from the surface, but were apparently abandoned. Most of the food has long since rotted or been eaten by vermin, but a wealth of sealed provisions, mostly pickles and cured meats, remains to be found. Glowing Lichen: Shining conspicuously in the otherwise lightless depths, a carpet of softly"
      },
      {
        "roll": 2,
        "title": "glowing lichen illuminates a patch of damp earth",
        "description": "Tiny rodents nibble on the blue fungus, but they seem to avoid the others. If the blue lichen is safe for more than mice to eat, the lightweight source of food would bolster the party’s supplies. Gnomish Hospitality: The party chances upon a group of Svirfneblin tucked away in a cave"
      },
      {
        "roll": 3,
        "title": "system",
        "description": "These Gnomes enjoy hearing stories about the ‘lighted lands’ and gladly share food and offer shelter to travellers that can entertain them. It seems a bit too good to be true, and a Wisdom (Insight) check reveals that they’re actually terrified of the aboveground party. Fish Food: A glistening saltwater lake lies before the characters, its waters crystal clear. It is"
      },
      {
        "roll": 4,
        "title": "full of fish and shellfish, but it is also lined with humanoid skeletons",
        "description": "Broken skulls and bones suggest this is a dumping ground for bodies, and an Intelligence (Nature) check reveals that the aquatic life is thriving on this regular source of food. Hidden Wine: The party comes across an abandoned town, possibly the result of a humanoid raid. One burned-out building shows a still-locked trapdoor, as the raiders weren’t interested"
      },
      {
        "roll": 5,
        "title": "in basement clearing",
        "description": "Opening the trapdoor by making a Dexterity (Thieves Tools) check reveals a wine cellar stocked with local vintages from neighbouring vineyards, many of them still very drinkable. Odd Cache: The party finds a stockpile of gear and provisions from an aquatic band that is"
      },
      {
        "roll": 6,
        "title": "planning to explore the underground near their undersea lands",
        "description": "While the gear and provisions are useful, they all have an aquatic twist. Tridents, harpoons, and coral axes sit alongside brined fish, molluscs, and shellfish. Seaweed ropes and shell baskets hold them all. Cave Aged: The party uncovers a small, blocked cavern which proves to hold great wheels"
      },
      {
        "roll": 7,
        "title": "of truly ancient cheese",
        "description": "Most have spoilt, but at the heart of each wheel, though it takes some cutting to get to it, remains a fistful of the best, and sharpest, cheddar they’ve ever eaten. Guiding Lights: At the bottom of a great shaft, the party finds the body of a Fire Giant."
      },
      {
        "roll": 8,
        "title": "Studding its back are sharp crystals of tourmaline",
        "description": "They resonate with the sound of voices, shining with bright pink and green lights. The crystals can be extracted from the corpse for use as lanterns, as long as the party keep their voices raised in song. Go West: Preserved in the strata are the smashed remnants of an unknown craft of white"
      },
      {
        "roll": 9,
        "title": "glass and silver threads",
        "description": "The party can excavate the craft with a successful group Strength (Athletics) check. While the flimsy thing falls to pieces, one strange device is recoverable: a flat arrow of white glass that spins in the palm, but always comes to a rest pointing west. Pure Water: Deep inside a pale blue cave of glistening calcified rock, water gushes out of an"
      },
      {
        "roll": 10,
        "title": "underground spring",
        "description": "It forms a pool surrounded by stalagmites. Drinking from it removes all adverse conditions. The water can be collected and stored in vials or waterskins. However, the collected water loses its beneficial properties in five days. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "is no path around, and unless the party can find a way over it, they will have to walk across the bottom. Razor-sharp, broken stones line the ground, requiring the Outrider to make a Dexterity (Survival) check to pick out a safe path through the rocks. Cave-In: A section of tunnel begins to collapse as the surrounding stone shifts. Rocks fall from"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "the ceiling while fissures open in the ground below, threatening the party from all angles. The Outrider makes a Constitution (Athletics) check to weather the hazards while guiding the party through the gauntlet of obstacles unscathed. Hissing Warning: The sounds of dripping and hissing permeate the tunnel before the party"
      },
      {
        "roll": 3,
        "title": "just as drops of magma begin to seep through cracks in the stone above",
        "description": "An Intelligence (Nature) check allows the Outrider to avoid the vein of magma above, though the temperature in the cavern may be too much for those in heavy armour to bear. Going Too Deep: You’ve travelled so deep into the ground that gravity begins to affect you"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "from both ends, increasing your movement by 10 feet and giving you the carrying capacity of a creature one size larger than you. It also has a disorienting effect: the Outrider must make regular Constitution checks or gain the Poisoned condition from nausea. Hidden Cube: A Gelatinous Cube stands in the party’s way, wedged between the walls,"
      },
      {
        "roll": 5,
        "title": "ceiling, and floor of a darkened corridor",
        "description": "Fortunately, the Outrider has a chance of noticing the monster by making a Wisdom (Perception) check or even an Intelligence (Investigation) check, as the stone it has touched is a bit too clean. A Sudden Chasm: An earthquake suddenly tears through the ground, pulling apart the path"
      },
      {
        "roll": 6,
        "title": "in front of the party",
        "description": "As the furthest ahead, the Outrider must make a Dexterity saving throw or be pulled into the widening chasm. If they fall, then they must make a Strength (Athletics) check to grip the side of the chasm before plummeting further still. Warning Tones: As the party travels, a series of crystals begin to appear in the surrounding"
      },
      {
        "roll": 7,
        "title": "cavern walls which thrum when disturbed",
        "description": "A Wisdom (Perception) check allows the Outrider to realise that too much noise, perhaps even overly loud voices, will create resonance causing a tremor and even a cave-in if the party does not travel quietly for a time. The Squeeze: The path ahead comes to a sudden impasse. The only way forward is through"
      },
      {
        "roll": 8,
        "title": "a narrow fault between basalt columns",
        "description": "This perilous squeeze requires the party to divest themselves of armour and crawl forward in single file, dragging their equipment behind them. The Outrider must make a Dexterity (Sleight of Hand) check or leave a random pack behind. Uncertain Ground: The party encounters the overflowing midden of a Grimlock colony above. This teeming tide of rubbish and filth must be crossed to reach the next passageway."
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "The party must make a group Dexterity (Survival) check to avoid being speared by bones or poisoned by rancid offal. There is also a chance of finding a magical item mistakenly discarded by the blind Grimlocks. Hungry Moss: A wide field of thick red moss covers the ground ahead and the whole place"
      },
      {
        "roll": 10,
        "title": "smells of rot",
        "description": "The moss spreads towards the party with disturbing speed and starts to consume any natural materials like leather or wood. The Outrider can make a Wisdom (Survival) check to judge that fire will push the moss back enough to clear a path through. ENCOUNTERS:AUNCDIERNGTRROUINDS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "through a shallow pool, lamenting its bad luck, but entreats the party to help it find the lost item. A group Wisdom (Investigation) check can help the goblin find its missing necklace. In return, the Goblin knows a shortcut through the tunnels ahead. Guidance System: A Stone Golem wanders through the darkness, pausing periodically before"
      },
      {
        "roll": 2,
        "title": "continuing",
        "description": "The Golem is not hostile, ignoring the party. Chiselled into its back is a message explaining that the golem will lead them to a lost treasure if they can restore the magical waypoints guiding its sense of direction with a group Intelligence (Arcana) check. Hole to Where: A little girl begs the party to help retrieve her dog that fell into a small fissure that formed after an earthquake. A group Strength (Athletics) check is needed to climb down"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "the fissure but, once a character gets about 100 yards down, they suddenly feel like they are climbing up! Rather than descending further underground, the character emerges up into a strange new land! Stupid Gawkers: A group of young people thought it would be fun to watch the rumblings"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "of a dormant volcano, looking for the ‘legendary steam vent’ that supposedly holds magical powers. Instead, they accidentally fell through an old lava tube. The party must make a Wisdom (Survival) check to track down the access tunnels to find these people. A Cry for Help: While near an underground stream, the party hears a cry for help. A Dwarf"
      },
      {
        "roll": 5,
        "title": "Commoner fell into the stream and is being pulled along by the current",
        "description": "The party needs to make a group Strength (Athletics) check to rescue him. Snares Spun: The webs of generations of spiders have snagged a potholing gang of Halflings."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "Their picks, belt buckles, and grappling hooks prove to be perfect at getting caught in corded spider webs. The Halflings desperately call out for help, and if freed with a group Strength (Athletics) check, will provide maps of the tunnels they’ve explored so far. Heirloom Peril: A terrified young Knight clad in fully engraved, extremely intricate plate"
      },
      {
        "roll": 7,
        "title": "armour stands on a rocky promontory above a pit of acid",
        "description": "The Knight tearfully explains that their armour has been in their family for centuries and they cannot risk it in the pit. A group Dexterity (Acrobatics) check is needed to help the Knight leap across the stone pillars. Sacred Stone: The party discovers a colony of subterranean Halflings. Blind and translucent, they are in a state of distress. The sacred stone which ‘maintains’ their village is missing. An"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "Intelligence (Investigation) check will reveal it has merely been bumped from its podium and rolled under some shelves. The party can return the stone or take the opportunity to loot the poor sightless Halflings. Cold Feet: In a cleft of shattered rock a congregation of tiny Homunculi have gathered to wed"
      },
      {
        "roll": 9,
        "title": "two of their own",
        "description": "The groom, however, is missing. The little bride’s wailing attracts the party, while her father offers gemstones if they will trawl the local bars for the recalcitrant groom, requiring a group Charisma (Persuasion) check to convince him to return. Baited Breath: A tunnel has been filled with scores of mouse traps and dozens of rats have"
      },
      {
        "roll": 10,
        "title": "been caught",
        "description": "A Gnome cheesemonger who is protecting their underground vault asks the party to help reset the traps. A Dexterity (Slight of Hand) check prevents any trap misfires from catching slow fingers, and in return, the Gnome can provide the party with rare cheeses. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "from gold and platinum and filled with liquid fire; a new sun to light the darkness of the underworld. An Intelligence (Arcana) check reveals the device is unstable and moments away from detonating. Lost Envoy: Shambling along a narrow gallery, clad in tattered, trailing finery and clutching a"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "mass of mouldering documents to its rotting chest, the party encounters an Ogre Zombie, the last remnant of a doomed diplomatic mission to an underground kingdom. Its mind is gone, save for one conviction: to protect its important war-averting missives at all costs. Snatching Vines: Roots have penetrated the interior of this tunnel, and the bodies of small"
      },
      {
        "roll": 3,
        "title": "animals and adventurers are entangled in them",
        "description": "A pack of Kobolds have been using the roots to create snares to capture people for their loot and food. Hidden Nest: As the party makes its way through underground passages, Wisdom"
      },
      {
        "roll": 4,
        "title": "(Perception) checks reveal the sounds of skittering and scraping",
        "description": "They also discover gnawed bones, indicating the presence of Giant Rats. It’s possible that treasures litter the floors of these caverns, but is it worth risking hordes of hungry rodents? Boxing In: As the party makes its way through underground ruins, an Intelligence (Investigation) check reveals that a floating magical sword in one corridor is actually inside"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "a Gelatinous Cube! What the party may not be aware of is that this cube hunts with friends. It is slowly moving away from the party so that a second Gelatinous Cube can box them in from behind! Hot Heads: Blasts echo through the cavern as a Wizard fights off crazed Azers, attempting"
      },
      {
        "roll": 6,
        "title": "to send them back to the realm whence they came",
        "description": "Greedy and ill-prepared, this Wizard had attempted to summon a hoard of gems from another plane, unknowingly stealing a stash of the Azers, who were dragged through to this plane alongside their riches. Blind Hunters: The party finds strange etchings in the stone, symbols that only Grimlocks"
      },
      {
        "roll": 7,
        "title": "know",
        "description": "They prey upon those foolish enough to enter their territory, hiding in the stones and ready to pounce on the party. Wisdom (Perception) checks enable the characters to hear them moving or to catch a glimpse of a Grimlock hiding behind a boulder. Mineral Thieves: A character with Stonecunning or proficiency with Jeweller’s Tools or"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "Mason's Tools notes that the scraped cave walls indicate that something literally scooped out (or ate) the veins of mineral ore in the walls. A Xorn lurks nearby, ready to feast on the party’s metal and jewels. It goes for the most heavily armoured character first. Law of the Underground: A group of stealthy Drow stalks the party, their presence only"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "apparent to those who make a successful Wisdom (Perception) check, as they wait to see if these intruders dare to wander into their sacred spider nests. Eventually, an impetuous Drow decides that it is time to pre-emptively expel the trespassers from their lands. Stench of Death: A horrible stench fills the air as the party finds a vile creature that must once"
      },
      {
        "roll": 10,
        "title": "have been human",
        "description": "A successful Intelligence (Religion) check reveals that it has been mutated upon death into a Ghast. It is tearing into a pile of freshly killed corpses and the party have but a moment to react before it turns its claws on them. ENCOUNTERS:AUNCDIERNGTRROUINDS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "into a galaxy of glittering motes",
        "description": "Within the massive geode, those acquainted with the night sky recognise familiar constellations in the crystalline reflections, the field of minerals mimicking the stars above. Wormfood: A horrific roar threatens to deafen the party members, but it subsides after a couple of seconds, followed by a shuddering tremor, a feeling of momentary weightlessness, a"
      },
      {
        "roll": 2,
        "title": "violent crash, then eerie stillness",
        "description": "Travelling another few minutes onward imparts the terrible realisation that the party had been inside an enormous worm that was just killed by something even larger. The Golden Tunnel: The party find themselves walking through a tunnel seemingly carved"
      },
      {
        "roll": 3,
        "title": "entirely from rich veins of gold",
        "description": "A character with Stonecunning or proficiency with Jeweller’s Tools or Mason's Tools may note that, while there is much of it, trying to excavate any of the gold may result in a total cave-in as the soft metal gives way. The Glowing Grotto: The party comes into a large cave where dripping water from above has formed a large pool surrounded by glowing, phosphorescent fungi. It is breathtakingly"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "beautiful, but also begs the question as to what is feeding the growth of these fungi? An Intelligence (Investigation) check suggests that the small creatures heard moving through the caves might be the source. Natural Excavation: The party enters earthen tunnels surrounded by large roots from trees"
      },
      {
        "roll": 5,
        "title": "above",
        "description": "The roots have runes carved into them, and perceptive characters see the roots slowly twist and sweep to keep the tunnel firm and maintained. This appears to be the result of druidic magic, although the language of the runes is unknown. The party feels safe here. Underground Paradise: The party enters a large cavern dominated by an underground grotto."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "The water is fed from dripping holes above, and the trees and plants are nurtured by strange bioluminescent moss covering the ceiling. The twilight paradise has a soothing effect on the party, a welcome respite from endless dark tunnels. Fire and Ice: A vast pool of lava bubbles up from deep beneath the ground in the centre"
      },
      {
        "roll": 7,
        "title": "of a chamber made of black volcanic glass",
        "description": "A sparkling half-frozen waterfall plunges from where a surface glacier melts high above, sending up clouds of red steam that feed the brightly coloured plants clinging to every surface of the chamber. The Eyes Have It: In a cavern that has stepped sides almost resembling raked seating, huge"
      },
      {
        "roll": 8,
        "title": "crystal formations growing from the walls are eerily reminiscent of eyes",
        "description": "Indeed, walking out into the cavern feels like being at the centre of a hall of judgement, an effect further enhanced as all the eye-like crystals turn to look at the party. Prismatic Chimney: The party encounters a narrow, vertical shaft encrusted with milky quartz. The chimney reaches all the way to the surface, where a single weak beam of light breaks"
      },
      {
        "roll": 9,
        "title": "through",
        "description": "Refracted and magnified by the quartz, randomly redirected by minute changes of air pressure and the wanderings of dust motes above, the beam is transformed into an erratic, burning scourge of light. River of the Dead: Through a wide fissure in the rock comes a slow, deep river. The waters"
      },
      {
        "roll": 10,
        "title": "are clear, cold, and filled with skeletal fish",
        "description": "Drifting on the surface of the river are mummified bodies, consigned to the depths by the inhabitants of some distant city. Their wrappings are encrusted with crystals and salts from their long immersion in the mineral-rich waters. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "great excavation works",
        "description": "The makers are long gone, but the Bulettes they used to excavate tunnels have only proliferated, filling workshops and dorms with their teeming litters. The fat, content Bulettes are currently slumbering, but the slightest disturbance will wake them. Chuul to the Touch: A wandering vein of magic-infused rock leads to an outcrop of the"
      },
      {
        "roll": 2,
        "title": "material, glowing with sickly ultraviolet light",
        "description": "The party are not the only ones to have found it: nesting in the black radiance is a Chuul and its young brood. The magical stone eradicates all light save for its own, leaving combat to take place in its velvet shadows. No Earthly Notion: Drifting through the tangled warrens of an abandoned mine, the party"
      },
      {
        "roll": 3,
        "title": "encounters an Earth Elemental",
        "description": "Strapped to its back is a throne of gold where a decrepit skeleton jostles. The magical creature has been searching loyally for its departed master, unaware that it has been dragging his corpse around for decades. Execution Style: The party comes across the corpses of a group of bandits who still have"
      },
      {
        "roll": 4,
        "title": "their ill-gotten gains on them",
        "description": "The corpses are picked almost clean of flesh, yet even more disturbingly, their skulls are crushed. A Wisdom (Medicine) or Intelligence (Nature) check may reveal this to be the work of Darkmantles lurking nearby. In the Way: Someone is using a Purple Worm to clear new tunnels of debris. The characters,"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "stuck in a long tunnel, must find their way to an escape tube and the surrounding warren of connected tunnels. The Worm has uncovered a rich vein of gold in its nest. Collapse: The party is walking along a tunnel when there is a sudden earthquake. The floor"
      },
      {
        "roll": 6,
        "title": "shakes and gives way, dropping the characters into a chamber below",
        "description": "A Strength (Athletics) check breaks their fall, but the characters find themselves in a cavern filled with Ankheg eggs. They hear the sounds of several adult Ankhegs approaching. Lightning Wyrm: The party enters a maze of huge tunnels. Some tunnels contain the remains"
      },
      {
        "roll": 7,
        "title": "of young Dragons, as this is the lair of a Behir",
        "description": "The party is first alerted to this fact by distant light emanating from the Behir’s lightning breath as it kills another Dragon. Unfortunately, unless the party wants to turn back, they’ll need to confront it. Responsible Waste Disposal: The only path forward leads through a rubbish dump used by a community or communities over a long period of time. Crossing the unstable stinking"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "rubbish heap requires great care and a successful Constitution (Athletics) check, with every step risking attracting the interest of the local rubbish disposal Otyugh who views this as its feeding ground. Lying in Wait: A Grick haunts these tunnels, slithering through crevices and lurking in the shadows to pick off unwary travellers and creatures. A successful Wisdom (Perception or"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "Survival) check locates markings on the walls that convey some sort of danger ahead — the marks of tentacles with suckers, and the scattered remains of those who have fallen victim to the Grick. Pure Greed: As the party navigates a network of tunnels, they hear distant laughter coming"
      },
      {
        "roll": 10,
        "title": "from a cave",
        "description": "Inside this cave, a Xorn sits atop its hoard of gold and precious gems, laughing gleefully as it counts its treasure. It stops when it sees the party and demands that they give up their gold and valuables. It attacks the party if they refuse or are rude to it. ENCOUNTERS:AUNCDIERNGTRROUINDS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "stalactites",
        "description": "The biggest amongst them, reaching to the water, has been hollowed out, converted into a thriving Svirfneblin village. They are happy to house the party, but the only food they serve is glowing jellyfish. Eating even a morsel causes the consumer to temporarily glow too. Web of Delights: Over a bottomless pit a great city of webs has been constructed by industrious"
      },
      {
        "roll": 2,
        "title": "Ettercaps",
        "description": "A paragon of culture and sophistication in the dark emptiness of the underground, the party can find anything they desire in the Ettercap city, as long as they are willing to pay in the currency of choice: meat, preferably fresh. Insect Embassy: Trundling up and down through the layers of the underworld on an ancient but well-maintained rack and pinion mechanism, the party encounters the embassy of the"
      },
      {
        "roll": 3,
        "title": "Giant Centipedes",
        "description": "Here the party will find food, lodgings, and many rumours of the world beneath the ground, for the affable Centipedes consume gossip as voraciously as they consume their sweet aphid milk. Empty Nest: With a Wisdom (Perception) check the Outrider spots an old nest high up a"
      },
      {
        "roll": 4,
        "title": "cavern wall",
        "description": "It takes some climbing and Strength (Athletics) checks to get to, but it’s very defensible. An Intelligence (Nature) check may reveal what kind of nest it was and whether its previous occupants may still be in the area. The Outpost: An old, abandoned stone fortification sits against a gigantic cavern wall."
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "Obviously, this area was once important to someone, but its strategic value has long since passed. The fort was designed for smaller creatures, so Medium-sized humanoids may have a little difficulty squeezing inside. Fortunately, it has an open roof. Friendly Wager: A trio of Duergar miners are throwing dice and gambling by a cooking fire."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "When they see the party approach, they invite them to tuck into a mushroom and carrion stew and join the game. The Duergar have several gems of varying size to bet, as well as an Amulet of Health and a +2 Dagger. Unexpected Turn: An underground passage leads to a secret door into the wine cellar of a"
      },
      {
        "roll": 7,
        "title": "local inn",
        "description": "It’s possible that the innkeeper doesn’t even know about the secret entrance, but the wine cellar is much more comfortable to rest in. Alternatively, the group could go upstairs and request rooms for the night, perhaps in return for information about the tunnels. Light in the Dark: The party enters a chamber that was once a vast salt mine, carved by the"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "miners into an underground banqueting hall the equal of any in the richest houses on the surface. Glowing lanterns wrought of luminescent crystal still cast dramatic shadows across the walls and vaulted ceiling, though this place has been uninhabited for some time. Subterranean Refuge: The party walks into a vast underground chamber. Here, they find a"
      },
      {
        "roll": 9,
        "title": "mushroom forest and an underground pool",
        "description": "The temperature is cool but comfortable. The insects that scurry about are small and harmless. Moss and lichen form soft layers over hard ground, making excellent beds for the weary. Behind the Waterfall: A friendly Ranger patrolling the tunnels that connect to a subterranean"
      },
      {
        "roll": 10,
        "title": "metropolis gives the party directions to the nearest campsite",
        "description": "This campsite lies beneath a long rocky overhang, just behind a small waterfall. Colourful little fish swim in the plunge pool. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "ahead, but the echoes that return to the party are the voices of ancient Ghosts crying out, whispering, and telling tales of events no living soul was present to witness. For good or ill, the party might learn something from those who walked these paths before. Atlas Shrugged: The hands of a colossal statue emerge from an unfathomably deep pool of"
      },
      {
        "roll": 2,
        "title": "dark water",
        "description": "Above the statue, the ceiling yawns open to the surface, indicating an ancient cave- in followed the statue’s descent. The fallen rocks leave a path up to the surface but few hints about the calamity that brought the titanic statue low. Kobold Monuments: The party finds evidence of a powerful ancient underground civilisation"
      },
      {
        "roll": 3,
        "title": "now in ruins and overrun by monsters",
        "description": "At first, the party presumes these are Dwarven ruins, but an Intelligence (History) check suggests that the carvings match no known Dwarf style. Instead, it appears that a highly advanced Kobold civilisation once existed here. Fallen Remains: The party comes across a stretch of ruined buildings and monuments that"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "tumbled underground after some catastrophe ripped open the land above, swallowing them. The current inhabitants, a band of Goblins, have created a fanciful history of how these ruins came to be and are currently digging beneath nearby towns to bring them down as well. Secret History: While travelling through an ancient cave system, the party stumbles upon"
      },
      {
        "roll": 5,
        "title": "cave paintings from a prehistoric civilisation",
        "description": "The pictures depict Humans as arriving from somewhere else and, judging by the elaborate paintings, from somewhere other than merely a far-off land. Instead, the pictures indicate that Humans came here from another planet! The Lost Ship: Centuries ago, a powerful empire sent ships abroad to map the world. Each ship"
      },
      {
        "roll": 6,
        "title": "was loaded with treasures for trade and expected to return with new ones",
        "description": "The party stumbles across the wreckage of one such ship, which managed to make its way to an underground lake. It is still laden with treasure but is now home to a Spirit Naga. Past Marvels: Murals on a cave wall depict scenes from an ancient civilisation which had"
      },
      {
        "roll": 7,
        "title": "strange but advanced technology",
        "description": "There were machines that tunnelled efficiently through rock and stone, and citadels that channelled the geothermal energy to power their cities and provide transportation. Stone Ship: The party comes across a strange rock formation that resembles a pirate ship with"
      },
      {
        "roll": 8,
        "title": "a broken mast",
        "description": "With a successful Intelligence (History) check, the party recalls a folk tale about an infamous pirate who once challenged the gods. The gods cursed the pirate — the earth opened, and the pirate’s ship was sucked beneath the waves and petrified. Pilgrim Steps: A narrow flight of sandstone steps descends into the void, their distant end"
      },
      {
        "roll": 9,
        "title": "shrouded in darkness",
        "description": "As the party follows them down, they encounter the dried and dusty corpses of those who once trod this path, Wererats, in ever greater numbers. After a day of slow descent, the pilgrims’ goal is reached: the sundered head of a Nalfeshnee, radiating light. Invasion 101: The party enters the ruins of a vast amphitheatre. Perched on tiered seating are countless dead Ankhegs, while below a solitary Ankheg slumps beside a lectern. On the"
      },
      {
        "roll": 10,
        "title": "shale slabs behind them are scrawls in chalk",
        "description": "The language is indecipherable, but the images are clear: paths to the surface. It seems an invasion was averted by some sudden, unknown catastrophe. ENCOUNTERS:AUNCDIERNGTRROUINDS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "cavern",
        "description": "Each chain suspends a rusted iron cage, and though nothing lives within them now, most still hold the skeletal remains of once-living creatures, humanoid and otherwise. Whoever let these creatures starve may have also condemned their restless souls to haunt the prison. Insidious Vapours: Vile fumes seep from cracks in the stone floor and walls. Though they"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "won’t harm the party physically, they induce hallucinations of scenes too disturbing for the party members to simply shrug off. Most disturbing of all is the unshakeable feeling that the hallucinations are actually promises of true events yet to come. Sphere of Evil: Those consulting maps of the tunnels beneath the earth notice a sphere-like"
      },
      {
        "roll": 3,
        "title": "gap within them",
        "description": "No creature, good, evil, or unaligned, dares penetrate this sphere. Characters getting close to the invisible ‘wall’ feel the temperature drop a few degrees and an overwhelming sense of evil coming from the other side. Do they dare tap a hole into the sphere? Ceiling of Death: As the party enters a part of the caverns that leads to an ancient temple,"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "they find the way lined with dead soldiers held against the ceiling by thorny vines. They were trapped during battle, and the stone floor beneath the party’s feet is stained red with their blood. It’s as if the soldiers were sacrificed to consecrate this evil place. Creepy Echoes: As characters enter a winding, descending path, their spoken words create"
      },
      {
        "roll": 5,
        "title": "strange echoes",
        "description": "These echoes are in their own voices, but in addition to repeating what they say, the echoes also warn the party to turn back. If the party persists, then the echoes get more aggressive, belittling the party’s prowess and predicting their painful deaths. Final Escape: The party stumbles upon an old underground temple dedicated to a Duergar"
      },
      {
        "roll": 6,
        "title": "deity",
        "description": "A giant sculpture depicts the god and between his legs is a sliding passage with ‘escape’ written in Undercommon. Unfortunately, the slide ends in a Sphere of Annihilation, as it was intended for sacrifices to the god seeking an escape from existence. Tight Tunnel: The party make their way through a dark and narrow tunnel overrun with tree"
      },
      {
        "roll": 7,
        "title": "roots of various lengths and widths",
        "description": "The ground is difficult terrain, and it is easy to trip over the roots if one is not careful. Occasionally, a little insect that glows in the dark emerges from a crack in the walls or from a hole in the roots. Room for the Dead: Soft whispers and chirrups echo in this embalming room. Embalming"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "fluid and the tools and materials used in the embalming process are neatly organised in jars and containers on the shelving to the north. Sarcophagi line the east and west walls. In the centre, a statue of an Elf holds two gems, one in each hand. A Massive Endeavour: On a towering slab of green marble an unknown hand has laid out,"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "in meticulous detail and with a plethora of exacting diagrams, how one is to carry out the dissection of a Cloud Giant. Nearby are passages filled with a thousand man-high glass jars. Not all are empty… The Factory Floor: Vast brass pipes, many tall enough to walk within, loop down through the"
      },
      {
        "roll": 10,
        "title": "strata to a fume-filled rendering plant",
        "description": "There are an industrious group of leather clad Duergar work with paddles and nets upon a great, steaming pool of liquid flesh. The living soup is decanted into various geometric shapes and enlivened with shocks of electricity. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "becomes apparent",
        "description": "vivid purple liquid pours from their mouth and eyes, swiftly reconstituting itself into a Marilith. Wanting to stretch after her long confinement, she jauntily engages the party in combat. Warbirds: A shrieking whoop echoes along the cavern as the party traverse a long forgotten"
      },
      {
        "roll": 2,
        "title": "battlefield",
        "description": "Two flightless Rocs emerge from the shadows, still wearing their war panoply. When one is injured, it retreats and lets the other attack. The Collector: In a perfectly square cavern of emerald, the party discovers a long avenue of plinths. Upon them, eternally posed in sublimely heroic stances, are a hundred adventurers"
      },
      {
        "roll": 3,
        "title": "of every species",
        "description": "At the end of the avenue, lounging on a floating sofa, is the individual who collected them, a Rakshasa of immense proportions. She is eager to add fresh adventurers to her collection. Beware the Behir: The party passes a dark cave littered with bones and the stench of rotting"
      },
      {
        "roll": 4,
        "title": "corpses",
        "description": "This is the lair of a territorial and aggressive Behir. It slithers out of the cave to attack the party. It attacks the weakest member of the party or a spellcaster first. Predators: These large ice tunnels are home to a pack of Remorhaz, who trawl the tunnel"
      },
      {
        "roll": 5,
        "title": "hunting for prey",
        "description": "The Remorhaz strike the first party member they see, and are familiar enough with the tunnels to herd the party into dead ends. A Bad Feeling: The party inadvertently walks into the open mouth of a sleeping Purple Worm."
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "The ground feels a bit strange and a character making a Wisdom (Animal Handling) check may notice that the slight throbbing of the ‘walls’ and the regular breaks in the noise of the ‘wind’ indicate that they are inside of a beast. And that’s when it stirs… The Gauntlet: The party is walking through a cavern when they notice stalagmites with strange"
      },
      {
        "roll": 7,
        "title": "markings, as if they were painted with runes",
        "description": "This is just bait though, as the ‘stalagmites’ are actually Ropers that attack any characters that get within 50 feet of them. While two Ropers block one entrance, the party must outrun the others if they can’t defeat them. Dino Fight!: The party stumbles into a tropical paradise deep within the earth. Unfortunately,"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "they have little time to enjoy it, as they find themselves standing between a Triceratops and a Tyrannosaurus Rex doing battle with each other. The party’s presence interrupts the fight as the two dinosaurs disengage to go after the smaller targets. Drow Patrol: As the party enters a large cave, they are beset by a Drow band bringing surface"
      },
      {
        "roll": 9,
        "title": "prisoners back to their underground city",
        "description": "The Drow, led by a Drider, decided that the characters would make excellent additions to their collection. They immediately attack and will settle for nothing less than unconditional surrender. False Face: A group of Doppelgangers disguise themselves as explorers seeking a gemstone"
      },
      {
        "roll": 10,
        "title": "cave where vast treasure awaits",
        "description": "They offer the party their pick of the cavern's riches if they accompany and protect them on the way. When they reach the cavern, the Doppelgangers turn on the party, taking by surprise anyone who does not succeed on a Wisdom (Insight) check. ENCOUNTERS:AUNCDIERNGTRROUINDS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "eager for company, she will bring them anywhere they desire",
        "description": "She is secretly the princess of the Fire Kingdom, fleeing her betrothal to the Frost Giant king. Teams of Giants are searching for her. Weapon of Choice: At the base of a waterfall, the party discovers a sentient Flying Sword. It is purportedly inhabited by the soul of its maker, a Svirfneblin smith of renown. It asks the party"
      },
      {
        "roll": 2,
        "title": "to enact revenge on the rival who killed him, promising riches",
        "description": "In actuality, thousands of these swords were disseminated by trickster wizards, the blameless subject of revenge randomly assigned. The Hungry Mind: A vast gallery of silicon has been shocked and splintered in such a way that"
      },
      {
        "roll": 3,
        "title": "over millennia a cool, emotionless mind has developed amongst its pathways",
        "description": "Its crystalline veins reach for hundreds of miles. It sees and hears all. It will tell the party many secrets as long as they bring to it knowledge of the world beyond its senses. Rock On: As the party moves through the cavern, they see the signs of extensive mining that"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "has cut back many of the natural rock formations, and feel as though they are being watched. The sentient telepathic stalactites and stalagmites first try to frighten them off with ghostly voices, and then ask them to stop the Dwarven mining that is killing their people. Sweet Dreams: The party finds a well with a crystalline matrix suspended above it. The silvery"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "water within the well moves in an almost sentient way and the air smells of sweet ozone as fragments of other people's dreams pass through the party's minds. A figure in robes sleeps against the side of the well holding a cup half-filled with silvery water. Help Me: A Doppelganger miner is trapped under fallen beams in a mine. If the party rescues"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "the Doppelganger, they offer to take the party to rich veins of ore that can be mined for a fortune. The Doppelganger also offers to be the party’s guide in the mines. The Guardian: Some underground civilisations merely wish to be left alone. Their guardian is"
      },
      {
        "roll": 7,
        "title": "an Assassin dressed like a fellow traveller",
        "description": "They attempt to dissuade the party from travelling further and even offer to take them back to the surface or some other part of the underground. Should the party prove intransigent, then the guardian attacks. The Chosen One: The party discovers a tribe of Grimlocks deep beneath the surface. While this would normally spell danger, a Grimlock priest singles out one of the party as the ‘chosen"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "one’ that will lead the tribe back into the surface world and restore their sight. The identified character needs to make an appropriate Charisma (Deception) check to keep the Grimlocks believing in them. The Defector: The party meets a Drow Veteran who has decided to leave her community"
      },
      {
        "roll": 9,
        "title": "and explore the surface",
        "description": "She asks the party for assistance in finding a way to the surface and surviving once she gets there. In return, she gives them as much information about her home city and the environs surrounding it as possible. The Merfolk: The party meets a small group of Merfolk who’ve been trapped in an underground"
      },
      {
        "roll": 10,
        "title": "lake for quite some time",
        "description": "They take care to properly farm the cave fish in the water. In addition, they’ve struck trade deals with other communities, as the cave fish is an underground delicacy. Still, they dream of returning home to the open sea. 65 UNCHARTED JOURNEYS"
      }
    ]
  },
  "War Torn Lands": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "Opportunity Knocks",
        "description": "A rather seedy-looking Commoner raises his voice in greeting and opens his bag to reveal a wide array of mismatched jewellery, small personal items, and even some gold teeth. He insists that it was all obtained legitimately, but it is hard to miss the red-tinged mud on his knees and under his nails."
      },
      {
        "roll": 2,
        "title": "Loose Lips",
        "description": "A group of wandering labourers asks to join the party for mutual protection as they are travelling in the same direction. As they travel, they chat about the recent fighting and share concerns. The labourers are actually Spies working behind enemy lines to find out more about enemy troop movements and positions."
      },
      {
        "roll": 3,
        "title": "Camp Followers",
        "description": "A ragtag group of peasants are travelling to the site of a recent battle to see what they can find or steal from the dead. They suggest the party help them look for valuables picked from the fallen, offering to share everything. In truth, they take careful note of the party's destination and hope to steal back this loot."
      },
      {
        "roll": 4,
        "title": "Whatta Scoop!",
        "description": "As the party navigate the abandoned earthworks of a previous field of battle, they are accosted by a goat-headed Commoner. A chronicler from a distant land, she has no desire to risk her life to file a factually-accurate report on the war. Offering gold, she asks the party to record their phoney experiences of the conflict."
      },
      {
        "roll": 5,
        "title": "Sole Survivor",
        "description": "Methodically moving across the churned earth of a field, a lone Shield Guardian retrieves the sundered parts of their destroyed companions. Somehow, they can discern which bit of mangled machinery belongs to which Guardian, laying each piece reverently in one of the thousand trenches they have dug. With gentle pride they tell the party the story of each of their fallen allies."
      },
      {
        "roll": 6,
        "title": "Recruiters",
        "description": "A pair of old Veterans are looking for workers to spread their pamphlets of propaganda. They offer a standard wage for anyone willing to sign up, making it sound very exciting and important to their cause. In truth, they were hired for this job for a much bigger sum, and are bored to tears by the work."
      },
      {
        "roll": 7,
        "title": "Little Drummer Boy",
        "description": "A military drummer emerges from the bushes, limping. He is a Human, barely out of his teens. Should the party give him medical aid and take him to the nearest friendly military outpost, he gives them a small gift: a little toy soldier that grants everyone Advantage on one Ability Check once a day."
      },
      {
        "roll": 8,
        "title": "The Painter of War",
        "description": "It is a strangely mundane sight in lands of such violence to see an artist riding a summoned Elk laden with scroll cases and paint boxes. The painter is companionable enough, confiding that her job is to paint large battles for Nobles who wish to celebrate victory by hanging a painting on their wall."
      },
      {
        "roll": 9,
        "title": "Band of the Buried",
        "description": "A group of desperate deserters have united together to recruit and protect other soldiers who are traumatised by war, or who might otherwise turn to looting. They are cautious and unwilling to start fights, and ask the party to direct any other deserters they might discover to them."
      },
      {
        "roll": 10,
        "title": "Ministering to the Dead",
        "description": "A Cleric searches the battlefields for those who can be healed or have recently died. They perform rites to ease the passing of spirits, serving a god of death as part of an order that is respected by most. Some of the more fanatical Soldiers dislike the fact that they tend to everyone, regardless of allegiance."
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "Homeward Bound",
        "description": "A skittish Warhorse and a protective Mastiff give the party a wide berth, clearly both once bound to the same master and remaining together despite their master's death. With a successful Wisdom (Animal Handling) check or an offer of food, the party can befriend the wandering animals, who are well-trained in battle, carrying supplies, or keeping watch."
      },
      {
        "roll": 2,
        "title": "Weapons Cache",
        "description": "In a small cave is a cart full of weapons and ammunition, especially arrows and quarrels. It is here to reequip one of the armies in a nearby battle if they retreat. The party may steal from it or destroy it depending on their greed or allegiance."
      },
      {
        "roll": 3,
        "title": "Water Supply",
        "description": "The party comes across a cart stuck fast in some mud. The horse is missing and it appears abandoned. Three water barrels remain on board, presumably left as there was no way to carry them. The party can replenish their water, but the barrels are damaged and slowly leak, so they will have to do so quickly."
      },
      {
        "roll": 4,
        "title": "All That's Left",
        "description": "Buried under a stone wall, the party discovers a cache left by a family fleeing the conflict. In a small wooden chest, bound with twine and sealed with wax, are trinkets, letters, and an etching of the happy Halflings in better times. There is also the family's accrued wealth: four gold coins and two silver."
      },
      {
        "roll": 5,
        "title": "Aerial Scout",
        "description": "A mangled Flying Sword lies in a flooded crater. Used for scouting by one side of the current conflict, it can be repaired with a Mending spell or with Smith's Tools. In telepathic Common, it can relay knowledge on the geography of the surrounding area, though its intelligence on troop movements is completely outdated. Left unguarded, the Sword will attempt to return to its original owners."
      },
      {
        "roll": 6,
        "title": "Lay of the Land",
        "description": "Just off the path are the dead bodies of a few soldiers, ambushed by their enemy. They still have their weapons and armour, revealing the ambushers did not have time to search them. One body has a map, detailing their faction's troop positions, which is useful if the party wants to avoid them. However, if they are found with the map the party may be taken for spies."
      },
      {
        "roll": 7,
        "title": "Hidden Cache",
        "description": "A party member stumbles over a loose stone, shifting it. The stone covers a hidden cache of non-perishable food items. The party finds bars of compressed cacao and seeds, oatmeal cakes, preserved fruit, and strips of meat jerky wrapped in dirty linen, replenishing 1 extra Supply Die on any successful search."
      },
      {
        "roll": 8,
        "title": "Triage",
        "description": "The party comes across the tattered remains of a medical outpost that was hurriedly abandoned. It looks as though most escaped, though a couple of bodies lie haphazardly where they fell. Among the empty sacks and boxes, a few healing supplies have been left behind: a Healer's Kit, a Vial of Antitoxin and a Potion of Healing."
      },
      {
        "roll": 9,
        "title": "Stolen Riches",
        "description": "A stash of gold and valuable items is found, looted from a nearby wealthy manor, where the manor's lady has refused to leave her home despite the dangers of the war. The characters can keep the items for their monetary value, but should they be returned, the party are rewarded with an ancestral Arrow-Catching Shield by the lady of the manor."
      },
      {
        "roll": 10,
        "title": "Eye Spy",
        "description": "A well-concealed scout post on a hill has clearly been used recently, though its occupants do not seem to have returned in a few days, suggesting they have been caught. The hide yields a Spyglass, Paper and Ink, a Rope, a Signal Whistle and maps of the local area detailing hazards and troop movements."
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "Rocky Road",
        "description": "This area of rocky terrain is controlled by a series of checkpoints at every road. To clamber over the steep rocks carefully doubles the time the journey takes, but getting past the checkpoints requires the Outrider to make a Dexterity (Stealth) check, or a Charisma (Deception or Persuasion) check to talk to the guards."
      },
      {
        "roll": 2,
        "title": "Spell Detritus",
        "description": "The remains of especially nasty battle magic hangs over this area. Entering the area has the same effects as a Stinking Cloud spell. It is otherwise invisible, requiring an Intelligence (Arcana) check by the Outrider to figure out where its boundaries are and safely pass it."
      },
      {
        "roll": 3,
        "title": "Lost Herd",
        "description": "A large herd of horned cattle that were run out of a nearby village have come to a stop in the middle of the path. Their fear has made them highly territorial and they attack anyone getting close. It will require a Wisdom (Animal Handling) check to pass through them safely."
      },
      {
        "roll": 4,
        "title": "Defences Destroyed",
        "description": "To cover their retreat, a fleeing army has magically detonated the side of a levee, flooding the low-lying agricultural land behind them. The rushing waters have brought all kinds of treacherous debris from the battles upstream and wading through the polluted waters requires careful movement. The Outrider must pass a Dexterity (Survival) check to nimbly wade through the debris."
      },
      {
        "roll": 5,
        "title": "Fallen Giant",
        "description": "Speared through the heart by a jagged bolt, a great Green Dragon has tumbled from the sky to obstruct the only path forward with a tide of scaly meat. The Outrider must pass a Strength (Athletics) check to clamber up and over its rotting body, taking care not to disturb the toxic innards protruding through the scales."
      },
      {
        "roll": 6,
        "title": "Bribes and Lies",
        "description": "A group of soldiers have set up a checkpoint to restrict travel and uncover spies. If the party doesn't want to fight their way past them it will require Charisma (Deception or Persuasion) check, with Advantage if aided by the use of a Disguise Kit."
      },
      {
        "roll": 7,
        "title": "Land Mines",
        "description": "The fighting has moved on from the eastern front but the ground is scattered with magical land mines camouflaged by loose soil. An Outrider who succeeds on a Wisdom (Perception) check can detect them. Setting the mines off in a massive explosion without being in the line of fire rids the land of this danger."
      },
      {
        "roll": 8,
        "title": "In the Wires",
        "description": "A retreating unit has thoroughly trapped the area with caltrops and densely-strung razor wire, from which hang various alchemical flasks. The Outrider must make a Dexterity (Sleight of Hand) check or use Thieves' Tools to painstakingly clear a path through for the party."
      },
      {
        "roll": 9,
        "title": "Mud and Blood",
        "description": "In the aftermath of a rainy battle between armies on horseback accompanied by siege weapons, the terrain is churned up into a quagmire of mud and blood. The clinging mud is filled with broken weapons, splinters of wood and other hazards, which require a Constitution (Athletics) check to wade through without getting injured or slowed down significantly."
      },
      {
        "roll": 10,
        "title": "Hungry Thorns",
        "description": "Razor-sharp red plants feeding off the spilled blood have become a major hazard in this area. Farmsteads and civilian buildings are at risk of becoming overgrown as the plants have become more aggressive in seeking new prey. A narrow valley is choked with these vines and requires a Wisdom (Survival) check to clear safely."
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Your Highness",
        "description": "The king of a losing side has disguised himself to avoid being captured or killed. He is disguised as a labourer, but with a successful Wisdom (Insight) check, the party picks up that his hands are far too soft to be those of a commoner. He offers a reward if the party helps him reach his ally's forces."
      },
      {
        "roll": 2,
        "title": "Wounded Soldier",
        "description": "The party comes across a badly wounded veteran from a side they are sympathetic to. It will require a Wisdom (Medicine) check to be able to move him safely. He tries to joke his way through the pain, and insists that the party leave an old man like himself alone."
      },
      {
        "roll": 3,
        "title": "Capturing Killers",
        "description": "The party meets a woman with stolen weapons and armour following a small group of soldiers. The soldiers were responsible for killing her husband and burning her village. She will ask the party to help her set a trap to catch them (with a Wisdom (Survival) check). She hunkers down and waits patiently for her prey to fall into her trap."
      },
      {
        "roll": 4,
        "title": "Waystones",
        "description": "On a sloping hillside in the pouring rain, a young Elven Acolyte is struggling to drag a large menhir up the slope to an incomplete stone circle. The party can help her drag the cumbersome rock to the summit with a successful Strength (Athletics) check. There they witness the purpose of the stone circle: directing the spirits of the deceased on towards the afterlife."
      },
      {
        "roll": 5,
        "title": "The Last Ingredient",
        "description": "An elderly Svirfneblin apothecary, dressed in bloodied robes, is frantically searching the undergrowth for the final ingredient needed for a life-saving salve: the fluffy blue leaves of the exceedingly rare 'Shy Hemlock'. The soft warblings of this Awakened Shrub can be tracked and the plant caught with a successful Wisdom (Survival) check."
      },
      {
        "roll": 6,
        "title": "Fire Escape",
        "description": "A village is in flames and several people are trapped in their homes. There is no way to douse the fires as they have fully taken hold, but Strength (Athletics) or Dexterity (Acrobatics) checks will help get trapped people out. Any party member who fails takes 1d8 fire damage from the flames."
      },
      {
        "roll": 7,
        "title": "Feed the Refugees",
        "description": "A family of refugees, displaced from their homes, clamour for food and water. A Wisdom (Survival) check can help them locate provisions, though a full success can be earned if the Quartermaster hands over two Supply Dice. If helped, the oldest refugee offers their family heirloom, an antique locket bearing the symbol of a god of wealth."
      },
      {
        "roll": 8,
        "title": "Forget Me Not",
        "description": "The Ghost of a lost soldier wanders the road, trying to get home. She regrets that she never managed to send the letters she wrote to her husband who remained in their village. With a successful Wisdom (Religion) check, the party follows the Ghost's link to her body and retrieves the soldier's personal items to take back home."
      },
      {
        "roll": 9,
        "title": "Afraid of the Dark",
        "description": "A young camp follower is wandering in the road, covered in blood and traumatised by the horrifying monsters that fought on the enemy side. He wants to find the soldier who mentored him but is terrified that she might be dead. With a successful Charisma (Persuasion) check, the party gains his trust and leads him to safety."
      },
      {
        "roll": 10,
        "title": "Dirty Tricks",
        "description": "A villager runs along the road and collapses in front of the party. They are clearly in the throes of some sort of poisoning. With a successful Wisdom (Medicine) check, the party can save the villager and help them recover, but they explain that their whole village was poisoned by food distributed by soldiers and they need healers desperately."
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "Fires of Industry",
        "description": "A group of Centaurs and Sprites protect the border of their forest home that has been turned into material for the war: burned in blacksmiths' forges, turned into palisade walls and siege engines, or just cleared for an encampment. They seek to repel trespassers from their lands and consider anyone who is not a natural inhabitant of the forest to be an intruder."
      },
      {
        "roll": 2,
        "title": "Grim Discovery",
        "description": "The party comes across a pack of Winter Wolves who have recently killed a lone soldier. If they drive off the wolves they can search the soldier. In his pocket is a pouch of gold and an old note that should he be found dead, the gold should be given to his wife and child. The note details their names and the town they live in, one close enough that he must have been on his way home."
      },
      {
        "roll": 3,
        "title": "Opportunistic Orcs",
        "description": "A group of nearby Orcs have decided to 'pick some low hanging fruit' by raiding the border towns and killing off injured soldiers. They assume the party are also easy prey and launch an optimistic ambush. If defeated, they have spoils from previous encounters that may be useful."
      },
      {
        "roll": 4,
        "title": "Spoils of War",
        "description": "A local tavern has become an impromptu barracks for a mercenary group of Hobgoblins. The road outside of the tavern is despoiled with their filth, while the body of the unfortunate Halfling owner hangs from a post. The Hobgoblins have abandoned the war to revel in the pub's vast stores of food and drink, defending their ill-gotten plunder against any who dare to come near."
      },
      {
        "roll": 5,
        "title": "Saboteurs",
        "description": "Moving under the cover of night, a small group of Dwarven Spies enter an enemy village. They carry large glass beakers in which fizzes a virulent purple substance. They intend to poison the village well with this deadly concoction. If they are interrupted they will attempt to flee, fighting with normal weapons as well as utilising their poison exactly as in the Poison Splash cantrip."
      },
      {
        "roll": 6,
        "title": "Mercenaries",
        "description": "A group of deserters (use the Thug stat block) try to convince the party that they are authorised to collect tolls on this road. If the party sees through this ruse (Wisdom (Insight) check) or resist paying, the deserters attack and try to steal everything they have."
      },
      {
        "roll": 7,
        "title": "War Elephants on Parade",
        "description": "Fearsome Gladiators mounted upon Elephants bedecked with spiked barding march toward a city of broken spires. The thunderous trumpeting alerts the party to their presence. The riders use their Elephants to stomp upon those foolish enough to disrupt their parade."
      },
      {
        "roll": 8,
        "title": "Dying to Eat You",
        "description": "Bodies are piled up in a sheltered cave to get them away from a nearby village, but the rotting meat has attracted predators. Ghouls and a Ghast live among the piles of corpses, aggressively guarding their food source while more and more of them flock to the cave, meaning it will soon spill out into the village."
      },
      {
        "roll": 9,
        "title": "The Rat Queen",
        "description": "A Wererat Druid has declared herself Queen of the Rats and commands Giant Rats in raiding parties that isolate and consume wounded people and lone travellers. She is merciless in her cruelty, watching her Giant Rats tear people apart with glee. She seeks to claim more and more land for the rats, taking over whole settlements."
      },
      {
        "roll": 10,
        "title": "Sting in the Tail",
        "description": "A group of Hobgoblins whose leader rides a Manticore are getting arrogant and branching out beyond their usual raiding grounds, stealing supplies and ammunition, sabotaging equipment, and generally making a nuisance of themselves. The group can be avoided, but they are also likely to continue their activities until someone teaches them a hard lesson in humility."
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "Red Sun Rises",
        "description": "After a night of horrors where creatures from different armies ran wild across the countryside and every person on watch was constantly on edge, dawn finally breaks. The sun rises blood red and seems to echo the violence of the night before in almost unbearable natural beauty. Many of the monstrous creatures hide or dissipate with the morning."
      },
      {
        "roll": 2,
        "title": "Aurora of Lightning",
        "description": "Various deadly magics from a nearby battlefield have badly affected the weather. The party can see a strangely localised thunderstorm in the valley below, purple clouds and green lightning shimmering beautifully within its circumference."
      },
      {
        "roll": 3,
        "title": "New Life",
        "description": "In a long destroyed village, some new hope is returning. Between the burned out homes and lost possessions, a great field of poppies is growing, covering the lost village in a sea of red flowers."
      },
      {
        "roll": 4,
        "title": "The Briefest Beauty",
        "description": "The most recent bombardment of enemy positions has caused one side of a steep hill to collapse, revealing a cross-section of delicate crystal caves within. For the first time, sunlight reaches into the galleries, refracting through stalactites of topaz and quartz to fill the space with dancing lights. The next enemy barrage will destroy it all."
      },
      {
        "roll": 5,
        "title": "Memory Food",
        "description": "A dead forest stretches to the horizon, victim of a noxious brew released by one of the combatants. However, a single copse of startlingly green verdure stands amidst the devastation. The reason for the trees' survival becomes clear. Their exposed roots, fat and engorged, have fed upon the bodies buried beneath them. Now they take their shape, down to the detail of faces."
      },
      {
        "roll": 6,
        "title": "Peaceful Oasis",
        "description": "In the midst of a shattered battlefield and burned forest is a small pool fed by a waterfall. Both sides of the fighting have avoided damaging the area as it is a useful source of water. As such, it offers a brief interlude of peace in the war torn land."
      },
      {
        "roll": 7,
        "title": "Finger Peak",
        "description": "From the lookout, the tallest peak of the mountain range is visible. A tall, vertical line of the hardest rock, covered in snow, extending upwards from its shorter cousins like a middle finger, as if throwing the ultimate insult to the gods above. When lightning strikes, the snow upon it flickers like an electric ghost."
      },
      {
        "roll": 8,
        "title": "Unspoiled",
        "description": "A sudden unseasonable snowstorm whips up, creating white, unspoiled fields of snow. The clash of weapons is softened by the heavy flakes and the weather freezes the pools of blood and mud, masking the carnage of the battlefield. When the sun finally breaks through the clouds overhead, ice and snow sparkle across the hushed region."
      },
      {
        "roll": 9,
        "title": "Home by Candle Light",
        "description": "By night, floating gold lights hover a few feet above the ground and cannot be explained by insect life. Called 'candle-lights' by the local people, they are believed to be sent by the gods to guide the souls of heroes home to their realms. Supposedly anyone who follows them, living or dead, ends up in the afterlife."
      },
      {
        "roll": 10,
        "title": "Where the Flowers Grow",
        "description": "An expanse of soft white flowers spreads across a valley. Here and there saplings emerge from the drifts of flowers, each of them planted in memory of the dead buried beneath them. A sect of Druids move the scattered bodies of the dead into this valley and grow plants on top of them so they bring new life."
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "Dead or Alive",
        "description": "The party is asked to track and capture a group of armoured War Horses driven wild from the spell of an enemy Mage. Ideally they should be brought back alive in the hopes of finding a cure, but the officers make it clear that these horses could endanger the locals, and would rather put them down than hurt a civilian. There is a reward for each horse the party brings back, dead or alive."
      },
      {
        "roll": 2,
        "title": "Nightmare in Green",
        "description": "The war has drawn the attention of a Green Dragon from a nearby forest, angry at the damage recent fighting has done. The creature has attacked any soldiers who come near so the party is asked to destroy it. Its lair contains a hoard of gold but also some magical weapons and armour."
      },
      {
        "roll": 3,
        "title": "Fallen Soldiers",
        "description": "An army needs to travel down into a valley that is rumoured to be haunted and from which no scout has returned. The party discovers that several fallen soldiers from a previous battle have become Wraiths and are attacking anyone who comes near. If they are too dangerous to take on directly, destroying or burying their original bodies will put them to rest."
      },
      {
        "roll": 4,
        "title": "Mouths to Feed",
        "description": "On the shores of a foetid, mist-cloaked lake lie bodies from a recent skirmish. Through the mists a ponderous sloshing can be heard as something rises from the depths. One by one, the bodies are dragged into the water, consumed by a parasite-riddled Hydra. The bodies are scant sustenance for its many heads. If the party approaches, it will attempt to devour them."
      },
      {
        "roll": 5,
        "title": "Toll of War",
        "description": "Weighed down by plates of rusted metal, its wings broken and useless, an ancient, decrepit War Wyvern wanders the countryside, still wearing its siege panoply. Traumatised by its brutal treatment, it sees all other living things as enemies, savagely attacking before any more hurt can be done to it. Nesting in a destroyed village, the party discovers it methodically depopulating another."
      },
      {
        "roll": 6,
        "title": "Crocodile Beach",
        "description": "There is a beach where warships are plagued by Giant Crocodiles. They attack on sight, their iron jaws never letting go of their quarry, be it jolly boats from the ships or their passengers. The party may deal with these pests if they want to form an alliance with whoever commands these warships."
      },
      {
        "roll": 7,
        "title": "Worth Their Wight in Gold",
        "description": "A trio of fallen soldiers have risen as Wights. They murder innocent people in a nearby town and leave behind bodies mangled beyond recognition in the local tavern. The town offers a sizeable reward to those who can slay the Wights and protect the town."
      },
      {
        "roll": 8,
        "title": "The Crate Escape",
        "description": "A major supply route through a tunnel under a mountain has been interrupted. Scouts found no evidence of violence, and nothing left of the people at all. The tunnel is strangely empty, without any of the usual flora and fauna, due to a Gelatinous Cube lying in wait for the supply trains."
      },
      {
        "roll": 9,
        "title": "We March Together",
        "description": "A Flesh Golem knitted together from the enemy's soldiers has escaped the control of its creator and gone on an indiscriminate rampage. It can be tracked easily by the trail of fallen skin and body pieces that fall off as the spells holding it together start to degrade, and by the magical traces of necromancy. Its skin can be used to craft necromantic spell scrolls."
      },
      {
        "roll": 10,
        "title": "Triple Threat",
        "description": "A Chimera whose rider was killed in battle is searching for food in civilian and military settlements, attacking anyone who stands between it and a good meal. Its distinctive footprints, the deep claw marks it leaves, and the scorched areas from its fiery breath show where it has been, and food can be used to lure it out."
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "Broken Village",
        "description": "The party comes across a half burned village that people are beginning to return to. Most of the buildings are destroyed and those whose houses no longer remain have been taken in by their neighbours. The party may rest here, if they are willing to repair a building to sleep in, though not all villagers are keen to trust strangers."
      },
      {
        "roll": 2,
        "title": "Merchant Caravan",
        "description": "A group of merchants are making their way through the area and are very nervous about travelling near any fighting. They ask to party to stick with them through the night and keep a lookout for enemy Knights, providing a hearty meal and a chance to trade in return."
      },
      {
        "roll": 3,
        "title": "Neutral Ground",
        "description": "The party comes across a group of soldiers resting between battles. If they approach peacefully, the soldiers do not attack and are happy to share their food and supplies. But once the meal is over, talk turns to politics and the party will need to make a Charisma (Deception) or (Persuasion) check to convince the soldiers they are not the enemy."
      },
      {
        "roll": 4,
        "title": "Artificial Heart",
        "description": "In a deep furrow of earth, gouged by its apocalyptic crash landing, the party finds a gigantic mechanical humanoid made of metal and pearl. Its internal mechanisms are beyond reconstruction, but a cavernous cavity in its chest provides protection against the elements. Staying too long within the mechanism is not advised, however; its power source cracked in the crash and debilitating magic now leaks out."
      },
      {
        "roll": 5,
        "title": "Grave Circumstances",
        "description": "A pair of Tiefling Veterans, one impossibly thin, the other egregiously rotund, are making tea in the back of their covered wagon. Grateful for company, they present themselves as honest, if overworked, gravediggers travelling between sites of battle. In reality they are exhuming corpses for use by their demonic master. They do not react well if their secret is uncovered."
      },
      {
        "roll": 6,
        "title": "A Safe Haven for All",
        "description": "The nuns of a convent in the mountains offer food and shelter to everyone regardless of which side they're fighting on. Fighting or any kind of misdemeanour are prohibited here and will be punished should the party act too rowdy."
      },
      {
        "roll": 7,
        "title": "Shelter of the Learned",
        "description": "An abandoned library still stands in a town that is all but destroyed by the war. Though there are holes in the roof, the supports are still intact. The spaces underneath the fallen bookshelves provide adequate cover from adverse weather. Swarms of Insects (Beetles) may turn territorial overnight should the party overstep."
      },
      {
        "roll": 8,
        "title": "The Parting Glass",
        "description": "A Goblin couple offers shelter for all in their inn created from old ammunition crates. The pair have come up with novel food and drink based on what they can scavenge from the nearby thickets. A group of soldiers outside is watching closely for enemy combatants being harboured, ready to attack."
      },
      {
        "roll": 9,
        "title": "Dire Warning",
        "description": "The party comes across a cave used by soldiers, deserters, and refugees escaping the war, carefully hidden by a sheet of long vines. A few possessions and bedrolls are scattered around, including a journal that reads 'They're chasing us. Hunting us. They will never give up. Beware if you rest here, lest they believe you helped us.'"
      },
      {
        "roll": 10,
        "title": "Breaking Bread Together",
        "description": "In a ruined church, a family of Halfling camp followers welcome the party into their shelter. They are cooking rabbits caught nearby using their family recipe. They offer to share their meagre meal, as they believe in welcoming any who arrive to share in whatever food they have, but warn that the church might be haunted."
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Lost Love",
        "description": "Passing through a village, one of the party sees someone who reminds them of a previous lover from their past. The person in question has been obviously hurt, possibly with even a disfiguring wound. It may make the character wonder about the fate of those they have left behind."
      },
      {
        "roll": 2,
        "title": "Smiling Through the Pain",
        "description": "Even under the spectre of war, this village is holding a traditional small festival to thank the gods for what they have. It is very similar to festivals the party may have experienced at home. It might give them peace in the midst of all the fighting, or make them homesick for those they left behind."
      },
      {
        "roll": 3,
        "title": "Futility",
        "description": "Slowly manoeuvring across the moonlit field is a spectral army in battle formation. Formed into tight ranks, the Ghosts of the young soldiers are clad in outdated uniforms and wield ancient weaponry. Trotting beside them, seated on a massive war Elk, is a portly officer. He points with his sabre and the army advances into enemy fire. One by one the young soldiers disappear."
      },
      {
        "roll": 4,
        "title": "Empires Die",
        "description": "Rising at an angle from the mire is an old stone statue. In stern, authoritarian angles it depicts a figure in military uniform, arms crossed over a medal-emblazoned chest. At the base of the statue the inscription reads: 'Your Land Belongs to Us.' The statue has been so heavily defaced the identity of the ancient invaders cannot be discerned."
      },
      {
        "roll": 5,
        "title": "An Ancient City",
        "description": "The party finds ruins of an ancient city, untouched by the ravages of war. Statues of animal-headed gods support the sacred domes of temples draped with ivy and vines. Flat-roofed houses, empty and worn but still intact, appear safe enough for shelter. Their floors bear mosaics of life in old times, peaceful and carefree."
      },
      {
        "roll": 6,
        "title": "Titan Bones in the Trenches",
        "description": "The party nearly falls down a trench, recently dug and abandoned as the army pushes on northwards. Titanic bones stick out of the walls. These were the original inhabitants of the world, titans that once walked the earth but became extinct. Who knows what killed them all?"
      },
      {
        "roll": 7,
        "title": "In Memoriam",
        "description": "On the hill above a bloody battlefield, a collection of polearms and blades have been thrust deep into the earth where the weapons of the nameless fallen have been left as a memorial to the senselessness of their deaths. Around the memorial, candles of all shapes and sizes have been left by people passing through as a tribute."
      },
      {
        "roll": 8,
        "title": "Eternal War",
        "description": "An impossibly ancient stone indicates that this place has been a battlefield for thousands of years, torn by unceasing war. The ground is filled with the bones of those who have died for some cause or another. Can it ever end? Or is this valley cursed to always be the site of violence and conflict?"
      },
      {
        "roll": 9,
        "title": "Forgotten Gods",
        "description": "An old blood trail leads to a shrine beside a river, dedicated to a goddess of protection and healing. Her flame is ebbing in the face of so much death. Small offerings are still left here, whether by worshippers or those who instinctively wished to pay tribute for the relief they felt upon reaching the shrine after so much strife."
      },
      {
        "roll": 10,
        "title": "Hidden Sanctuary",
        "description": "A ruined, ramshackle waystation stands empty in a grove, the remains of what was once a place of safety for refugees. It seems like it once housed many people, and was an aid to them escaping the horrors of the battlefields."
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "Food Store",
        "description": "Near some trees is a crate of plain but edible food supplies. Unfortunately the food is poisoned, designed to kill deserters and enemy soldiers who find it. There is a small mark in Thieves' Cant on the crate so those who left it know what it is. A Wisdom (Perception) check will reveal the dead bodies of previously poisoned soldiers nearby."
      },
      {
        "roll": 2,
        "title": "Dead Drop",
        "description": "A large fight has occurred here recently, with bodies piled up all around. Neither army has paused to bury their dead as the fighting has pushed to a new area. Carrion birds pick at the remains and a few peasants search the remains for valuables."
      },
      {
        "roll": 3,
        "title": "Poison Stream",
        "description": "The party comes across a village that seems perfectly fine, but is ominously quiet. The villagers are all dead, but it takes a while to find any bodies as most died in their homes. Enemy soldiers introduced a slow poison into the nearby river, their only water source. By the time anyone realised, it was too late."
      },
      {
        "roll": 4,
        "title": "War Profiteers",
        "description": "The sound and stink of industry leads the party to a squalid estuary polluted with chemical runoff and strewn with scraps of rusting metal. On a high platform out in the bay is a Kobold factory where munitions are made. One long line of barges ships raw materials to the platform, another brings finished products back to shore to keep the war going."
      },
      {
        "roll": 5,
        "title": "Nothing Stands",
        "description": "With cool precision, a phalanx of Shield Guardians disassembles an enemy town. Houses have been stripped of belongings, then broken down into their component parts. In the fields, arranged with geometrical exactitude, towering bonfires consume the debris. When the party arrives the Guardians are busy with their last task: prising up the cobbles of what used to be the town square."
      },
      {
        "roll": 6,
        "title": "Corpse Pit",
        "description": "There is a deep pit, where the bodies of the dead lie on top of each other. Flies buzz over maggot-infested mounds of rotting flesh. Soldiers throw the dead in here, some of them former comrades, and some, their enemies. Some may think it is time to burn everything inside, that the pit can be cleansed and rid of this eyesore for once and for all."
      },
      {
        "roll": 7,
        "title": "The Sacrificial Site",
        "description": "Behind the enemy's fortress, there is a small area encircled by dead warriors impaled on stakes. Skulls half-buried into the ground form a ritual circle where a sacrifice has recently been performed. The ground is streaked with red, for blood has seeped through the soil."
      },
      {
        "roll": 8,
        "title": "Ancient Faith",
        "description": "A ring of standing stones surrounded by mist is haunted by an Invisible Stalker commanded by an ancient priesthood. Soldiers scattered by conflict are drawn in by voices and pleas of loved ones. They cannot see one another, only hear the screams as the Invisible Stalker kills them one by one, until finally death comes for them all."
      },
      {
        "roll": 9,
        "title": "Army of the Dead",
        "description": "Though the bodies are long rotted away and buried by the grass that grows over their bones, the ghosts of two armies fight endlessly in a battle that will never end. By night, they ride or trudge, often half-submerged in lands that were once lower or passing through buildings that were not there in the past."
      },
      {
        "roll": 10,
        "title": "Red Wet",
        "description": "A robed person dips a bowl into the red waters of a river clogged with the dead, entirely aware of the pollution. When they glance up, their mouth is stained with blood and they give a grin that reveals sharp, white teeth. They give a bow and collapse into a mass of blood that flows into the stream."
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "Take That Back!",
        "description": "In a roadside inn, the party are overheard mentioning one side of the warring factions. A group of enemy elite soldiers (use the Gladiator stat block) decide to take offence, regardless of what was actually said. They issue a drunken challenge on the spot and take refusal as proof of cowardice. They will fight fair, but they will also do everything to win."
      },
      {
        "roll": 2,
        "title": "Angry Giant",
        "description": "One of the factions has enchanted a Hill Giant into a confused and livid rage and pointed it at a nearby enemy town or fortification. It blunders into the place attacking anything that crosses its path. To save innocent people the party will have to destroy it."
      },
      {
        "roll": 3,
        "title": "Crosshairs",
        "description": "While crossing the countryside, the party discovers they are actually walking between two armies. But no sooner have they noticed, the armies choose to charge each other. In moments the party is surrounded with fighting soldiers (use the Guards stat block), who will attack anything not wearing the colours of their side. The party will have to fight their way out of the middle of the battlefield."
      },
      {
        "roll": 4,
        "title": "Rogue Weapon",
        "description": "In an effort to halt the ongoing conflict, a cadre of Nobles have smuggled into the realm a powerful artefact from a distant land: a magical lamp. None amongst them, however, prove strong enough to control the Efreeti they release from its imprisonment. The Efreeti cares nothing for either side in the war, desiring only to prevent its return to its enchanted prison."
      },
      {
        "roll": 5,
        "title": "Secret Cargo",
        "description": "One of the masterminds behind the current conflict is secretly being transported between camps. Carried on a palanquin by a quartet of blinded Ogres and sustained within a bubble of water and glass, the monstrous, gold-garlanded Aboleth probes the surrounding area with its vast telepathic powers. It will attempt to destroy anyone who crosses its path, lest they divulge its current whereabouts to the enemy."
      },
      {
        "roll": 6,
        "title": "Fighting Air",
        "description": "A general has summoned Invisible Stalkers to guard a strategic site and kill any intruders. The opposing army wants that strategic site and will pay a large bounty to anyone who can kill these creatures and secure the site for them. The site is en-route to the party's destination."
      },
      {
        "roll": 7,
        "title": "The Terminator",
        "description": "The city's military unit has unleashed a Stone Golem in a last ditch attempt to push back invading forces. Unfortunately, the golem has misinterpreted instructions and is now killing every creature it sees indiscriminately. It stomps through the city, bulldozing everything in its path."
      },
      {
        "roll": 8,
        "title": "Angel on the Battlefield",
        "description": "A Deva released from an iron flask by a Paladin moments before they died is on a rampage across the area, determined to judge every single person who exists in these unjust lands. They can be talked down, but only after they have been defeated, as their righteous fury is too overwhelming for reasoning to reach them."
      },
      {
        "roll": 9,
        "title": "Shadows of War",
        "description": "In a corrupted area where the fighting involved extensive necromancy, sighing songs on the wind rustle the dead leaves and foul earth, and bodies here decay far too quickly to be natural. The Shadows and Spectres who haunt this place wait until the party is deep inside the life-sapping area of corruption before they attack."
      },
      {
        "roll": 10,
        "title": "Roc and Roll",
        "description": "With a blood-curdling shriek, a Roc wheels down from a peak and swoops to attack a group of straggling soldiers ahead. Its feathers are bloody, but it is not significantly injured, and grabs one soldier while the others scatter. It hunts near a route that is frequented by injured soldiers retreating from the battlefield for easy pickings."
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Heavy is the Head",
        "description": "Carefully hidden in a cave is a small crown belonging to the king of a defeated nation. His Ghost still haunts this precious possession, and attempts to scare off any who find it, with moans and gestures. He fears the party will discover that those who hold the crown can claim the kingdom for themselves, ignorant that his kingdom fell centuries ago."
      },
      {
        "roll": 2,
        "title": "The Worth of Words",
        "description": "A poor wandering peddler asks the party to take a look at her wares. They are all pretty common but serviceable second hand items. If they buy something, the peddler reveals she has much better wares in terms of information. She has travelled the area extensively and can tell the party anything about the local politics, troop positions, and even what bribes to offer certain officers."
      },
      {
        "roll": 3,
        "title": "Nothing More",
        "description": "A raven familiar arrives and tries to get the party's attention to lead them to its master, a powerful Archmage who has been injured in a battle. She is in need of healing and can reward anyone that helps them with a magic item of arcane lore. She hides the fact that it was her own half-cooked spell that injured her."
      },
      {
        "roll": 4,
        "title": "Consumers",
        "description": "On the roadside near a burned out cart, the party encounters a young mother and her three children. She begs the party to escort her safely to a nearby town. In actuality, the woman is a corrupted Archmage, her three children transmogrified Imps. Together they stalk the battlefields consuming emotions for use in devious spells. One child eats rage, the other fear, the last despair."
      },
      {
        "roll": 5,
        "title": "The King Returns",
        "description": "Slowly, with great difficulty, an old man follows a narrow lane. Stooped and leaning on a cane, he wears dark clothes, his face covered in a porcelain mask. He speaks gently but sparingly, asking for guidance as 'memory isn't what it used to be.' The man is actually an ancient Mummy, the region's first monarch, returned to lead it back to peace."
      },
      {
        "roll": 6,
        "title": "An Angelic Vision",
        "description": "The party receives a vision one night when they are sleeping. An angel appears before them. Though it seems invested in their plight, the angel secretly does not have faith in the party. When they wake up, they find a doll that resembles the angel. The doll can be used to cast Dispel Magic and Counterspell once a day."
      },
      {
        "roll": 7,
        "title": "The Boy in the Well",
        "description": "A teenage boy hides inside a well in a burning field. He pleads with the party to take him somewhere safe. He offers to be a scout for the party, but hides the fact that he can turn invisible for up to an hour once a day. This ability brings him shame, as he hid from attackers who burnt down his village."
      },
      {
        "roll": 8,
        "title": "The Universal Soldier",
        "description": "A soldier in armour sits wearily beside a stream. He shudders with every distant sound of fighting. In truth, he died on the battlefield but somehow rose again, becoming an avatar of war who can feel every violent thing that happens within this region. He hopes to find out why this happened and how to stop it."
      },
      {
        "roll": 9,
        "title": "The Warmonger",
        "description": "A cheery inventor tinkers with a small mechanism as she walks along and happily expounds on how she has applied magical theories to it without being asked. She eventually reveals that she is seeking out an example of the war machines used by the enemy to understand how they work and how they could benefit her side."
      },
      {
        "roll": 10,
        "title": "Watcher of the Wars",
        "description": "A Storm Giant is walking the road, ignoring the people who hurry past her. She has come to this place to better understand the proclivity of so many other species for violence, to know whether they should be allowed to live. She offers the characters knowledge in return for every story they tell her of violence."
      }
    ]
  },
  "Wild Magic Lands": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "Human but were transformed by a magician",
        "description": "Though they seem truthful and helpful, they are carrying an excessive amount of weaponry. Theatre Troupe: A troupe of actors and musicians offers to perform for the party. They use"
      },
      {
        "roll": 2,
        "title": "magic to create the stage and enhance the music they play",
        "description": "They will expect to be paid in some way but will also happily talk and share gossip if the party is a good audience. Age of Conflict: On a road of alabaster tiles, the party encounters a confused Commoner. As they travel, their age magically fluctuates. The further they get from their village the older"
      },
      {
        "roll": 3,
        "title": "they become and vice versa",
        "description": "In youth they want to explore the world, but in later years they desire to return home. The Commoner seems doomed to advance and retreat, age and de-age, getting nowhere. Sluggish Market: Standing in glutinous amber, the party encounters a morose slug selling various cheap trinkets and ineffectual votive candles. It begs the party to purchase its wares,"
      },
      {
        "roll": 4,
        "title": "for no-one has deigned to in many years",
        "description": "The reason for this is clear: unbeknown to the slug, its thoughts, including uncharitable ones about its customers, appear above its head in flashing Illusory Fish: A dainty Sprite, her hair a nebula of rainbow glitter, whooshes over the party."
      },
      {
        "roll": 5,
        "title": "She sprinkles petals over them that turn into fishes made of smoke and stardust",
        "description": "As the fish darts around the party, she giggles and answers any questions in riddles and rhymes. Tea Party: A group at a long table set for tea invites the party to join. They are cursed to never"
      },
      {
        "roll": 6,
        "title": "leave the table but must change seats every 37 minutes",
        "description": "The curse has driven some of the guests quite mad, but can be broken if everyone agrees to leave. However, the longer they have been there the hungrier each person is. Tadpoles in Her Hair: A woman sits on a rock near a waterfall, combing her hair. She appears"
      },
      {
        "roll": 7,
        "title": "to be a Mermaid, but not quite",
        "description": "Spindly bat-like wings grow from her back, and small leaves sprout from the fins along her upper limbs and tail. She flicks tadpoles from the stray strands of hair on her comb into the water. Can't Summon Love: A disgruntled wizardly student travels with an impractical amount of magical paraphernalia. He asks the party if they know anything about summoning Fae beings"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "and explains he was tricked by a Fae a few weeks ago and has become a joke to the other students. He travelled here to learn how to summon that specific Fae again and trick them in retaliation. Whole New World: A person with a magical aura that seems far too large to be packed into a medium-sized creature greets the party with a strange cadence. They are a powerful entity"
      },
      {
        "roll": 9,
        "title": "from another plane who came through a portal torn open by a magical disaster",
        "description": "They were pulled into the body of one the sorcerers who was trying to contain the rift and are now trapped. Who Am I?: An unusual construct, unlike any the party has seen before, clomps along the"
      },
      {
        "roll": 10,
        "title": "road",
        "description": "It has customised its chassis with beautiful swirling paintings like tattoos, which it adds to over time. The construct was imbued with a soul by the machinist who created it, and now seeks them to learn more about itself. ENCOUNTERS: WAILDN CMIAENGITC RLAUNINDS 5"
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "valley, already resplendent with harvestables",
        "description": "Anyone hit by such a beam gains Inspiration, but trying to spot and be targeted by one of the beams requires a successful Wisdom (Insight) and Dexterity (Acrobatics) check. Bladesmith: The party discovers a skilled blacksmith in a village they are passing through."
      },
      {
        "roll": 2,
        "title": "They will sharpen any blades the party has for the usual fee",
        "description": "However, the local magic augments this blacksmith’s skill, granting a +3 bonus to attack and damage rolls for one hour. Bottled Axolotl: A mossy boulder rolls through the air just above the ground. Riddled with little tunnels, it is home to a teeming colony of coughing axolotl. These tiny transparent"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "amphibians can be teased out with beckoning gestures and sincere words of praise. Once a day they expectorate a milky fluid that acts as a Potion of Healing. After 1d10 days the axolotl loudly evaporates. Mind Prisms: A creature with four splayed legs and an old man’s face crawls out of a hillock."
      },
      {
        "roll": 4,
        "title": "Pushed into its naked back are glass prisms",
        "description": "As it skitters towards the party, the prisms display their memories in monochrome. A Dexterity (Sleight of Hand) check can be made before the thing disappears to grab a prism. Each functions as a one-use Detect Thoughts spell. Good Eggs: A clutch of pink, oval eggs sit snug inside a nest made of feathers, twigs, and"
      },
      {
        "roll": 5,
        "title": "animal bones in the hollow of a tree with orange leaves",
        "description": "They hatch when the party approaches. Gaseous beings spiral out of the hatching eggs and fly to the east. If the party follows them, they find a pot filled with 20d20 gold at the end of a rainbow. Pre-Baked: Large loaves of bread grow straight from the ground, where swarming Imps are"
      },
      {
        "roll": 6,
        "title": "slicing off pieces and placing them in picnic baskets",
        "description": "Numerous loaves have been chewed on by the wildlife, with many more showing signs of mould, so a careful examination is needed before any bread is harvested. Great Berries: As the party trek through the woods, they come across bushes bearing bright,"
      },
      {
        "roll": 7,
        "title": "colourful berries that come in all shapes and sizes",
        "description": "While already tasty and filling, a successful Intelligence (Nature) or Wisdom (Survival) check identifies these berries as antitoxins, with the same properties of a Potion of Resistance. Things Wondrous and Strange: In a large pack beside a path into a forest, overgrown with"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "moss and clearly not moved for some time, the party finds a well-stocked set of Alchemist’s Supplies, a Herbalism Kit, and a range of unusual ingredients from other planes and far-off lands. Whoever once owned these is long gone, but they could be useful. Music and Mayhem: An eerie tune with a lilting melody comes from further down the road. It"
      },
      {
        "roll": 9,
        "title": "is a magical musical instrument playing itself, hovering in the air",
        "description": "It dances out of the characters’ hands until they catch it with a Dexterity (Sleight of Hand) check. It has the powers of the Pipes of the Sewers, no matter the instrument. Eat and Be Merry: A marvellous and fresh banquet is laid out by the side of the road by"
      },
      {
        "roll": 10,
        "title": "invisible servers",
        "description": "The characters' names appear on place cards on the table and they may consume as much of the food and drink as they like without ill effects. Any they take with them disappears with the next sunrise if uneaten. 65 UNCHARTED JOURNEYS"
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "safely but passing through it requires some force",
        "description": "The Outrider must make a Wisdom saving throw while passing through, reliving a vivid childhood memory as they pass, breaking the wall into jagged shards. Should they fail, they will forget this memory forever. Wizard Battle: Two Archmages are engaged in a magical battle some distance apart. While it"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "may be a friendly match, their spells ravage the area between them, which the party is trying to pass. A Wisdom (Survival) or Intelligence (Arcana) check can discern a safe way to travel through the battlefield. Living History: Seven centuries of history have become unmoored from the river of time and wash across the countryside in a confusing mess of anachronistic phenomena: cities pop into"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "existence, flourish and fade; rivers veer wildly; battles are refought and commemorated in the same instant; and no two people speak the same temporal dialect. To navigate this wild clash of time, the Outrider must pass an Intelligence (History) check. Whoops: A misfired spell has disrupted reality here. Atoms tumble apart with pitiful shrieks, light bends at inappropriate angles, and gravity regularly just shrugs and gives up. Traversing"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "this particularly random area requires the Outrider to pass a check randomly chosen from Dexterity (Acrobatics), Strength (Athletics), Intelligence (Arcana or Nature), or Wisdom (Perception or Survival). Tales of Terror: A powerful Archmage has blocked the path with a magical barrier. They"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "enjoy a scary tale and will allow the party to pass if they can recite a chilling story. Telling such a tale requires a Charisma (Intimidation) check. The magician especially enjoys ghost stories; telling these allows the check to be rolled with advantage. Balloons!: A thick forest of balloons block the party’s path. There is no clear way of going"
      },
      {
        "roll": 6,
        "title": "around them other than via flight, for tall cliffs surround this balloon forest",
        "description": "The Outrider can safely cut their way through the balloon forest with a successful Dexterity (Sleight of Hand) check. Otherwise, a balloon pops and any creature within 5 feet of it takes 1d10 Acid Damage. Dancing Buffaloes: Buffaloes in frilly tutus and ballet slippers stand on their hind feet and"
      },
      {
        "roll": 7,
        "title": "dance",
        "description": "They perform barrel leaps and invite the party to dance with them, pulling the Outrider into their performance, necessitating a Dexterity (Acrobatics) check to keep in rhythm with the beasts. Cutting Wits: The party finds their way blocked by a wall of razor sharp spinning blades. The"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "blades block their path but do not attack, and briefly stop spinning every few seconds. The Outrider must make a successful Wisdom (Perception) check to notice the little sparks of magic that indicate when the blades are about to stop spinning. Roaring Rapids: Due to some magical accident, a river has become animated and lifts up from"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "its bed like a huge, dripping aquatic creature, sweeping across the land with the force of a wave or sending out floods of water. The party can try to avoid it entirely, adding an extra Encounter onto their Journey, or negotiate with it using Charisma (Survival) to agree on safe passage. Prismatic Dance Party: A floating crystal in the middle of a cave has become the origin point"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "for a constant randomised Prismatic Spray, weakly sending out beams of different coloured lights that the party has to avoid to progress. The Outrider must make a Dexterity (Acrobatics) check to hop between cover, finding an optimal route. ENCOUNTERS: WAILDN CMIAENGITC RLAUNINDS 5"
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "cannot break free of",
        "description": "The effect in the area is powered by runes carved on several nearby trees. The party can figure out how to defuse the spell using Intelligence (Arcana) checks. Forgotten Magic: A Mage has somehow forgotten how to do magic. They know who and what"
      },
      {
        "roll": 2,
        "title": "they are but cannot remember how to cast spells",
        "description": "They have actually been cursed by a rival, but if the party can make Wisdom (Insight) checks then can help the Mage unlock the triggers in their mind keeping their magic locked away. Where Is My Mind?: A massive bowl-headed Cloud Giant approaches the party sitting atop a drifting orange cloud. She relays her current troubles: forgetfulness, mood swings, an ever-"
      },
      {
        "roll": 3,
        "title": "present ache in her towering cranium",
        "description": "Clambering up, the party can look into the Giant’s open head. Happily splashing about within is a naughty duck. The party can catch it with a Wisdom (Animal Handling) check. In a Jam: Chutney-producing Giant Centipedes have escaped the corral they are kept in and are now tumbling with joyous abandon across the landscape. Their owners, a pair of tiny"
      },
      {
        "roll": 4,
        "title": "clockwork twins, plead for help",
        "description": "The party must succeed a Dexterity (Acrobatics) check to catch the centipedes. In return, the clockwork twins will offer a pot of their finest centipede chutney. It is absolutely foul. Fear is the Mind Killer: A group of travellers have been affected by a form of the Fear spell. They are terrified, both of each other and anything and everyone around them. In a brief"
      },
      {
        "roll": 5,
        "title": "Entry 5",
        "description": "moment of lucidity, one of the travellers asks the party to keep them safe until the spell wears off. Keeping an eye on their erratic behaviour all day requires a Constitution (Perception) check. Late for the Party: A pompous magistrate and his retainers have fallen into a pit trap. They wear large, floppy hats and puff-sleeved tunics fit for a ball. They plead for assistance, emphasising"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "that they must attend the ball of the century or be ostracised, but refuse to get their garments dirty. Pulling them out of the pit trap requires a successful Strength (Athletics) check. The check is made at Disadvantage when trying to keep the party-goers clean. The Cake is a Lie: A giant mouse gnaws at a gargantuan cake, but the cake is an illusion and"
      },
      {
        "roll": 7,
        "title": "the mouse is cursed to never see the truth",
        "description": "The poor creature whimpers with unfulfilled desire and desperation. A successful Charisma or Wisdom (Deception) check will convince the creature into thinking that the cake is not worth eating and break the curse. Satyrical Spell: A Satyr is unsuccessfully charging at a stone wall. They explain that they were"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "summoned by a Warlock as a drinking buddy, but for some reason, when the summoning spell ended, the Satyr was not able to get home. Supposedly there is a portal somewhere near here. The Outrider can make an Intelligence (Arcana) check to find and activate the portal. The Sorcerer's Apprentice: An explosion followed by swears comes from the bottom of a well,"
      },
      {
        "roll": 9,
        "title": "where a Sorcerer has become trapped due to a spell that backfired spectacularly",
        "description": "They now cast random spells all the time and can’t leave the well. With a successful Intelligence (History) check, the party can recall similar stories and their holistic remedies. Pick Me: The party finds two identical people arguing in front of a group of their friends. They"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "quickly learn that the group encountered a Doppelganger and it assumed the form of one of the party, but now they cannot tell which is which. With a successful Wisdom (Insight) check, the party can determine the true person. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "be trees, giving the party disadvantage on checks made to spot them",
        "description": "They use this disguise to sneak up on their marks and attack with surprise. The illusion is broken when they attack. Gateway to Hell: A Chain Devil attacks the party with little warning, enjoying a little wanton"
      },
      {
        "roll": 2,
        "title": "violence and murder before returning home",
        "description": "Weakened by its travels, it does not posses its natural damage resistance and immunities. The portal that brought it here might still be open, bringing more devils if it is not closed. Dreams of Avarice: In a secluded dell of whispering greenery, an Ancient Red Dragon has slept for centuries, curtailing its evil schemes to expand its treasure hoard. However, as its"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "dreams turn again to riches, scaly pods push forth from its exposed stomach, erupting into a chattering horde of vermillion Kobolds. Embodying the Dragon’s desire for wealth, they rampage across the countryside before dissolving in sunlight. On Reflection: While crossing an expanse of vivid pink liquid no more than an inch deep, the party can see their reflections with crystal clarity in the water. Without warning, these"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "reflections pull themselves up out of the liquid, still rippling and with their faces horribly inverted. The Zombie party attack the originals, each focusing on their counterparts, attempting to drag them under the water. Dark Water: Pools of dark, tepid water dot the moorland. Slinking Chuuls occupy these pools,"
      },
      {
        "roll": 5,
        "title": "waiting for unsuspecting prey",
        "description": "Their clicking pincers give away their position, as well as their loud proclamations of terrible poetry. Enchanted Grove: An area the party are passing through is actually the home of a group of"
      },
      {
        "roll": 6,
        "title": "Dryads",
        "description": "They consider the party trespassers, but might be reasonable if the party just passes through and touches nothing. However, if the party choose to rest here or pick the flowers (or worse) the Dryads attack. Show Business: A band of Berserkers compete in a talent competition. They are poor musicians"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "but they fail to understand that no one appreciates their tone-deaf wailing and three-chord anthem. They respond by attacking the judges, the audience, and their rivals. If the party fail to applaud the performances, the Berserkers will respond violently. Be Our Guest: The door to this wizard's tower has been nailed shut, but there are clearly"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "valuable books, chests, and arcane items inside from the glow of magic under the door. At first all seems quiet in the tower. Then the Rug of Smothering, Flying Swords, and Animated Armour on stands come alive and try to attack the party. Death From Above: When the party enter an old mine, the wooden ceiling overhead starts to"
      },
      {
        "roll": 9,
        "title": "crack and splinter as a colony of Giant Spiders falls onto the party's heads",
        "description": "The Giant Spiders are embarrassed and flustered, and want to scuttle away, but the party may well sustain some unpleasant bites as they flee. Stone Guardians: A cluster of Gargoyles perch on the underside of a ruined bridge's huge"
      },
      {
        "roll": 10,
        "title": "arches, which are cracked, pitted, and melted",
        "description": "Once animated to protect and repair the bridge, the Gargoyles have long since forgotten their task and swoop down to attack anyone that passes nearby. They try to throw any intruders off the nearby cliffs. ENCOUNTERS: WAILDN CMIAENGITC RLAUNINDS 5"
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "Everything in the area looks a little strange and ethereal under this odd light",
        "description": "This glow also reveals everything it touches, meaning everyone can see as if they had a True Seeing spell cast on them. Rain of Magic: A sudden rainstorm breaks over the party. While the water is safe, each droplet"
      },
      {
        "roll": 2,
        "title": "contains sparks of magic and explodes like glitter from everything it strikes",
        "description": "Where the rain falls, small magical effects occur, like odd plants growing, items changing colour, insects changing form, and even healing scars on exposed skin. Islands of Wonder: The party encounters a mirage showing a chain of islands hovering on the horizon. Rather than large and distant, the intangible islands are in fact very small and very"
      },
      {
        "roll": 3,
        "title": "close",
        "description": "The party sees, arrayed on the shores, tiny animal-headed folk beckoning and waving. At night the islands and their inhabitants are consumed by a tiny volcano, but are restored come morning. Newly Personified Creature Generator: In a forest clearing lies a vast matrix of metal cubes. All inscribed with obscure runes, they twist and slide past each other like puzzle pieces. Every"
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "twelve seconds they click into new combinations, a spout at the mechanism’s heart disgorging another randomly determined being. Each creature has been summoned from their own lives and planes. Wilderness of Mirrors: The party comes across hundreds of mirrors hanging in the air at odd angles all over the area. Each mirror casts them in a different reflection. They might have"
      },
      {
        "roll": 5,
        "title": "different attire, or might even be a different species or gender",
        "description": "While no sound crosses the mirrors, the party can interact with their other reflections as separate people. Should a mirror shatter, that reality may be lost forever. Peaceful Plains: The forest gives way to an open plain and rolling hills. Dawn is approaching,"
      },
      {
        "roll": 6,
        "title": "Entry 6",
        "description": "and the stars slowly blink themselves to sleep as rays of sunlight peek from the east. A pod of whales swims overhead in the pale green sky. Melancholic whalesong replaces the chirping of crickets. Glimpse of a Mirror World: The canyon hums with a sighing vibrato. The air is heavy. A tear"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "in the sky reveals an upside down world, an exact mirror image of the landscape around the party, though this is simply a trick of the light and not any sort of portal to a parallel world. Interplanar: Small chunks of different planes bring parts of those realms into the same place."
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "Random elements from other regions are crashing together to change areas of this land, such as an ocean pouring into a hellish lava flow, or a Fey forest where corrupting undead energy encroaches on the trees and animals. Crystal Fall: For a single night once a year, instead of clouds, crystals fill the curve of the sky"
      },
      {
        "roll": 9,
        "title": "like the ceiling of a cavern, glittering in the moonlight",
        "description": "As dawn approaches, they begin to rain down and shatter as they reach the ground, plunging deep into the earth and burrowing downwards like living things. By morning the sky is restored. Metamorphosis: In a forest glade, the wildlife shifts from one kind of creature to another. A"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "deer drinking at a stream becomes a fish and then a bird that quickly extricates itself from the water. A rabbit being chased by a fox becomes a bear, while the fox becomes a frog. They seem unconcerned and adapt quickly to their new forms. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "Entry 1",
        "description": "However, this may also mean they can be negotiated with as they understand Common. They might even be convinced to help protect nearby villages or the party if they agree to terms, mostly concerning food. Web Assassin: Giant Spiders have their lair nearby and prey on travellers. They leave their"
      },
      {
        "roll": 2,
        "title": "victims' possessions hanging tantalisingly within sticky webbing",
        "description": "If the party kills the largest spider it turns into a human wearing a Cloak of Arachnida. But was the cloak responsible for their transformation? Ready for my Close-Up: A Remorhaz rampages through a village in a truly savage display."
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "Occasionally it glances at the orb of white metal imbued with Sending hovering near its shoulder. This device seems to be recording the creature’s attack. The orb barks directions at the Remorhaz: ‘More violence!’ ‘Roar louder!’ ‘Great footwork, darling!’ Everyone’s a Critic: Spurned by critics and ostracised by her fellow artists, a Drow sculptor"
      },
      {
        "roll": 4,
        "title": "has created the perfect engine of revenge",
        "description": "a Gorgon sculpted from amethyst and glass and filled with liquid fire that turns its victims to glass. Both the statues it creates and the Gorgon itself will sell to art aficionados. Duelling Blade: An invisible swordsman has been killing other warriors. In truth, it is a"
      },
      {
        "roll": 5,
        "title": "Flying Sword seeking a worthy person to wield them",
        "description": "It challenges anyone in the party to single combat. If it can be defeated it will consider that fighter worthy. They may then use it as an ordinary (but moderately intelligent) magic weapon. Picnic: A family of Hill Giants are having a gourmet picnic on a picturesque hillside. The food smells delicious but it is soon apparent that the meals are made from people they have killed."
      },
      {
        "roll": 6,
        "title": "They ignore passersby but are aggravated by those who interrupt their meal",
        "description": "Their possessions are mundane but the picnic basket is actually a Bag of Holding. Unfortunately it is mostly filled with body parts. Talking Heads: Loud voices come from a swamp to the north, where a Hydra sits on a treasure"
      },
      {
        "roll": 7,
        "title": "chest",
        "description": "Its many heads are hotly debating amongst themselves. They have different philosophical views and cannot find a compromise. Taking sides causes all but one of the heads to attack the party, while the remaining head scolds the others. What Lies Beneath: An artificer built their house on top of an Aboleth's underground lake"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "lair so they could mine its forbidden knowledge and use it as a guardian for their horde of magical items. The Aboleth turned the tables on its captor, forcing them to lure visitors to the basement pool with promises of magical gifts so it could feast on them. The Glass City: The lightning-blasted sands near a Blue Dragon's lair lead the party to"
      },
      {
        "roll": 9,
        "title": "investigate disappearances and sinkholes in the area",
        "description": "Glass struts reach up from the sands, leading down to a glass city that the dragon has built to house its riches. The grim remains of those who tried to raid the glass city before are evident. An Inevitable End: A mysterious set of messages leads the party to a majestic waterfall. They"
      },
      {
        "roll": 10,
        "title": "emerge onto a sunlit plateau where a Couatl waits for them",
        "description": "It promises the party the gold local people have brought as offerings if they kill it: it has foreseen that if it does not die here, it will rain destruction on the world. Despite its request, it fights viciously to survive. ENCOUNTERS: WAILDN CMIAENGITC RLAUNINDS 5"
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "where time itself seems a little strange",
        "description": "The party need not make any checks for this Encounter. If the party takes a Short Rest here, they gain all the benefits of having taken a Long Rest instead. At the end of their rest, the ancient tree and all the poppies have withered and died. Inn of Shadows: A pleasant inn offers food and good ale for the party at very little cost, but it is"
      },
      {
        "roll": 2,
        "title": "also at a small nexus where planes intersect",
        "description": "The patrons are all people (or monsters) the party have slain at some point, on their way to the afterlife. While these ghosts cannot directly harm them, some might demand an explanation of why they were dispatched. Snoozing 101: In a nest of warm, rubbery glass an elderly Roc professor gives a rambling lecture on Ogre taxation to a sparse, disinterested class of Roc hatchlings. The party can sneak"
      },
      {
        "roll": 3,
        "title": "Entry 3",
        "description": "into the back of the lecture, where the professor’s droning, soporific voice swiftly lulls them to sleep. However, if the party performs poorly on the test that follows, they will be violently ejected. Lost Love: In a mighty elm live a colony of platinum Giant Seahorses. Speaking telepathically, they offer the party rest for the evening. A Seahorse swallows each party member, depositing"
      },
      {
        "roll": 4,
        "title": "them in a transparent stomach filled with sweet amber liquid",
        "description": "The price of resting here is a memory of a time when each party member felt loved. In the morning the memories are gone, consumed by the Seahorses. Witches Cottage: In a small cottage, a local witch (use the Mage stat block) distils, collects, harvests, and otherwise prepares, spell components. They are collected in myriad jars or hang"
      },
      {
        "roll": 5,
        "title": "from the rafters of her home",
        "description": "She will sell them to any magician, but might also might trade them for magical lore. She may also offer a plain but decent meal and a place to rest if the party is polite. We’re Fun-guys: The party arrives at a Myconid campsite. The fungus folk are drinking from a"
      },
      {
        "roll": 6,
        "title": "communal cup that contains a pungent brew",
        "description": "To camp here safely, the party must succeed on a Charisma (Performance) check to entertain the fungus folk. Otherwise, the Myconids supply their worst brew and the party becomes Poisoned for a day upon waking up. Who Lives in a Shoe?: An old woman and her chimaera-like children (all use the Doppelganger stat block) live in a house shaped like a shoe. They peer at the party with a mix of curiosity"
      },
      {
        "roll": 7,
        "title": "and disdain",
        "description": "If the party offers to clean the house and cook meals for the old woman and her children, she allows them to stay. Otherwise, they shoo the party away in an aggressive flurry, ruining any chance for a rest. A Cosy Proposition: The party finds a huge fluffy bed in the middle of a wasteland, large"
      },
      {
        "roll": 8,
        "title": "enough for a giant but apparently completely unused",
        "description": "In the shadows of the bed’s canopy lurk Gargoyles, but they are not aggressive unless anyone who sleeps in the bed is of evil alignment (the Gargoyles discover this through the sleepers' dreams). The Endless Mansion: This lovely country house opens its door invitingly when the party is"
      },
      {
        "roll": 9,
        "title": "nearby",
        "description": "It was created using a permanent Magnificent Mansion spell. Inside, every room shifts around the hallways and it is easy to get lost. Scribbles in different hands cover the walls of rooms, complex directions to reach the hall, or perhaps right into a trap. Perfect Day: Spread ahead is a field of spring flowers where dozens of picnics are set out, red checked blankets, baskets of food, and perfect weather. The ground occasionally shakes"
      },
      {
        "roll": 10,
        "title": "and bells ring discordantly out of sight",
        "description": "If the party stay longer than they feel they need to, a neighbouring group of picnicking Dretches neatly pack up their picnic before brutally attacking the party. 283 65 UNCHARTED JOURNEYS"
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "circle",
        "description": "The circle is filled with stones and boulders, and the whole thing has a magical aura. The stone circle was once a portal to a layer of hell, as seen through small gaps, and if the blockage is removed it may open again. Reflecting Pool: A ruined tower rests next to a calming lake in a lonely part of the land. If the"
      },
      {
        "roll": 2,
        "title": "Entry 2",
        "description": "party looks at the reflection of the tower in the lake it appears as it did in better days. In that time it reached high in the sky and was covered in runes that might be readable if only the water remained still. Just Like That: In blazing colours across the morning sky, the story of this realm’s creation"
      },
      {
        "roll": 3,
        "title": "plays out",
        "description": "An elderly Archmage in robes blazing with sigils, reaches into an empty top hat and produces a sparkling galaxy, the words ‘Ta Da!’ shimmering in technicolour. Whether the vision reveals the truth or is just an elaborate advertisement for a wizard’s party act is unclear. Shadow Market: On a plain of fused glass stand market stalls, each crowded with bounteous"
      },
      {
        "roll": 4,
        "title": "produce",
        "description": "The food is pristine, if a little dusty. The market is devoid of life, but the glass is striped with the shadows of former customers, caught in the moment of their destruction. Every time the shadows are viewed, they have taken different positions, but are never seen to move. Burned Sorcery: In a clearing in a wood, a magical sigil is burned into the earth. The ash of"
      },
      {
        "roll": 5,
        "title": "dead magic seems to cling to the air here",
        "description": "While the sigil is old, vegetation refuses to grow in the lines it has left. Some form of magic clearly went very wrong here. Fireworks: As the party travels across an expanse of purple sand dunes, the sky erupts in a"
      },
      {
        "roll": 6,
        "title": "firework display",
        "description": "Catherine wheels, Roman candles, fountains, and sparklers decorate the sky for brief transient moments. They form images of glorious desert cities and their fantastical inhabitants, all lost to time, glowing briefly before fading into the night sky. Singing Plants: The enchanted garden is home to many sentient potted plants. They are"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "passionate singers, blissfully ignorant of the earache that is their discordant voices. If one endures or is tone-deaf and listens carefully, they discover that the plants sing of ancient secrets and customs of a long extinct fey people. Preserved for the Ages: Ranked crystal tombs with magic spells woven into their creation are"
      },
      {
        "roll": 8,
        "title": "designed to preserve the old dead wizards placed inside",
        "description": "Each tomb has the name of a wizard on it and the inscriptions round the tombs indicate that they have been kept in this magical stasis so they might someday be restored to youth. Falling Upwards: A huge spherical building was built on a place where gravity was entirely"
      },
      {
        "roll": 9,
        "title": "removed by a magical phenomenon",
        "description": "The architecture inside was designed to be seen from every possible angle, as once within its walls, anyone can treat gravity as though it does not exist. It takes some careful navigation to land on your feet outside the chamber. Magical Experimentation: In a magic hospital and laboratory, an order of spellcasters from different disciplines experimented on people to correct unusual magical maladies. Their notes"
      },
      {
        "roll": 10,
        "title": "Entry 10",
        "description": "are still here, as are the heavily reinforced rooms, unique equipment to drain off magical power or introduce it, and a clear sign of where something inside broke out violently many decades ENCOUNTERS: WAILDN CMIAENGITC RLAUNINDS 5"
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "There are ten stones, each one with a skeleton chained to it",
        "description": "If anyone steps into the circle, the skeletons writhe and begin to scream. Leaving the circle allows their torment to cease. It is unknown if destroying the skeletons releases their souls, or causes more pain. Chapel of Rest: This small chapel has quite a large graveyard attached. An old priest tends the"
      },
      {
        "roll": 2,
        "title": "graves and will talk to the party",
        "description": "They tell them the soil here is good at holding the dead. All those buried in the graveyard were once undead, interred here to ensure they do not rise again. At night each grave seems to sigh and moan. Ghost Train: A great rushing engine of blue glass and oily black metal thunders and booms"
      },
      {
        "roll": 3,
        "title": "through the valley, its iron tracks appearing before it as it races along",
        "description": "Thick smoke and sparks leap into the air from a hundred funnels, while streams of screaming Ghosts leak from the rusting joints. Melted into the control cabin is its deranged pilot, a maniacally laughing Balor. Polished Off: In an obsidian palace, devils of every colour troop down winding stairs. Their minds dulled, they step willingly into vast rendering vats where their forms are melted and"
      },
      {
        "roll": 4,
        "title": "condensed, then pumped through spiralling tubes down to a velvet-lined chamber",
        "description": "Each tube ends in a tiny brush. With quick sweeps they apply vivid nail polish to the outstretched hands of a lazing Marilith. Cave of the Heart: Deep inside this cave is a wall that is polished to a mirror-like finish. Those"
      },
      {
        "roll": 5,
        "title": "reflected here see themselves as a caricature of their worst trait",
        "description": "It is a way to face your own darkness, but is often an uncomfortable revelation. Those who visit might even make that trait even worse. Tomb of the Vampire Plant Lord: The memory of vampiric flowers is etched upon the walls of the mausoleum. Each tendril and every petal were reproduced with exact detail. Their victims"
      },
      {
        "roll": 6,
        "title": "were depicted as faceless people with screaming mouths",
        "description": "If the party faces a Plant monster during the rest of their Journey, they must roll a Wisdom saving throw or become Frightened of the plant. Spa of the Grotesqueries: Smoke-filled bubbles shaped like skulls float about in a roadside"
      },
      {
        "roll": 7,
        "title": "spa",
        "description": "The water is tinged with blood. Unseen attendants draw a lemongrass-scented bubble bath for masked patrons, warmed by still-beating hearts extracted from lost wanderers sacrificed for their pleasure. Abhorrent: Priests welcome the party into a seemingly-benign monastery, but it quickly becomes clear that all is not what it seems. The clerics are twisted hybrids of humanoids and"
      },
      {
        "roll": 8,
        "title": "aberrant creatures",
        "description": "They believe that it is a sacrament to seek perfection, and will not let the party go without accepting a potion that mutates them with aberrant body parts, for themselves or another creature. The Rag Picker: Travelling along the road on a magically-animated contraption loaded with"
      },
      {
        "roll": 9,
        "title": "pieces of junk, a scrap dealer offers the party a ride",
        "description": "When the scrap merchant spots someone on the edge of the road, clearly wounded, he gets down not to help them but to extract some sort of essence from them in a way that kills them. Poetic Justice: In a stony area that draws in magical energy from the nearby countryside, a"
      },
      {
        "roll": 10,
        "title": "Wereboar is using storage receptacles to create magic batteries",
        "description": "He was once the lover of a Fey lord, who turned him into a monster. He came to this land to gain enough power to summon his former lover here and entrap them in a magic prison. 65 UNCHARTED JOURNEYS"
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "revenge",
        "description": "They will attack when the party is at its weakest and will give no quarter. They also know the party’s tactics very well. Those they kill also return as Wights to punish the allies who failed to protect them. Spirit of the Wolf: During the night, the party is attacked by the spirit of a great wolf (use"
      },
      {
        "roll": 2,
        "title": "the Hell Hound statblock, but its breath deals Cold damage instead)",
        "description": "Any party member that takes damage from the wolf spirit’s Bite show’s fragments of canine behaviour for one month. And I Must Scream: Staggering through a forest of wavering kelp, a mute Stone Giant clutches"
      },
      {
        "roll": 3,
        "title": "at the swollen flesh of its neck",
        "description": "Every few steps it vomits up another Gibbering Mouther which pleads for help in a hundred different languages. Maddened with pain, the Giant lashes out at everyone in its path, unable to recognise attempts to help it. Golden Child: Surrounded by a nimbus of golden light, a toddler wanders along a shore."
      },
      {
        "roll": 4,
        "title": "Entry 4",
        "description": "Made invulnerable in a magical accident, the child is chaperoned by a monstrous Behir, a creature formed from the amalgamated members of the child’s family. The beast and its ward share a telepathic link, with the Behir acting on the toddler’s every passing whim and fancy. Dark Reflection: In a ruined house the party finds a large mirror. It has a magical aura and is"
      },
      {
        "roll": 5,
        "title": "completely resistant to damage",
        "description": "During the night a Doppelganger of each party member that looked into the mirror steps out of it. They follow the party in secret, and try to attack and replace their double whenever they are alone. Why a Wyvern?: A Wyvern on a rocky ledge bursts into flames and is suddenly teleported to"
      },
      {
        "roll": 6,
        "title": "the surface of a lake",
        "description": "Without warning, it turns invisible and then flickers back into view. The Wyvern appears to be confused and roars in frustration at what’s happening to it. The party can cast a spell to dispel this wild magic or put it out of its misery. No Talent at All: A Clay Golem uses its finger to draw stick figures in the sand. It beckons at"
      },
      {
        "roll": 7,
        "title": "Entry 7",
        "description": "passing travellers to look at its art, hoping for positive feedback and encouragement. Art critics beware, for it does not take negative feedback very well. Guardian of Nothing: A Shield Guardian patrols a ruined library where the only thing left"
      },
      {
        "roll": 8,
        "title": "intact is a large chest that must surely be stuffed with valuables",
        "description": "The Shield Guardian's last order from its master was to defend the objects in this place. Unfortunately, it has not yet realised that the only thing left here is actually a Mimic. Choir of Madness: Exploring an abandoned theatre is unnerving enough, but it is made an"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "awful lot worse by the discordant singing that comes from the many mouths of the Gibbering Mouther who ate all the performers. The creature hunts the party through the theatre, slipping through secret entrances and sewer grates to ensure they can not escape their doom. Who's a Good Boy?: The favoured pet of a Warlock, a Chimera called Rex, still lives in the"
      },
      {
        "roll": 10,
        "title": "house the Warlock built to house them both",
        "description": "Even though its mistress is dead, Rex guards her land jealously, attacking anyone who strays within sight of the house. ENCOUNTERS: WAILDN CMIAENGITC RLAUNINDS 5"
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "activity in the area",
        "description": "They insist a great power lies there which can be harnessed. While they might need the party’s help in reaching the centre, they also need someone expendable to trigger some magical traps in their way. Lost Princess: A gentle Noble in a fine dress asks the party to help keep her safe from a villain"
      },
      {
        "roll": 2,
        "title": "she has escaped",
        "description": "While she is genuinely fearful, she also acts as if she is from a storybook rather than a real princess. If questioned, she recounts the same clichéd tale of a heinous villain and a damsel in distress. In truth, she is from a storybook, made real through wild magic. Best Friend: Appearing in a puff of violet smoke, an eager Wizard approaches. Claiming to"
      },
      {
        "roll": 3,
        "title": "be a great magician, their spells are nothing more than noises and lights",
        "description": "The ‘spellcaster’ is actually a transformed labrador, and just wants to run around with some new friends. The ruse is easily discovered: all the Mage wants are treats, head pats, and to be called a good boy. The Source: Sitting on a tortoiseshell wall, a girl requests the party escort her home. Her eyes"
      },
      {
        "roll": 4,
        "title": "are different colours and a deep scar runs across her face",
        "description": "The girl is a source of magical energy. Within her head, an artificial white hole endlessly spews out arcane energy. When she is with the party, every monster and person they meet will have her face. It's Not a Cult: A robed Cultist asks the party to join them at a meeting where they will"
      },
      {
        "roll": 5,
        "title": "discover for themselves ‘boundless joy’",
        "description": "If they do attend, the small gathering performs a short chanting ritual, and then a wave of happiness passes over everyone. Despite their ominous appearance, they are genuinely just nice people. The Waterworks: Water pours out of the windows at the top of a crooked tower. A winged"
      },
      {
        "roll": 6,
        "title": "child sits on the rooftop, weeping",
        "description": "If the party consoles the child, the water stops flowing when they stop crying. The child knows that the tower is enchanted, and can teleport short distances, reducing the number of Encounters by 1 on the Journey should the party discover this secret. Cardshark: A Spy with a shark’s head saunters into view and invites the party to a game of"
      },
      {
        "roll": 7,
        "title": "cards",
        "description": "This is a trap. The shark plans to keep them playing with him forever because he is lonely and yearns for company. He will be ashamed if he is found out, apologising and exploding into a cloud of green and purple mist. The mist trails the party, watching their back. The Toymaker: The party meets a silent, grinning old hermit. She carefully hands each of"
      },
      {
        "roll": 8,
        "title": "Entry 8",
        "description": "them a different small carved wooden toy in the shape of an object like an hourglass, a dagger, or a bear, then nods. This hermit is actually a descendent of a party member, lost to time, and recognises their family. A Good Book: There is a strange thudding noise coming from underground. Digging it up,"
      },
      {
        "roll": 9,
        "title": "Entry 9",
        "description": "the party discover a chest covered in protection magic, inside which is a magical tome. The book, which speaks in a refined voice, explains that he was once a powerful spellcaster who was imprisoned in his own spellbook for his supposed crimes. Worlds Within: A strange creature like a spindly six-legged deer with flaps of parchment-like"
      },
      {
        "roll": 10,
        "title": "skin asks the characters if they would like to see the worlds beyond",
        "description": "It stretches out the flaps of skin around its torso into an area large enough to peer through. It has lost smaller creatures within these windows before, and has never seen them again. S SPECIAL THANKS SPECIAL THANKS 6mmWar, Aaron Brown, Aaron Delisio, Aaron hamilton, Aaron Hutt, Abdullah Ismail Abul-Qasim, Adam Barnes, Adam Goss, Adam Kraman, Adam Przybylinski, Adam Sallean, Adam Zoch, Adrian Money, Adrian Pedersen, afharrold, Agent_Wildcat, AGleim, aikar, Akira Magamo, Al Bartlett, Alan Flood, Albert Luciano, Alec McMillan, Alejandro, Alen Maglajac, Alex Dixon, Alex Gurdian, Alex Harr, Alex Parker, Alex Ries, Alex Shields, Alexander deMorris, Alexander Helliwell-Smith, Alexander Wurm, Alirion, Alistair Warmington, All Rolled Up, Allacer, Allen Edger, Allison Godere, Alterangel, Amanda, Amanda Bamford, Anders, Andre Ball, Andrea Barajas, Andrea Chandler, AndreaFornasiero, andrew, Andrew Bevan, Andrew Cowie, Andrew Dempz, Andrew G. Smith, Andrew Goodson, Andrew Haver, Andrew Hintz (Adotlin), Andrew J Black, Andrew Johnston, Andrew McDowell, Andrew Moore, Andrew Pecoraro, Andrew Robertson, Andrew S., Andrew Schmieg, Andrew Sklar, Andrew Springer, Andrew Steele, Andrey Olifirenko, Andy, Andy Fagant, Andy Gullikson, Andy Ramos, Andy51, Anne Skinner, Anne-Lise Fosse, Antithet, Antlers6109, Antoine, Anton Jigblad, Antonius Schulze- Besseling, ArgentWintyr, Armen, Arthur, Arthur Braune, Arthur Ford, Ash Christians, Ash M., Ashley Ludlum, Ashley Williams ッ, Ashton Lackas, Auke Slotegraaf, Ayleron, Bada, Barrie D, ben, Ben Ferguson, Ben Peters, Benjamin Koch, Benjamin L. Eastman, Benjamin Rial, Benjamin Saxton-Ruiz, Benjamin Staples, Bettina Kelley, Big Man Murph, Bill Beacham, Bill Lewis, Bill Patino, Bill Vandervoort, Billy Mickelson, billyBellems, Bjørn Benjaminsen, Bob Foster, Bob Mosdal, Bone on Bone, Bookery Games, BoomTown, Bouflet, Brad Elledge, Bradly Dawson, Bramwell AH Crocker, Brandon Bultinck, Brandon Cassady, Brandon Cheney, Brandon Patrik, Brandon Pineda, Brandon Wright, Brayden, Breland Scott, Brendan Neill, Brent Swapp, Bret Smilyk, Brett Granger, Brian, Brian, Brian Bautista, Brian Creek, Brian Frisco, Brian Koonce, Brian Maher, Brian Murphy, Brian Roessler, Brian Seligman, Brian Tanner, Brianna, Brianna Chew, Brice_T, Brodie Gray, Bruce Strang, Bryan Pravel, Buddha Weatherby, burttd2010, Business of life, CALLET Timothée, Callum Sewell, Calvinsmurf, Caribet, Carl, Carlos Colon, Carson Brooks, Carter Brent, Cássio Padilha Rubert, Chad Kirkendall, Chad Stevens, Charles, Charles Butler, Charles Dierker, Charles Paradis, Charles Yudson, Charlie Duff, Charlie Heckman, Charlie Le Vine, Charlotte Hamilton, Chase, Chris, Chris, Chris, Chris Boscott, Chris Detlef, Chris H, Chris Moore, Chris Sanders, Chris Swanson, Chris Sweat, Chris Walker- Bush, Chris Weston, Christian, Christian Brandon, Christian Fisher, Christian Stiehl, Christian Torstensson, Christoffer Carlsson, Christopher, Christopher, Christopher Cureton, Christopher Feola, Christopher Kennedy, Christopher Lee, Christopher McDowell, Christopher N., Christopher Reeves, Christos, ChuckB, Cian O'Neill, clayton rhoden, Clifford Kamppari-Miller, Codex Universalis, Cody Nill, Colin Lindgren, Colin Wyers, ColinJ, Connie, Connor Hutcheson, Conor Byrne, Conor Falconer, Corey Close, Cormac, Cory Dodds, Covey Hunter, Crabus, Craig Lilie-Fisher, Craig Myles, Creed, Crixell Matthews, Cromulent P. Embiggens, CrowWithNoMouth, Crysania Dante, CT Riggs, Curtis Lithgow, Cybershaman, D S, Dae, DALE DAVIS, Dalton Long, Damian Adams, Dan, Dan Belt, Dan Thomassen, Dan Weiss, Dana Gibson, Dane Shiner, Daniel Boyd, Daniel Clarke, Daniel Ellison, Daniel Galron, Daniel Gregory, Daniel Marjoram, Daniel Mooneyham, Daniel Penz, Daniel Perrone, Daniel Sloppy, danny, Darcy Austin, Darryl, Darthvegeta800, Dave Brush, Dave Sizer, Dave Weinstein, Dave Younce, David Cowan, David Dolton, David Johnson, David King, David Peters, David Plaskett, David Radmore, David Sharp, David Smith, David Stanley, David Stephenson, David Tavakoli, David Williamson, Daytona, Dean Siemsen, dendarii, Dennis Brännvall, Derek Abrassart-White, Derek Carnell, Didor, Diederik Dolf, Diego Visintin, Dirk Foster, Dirk Obenauer, Divine Insect, Dominic Guido, Dominic McDowall, Dominique C. Declerck, Donovan, Dork117, Doug Hulsether, doumoku, Dr Ether, DraknarsSon, Drouot Maxime, Dustin Samuel Arritt, Dylan, Dylan, Dylan McMahon, Dzekap, edosan, Edrick Chow, Eduardo, Edwin Pietrowski, Edwin Robertson, Ein_Gunnhildarsson, Elemental Rug, Eli Nyght, Elizabeth, Elliot copping, Elliott Balding, Emma Hall, Emmet, EnochSeven, Erasmus, eric, Eric Pickney, Eric Rupert, Eric Zylstra, Erik Gossage, Erik Laudal Christensen, Erik Saltwell, Erin Wendland, Eris, Ethan Hale, Euan Niall Cowie, Eugene, Evan, Everett, Fabio, Fabio Mano, Fabrice Gatille, Faelyn Curtis, Fallout78, Felipe Bovolon, Felix Morscheck, Fenella Honey, Fernando, Figment of Your Imagination, Fleabane, flyingshovel, Forecaster, Fran C, François Charbonneau, Frank Schirmer, Freawin, Fred Savadge, Frenchy, Gabriel Casillas, Games and Stuff, Gaming Spiders, Gappa 5604, Gareth Phillips, garrett moynihan, Gaston Phillips, GavinRuneblade, Gene D., Geoff, Geoff Hill, Geoffrey DeWitt, George Johnson, George Queen, Gerard, Gerardo Medina, Gianni Di Biase, Gio Ghigliazza, Gion Ferrell, Giulia Pellegrino, Giuseppe, Giuseppe Sirianni, GMRPG, GoblinsInSwamps, GornSpelljammer, GreatCthulhu, Greg Atkinson, Greg Schumacher, Guardsmith, Guerin Payne, Guy Elliott, Guy Milner, GuybrushPH, Haci Ibrahim Tanirgan, Haden_Danger_Collins, Hal Eccles, Hannah Lee, HarmonicShield, Harold, Harry Jones, Harry Meier, Harry Watkins, Herman Duyker, Hitoshi Nagata, Hobby Town, Horselover Fat, huntersimuav, Huscarle, i0m, Idaho121, Ignacio Córdoba, Ilmari Korpi, Insanator, iRtheCreeper, Ismael Alvarez, Ismail, ItoSora, Ivan Dowding-Hopkins, J Gogarty, J.M., J.P. Wallace, Jack, Jack, Jack Ball, Jackson Kuhl, JackWinter, Jacob, jadeite, Jaime Robbins, Jake Chappelle, Jakub, James Arnold, james braswell, James Bullock, James Cox, James DiBenedetto, James Gonzales, james henry, James Holden, James Isaac Solus, James Kew, James Knevitt, James Lawson, James Marchant, James Monaghan, James Simmerer, James Taplin, James Wayne, James Yonemura, jamie, Jamie Wheeler, Jan Føns Jørgensen, JanM, Japhet Palencia, Jared Manninen, Jared Muise, Jared Strickland, Jarred Bruggeman, Jason, Jason, Jason Alexander, Jason Childs, Jason Conlon, Jason Cummings, Jason Gabel, Jason Miller, Jason Moscatello, Jason Osorio, Jason Quistorff, Jason Zowin, Jaxvor, Jay Peringer, Jay Peters, jbowtie, Jeff Robinson, Jeff Swanson, Jeffrey Messina, Jennifer, Jennifer Crispin, Jens Kristian Larsen, Jeremiah Buttrum, Jeremy, Jeremy Hochhalter, Jeremy Hunt, Jeremy Kear, Jeremy Pinske, Jeroen Vandersteen, jerrjarod, Jerry Autieri, Jessica Picard, Jez, Jim D'Alessio, Jim Selzer, Jim Tyler, Jochen Bünnagel, Joe, Joe Bain, Joe Crow, Joe Dineen, Joe Kushner, Joel Short, Joey Fairey, John, John, John Aumiller, John Bailey, John Bookwalter Jr., John Boullion, John Carney, John D. Cornelius, John G, John Gardiner, John Garlick, John Hagglund, John Halbert, John Hardey, John Merle Holes, John P Payton Jr, John Paul Nichols, John S., John Tolleson, John Weigand, John-Carl Kullmann, Jon Curtis, Jon Stevens, Jonathan Butil, Jonathan Chiaravalle, Jonathan Munoz, SPECIAL THANKS S Jonathan Schafer, Jonathan Watson, Jonathan West, Jonny Noc, Jordan, Jordan Batalden, Jordan Rowe, Jordanne Ryan, Jörg Peters, Jorge Carrero, Jörgen Björk, Jose Lucas, Jose Perez, Joseph Collins, Joseph Edge, Joseph Guzman, Joseph Hundley, Joseph Marion, Joseph Provenzano, Joseph Sammons, Josh Ball, Josh Garvais, Joshua, Joshua Balog, Joshua Black, Joshua Day, Joshua Freeland, Joshua Karas, Joshua Ward, Joshua Wolf, Jouni Purhonen, Juliet Choy, Justin Offermann, Kaan Raif, Kaesar Blanco, Kaleb Kramer, Kamish Bhai, Kamoria, Kanaris, Karl, Karl David Brown, Karl Tyrant Seabear Wiseman, Kate Donnelly, Kate McNamara, Katherine Rue Bollinger, Katheryn, Katrina Grosskopf, Kayla, Kayoot, Keir Gardner, Keith Foyston, Kek, Keldyn Majere, Kelsey, Ken Nishimura, Kenneth Hummel, KensmenFinn, Kent Taylor, Kerry Steers, Kethra Shadowborne, Kevin, Kevin Holbeche, Kevin Casault, Kevin Feeman, Kevin jeffs, Kevin Leintz, Kevin Morrell, Kevin OBrien, Kevin Pagliarini, Kevin Romero, kevin, kikai, Kirby Moyers, Kirk Reed, Klo Utley, KobyB4303, Koen Raymaekers, Konnery Hansen, Korey Mortlock, Kortney Trevino, KorvusRock, Kraig Kahl, Kris Hartbauer, Kristen Anastos, Kristian Nielsen, Krow, Krusk, Kyle Gagnon, Lachlan Middleditch, Lakshman, Lance A, Landon Jamieson, Larry, Laura Cahill, Laura Scott, Laura-Ann Hughes, Lee, Leo Beavitt, Liam, Liam Conneely, Liam DiPilla, Liam DiPilla, Lloyd Dual, Longspeak, Loren Small, Lou Anders, Lukas, Luke, Luke Thornburg, Lyciana, Lyndon Baugh, M T, M. McMahon, M. Trout, Maczek, Mad, Madcap Magician, Madcat Angrymog, MagnusLL, mamba, Maniac Mansion, Marc Mitchell, Marc Schneider-Enterlein, Marco Palermo, Marco Placidi, Marco Stricker, Marcus McClain, Marcus Shepherd, Mario, Mario Gauthier, Mark, Mark, mark bacon, Mark Burton, Mark Kernow, Mark Penna, Mark Peyton, Mark Poles, Mark S, Mark Shocklee, Marshall Watson, Martin Seltmann, Martin Six, Martin Stenmarck, Mathieu Loisel, Matt Dean, Matt Frigault, Matt Good, Matt Y, Matthew Arnot, Matthew Buckley, Matthew E Kaiser, Matthew Gibbs, Matthew Hides, Matthew Lambert, Matthew Luellen, Matthew Watkinson, Matthias De Wit, Matthieu Triay, Matti Leinonen, Maverick, Maximiliano Martinez, mbexploring, Megan, Meidrym Hebda, Meldince, Micah Mackintosh, Michael, Michael, Michael Alfieri, Michael Boschet, Jr, Michael Boulton, Michael Brown, Michael Burns, Michael C. Hawk, Michael Costa, Michael Davenport, Michael Edmonds, Michael Felton, Michael G. Palmer, Michael Gionfriddo, Michael Gusta, Michael Hansen, Michael J Winegar, Michael Link, Michael Longsworth, Michael M, michael medwid, Michael Moe, Michael Northcraft, Michael Paulini, Michael Polster, Michael Q Anderson, Michael Richards, Michael S. Wallack, Michael Schilingno, Michael Shannon, MICHEL, Mike Cosgrave, Mike Cullen, Mike Davis, Mike Field, Mike Whitaker, Mikey, Mikko Kauppinen, Miquel Hutton, Miranda Drake, Mitch, Mitchell Freeman, Morfedel, MoroArt, MrCynical, MrHelios, MrShish101, mseebach, Muaddib195, Nadyne Kemister, Narset, Natasha Ence, Nate Campbell, Nate Capra, nathan cornall, Nathan Exley, Nathan Olgren, Nathaniel Guenther, ncwilliams, Neal Dalton, Nefal, neil crampin, Nemeanlion, Nemiri Mi, Nereviar, Ng Wai Chung, Niall Galloway, Nicholas Labine, Nick, Nick, Nick pater, Nickali Dzurka, Nicola, Nicola Casadei, Nicola ni Bhroin, Nicola Ricottone, Nicolas, Night_ Hunter023, No Name, Noah Geib, Noah Kriner, Nobody68, Nolan, Oberon D'Argo, Obsidianherz, OctanicSea, Oli Clarke, Olivier Boudreault, Olna Jenn Smith, Osmo Korhonen, Otto von German, Owlglass, Pamela Eaton, PappaGummyBear, Paralyz, Pat Martin, Patrick, Patrick Flood III, Patrick Gärtner, Patrick Healey, Patrick Keirns, Patrick M. Demo Jr., Patrick P., Paul, paul, Paul christie, Paul Cowin, Paul Munson, Paul Newnham, Paul Quarles, Paul Ryan, Paul Schifferer, PC, PDeMars, Pedro Ecija Serrano, Pegana, Petek Gregor, Peter Bates, Peter Crowder, Peter Duke, Peter Gornick, Peter Marsh, Peter Rutgers, Petru-Daniel Tudosiu, Peyton Monroe, pgotsis, Phil Beckwith, Phil Stepp, Philip Summersby, Philippe Lemieux, Phillip, Phillip Bailey, Phillip Bush, Phillip Cunliffe, Phillip McGregor, Pierre-Luc Marsan, Pops Deckard, Proteusz, pukunui81, Quinn Parrott, Quinn Zahasky, Quintus, Quire, R. Carey, R2ShihTzu, Rachel Maher, Raece Young, Raf Bressel, Rafael Vargas, Ralph bennett, Ralph Holland, RamsesX2, Randall Hurlburt, Randall Wright, Randy Smith, Ratchit_unicorn, Raulwicke Legendsinger, Raven, Ray Chapel, Ray RAY, razamataz, Realm Master K, Reece, Reid Sewell, Reinik, Rexx, Rey Tamayo, Reymundo Antonio Juco, Rhuby Elizabeth, Rhugaroux, Rhys Hood, Ricardo Fuente, Ricardo Martinez, Rich Allen, Richard A. Glass, Richard Ashton, Richard Geo Sang Lee, Richard Gonzales, Richard Jones, Richard Knott, Richard Krizo, Richard Morley, Richard Worley, Rick Darkman, Rick LaRue, Riemumieli, Rigatoni, Riley Gibbs, Rmacary, Rob H., Rob Stephens, Robert, Robert, Robert Barbour, Robert Estell, Robert Hirst, Robert Huss, Robert Jameson, Robert McNeal, Robert Muhlig, Robert van Wijk, Robin Roberts, Robin Steinmann, Rocky Schmitz, RogueStarter, Rohan Mitchell, Roland Bahr, Roman Kuzyk, Roosevelt Cooper, Rose, Roshan Vaidhyaraj, Roy Pilger, Roy Volcanoes, RS, Russell Hoyle, Ryan, Ryan, Ryan Comeau, Ryan Green, Ryan Mason, Ryan Mcinnes-Beadle, Ryan Whitcomb, ryansmith3d, Sagaisgood, Salvador Martinez, Sam Loveland, Samantha Hallas, Samii, Sanne Wollin, Sarah Byrne, Sarah JL, Sawamura Freecs Kob, Scotia Baker, Scott, scott, Scott Danger Kelly, Scott Mathis, Scott Payne, Sean Barry, Sean Brady, Sean Brannigan, Sean Donnelly, Sean Frackowiak, Sean Holland, Sean Metz, Sean Nicol, Seb, Sebastian, Sébastien Chartrand, Sergio Sampaoli, Seth Ero, SFG_ Mat, Shaenon Langeneckert, Shane Eyler, Shane H., Shane Stewart, shannon troester, Shannon Wanner, Shaun Russell, Shawn Hennessy, Shawn Hudson, Shawn P, Shelby White, Shyloh Wideman, Simon, simon, simon olthof, sirjonsnow, Skylar Husske, Skyler Carman, Sleazebaggins, Sn00ze, Snarkayde (Philip), SOckendon, Solveig, Spacekaze, spacemansteve, Spencer Coffey, Spencer S., Stefan B, Stefan Stacey, Stéphane Racz, Stephanie Nesbit, Stéphanie Silvano-Tellas, Stephen, Stephen Bulla, Stephen Diamond, stephen glew, Stephen Hardy, Stephen Schiber, Stephen SIsk, Sterling, Steve Berry, Steve Huggins, Steve Long, Steve Snow, Steven A Holomshek, Steven G., Steven Klassen, steveon, stewart burwood, Stewart Watson, StrayDM, stuart, Styzem, Sujith Achuthan, SuperDéfi, Suzanne van den Boogaard, symatt, Synton, T Devon Sharkey, T. Monk, Taiga Brenerman, Takashi Sato, Tangami, Taryn, TCAustin, Tebo, Temrio, Thalji, The Creative Fund by BackerKit, The13Inquisitor, Theo Traumato, Thlaylie, Thomas, Thomas Fitch, Thomas Hock, Thomas Jordan, Thomas Krømke, Thomas M, Thomas Milazzo, Thomas N Gilliland, Thomas T Adkins, Thomas Wright, Tim, Tim, Tim Cox, Tim Daigle, Tim P, Tim Prior, Timipher Christithy Whittlemore, Timothy Cook, Timothy Ferrell, Timothy Janick, Timothy Lowe, Toby Cox, Todd A., Todd Patrick, Tom Tolios, Tomasz, Tommy Brownell, TONIC, Tony, Tony Treleaven, Traitor25, Travis Johnsen, Travis O, Travis S, Trent, Trent Redfield, Trent Revis, Trevor Hart, Tristan Johnson, Troy Schnierer, Troy Wells, Trym Meland Johannessen, Tuft, Tuomas Lempiäinen, Tyler J Brown, Tyler Martinez, Tyler Russell, Uland Grawe, Ulfvan, Valerie Treleaven, Valkenvr, Victor Gonzalez, Vidir Gudmundsson, Víkingur Brynjar, Virgil Légaré, Vis, Vivian Jansen, Vlorisz, W. J. Nash, Wade Gerald Sullivan, Waitiki, Walter Brediger III, Walter Dirix, Walter Landry, Walter Odell III, Wes Robinson, Weston Schreiber, Whhooah, Will, Will King, William, William Allchin, William Boxx, William F Kelly, William Feild III, William Murakami-Brundage, William T Carmichael, Wrathamon, Wshattuck, wurgy, Xacur, Xander Bennett, Y. K. Lee, Yan Reydman, Younes Boulghassoul, YU Long, Yves Larochelle, Zach Hitzeroth, Zeta, Zhul hoLd onTo YoUr ToP haTs, vicToriana for 5Th ediTion coming soon! Find out more at www.cubicle7games.com © 2023 Cubicle 7 Entertainment Ltd. The weave of magic is broken and the gods are dead. The weave of magic is broken. The gods are dead, the lands are shattered, and the world has begun to forget what it once was. Time and distance have lost their meaning, and the knowledge of how things once were crumbles like ash. Those who remain struggle to survive in a shattered world ruled by Decay, which eats at memory and warps people into monsters and monsters into nightmares. But all is not lost. Hope survives despite the odds. Community, love, and trust in one another can remake the world. Walking the old forgotten paths gives them permanence, fractured artefacts from before spark memories of what once was, and communities gather to create a new way of life. Broken Weave is a tragic fantasy setting, where hope and community are the only path to creating something new. Find out more at www.cubicle7games.com © 2023 Cubicle 7 Entertainment Ltd. OPEN GAME LICENSE Version 1.0a 6. Notice of License Copyright: You must update the COPYRIGHT The following text is the property of Wizards of the Coast, Inc. and NOTICE portion of this License to include the exact text of the is Copyright 2000 Wizards of the Coast, Inc (“Wizards”). All Rights COPYRIGHT NOTICE of any Open Game Content You are Reserved. copying, modifying or distributing, and You must add the title, the copyright date, and the copyright holder’s name to the COPYRIGHT 1. Definitions: (a)”Contributors” means the copyright and/or NOTICE of any original Open Game Content you Distribute. trademark owners who have contributed Open Game Content; (b)”Derivative Material” means copyrighted material including 7. Use of Product Identity: You agree not to Use any Product derivative works and translations (including into other computer Identity, including as an indication as to compatibility, except as languages), potation, modification, correction, addition, extension, expressly licensed in another, independent Agreement with the upgrade, improvement, compilation, abridgment or other form in owner of each element of that Product Identity. You agree not to which an existing work may be recast, transformed or adapted; (c) indicate compatibility or co-adaptability with any Trademark or “Distribute” means to reproduce, license, rent, lease, sell, broadcast, Registered Trademark in conjunction with a work containing publicly display, transmit or otherwise distribute;(d)”Open Game Open Game Content except as expressly licensed in another, Content” means the game mechanic and includes the methods, independent Agreement with the owner of such Trademark or procedures, processes and routines to the extent such content does Registered Trademark. The use of any Product Identity in Open not embody the Product Identity and is an enhancement over the Game Contentdoes not constitute a challenge to the ownership of prior art and any additional content clearly identified as Open Game that Product Identity. The owner of any Product Identity used in Content by the Contributor, and means any work covered by this Open Game Content shall retain all rights, title and interest in and License, including translations and derivative works under copyright to that Product Identity. law, but specifically excludes Product Identity. (e) “Product Identity” 8. Identification: If you distribute Open Game Content You must means product and product line names, logos and identifying clearly indicate which portions of the work that you are distributing marks including trade dress; artifacts; creatures characters; stories, are Open Game Content. storylines, plots, thematic elements, dialogue, incidents, language, artwork, symbols, designs, depictions, likenesses, formats, poses, 9. Updating the License: Wizards or its designated Agents may concepts, themes and graphic, photographic and other visual or publish updated versions of this License. You may use any audio representations; names and descriptions of characters, spells, authorized version of this License to copy, modify and distribute enchantments, personalities, teams, personas, likenesses and special any Open Game Content originally distributed under any version abilities; places, locations, environments, creatures, equipment, of this License. magical or supernatural abilities or effects, logos, symbols, or 10. Copy of this License: You MUST include a copy of this License graphic designs; and any other trademark or registered trademark with every copy of the Open Game Content You Distribute. clearly identified as Product identity by the owner of the Product Identity, and which specifically excludes the Open Game Content; 11. Use of Contributor Credits: You may not market or advertise the (f) “Trademark” means the logos, names, mark, sign, motto, designs Open Game Content using the name of any Contributor unless You that are used by a Contributor to identify itself or its products or the have written permission from the Contributor to do so. associated products contributed to the Open Game License by the 12. Inability to Comply: If it is impossible for You to comply with Contributor (g) “Use”, “Used” or “Using” means to use, Distribute, any of the terms of this License with respect to some or all of the copy, edit, format, modify, translate and otherwise create Derivative Open Game Content due to statute, judicial order, or governmental Material of Open Game Content. (h) “You” or “Your” means the regulation then You may not Use any Open Game Material so affected. licensee in terms of this agreement. Not for resale. Permission granted to print or photocopy this document for personal use only. 13. Termination: This License will terminate automatically if You System Reference Document 5.0 fail to comply with all terms herein and fail to cure such breach within 30 days of becoming aware of the breach. All sublicenses 2. The License: This License applies to any Open Game Content that shall survive the termination of this License. contains a notice indicating that the Open Game Content may only be Used under and in terms of this License. You must affix such a 14. Reformation: If any provision of this License is held to be notice to any Open Game Content that you Use. No terms may be unenforceable, such provision shall be reformed only to the extent added to or subtracted from this License except as described by the necessary to make it enforceable. License itself. No other terms or conditions may be applied to any 15. COPYRIGHT NOTICE Open Game Content distributed using this License. Open Game License v 1.0a Copyright 2000, Wizards of the Coast, Inc. 3. Offer and Acceptance: By Using the Open Game Content You indicate Your acceptance of the terms of this License. System Reference Document 5.1 Copyright 2016, Wizards of the Coast, Inc.; Authors Mike Mearls, Jeremy Crawford, Chris Perkins, 4. Grant and Consideration: In consideration for agreeing to use Rodney Thompson, Peter Lee, James Wyatt, Robert J. Schwalb, this License, the Contributors grant You a perpetual, worldwide, Bruce R. Cordell, Chris Sims, and Steve Townshend, based on royalty-free, nonexclusive license with the exact terms of this original material by E. Gary Gygax and Dave Arneson. License to Use, the Open Game Content. Uncharted Journeys, Copyright 2023, Cubicle 7 Entertainment 5. Representation of Authority to Contribute: If You are contributing Ltd; Authors: Emmet Byrne, Alex Cahill, Dominic McDowall, Josh original material as Open Game Content, You represent that Your Corcoran, Cody Faulk Contributions are Your original creation and/or You have sufficient rights to grant the rights conveyed by this License. END OF LICENSE"
      }
    ]
  },
  "Orfnir": {
    "A Chance Meeting": [
      {
        "roll": 1,
        "title": "Der Zurückgelassene",
        "description": "Ein verwundeter Mensch in silberner Rüstung mit dem Wappen einer gebrochenen Kette lehnt an einem Felsen. Ser Aldric, ein Ritter der 13. Order, wurde von seinen Kameraden zurückgelassen, nachdem er sich bei der Erkundung einer Elfenruine das Bein brach. Er ist verbittert über Kaelor Dämmerstahls Fanatismus und teilt bereitwillig Informationen über den Standort der nächsten Ruine - gegen medizinische Hilfe und das Versprechen, niemandem von seiner Schwäche zu erzählen."
      },
      {
        "roll": 2,
        "title": "Der Informationshändler",
        "description": "Ein freundlicher Dunkelelf mit einem überladenen Packpferd grüßt die Gruppe mit einem Lächeln, das seine Reißzähne zeigt. Er stellt sich als Vaelorn vor und bietet exotische Waren zu erstaunlich fairen Preisen an. Beiläufig erwähnt er, dass er 'Informationen ebenso wie Waren' handelt. Er zahlt gut für Gerüchte über Elfenruinen, seltsame Artefakte oder die Bewegungen der 13. Order - und verkauft ebenso bereitwillig Geheimnisse."
      },
      {
        "roll": 3,
        "title": "Die Erdensängerin",
        "description": "Eine in Leder und Staub gekleidete Frau sitzt reglos am Wegesrand, tiefe, vibrierende Töne summend. Fossile Relikte hängen an ihrem Gürtel. Sie ist eine Wurmsängerin auf Pilgerreise zur Pfahlwacht und öffnet die Augen, als die Gruppe naht. 'Die Erde ist unruhig', warnt sie. 'Die Alten unter dem Stein spüren das Erwachen der Metallwesen. Meidet die Ruinen der Spitzohren, wenn euch euer Leben lieb ist.'"
      },
      {
        "roll": 4,
        "title": "Der Konstrukt-Überlebende",
        "description": "Ein zitternder Elf mit zerrissener Kleidung und leeren Augen stolpert durch das Gras. Er war Teil einer Expedition, die eine nyssilionische Ruine erforschte - bis die Konstrukte erwachten. Er ist der einzige Überlebende und murmelt immer wieder: 'Sie erkennen uns nicht mehr. Wir sind nicht mehr ihre Meister.' Er trägt einen goldenen Ring an einer Kette, den er krampfhaft festhält."
      },
      {
        "roll": 5,
        "title": "Die Wanderheilerin",
        "description": "Eine Wächterin der Steppe reitet auf einem Wurzelross durch das Grasland, Kräuterbündel an ihrem Sattel. Sie bietet an, Verwundete zu behandeln, und fragt nach Neuigkeiten von den Clans. Bei Erwähnung der Minotauren verdüstert sich ihr Gesicht. 'Die Bluttrinker sind zurück', sagt sie. 'Und diesmal haben sie Hilfe aus Orten, von denen kein sterbliches Wesen sprechen sollte.'"
      },
      {
        "roll": 6,
        "title": "Der Runenbestien-Bote",
        "description": "Ein massiver Ork mit glühenden Runennarben im Gesicht blockiert den Weg. Er trägt eine Botschaft der Runenbestien an die Pfahlwacht: Der Clan fordert ein Konklave aller fünf Khans. 'Etwas Altes erwacht', knurrt er. 'Und die Metallwesen sind nur der Anfang.' Er ist bereit, die Gruppe zu begleiten - gegen das Versprechen, seine Botschaft zu überbringen."
      },
      {
        "roll": 7,
        "title": "Die Dunstreiter-Patrouille",
        "description": "Drei Gestalten in wallender, transluzenter Kleidung materialisieren aus dem Nebel. Die Dunstreiter beobachten die Grenzen ihrer Nebelpfade und sind misstrauisch gegenüber Fremden. Ihr Anführer, ein Elf mit gläsernen Flügeltattoos, fragt nach dem Ziel der Gruppe. Bei ehrlicher Antwort könnten sie einen sicheren Weg durch das Nebeltal anbieten - gegen einen 'kleinen Gefallen'."
      },
      {
        "roll": 8,
        "title": "Der Aasfresser-Händler",
        "description": "Ein Mann in Lumpen und Knochenmasken-Fragment bietet seltsame Waren an: Blindgräber-Knochenstaub, getrocknete Wurmzungen, und 'Erinnerungsperlen' aus den Tiefen. Er ist ein Aasfresser-Händler, der zwischen den Clans reist. Seine Preise sind fair, aber er akzeptiert nur Tauschgeschäfte - Gold interessiert ihn nicht, aber Geschichten über den Tod sehr."
      },
      {
        "roll": 9,
        "title": "Der Flüchtling aus Hornwacht",
        "description": "Eine Familie auf einem überfüllten Karren flieht vor der Ostfront. Der Vater berichtet von Minotauren mit glühenden Augen, die Dorf um Dorf niederbrennen. 'Sie nehmen keine Gefangenen mehr', flüstert er. 'Früher haben sie geplündert. Jetzt... jetzt opfern sie.' Er bittet um Eskorte zur Pfahlwacht und bietet als Bezahlung einen alten Familienring an - mit elfischen Runen."
      },
      {
        "roll": 10,
        "title": "Tikkar-7",
        "description": "Ein kleines Konstrukt, nicht größer als ein Kind, steht verloren in der Steppe. Es nennt sich 'Tikkar-7' und scheint verwirrt. Anders als die feindlichen Konstrukte ist es höflich, sogar bemüht. Es sucht seinen 'Meister' - einen Elfen, der seit Jahrhunderten tot ist. Tikkar-7 könnte ein wertvoller Verbündeter sein, wenn die Gruppe ihm hilft, seinen Zweck zu verstehen."
      }
    ],
    "Hidden Reserves": [
      {
        "roll": 1,
        "title": "Das verlassene Ordenslager",
        "description": "Zwischen zwei Hügeln stoßen die Reisenden auf ein hastig verlassenes Lager. Silberne Zeltheringe mit dem Wappen der 13. Order stecken noch im Boden, daneben verstreute Vorräte: Proviant, Seile, Fackeln. Blutflecken führen in Richtung einer nahen Felsformation. Ein Intelligenz (Nachforschungen) Wurf enthüllt zerknitterte Notizen mit Skizzen elfischer Runen und dem Vermerk 'Reliktwaffe - Standort bestätigt'."
      },
      {
        "roll": 2,
        "title": "Die Uhrwerk-Werkstatt",
        "description": "Eine halb eingestürzte Höhle entpuppt sich als uralte Werkstatt. Verstaubte Werkbänke sind übersät mit Zahnrädern, Kristallen und Metallplatten in Elfenschrift. Einige Komponenten sind noch funktionsfähig und wertvoll. Ein Weisheit (Wahrnehmung) Wurf enthüllt jedoch, dass eine der 'Statuen' an der Wand noch intakt ist - und ihr kristallenes Auge schwach pulsiert."
      },
      {
        "roll": 3,
        "title": "Der Knochenhort",
        "description": "Ein kreisförmig angeordneter Haufen gewaltiger Knochen - Überreste eines Blindgräbers - liegt zwischen Felsbrocken verborgen. Zeichen des Aasfresser-Clans markieren den Ort als Vorratslager. Getrocknetes Fleisch, Knochenamulette und Wurmsänger-Kräuter sind hier versteckt. Die Aasfresser teilen ungern, aber ein Charisma (Überzeugen) Wurf oder ein wertvolles Gegenangebot könnte ihre Erlaubnis gewinnen."
      },
      {
        "roll": 4,
        "title": "Das Minotauren-Massengrab",
        "description": "Ein flacher Hügel entpuppt sich als Massengrab. Dutzende Minotauren-Skelette, alt und verwittert, liegen übereinander. Dies war eine Schlacht vor Generationen - die Clans gegen die erste Invasion. Zwischen den Knochen finden sich noch brauchbare Waffen, rostig aber solide. Ein Weisheit (Geschichte) Wurf enthüllt ein intaktes Kriegshorn, das 'Ghorvaks Fluch' genannt wird."
      },
      {
        "roll": 5,
        "title": "Der Breagan Dartis Unterschlupf",
        "description": "Ein unscheinbarer Felsspalt führt zu einer versteckten Höhle. Drinnen: Stapel von Karten, Vorräten, und verschlüsselten Nachrichten. Dies ist ein Breagan Dartis Unterschlupf, aktuell verlassen. Ein Intelligenz (Nachforschungen) Wurf entschlüsselt Teile der Nachrichten - sie handeln von 'fünf Scheiben', einem 'verschlossenen Tor', und einem 'Echsenpriester, der seit Äonen wartet'."
      },
      {
        "roll": 6,
        "title": "Die Nebelpfad-Kreuzung",
        "description": "An einer Stelle, wo sich vier Pfade treffen, hängt dichter Nebel in der Luft - selbst bei klarem Wetter. Die Dunstreiter nutzen solche Orte als Wegpunkte. Versteckt im Nebel finden sich Vorräte für Reisende: Wasser, Trockenobst, und eine Karte der nächsten Nebelpfade. Jemand hat eine Warnung hinzugefügt: 'Die Metallwesen können den Nebel durchsehen.'"
      },
      {
        "roll": 7,
        "title": "Das Runenbiest-Opferlager",
        "description": "Ein Kreis aus eingeschlagenen Speeren umgibt einen Altar aus rohem Stein. Hier bringen die Runenbestien Opfer dar, bevor sie in den Kampf ziehen. Der Altar ist verlassen, aber nicht leer: Waffen, Runenamulette, und ein Fass mit der 'Fleischwandlungs-Salbe' warten auf Krieger, die nie zurückkehrten. Die Salbe ist mächtig, aber gefährlich - sie verwandelt den Anwender langsam."
      },
      {
        "roll": 8,
        "title": "Der eingestürzte Windturm",
        "description": "Die Überreste eines nyssilionischen Windturms liegen verstreut über einen Hügel. Unter den Trümmern finden sich erstaunlich gut erhaltene Artefakte: Kommunikationskristalle, elfische Roben, und ein noch funktionierender Runenstab. Allerdings summt der Stab leise - und in der Ferne antwortet etwas auf seine Frequenz."
      },
      {
        "roll": 9,
        "title": "Die Händlerkarawane",
        "description": "Drei zerstörte Wagen liegen am Wegrand - Opfer eines Minotauren-Überfalls. Die Händler sind tot, aber ihre Waren sind größtenteils intakt: Stoffe, Gewürze, Werkzeuge, und eine verschlossene Truhe. Die Truhe enthält Dokumente für Breagan Dartis - Lieferscheine für 'arkane Komponenten' an einen Kunden in Hornwacht. Der Kunde ist Arkalem Greet."
      },
      {
        "roll": 10,
        "title": "Das Wurmsänger-Heiligtum",
        "description": "Ein Loch im Boden führt in eine natürliche Höhle, deren Wände mit fossilen Spiralen bedeckt sind. Dies ist ein Wurmsänger-Heiligtum, wo sie mit den Blindgräbern kommunizieren. Opfergaben liegen um einen zentralen Stein: Kristalle, Knochen, und seltsame Pilze. Wer hier die Nacht verbringt, träumt von endlosen Tunneln - und erwacht mit Wissen über einen verborgenen Weg."
      }
    ],
    "A Bump in the Road": [
      {
        "roll": 1,
        "title": "Die Bannlinie",
        "description": "Der Pfad führt durch die Überreste einer nyssilionischen Straße. Zwischen zwei zerbrochenen Obelisken flimmert die Luft - eine uralte Barriere, die noch immer Nicht-Elfen aufhält. Ein Intelligenz (Arkane Kunde) Wurf des Outriders kann einen Umweg durch die Schwachstelle identifizieren. Alternativ kann ein Stärke (Athletik) Wurf einen der beschädigten Obelisken umstürzen und die Barriere deaktivieren."
      },
      {
        "roll": 2,
        "title": "Bluttrinker-Territorium",
        "description": "Frische Minotauren-Totems aus Schädeln und blutgetränkten Fetzen markieren das Gebiet. Die Bluttrinker haben diesen Pfad für sich beansprucht. Ein Weisheit (Überlebenskunst) Wurf des Outriders findet einen alternativen Weg durch das Grasland. Ein Charisma (Einschüchtern) Wurf kann die Gruppe als 'zu gefährlich zum Angreifen' erscheinen lassen - zumindest für die Späher."
      },
      {
        "roll": 3,
        "title": "Das Nebeltal",
        "description": "Dichter, unnatürlicher Nebel füllt das Tal vor der Gruppe. Die Dunstreiter nutzen diese Nebelpfade als Schutz, und Eindringlinge verirren sich leicht. Ein Weisheit (Wahrnehmung) Wurf des Outriders kann den schwachen Pfad der Dunstreiter erkennen. Alternativ kann ein Charisma (Überredungskunst) Wurf einen versteckten Dunstreiter-Wächter überzeugen, die Gruppe sicher hindurchzuführen."
      },
      {
        "roll": 4,
        "title": "Die Blindgräber-Spur",
        "description": "Ein gewaltiger Graben durchschneidet die Landschaft - die frische Spur eines Blindgräbers. Der Boden ist instabil, und der Graben zu tief zum Überqueren. Ein Weisheit (Überlebenskunst) Wurf des Outriders findet eine Stelle, wo der Graben flacher ist. Ein Intelligenz (Natur) Wurf kann bestätigen, dass der Blindgräber sich von der Gruppe entfernt - vorerst."
      },
      {
        "roll": 5,
        "title": "Das Ordenscamp",
        "description": "Die 13. Order hat einen Kontrollpunkt errichtet. Bewaffnete Ritter verlangen, dass alle Reisenden sich ausweisen und ihre Taschen durchsuchen lassen. Ein Charisma (Täuschung) Wurf des Outriders kann gefälschte Dokumente präsentieren. Ein Charisma (Überredungskunst) Wurf kann den Anführer überzeugen, dass die Gruppe 'nützliche Informationen' über Elfenruinen hat."
      },
      {
        "roll": 6,
        "title": "Die Fleischwandler-Zone",
        "description": "Das Gebiet ist mit Warnzeichen der Runenbestien markiert. Hier findet die 'Große Wandlung' statt - junge Krieger, die sich der Fleischwandlung unterziehen. Eindringlinge werden nicht geduldet. Ein Weisheit (Einsicht) Wurf des Outriders erkennt die sicheren Pfade zwischen den Ritualen. Ein Stärke (Einschüchtern) Wurf kann die Wächter beeindrucken - die Runenbestien respektieren Stärke."
      },
      {
        "roll": 7,
        "title": "Das Konstrukt-Patrouillengebiet",
        "description": "Metallische Fußspuren und zertrampeltes Gras zeigen, dass Uhrwerk-Konstrukte diese Route regelmäßig patrouillieren. Ein Intelligenz (Nachforschungen) Wurf des Outriders kann das Muster erkennen und eine sichere Zeitspanne berechnen. Ein Geschicklichkeit (Heimlichkeit) Wurf kann die Gruppe durch das Gebiet führen, ohne die Patrouillen zu alarmieren."
      },
      {
        "roll": 8,
        "title": "Der Aasfresser-Bestattungsort",
        "description": "Totemstangen und Knochengirlanden markieren einen Aasfresser-Bestattungsort. Durchqueren wäre Entweihung. Ein Weisheit (Religion) Wurf des Outriders kann die korrekten Rituale durchführen, um sicher durchzugehen. Ein Charisma (Überredungskunst) Wurf kann einen anwesenden Aasfresser-Wächter überzeugen, die Gruppe zu eskortieren - gegen eine 'Geschichte des Todes'."
      },
      {
        "roll": 9,
        "title": "Die Erdspalte",
        "description": "Ein kürzliches Erdbeben hat eine tiefe Spalte im Boden geöffnet. Aus der Tiefe steigen seltsame Töne - vielleicht ein erwachender Blindgräber. Ein Stärke (Athletik) Wurf des Outriders kann eine sichere Überquerungsstelle finden. Ein Intelligenz (Natur) Wurf bestätigt, dass die Töne von Erdverschiebungen stammen, nicht von etwas Lebendigem - wahrscheinlich."
      },
      {
        "roll": 10,
        "title": "Der Handelsposten-Streit",
        "description": "Ein Breagan Dartis Handelsposten blockiert den einzigen Weg durch ein Tal. Der Besitzer verlangt 'Wegezoll' - einen absurden Preis. Ein Charisma (Einschüchtern) Wurf des Outriders kann den Preis senken. Ein Charisma (Überredungskunst) Wurf kann einen 'Kredit' aushandeln - allerdings mit Schulden bei Breagan Dartis. Ein Weisheit (Wahrnehmung) Wurf findet einen versteckten Pfad um den Posten herum."
      }
    ],
    "Needing Assistance": [
      {
        "roll": 1,
        "title": "Der zerrissene Knappe",
        "description": "Ein junger Mensch in zerschlissener Ordensrobe stolpert auf die Gruppe zu. Bruder Cael fleht um Hilfe - sein Meister wurde von einem Konstrukt in eine Ruine gezogen. Er ist zerrissen zwischen seiner Pflicht (den Meister retten) und seinem Gelübde (Ungläubige nicht um Hilfe bitten). Die Gruppe kann ihm helfen durch: einen Gruppen-Weisheit (Heilkunde) Wurf für seine Verletzungen, einen Gruppen-Charisma (Überredungskunst) Wurf um sein Vertrauen zu gewinnen, oder einen Gruppen-Intelligenz (Religion) Wurf um die Doktrin der Order zu zitieren."
      },
      {
        "roll": 2,
        "title": "Die verzweifelte Familie",
        "description": "Eine Bauernfamilie aus einem Grenzdorf kniet weinend am Wegrand. Minotauren-Plünderer haben ihre Tochter verschleppt - vor nicht einmal einer Stunde. Sie bieten alles an, was sie haben: ein Familienerbstück, ihre Ersparnisse, ihr eigenes Leben. Die Gruppe kann helfen durch: einen Gruppen-Weisheit (Überlebenskunst) Wurf um die Spuren zu verfolgen, einen Gruppen-Stärke (Athletik) Wurf um schnell genug aufzuholen, oder einen Gruppen-Heimlichkeit Wurf um unbemerkt zu folgen."
      },
      {
        "roll": 3,
        "title": "Der verirrte Händler",
        "description": "Ein erschöpfter Halbling mit einem leeren Karren sitzt am Wegesrand. Er stellt sich als Pip vor, ein 'unabhängiger Händler', dessen Waren von Banditen gestohlen wurden. In Wahrheit ist er ein Breagan Dartis Kurier, dessen Ladung - eine der fünf Scheiben - geraubt wurde. Die Gruppe kann helfen durch: einen Gruppen-Charisma (Einschüchtern) Wurf um die Banditen zu konfrontieren, einen Gruppen-Intelligenz (Nachforschungen) Wurf um das Versteck zu finden, oder einen Gruppen-Weisheit (Einsicht) Wurf um Pips wahre Loyalitäten zu durchschauen."
      },
      {
        "roll": 4,
        "title": "Das verletzte Wurzelross",
        "description": "Ein Wurzelross der Wächter liegt mit gebrochenem Bein am Wegrand. Sein Reiter ist nirgends zu sehen - nur Blutspuren führen in die Steppe. Das Tier ist intelligent und versteht Sprache; es fleht um Hilfe für seinen Reiter. Die Gruppe kann helfen durch: einen Gruppen-Weisheit (Heilkunde) Wurf um das Bein zu schienen, einen Gruppen-Weisheit (Überlebenskunst) Wurf um den Reiter zu finden, oder einen Gruppen-Weisheit (Tierkunde) Wurf um das Ross zu beruhigen."
      },
      {
        "roll": 5,
        "title": "Der gefangene Konstrukt",
        "description": "Ein kleiner Uhrwerk-Konstrukt - Tikkar-7 oder ein ähnliches Modell - ist in einer Bärenfalle gefangen. Anders als die feindlichen Konstrukte bittet es höflich um Befreiung. Es erklärt, dass es 'defekt' ist und von den anderen Konstrukten gejagt wird. Die Gruppe kann helfen durch: einen Gruppen-Stärke (Athletik) Wurf um die Falle zu öffnen, einen Gruppen-Intelligenz (Arkane Kunde) Wurf um die Konstrukt-Mechanik zu verstehen, oder einen Gruppen-Geschicklichkeit (Fingerfertigkeit) Wurf um die Falle zu deaktivieren."
      },
      {
        "roll": 6,
        "title": "Der vergiftete Aasfresser",
        "description": "Ein Aasfresser-Krieger liegt krampfend am Wegrand. Er hat von vergiftetem Fleisch gegessen - eine Falle, aufgestellt von der 13. Order, um die 'Heiden' zu dezimieren. Er bittet um Hilfe in seiner eigenen Sprache, aber seine Gesten sind unmissverständlich. Die Gruppe kann helfen durch: einen Gruppen-Weisheit (Heilkunde) Wurf um das Gift zu neutralisieren, einen Gruppen-Intelligenz (Natur) Wurf um ein Gegenmittel zu finden, oder einen Gruppen-Weisheit (Medizin) Wurf um ihn zu stabilisieren."
      },
      {
        "roll": 7,
        "title": "Die eingeschlossene Karawane",
        "description": "Eine Händlerkarawane ist von einem Erdrutsch eingeschlossen. Die Händler rufen um Hilfe - sie haben Verwundete und die Vorräte gehen aus. Unter den Waren sind verdächtige Kisten mit dem Siegel von Breagan Dartis. Die Gruppe kann helfen durch: einen Gruppen-Stärke (Athletik) Wurf um die Trümmer zu räumen, einen Gruppen-Intelligenz (Nachforschungen) Wurf um einen alternativen Ausgang zu finden, oder einen Gruppen-Weisheit (Überlebenskunst) Wurf um einen sicheren Pfad zu schaffen."
      },
      {
        "roll": 8,
        "title": "Der sterbende Ordensritter",
        "description": "Ein schwer verwundeter Ritter der 13. Order liegt im Sterben. Mit letzter Kraft bittet er die Gruppe, eine Nachricht an seine Schwester in der Pfahlwacht zu überbringen. Die Nachricht enthüllt Zweifel an Kaelors Mission: 'Er hat den wahren Zweck der Reliktwaffe verschwiegen.' Die Gruppe kann helfen durch: einen Gruppen-Weisheit (Heilkunde) Wurf um sein Leben zu retten, einen Gruppen-Charisma (Überredungskunst) Wurf um mehr Informationen zu erhalten, oder einen Gruppen-Intelligenz (Religion) Wurf um ihm die letzte Ölung zu geben."
      },
      {
        "roll": 9,
        "title": "Das entführte Dunstreiter-Kind",
        "description": "Eine verzweifelte Dunstreiterin bittet um Hilfe. Ihr Kind wurde von Minotauren entführt - aber nicht getötet. Die Bluttrinker sammeln 'besondere' Kinder für ein unbekanntes Ritual. Die Mutter kann nicht allein gegen sie kämpfen. Die Gruppe kann helfen durch: einen Gruppen-Heimlichkeit Wurf um das Lager zu infiltrieren, einen Gruppen-Weisheit (Überlebenskunst) Wurf um die Spuren zu folgen, oder einen Gruppen-Charisma (Einschüchtern) Wurf um einen Ablenkungsangriff zu führen."
      },
      {
        "roll": 10,
        "title": "Der verlorene Wurmsänger",
        "description": "Ein junger Wurmsänger ist in Trance gefallen und kann nicht erwachen. Seine Begleiter erklären, dass er 'zu tief in die Erde gehorcht' hat und nun in den Träumen der Blindgräber gefangen ist. Sie brauchen jemanden, der ihm folgt. Die Gruppe kann helfen durch: einen Gruppen-Weisheit (Einsicht) Wurf um eine mentale Verbindung herzustellen, einen Gruppen-Intelligenz (Arkane Kunde) Wurf um das Ritual zu verstehen, oder einen Gruppen-Charisma (Auftreten) Wurf um ihn mit Musik zurückzurufen."
      }
    ],
    "Danger Afoot": [
      {
        "roll": 1,
        "title": "Die Konstrukt-Patrouille",
        "description": "Metallisches Klicken hallt durch die Steppe. Drei **Uhrwerk-Soldaten** in elfischen Runen marschieren in perfekter Formation, ihre kristallenen Augen scannen systematisch die Umgebung. Sie greifen jeden an, der nicht elfisches Blut in sich trägt. Einer der Konstrukte trägt einen goldenen Ring an einer Kette um den Hals - einen der fünf Kontrollringe, der seinen Träger von Angriffen ausnimmt."
      },
      {
        "roll": 2,
        "title": "Die Bluttrinker-Späher",
        "description": "Der Geruch von Blut liegt schwer in der Luft. Zwei **Minotauren** mit dämonischen Tätowierungen schleifen einen toten Händler hinter sich her, sein Karren bereits geplündert. Ihre Augen glühen schwach rot - ein Zeichen von Erttus verderblichem Einfluss. Sie haben die Gruppe noch nicht bemerkt, aber ein dritter Minotaur hält weiter hinten Wache."
      },
      {
        "roll": 3,
        "title": "Der Hinterhalt der Order",
        "description": "Die Gruppe wird von fünf Rittern der 13. Order umstellt, Armbrüste auf sie gerichtet. Ihr Anführer, ein **Veteran** mit Narben im Gesicht, beschuldigt die Gruppe, 'Artefaktdiebe im Dienste der Dunkelheit' zu sein. Er verlangt, dass sie ihre Taschen leeren und sich verhören lassen. Die Ritter sind nervös - sie haben kürzlich Kameraden an die Konstrukte verloren und vertrauen niemandem mehr."
      },
      {
        "roll": 4,
        "title": "Der erwachte Wächter",
        "description": "Ein gewaltiger **Steingolem** erhebt sich aus dem Boden, wo er jahrhundertelang ruhte. Er ist ein nyssilionischer Grenzwächter, aktiviert durch die Anwesenheit von Nicht-Elfen. Im Gegensatz zu den Uhrwerk-Konstrukten ist er langsam aber nahezu unzerstörbar. Seine Kristallaugen fixieren die Gruppe, und eine mechanische Stimme fordert: 'Identifiziert euch oder sterbt.'"
      },
      {
        "roll": 5,
        "title": "Die Dämonenjäger",
        "description": "Eine Gruppe von fünf **Kultisten** in schwarzen Roben mit dem Symbol einer flammenden Axt greift an. Sie sind Jäger der 13. Order, spezialisiert auf das Eliminieren von 'Dämonenberührten'. Sie haben die Gruppe fälschlicherweise als Verbündete von Erttu identifiziert - oder vielleicht zu Recht? Ihr Anführer trägt ein heiliges Symbol, das gegen dämonische Wesen leuchtet."
      },
      {
        "roll": 6,
        "title": "Der Breagan Dartis Überfall",
        "description": "Eine Gruppe von sechs **Banditen** mit dem Zeichen des lächelnden Fuchses - Breagan Dartis - überfällt die Gruppe. Sie wollen keine Tötungen; sie wollen Informationen. Ihr Anführer, ein charmanter **Assassine**, bietet einen Deal: Teilt, was ihr über die Elfenruinen wisst, und ihr dürft weiterziehen. Verweigert, und sie nehmen es sich mit Gewalt."
      },
      {
        "roll": 7,
        "title": "Die wahnsinnige Runenbestie",
        "description": "Ein einzelner **Werwolf** mit glühenden Runen auf der Haut greift ohne Vorwarnung an. Es ist ein Runenbestien-Krieger, dessen Fleischwandlung schiefgegangen ist. Er ist nicht mehr bei Sinnen, aber immer noch gefährlich. Sein Clan würde sich über seinen Tod freuen - oder über einen Weg, ihn zu heilen."
      },
      {
        "roll": 8,
        "title": "Die Uhrwerk-Spinne",
        "description": "Ein **Uhrwerk-Spinne** - ein Konstrukt in Spinnenform, so groß wie ein Pferd - kriecht aus einer nahen Ruine. Sie greift nicht sofort an, sondern beobachtet mit ihren acht kristallenen Augen. Sie scheint die Gruppe zu analysieren. Plötzlich entfalten sich Klingen aus ihren Beinen, und sie springt zum Angriff - sie hat 'Bedrohung' festgestellt."
      },
      {
        "roll": 9,
        "title": "Die Minotauren-Vorhut",
        "description": "Drei **Minotauren** auf **Alptraumrossen** - dämonische Pferde mit brennenden Mähnen - reiten auf die Gruppe zu. Sie sind die Vorhut von Ghorvaks Heer, ausgesandt, um die Straßen zu sichern. Ihre Augen brennen mit höllischem Feuer, und sie tragen Banner mit dem Symbol des Bluttrinkers: ein gehörnter Schädel, der Blut weint."
      },
      {
        "roll": 10,
        "title": "Der Konstrukt-Aufseher",
        "description": "Ein **Uhrwerk-Offizier** - ein Konstrukt, das anderen Konstrukten Befehle erteilt - steht auf einem Hügel und beobachtet die Gruppe. Er ist von vier **Uhrwerk-Soldaten** umgeben. Im Gegensatz zu den anderen Konstrukten spricht er: 'Ihr seid nicht im Register. Klassifizierung: Eindringlinge. Aktion: Eliminierung.' Die Konstrukte greifen koordiniert an."
      }
    ],
    "Natural Wonders": [
      {
        "roll": 1,
        "title": "Die Singende Kluft",
        "description": "Ein gewaltiger Riss in der Erde erstreckt sich bis zum Horizont, so tief, dass der Boden nicht sichtbar ist. Aus der Tiefe steigen tiefe, vibrierende Töne auf - wie das Summen eines schlafenden Riesen. Die Wurmsänger sagen, hier ruht ein uralter Blindgräber, dessen Träume als Klänge an die Oberfläche dringen. Wer zu lange lauscht, träumt selbst von endlosen Tunneln."
      },
      {
        "roll": 2,
        "title": "Das Nebelherz",
        "description": "Inmitten der Steppe schwebt eine perfekte Kugel aus silbernem Nebel, etwa drei Meter im Durchmesser. Sie bewegt sich nicht, selbst bei stärkstem Wind. Die Dunstreiter verehren sie als Überrest nyssilionischer Magie - ein Anker für ihre Nebelpfade. Wer seine Hand hineinstreckt, spürt für einen Moment Verbindung zu jedem Nebel in Orfnir."
      },
      {
        "roll": 3,
        "title": "Die Blutebene",
        "description": "Das Gras hier wächst in tiefem Purpurrot, so weit das Auge reicht. Kein Tier weidet hier, keine Vögel fliegen darüber. Die Wächter der Steppe sagen, hier sei das Blut eines Wurmgottes versickert, vergiftet durch die arkane Magie der Elfen. Der Boden selbst scheint zu pulsieren, wenn man lange genug hinsieht."
      },
      {
        "roll": 4,
        "title": "Der Spiralstein",
        "description": "Ein gewaltiger Stein ragt aus der Erde, seine Oberfläche in einer perfekten Spirale gewunden. Die Wurmsänger sagen, ein Blindgräber sei hier gestorben und sein letzter Gedanke habe sich in den Stein gebrannt. Wer die Spirale mit dem Finger nachfährt, hört ein Flüstern in einer Sprache, die älter ist als die Elfen."
      },
      {
        "roll": 5,
        "title": "Die Leuchtenden Gräser",
        "description": "In der Nacht leuchtet ein Feld von Gräsern in sanftem Blau und Grün. Die Pflanzen absorbieren tagsüber Sonnenlicht und geben es nachts als Biolumineszenz wieder ab. Die Aasfresser nutzen solche Felder als Orientierungspunkte. Legenden besagen, dass die Gräser über den Gräbern gefallener Helden wachsen."
      },
      {
        "roll": 6,
        "title": "Der Versteinerte Wald",
        "description": "Ein Hain aus versteinerten Bäumen steht reglos in der Steppe. Die Bäume sind Überreste eines uralten Waldes, versteinert durch die arkane Katastrophe, die Nyssilion beendete. Zwischen den steinernen Stämmen finden sich manchmal noch lebende Blumen - Pflanzen, die in kristallinem Sonnenlicht gedeihen."
      },
      {
        "roll": 7,
        "title": "Die Windnarben",
        "description": "Tiefe Furchen durchziehen das Land, als hätte ein gigantischer Kamm über die Erde gekratzt. Die Wächter der Steppe nennen sie 'Windnarben' - Spuren eines uralten Sturms, der so mächtig war, dass er die Landschaft selbst veränderte. Bei Vollmond, sagen sie, kann man den Sturm noch immer heulen hören."
      },
      {
        "roll": 8,
        "title": "Der Spiegelteich",
        "description": "Ein kleiner Teich spiegelt nicht den Himmel wider, sondern einen anderen Ort: eine elfische Stadt in voller Blüte, so wie sie vor tausend Jahren existierte. Die Bilder wechseln, zeigen Szenen aus Nyssilions Vergangenheit. Manchmal blicken die Elfen im Spiegel zurück - und scheinen die Beobachter zu sehen."
      },
      {
        "roll": 9,
        "title": "Die Wurmknochen",
        "description": "Die Überreste eines gigantischen Blindgräbers liegen verstreut über ein weites Gebiet. Knochen, größer als Häuser, ragen aus dem Boden. Die Wurmsänger pilgern hierher, um die 'Stimme der Ahnen' zu hören. Innerhalb der Knochen ist die Luft warm, und manchmal bewegen sich die Schatten."
      },
      {
        "roll": 10,
        "title": "Der Runenkreis",
        "description": "Ein perfekter Kreis aus Steinen, jeder mit elfischen Runen graviert, markiert einen Ort uralter Macht. Die Runen glühen schwach bei Nacht. Die Wächter der Steppe sagen, dies sei ein 'Knoten' im magischen Netzwerk Nyssilions - ein Ort, wo die arkane Energie noch immer fließt. Magier fühlen ein Kribbeln auf der Haut."
      }
    ],
    "Monster Hunt": [
      {
        "roll": 1,
        "title": "Der Ruinenwächter",
        "description": "Hirten berichten von einem 'wandelnden Turm aus Metall', der ihre Herden dezimiert. Die Spuren führen zu einer nyssilionischen Ruine. Ein **Uhrwerk-Titan** - gewaltiger als alle anderen Konstrukte - patrouilliert das Gebiet. Er trägt eine zerbrochene Klinge aus Sternenmetall auf dem Rücken, vermutlich die Reliktwaffe, nach der die 13. Order sucht. Der Hirtenälteste bietet die gesamten Ersparnisse des Dorfes für die Vernichtung der Kreatur."
      },
      {
        "roll": 2,
        "title": "Ghorvaks Bestie",
        "description": "Reisende sprechen von einer 'gehörnten Bestie, größer als ein Haus', die Karawanen angreift. Es ist ein **Goristro**, ein Dämonenstier, den Erttu als Geschenk an Ghorvak Blutgeweih sandte. Die Kreatur hinterlässt eine Spur aus Zerstörung Richtung Hornwacht. Die Clans bieten eine gemeinsame Belohnung: Ehrenrechte unter allen fünf Stämmen für denjenigen, der die Bestie erlegt."
      },
      {
        "roll": 3,
        "title": "Der Abtrünnige",
        "description": "Ein ehemaliger Champion der Runenbestien hat sich von seinem Clan abgewandt, nachdem die Fleischwandlung ihn in den Wahnsinn trieb. Nun terrorisiert der **Werwolf** - denn das wurde aus ihm - die Handelswege. Die Runenbestien selbst bitten um Hilfe: Sie können ihn nicht töten, denn sein Körper trägt noch die heiligen Runen. Vielleicht kann er geheilt werden?"
      },
      {
        "roll": 4,
        "title": "Die Uhrwerk-Königin",
        "description": "Eine **Uhrwerk-Spinnenkönigin** hat ein Nest in einer alten Ruine errichtet. Sie produziert kleinere Konstrukte aus gefundenen Materialien und sendet sie aus, um mehr zu sammeln. Die Dörfer in der Nähe verlieren Werkzeuge, Waffen, und manchmal Menschen - die Königin nimmt alles, was nützlich sein könnte. Ihre Zerstörung könnte das Konstrukt-Problem erheblich reduzieren."
      },
      {
        "roll": 5,
        "title": "Der Seelensammler",
        "description": "Ein **Nachtwalker** - ein gewaltiger Schattendämon - wandert durch die Nächte Orfnirs. Er sammelt die Seelen der Gefallenen für seinen Meister Erttu. Die Clans fürchten ihn mehr als die Minotauren, denn wer von ihm getötet wird, findet keine Ruhe. Die Wurmsänger kennen ein Ritual, das ihn schwächen könnte - aber es erfordert ein Opfer."
      },
      {
        "roll": 6,
        "title": "Der Blinde Jäger",
        "description": "Ein junger **Blindgräber** - 'nur' so groß wie ein Haus - hat seinen Weg an die Oberfläche gefunden und gräbt sich durch Felder und Dörfer. Er ist verwirrt und verängstigt, was ihn umso gefährlicher macht. Die Wurmsänger könnten ihn beruhigen, aber sie sind weit weg. Das Dorf bietet alles, was sie haben, für seine Vertreibung oder Vernichtung."
      },
      {
        "roll": 7,
        "title": "Der Bluttrinker-Champion",
        "description": "Torga Eisenklaue, ein **Minotauren-Champion** mit einer Axt aus dämonischem Eisen, fordert Krieger zum Einzelkampf. Er lagert in der Nähe eines Dorfes und tötet jeden, der sich ihm nähert - außer sie akzeptieren seine Herausforderung. Der Gewinner erhält seine Axt und sein Horn, das Ghorvaks Truppen kommandieren kann."
      },
      {
        "roll": 8,
        "title": "Die lebende Ruine",
        "description": "Eine nyssilionische Ruine hat begonnen, sich zu bewegen - ein **Animierter Turm**, ein Konstrukt, das die gesamte Struktur umfasst. Es kriecht langsam durch die Steppe und absorbiert andere Ruinen in sich. Die 13. Order will es zerstören; Breagan Dartis will es plündern. Beide werden zahlen, aber nur eine Seite wird zufrieden sein."
      },
      {
        "roll": 9,
        "title": "Der Dunstdrache",
        "description": "Ein **Junger Weißer Drache**, der in den Nebeln der Dunstreiter lebt, hat begonnen, Tribut zu fordern. Er nennt sich 'Herr des Nebels' und verlangt Opfergaben - Gold, Vieh, und gelegentlich Menschen. Die Dunstreiter könnten ihn besiegen, aber der Preis wäre zu hoch. Sie suchen Verbündete, die den Drachen konfrontieren."
      },
      {
        "roll": 10,
        "title": "Das Echo",
        "description": "Ein seltsames Wesen, das die Gruppe als **Doppelgänger** identifiziert, kopiert Reisende und begeht Verbrechen in ihrem Namen. Die Clans sind verwirrt - warum würden Verbündete sie verraten? Das Echo dient einem unbekannten Meister und sammelt Chaos. Es zu finden und zu töten würde viele Fragen beantworten - und mehr aufwerfen."
      }
    ],
    "A Place to Rest": [
      {
        "roll": 1,
        "title": "Das Ordenscamp",
        "description": "Ein befestigtes Lager der 13. Order bietet Schutz für die Nacht. Die Ritter sind misstrauisch, aber ihr Kodex verlangt Gastfreundschaft für Reisende. Ser Kaela, die Lagerführerin, ist weniger fanatisch als Kaelor Dämmerstahl und stellt vorsichtige Fragen über Elfenruinen. Sie scheint innerlich mit der Brutalität der Order zu kämpfen - vielleicht eine potenzielle Verbündete?"
      },
      {
        "roll": 2,
        "title": "Die Aasfresser-Höhle",
        "description": "Eine Höhle, geschmückt mit Knochenmasken und Federfetzen, dient einem Aasfresser-Trupp als Unterschlupf. Sie bieten Gastfreundschaft an - getrocknetes Fleisch, Wärme, Schutz - verlangen aber im Gegenzug 'eine Geschichte des Todes'. Jeder Reisende muss von jemandem erzählen, den er verloren hat. Die Aasfresser hören aufmerksam zu und fügen die Namen ihrem Totengesang hinzu."
      },
      {
        "roll": 3,
        "title": "Der Breagan Dartis Handelsposten",
        "description": "Mitten im Nirgendwo steht ein gut sortierter Handelsposten mit dem Zeichen eines lächelnden Fuchses. Der Besitzer, ein alter Mensch namens Dorn, bietet faire Preise und saubere Betten. In Wahrheit ist der Posten eine Breagan Dartis Zwischenstation, und Dorn berichtet jede interessante Neuigkeit an Vaelorn. Die Wände haben Ohren - aber das Bett ist bequem."
      },
      {
        "roll": 4,
        "title": "Das Wurmsänger-Zelt",
        "description": "Ein gewaltiges Zelt aus Blindgräber-Häuten bietet Schutz vor den Elementen. Die Wurmsänger, die hier rasten, sind freundlich und teilen ihre Vorräte. Nachts singen sie tiefe, vibrierende Lieder, die seltsame Träume bringen. Ein Intelligenz (Arkane Kunde) Wurf erkennt, dass die Lieder ein Ritual sind - sie halten einen Blindgräber in der Tiefe schlafend."
      },
      {
        "roll": 5,
        "title": "Die Runenbestien-Arena",
        "description": "Ein Lager der Runenbestien umgibt eine improvisierte Arena. Die Krieger trainieren hier und heißen Reisende willkommen - wenn sie bereit sind, zu kämpfen. Nicht bis zum Tod, sondern bis 'erstes Blut'. Der Gewinner erhält Respekt und ein warmes Bett. Der Verlierer erhält... auch Respekt, wenn er tapfer gekämpft hat."
      },
      {
        "roll": 6,
        "title": "Der vergessene Tempel",
        "description": "Die Überreste eines uralten Tempels bieten Schutz vor Wind und Regen. Die Mauern sind noch stabil, und ein Dach ist teilweise erhalten. Seltsame Symbole bedecken die Wände - weder elfisch noch menschlich. Nachts flüstern die Wände in einer unbekannten Sprache, aber sie scheinen wohlwollend. Wer hier schläft, erwacht erholt und mit klarem Kopf."
      },
      {
        "roll": 7,
        "title": "Das Dunstreiter-Versteck",
        "description": "Ein von Nebel umhüllter Hain dient den Dunstreitern als Versteck. Sie sind misstrauisch gegenüber Fremden, aber Reisende, die den Nebel respektieren, werden toleriert. Die Nacht ist kalt, aber sicher - nichts kann den Nebel durchdringen, nicht einmal die Konstrukte. Am Morgen teilen die Dunstreiter ihre Karten der Nebelpfade."
      },
      {
        "roll": 8,
        "title": "Die Händlerkarawane",
        "description": "Eine Handelskarawane hat für die Nacht Halt gemacht. Der Karawanenführer, ein freundlicher Zwerg namens Gorrim, bietet Reisenden einen Platz am Feuer. Die Wachen sind nervös - sie haben Gerüchte über Minotauren gehört. Im Austausch für Schutz bietet Gorrim faire Preise auf seine Waren und Informationen über die Straßen."
      },
      {
        "roll": 9,
        "title": "Die Wächter-Siedlung",
        "description": "Ein kleines Dorf der Wächter der Steppe liegt versteckt in einem Tal. Die Bewohner sind Heiler, Schamanen, und Friedensstifter - sie nehmen alle auf, die Hilfe brauchen. Der Dorfälteste fragt nach Neuigkeiten von den anderen Clans und bietet im Gegenzug Heilung und Rat. Er scheint mehr zu wissen, als er sagt."
      },
      {
        "roll": 10,
        "title": "Das Konstrukt-Wrack",
        "description": "Ein zerstörter Uhrwerk-Titan - gefällt von den Runenbestien - bietet überraschend guten Schutz. Das Innere ist wie eine kleine Festung: warm, trocken, und leicht zu verteidigen. Allerdings summen die verbliebenen Kristalle noch immer, und manchmal zucken Gliedmaßen. Ein Weisheit (Wahrnehmung) Wurf zeigt, dass das Konstrukt noch nicht ganz tot ist."
      }
    ],
    "Old Memories": [
      {
        "roll": 1,
        "title": "Die zerbrochene Pforte",
        "description": "Zwei gewaltige Steinbögen ragen aus der Steppe, einst eine nyssilionische Runenpforte. Die Symbole sind verblasst, aber noch lesbar für jene mit arkaner Kenntnis. Ein Intelligenz (Arkane Kunde) Wurf enthüllt, dass diese Pforte einst nach Mythralis führte - und dass die Elfen sie selbst zerstört haben, um etwas einzusperren."
      },
      {
        "roll": 2,
        "title": "Das Schlachtfeld von Hornwacht",
        "description": "Verrostete Waffen und gebleichte Knochen bedecken ein weites Feld. Hier fiel vor drei Generationen ein Minotaurenheer über die Vorposten von Hornwacht her. Die Geister der Gefallenen sind längst vergangen, aber ein Weisheit (Geschichte) Wurf enthüllt Graffiti an einem zerbrochenen Schild: 'Ghorvaks Großvater starb hier - er schwor Rache für sieben Generationen.'"
      },
      {
        "roll": 3,
        "title": "Der vergessene Windturm",
        "description": "Ein spiralförmiger Turm aus weißem Stein steht verlassen auf einem Hügel. Einst ein nyssilionischer Runenfokuspunkt, diente er zur Kommunikation zwischen Elfenstädten. Die Treppen sind eingestürzt, aber ein Klettern offenbart an der Spitze ein noch funktionierendes Kontrollpanel - und die Warnung, dass 'der Wächter erwacht ist, sendet Verstärkung'."
      },
      {
        "roll": 4,
        "title": "Das Clan-Grabmal",
        "description": "Ein Hügel entpuppt sich als uraltes Grabmal der Reiterclans. Die Eingänge sind versiegelt, aber die Namen der Toten sind noch lesbar: Helden aus einer Zeit, als die Clans noch vereint waren. Ein Weisheit (Geschichte) Wurf enthüllt, dass hier der letzte vereinte Khan begraben liegt - und eine Prophezeiung, dass er zurückkehren wird, wenn Orfnir ihn am meisten braucht."
      },
      {
        "roll": 5,
        "title": "Die Elfenstraße",
        "description": "Ein perfekt erhaltener Abschnitt einer nyssilionischen Straße führt durch die Wildnis. Die Steine sind noch immer weiß und makellos, unberührt von Zeit und Wetter. Wer der Straße folgt, erreicht sein Ziel schneller als erwartet - aber manchmal führt die Straße nicht dorthin, wo man sie erwarten würde."
      },
      {
        "roll": 6,
        "title": "Der Brunnen der Visionen",
        "description": "Ein alter Brunnen, längst vertrocknet, zeigt noch immer Bilder in seinem staubigen Grund. Wer hineinschaut, sieht Szenen aus der Vergangenheit: die Elfen in ihrer Blüte, den Fall Nyssilions, das Erwachen der Blindgräber. Ein Weisheit (Einsicht) Wurf zeigt ein Bild der Zukunft - aber es ist verschwommen und beunruhigend."
      },
      {
        "roll": 7,
        "title": "Die Runenbestien-Gedenkstätte",
        "description": "Ein Kreis aus eingeschlagenen Speeren, jeder mit dem Namen eines gefallenen Kriegers graviert. Dies ist ein Runenbestien-Denkmal für ihre Toten im Kampf gegen die Minotauren. Die neuesten Namen sind erst wenige Wochen alt. Ein Weisheit (Einsicht) Wurf zeigt, dass die Runenbestien mehr verloren haben als je zuvor - und verzweifelt werden."
      },
      {
        "roll": 8,
        "title": "Die Konstrukt-Fabrik",
        "description": "Eine zerfallene Halle, einst eine Fabrik für Uhrwerk-Konstrukte. Die Maschinen sind still, aber nicht zerstört. Ein Intelligenz (Nachforschungen) Wurf enthüllt Baupläne für verschiedene Konstrukt-Typen - einschließlich eines 'Kronos-Prototyps', der niemals gebaut wurde. Die Pläne könnten wertvoll sein - oder gefährlich."
      },
      {
        "roll": 9,
        "title": "Das Dunstreiter-Archiv",
        "description": "Eine versteckte Höhle enthält Schriftrollen und Bücher der Dunstreiter - ihre Geschichte, ihre Magie, ihre Geheimnisse. Vieles ist in einer Sprache geschrieben, die nur sie verstehen. Ein Intelligenz (Arkane Kunde) Wurf enthüllt Informationen über die Nebelpfade - und wie man sie nutzen könnte, um die Konstrukte zu umgehen."
      },
      {
        "roll": 10,
        "title": "Die Erste Pfahlwacht",
        "description": "Die Überreste der ursprünglichen Pfahlwacht liegen verborgen in einem Tal. Hier vereinten sich die fünf Clans zum ersten Mal. Die Strukturen sind zerfallen, aber die symbolischen Pfähle stehen noch - fünf, für jeden Clan. Ein Weisheit (Religion) Wurf enthüllt, dass hier ein uralter Pakt geschlossen wurde - und dass er noch immer gilt."
      }
    ],
    "A Dark Place": [
      {
        "roll": 1,
        "title": "Das Seelenlager",
        "description": "Ein Kreis aus geschwärzter Erde, umgeben von in den Boden gerammten Speeren. An jedem Speer hängt ein ausgetrockneter Körper - Opfer der Bluttrinker, deren Seelen Erttu geerntet hat. Die Körper bewegen sich nicht, aber ihre Münder stehen offen in stummen Schreien. Ein Weisheit (Religion) Wurf enthüllt dämonische Symbole, die die Seelen am Übergang ins Jenseits hindern."
      },
      {
        "roll": 2,
        "title": "Die Stille Werkstatt",
        "description": "Eine unterirdische Kammer, erfüllt vom Summen schlafender Maschinen. Dutzende halbfertige Konstrukte hängen an Ketten von der Decke - alle mit leeren Augenhöhlen, die auf Kristalle warten. Auf einem Arbeitstisch liegt ein elfisches Skelett, die Hände noch immer um ein Werkzeug geklammert. Es starb bei der Arbeit, vor Jahrhunderten, und niemand hat es je gefunden."
      },
      {
        "roll": 3,
        "title": "Kaelors Verhörzelt",
        "description": "Ein blutgetränktes Zelt abseits des Ordenslagers. Hier verhört Kaelor Dämmerstahl persönlich 'Ketzer und Artefaktdiebe'. Die Schreie sind verstummt, aber die Flecken sind frisch. Ein gefesselter Dunkelelf hängt noch immer an den Ketten - halbtot, aber atmend. Er flüstert: 'Sie suchen die Waffe... sie werden alles töten, um sie zu bekommen...'"
      },
      {
        "roll": 4,
        "title": "Das Ritual der Bluttrinker",
        "description": "Ein Kreis aus Minotauren-Totems umgibt einen blutgetränkten Altar. Hier führen die Bluttrinker ihre Opferrituale durch - Seelen für Erttu, Blut für Ghorvak. Die Knochen der Opfer sind ordentlich gestapelt, ihre Schädel zu einem grotesken Turm aufgebaut. Ein Weisheit (Religion) Wurf zeigt, dass das nächste Ritual bei Vollmond stattfindet - in drei Tagen."
      },
      {
        "roll": 5,
        "title": "Der Fleischwandlungs-Unfall",
        "description": "Ein verlassenes Runenbestien-Lager, übersät mit... Dingen. Die Fleischwandlung ist hier schiefgegangen - die resultierenden Kreaturen waren weder Mensch noch Tier, sondern etwas Drittes. Die Überreste sind grotesk: verschmolzene Gliedmaßen, zu viele Augen, Münder an falschen Stellen. Die Runenbestien haben jeden Überlebenden getötet - aus Gnade."
      },
      {
        "roll": 6,
        "title": "Der Konstrukt-Friedhof",
        "description": "Hunderte zerstörte Konstrukte liegen in einer Senke, ihre kristallenen Augen dunkel. Dies ist, wo die Konstrukte ihre 'Defekten' entsorgen - jene, die nicht mehr funktionieren. Aber einige funktionieren noch: Sie bewegen sich langsam, kriechen über ihre toten Brüder, und versuchen, sich zu reparieren. Ihr Summen klingt fast wie Weinen."
      },
      {
        "roll": 7,
        "title": "Das Massengrab von Hornwacht",
        "description": "Ein frisches Massengrab, gefüllt mit Leichen aus den umliegenden Dörfern. Die Minotauren haben keine Gefangenen gemacht - nur Opfer für Erttu. Die Körper sind verstümmelt, ihre Seelen geraubt. Ein Klerikercharakter spürt die Abwesenheit der Seelen wie ein kaltes Loch. Die Geister können nicht ruhen, bis ihre Seelen befreit werden."
      },
      {
        "roll": 8,
        "title": "Der vergessene Kerker",
        "description": "Unter einer Ruine liegt ein nyssilionischer Kerker. Die Zellen sind noch besetzt - von Skeletten, die in Ketten hängen, gefoltert und vergessen. Ein Intelligenz (Geschichte) Wurf enthüllt, dass dies ein Gefängnis für 'Gedankenverbrecher' war - Elfen, die die Konstrukte hinterfragten. Ihre letzten Worte sind in die Wände geritzt: 'Kronos wird uns alle töten.'"
      },
      {
        "roll": 9,
        "title": "Das Tor nach Mythralis",
        "description": "Ein intaktes nyssilionisches Tor steht in einer Senke. Es ist versiegelt, aber nicht zerstört. Wer es berührt, spürt... etwas auf der anderen Seite. Etwas, das ebenfalls den Berührenden spürt. Ein Intelligenz (Arkane Kunde) Wurf enthüllt, dass das Tor nach Mythralis führt - und dass das, was dort eingesperrt ist, seit Jahrhunderten auf eine Chance wartet."
      },
      {
        "roll": 10,
        "title": "Die Stimme in der Tiefe",
        "description": "Ein Loch im Boden führt in die Dunkelheit. Aus der Tiefe steigt eine Stimme - nicht auf, sondern ein. Sie spricht direkt im Kopf der Zuhörer, in einer Sprache, die sie nicht kennen sollten, aber verstehen. 'Kommt zu mir', flüstert sie. 'Ich warte seit so langer Zeit.' Ein Weisheit (Rettungswurf) widersteht dem Drang, hinabzusteigen."
      }
    ],
    "Deadly Fight": [
      {
        "roll": 1,
        "title": "Der Dämonensturm",
        "description": "Der Himmel verdunkelt sich, als ein Schwarm **Dretches** aus einem gerade geöffneten Portal quillt. Hinter ihnen schreitet ein **Hezrou**, Erttus Vorhut für die kommende Invasion. Die Dämonen stürmen auf das nächste Dorf zu - die Gruppe steht zwischen ihnen und hundert unschuldigen Leben. Der Hezrou brüllt in der Abyssalsprache: 'Erttu sendet seine Grüße!'"
      },
      {
        "roll": 2,
        "title": "Die Erwachten",
        "description": "Die Ruine erwacht zum Leben. Ein **Uhrwerk-Titan** und vier **Uhrwerk-Soldaten** erheben sich aus ihrem jahrhundertelangen Schlaf, ihre Kristallaugen fixiert auf die Eindringlinge. Der Titan trägt die zerbrochene Reliktwaffe auf dem Rücken - dieselbe Waffe, nach der die 13. Order sucht. Flucht ist möglich, aber die Konstrukte werden dem Fliehenden folgen."
      },
      {
        "roll": 3,
        "title": "Ghorvaks Elite",
        "description": "Ein Kriegshorn erschallt. Ghorvak Blutgeweih selbst führt seinen inneren Kreis - drei **Minotauren-Champions** mit dämonisch verstärkten Äxten. Seine Augen glühen rot von Erttus Macht, aber für einen Moment flackert etwas anderes darin: Schmerz. Ghorvak kämpft nicht nur gegen die Gruppe - er kämpft gegen die Kontrolle des Dämons. Vielleicht kann diese Schwäche genutzt werden."
      },
      {
        "roll": 4,
        "title": "Der Kreuzzug der Order",
        "description": "Kaelor Dämmerstahl selbst führt eine Truppe von zehn **Rittern** gegen 'Ketzer und Dämonendiener' - die Gruppe. Er ist überzeugt, dass sie mit Erttu verbündet sind, und wird keine Gnade zeigen. Seine Relikt-Klinge, **Dämmerbrecher**, glüht mit heiligem Licht. Der Kampf wird brutal, aber Kaelor kann vielleicht überzeugt werden - wenn man ihm Beweise für Erttus wahre Pläne zeigt."
      },
      {
        "roll": 5,
        "title": "Der Verräter unter uns",
        "description": "Vaelorn, der Breagan Dartis Händler, hat die Gruppe verraten. Er führt einen Trupp von acht **Assassinen** gegen sie - er braucht, was sie tragen, für seine wahren Meister. Im Kampf enthüllt er seine wahre Natur: Er ist ein **Wechselbalg**, der viele Gesichter trägt. Sein Tod würde viele Fragen beantworten - aber auch neue aufwerfen."
      },
      {
        "roll": 6,
        "title": "Der Bindungsbruch",
        "description": "Malokh der Grausame, der **Ghalzarokh**, hat seine Ketten gesprengt. Er ist nicht länger an Erttu gebunden - und er ist wütend. Er greift alles an: die Gruppe, die Minotauren, die Konstrukte. Sein Ziel ist Chaos. Im Kampf zeigt sich, dass er Hilfe annehmen würde - gegen Erttu. Aber kann man einem freien Dämon vertrauen?"
      },
      {
        "roll": 7,
        "title": "Die Konstrukt-Legion",
        "description": "Kronos selbst hat eine Legion entsandt: zwanzig **Uhrwerk-Soldaten** unter dem Kommando eines **Uhrwerk-Generals**. Ihre Mission ist 'Säuberung' - alles Nicht-Elfische muss sterben. Der General kann sprechen und bietet eine Wahl: 'Weicht zurück und lebt. Widersteht und sterbt. Die Entscheidung ist eure.' Er lügt nicht - aber er wird auch nicht verhandeln."
      },
      {
        "roll": 8,
        "title": "Das Erwachen des Blindgräbers",
        "description": "Die Erde bebt. Ein **Blindgräber** - nicht jung, nicht alt, einfach gewaltig - bricht durch die Oberfläche. Er ist wütend, geweckt durch die Magie der Konstrukte. Flucht ist die einzige Option - aber der Blindgräber ist schnell. Die Wurmsänger könnten ihn beruhigen, aber sie sind nicht hier. Vielleicht kann ihre Musik imitiert werden?"
      },
      {
        "roll": 9,
        "title": "Die Belagerung von Hornwacht",
        "description": "Hornwacht ist umzingelt. Ghorvaks Heer - hunderte **Minotauren**, verstärkt durch **Dämonen** - bereitet den Sturm vor. Die Gruppe ist drinnen, zusammen mit den Verteidigern. Es gibt keinen Ausweg - nur Kampf oder Tod. Der Kommandant bittet um einen verzweifelten Plan: Jemand muss Ghorvak selbst töten, um das Heer zu zerstreuen."
      },
      {
        "roll": 10,
        "title": "Der Ghalzarokh und der Titan",
        "description": "Zwei Giganten kämpfen vor den Augen der Gruppe: Malokh der Grausame gegen einen **Uhrwerk-Titan**. Der Kampf zerstört alles in seiner Umgebung. Beide sind Feinde - aber einer muss gewinnen. Die Gruppe könnte eingreifen, um das Ergebnis zu beeinflussen. Aber auf wessen Seite? Der Dämon verspricht Informationen. Der Titan verspricht nichts."
      }
    ],
    "Fateful Encounter": [
      {
        "roll": 1,
        "title": "Der gebundene Verräter",
        "description": "Malokh der Grausame, ein massiver **Ghalzarokh**, materialisiert vor der Gruppe - aber er greift nicht an. Seine Stimme ist ein Donnergrollen: 'Ich hasse meinen Meister mehr als ihr es je könntet.' Er bietet einen Pakt: Informationen über Erttus Pläne und die Schwächen der Minotauren im Austausch für einen 'kleinen Gefallen' - die Gruppe soll einen Rivalen Erttus in der dämonischen Hierarchie kontaktieren. Die infernale Hierarchie bindet Malokh an Erttu, aber vielleicht gibt es einen Weg..."
      },
      {
        "roll": 2,
        "title": "Die Spinnerin der Tausend Wege",
        "description": "Ma'kharis Aschenseide selbst tritt aus den Schatten - eine elegante **Amurrun** mit bernsteinfarbenen Augen und einem wissenden Lächeln. Sie weiß Dinge über die Gruppe, die sie nicht wissen sollte. Ihr Angebot ist direkt: Breagan Dartis sucht die fünf Scheiben, um das Tor zu Krishnazzar zu öffnen - einem uralten Echsenpriester mit Wissen über die Konstrukte. Sie braucht Hilfe, und sie zahlt fürstlich. Aber kann man einer Diebin trauen?"
      },
      {
        "roll": 3,
        "title": "Der Zweifelnde Paladin",
        "description": "Ser Kaela, Lagerführerin der 13. Order, sucht die Gruppe heimlich auf. Ihre Stimme ist kaum ein Flüstern: 'Kaelor hat den Verstand verloren. Er will die Reliktwaffe nicht bergen - er will sie benutzen. Gegen jeden, der sich ihm widersetzt.' Sie bittet um Hilfe, die Order von innen zu reformieren oder zumindest Kaelor aufzuhalten. Aber Verrat an der Order bedeutet den Tod - für sie und jeden, der ihr hilft."
      },
      {
        "roll": 4,
        "title": "Ghorvaks Schwester",
        "description": "Eine **Minotaurin** nähert sich der Gruppe - ohne Waffen, mit erhobenen Händen. Sie ist Kara, Ghorvaks Schwester. Sie floh nach Orfnir, als die Bluttrinker begannen, Dämonen zu dienen. Sie kennt ihren Bruder - und seine Schwäche. 'Er hasst Erttu', flüstert sie. 'Aber der Dämon hat etwas über ihn. Findet heraus, was es ist, und ihr könnt ihn befreien.'"
      },
      {
        "roll": 5,
        "title": "Der letzte Elf",
        "description": "Ein **Elf** - ein echter, lebender Elf aus Nyssilion - steht vor der Gruppe. Vaelirion der Ewige überlebte den Fall seines Reiches durch Zeitmagie und erwachte erst vor kurzem. Er ist entsetzt über das, was aus Nyssilion wurde - und über Kronos. 'Ich habe ihn erschaffen', gesteht er. 'Ich kann ihn stoppen. Aber ich brauche die fünf Ringe.'"
      },
      {
        "roll": 6,
        "title": "Das Angebot des Wurmgottes",
        "description": "Die Gruppe träumt denselben Traum: Eine Stimme aus der Tiefe, älter als die Welt, spricht zu ihnen. Es ist **Thorgun**, der Unendliche Schlund, einer der Wurmgötter. Er bietet einen Pakt: Hilfe gegen Erttu und die Konstrukte im Austausch für... einen Gefallen. Später. 'Die Schuld wird kommen', donnert seine Stimme. 'Aber nicht heute.' Nehmt ihr an?"
      },
      {
        "roll": 7,
        "title": "Die Prophezeiung der Wächter",
        "description": "Ein uralter Schamane der Wächter der Steppe sucht die Gruppe auf. Er hat eine Vision gehabt - über sie. 'Ihr seid die Fünf', sagt er. 'Die Fünf, die entscheiden werden.' Er erklärt nicht mehr, aber er überreicht jedem von ihnen ein Amulett. Die Amulette sind alt, sehr alt - älter als die Clans. Sie tragen die Symbole der fünf Reiterclans."
      },
      {
        "roll": 8,
        "title": "Erttus Angebot",
        "description": "Ein Flüstern in der Dunkelheit, eine Stimme, die aus der Tiefe kommt. **Erttu** selbst spricht zur Gruppe - nicht durch einen Diener, sondern direkt. 'Ihr amüsiert mich', sagt er. 'Ich biete euch einen Platz an meiner Seite. Macht, Reichtum, Unsterblichkeit. Alles, was ihr euch wünscht.' Die Versuchung ist real - und Erttu lügt nie. Er hält seine Versprechen. Das ist das Gefährliche."
      },
      {
        "roll": 9,
        "title": "Der erwachte Konstrukt",
        "description": "**Tikkar-7** - oder ein ähnlicher 'defekter' Konstrukt - sucht die Gruppe auf. Er hat Zugang zu Kronos' Netzwerk gewonnen und weiß Dinge. Wichtige Dinge. 'Der Wächter plant die Säuberung', erklärt er. 'Alle Nicht-Elfen. Überall. Ich kann ihn nicht stoppen. Aber ihr vielleicht.' Er bietet Zugang zu den Konstrukt-Kontrollen - aber der Preis ist hoch: Er muss geopfert werden."
      },
      {
        "roll": 10,
        "title": "Die Vereinigung der Khans",
        "description": "Boten aller fünf Clans erreichen die Gruppe gleichzeitig. Die Khans haben sich entschieden: Ein Konklave wird einberufen. Alle fünf Clans werden vertreten sein - zum ersten Mal seit Generationen. Und die Gruppe ist eingeladen. Nicht als Zuschauer, sondern als Sprecher. Die Clans haben gehört, was sie getan haben, und sie wollen zuhören. Die Zukunft Orfnirs liegt in ihrer Hand."
      }
    ]
  }
};
