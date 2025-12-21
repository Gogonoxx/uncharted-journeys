/**
 * Encounter Type Rules for Uncharted Journeys (PF2E Edition)
 * Contains the resolution rules for each of the 12 encounter types
 *
 * NOTE: Resolution mechanics (ENCOUNTER_RESOLUTION_CONFIG) remain UNCHANGED.
 * Only the descriptive text has been updated for PF2E terminology.
 *
 * D&D → PF2E Terminology:
 * - Perception → Society/Perception
 * - Diplomacy → Diplomacy
 * - Perception → Perception
 * - Survival → Survival
 * - Stealth → Stealth
 * - Fortitude save → Fortitude save
 * - Will save → Will save
 * - Advantage/Disadvantage → Fortune/Misfortune
 */

export const ENCOUNTER_TYPE_RULES = {
  "A Chance Meeting": {
    name: "A Chance Meeting",
    summary: "Meeting other travelers on the road who carry tales and news from the region.",
    keyRole: "Leader",
    content: `<h2>A Chance Meeting</h2>
<p>When the party encounters another person or band of travellers along their journey, they often carry tales of the road and news from the region. A Chance Meeting is an opportunity for the GM to share more information about the world and setting, plant adventure hooks, introduce allies and rivals who may become important later, allow for moments of levity, and let players stretch their roleplaying muscles.</p>

<p>These Encounters feature one or more NPCs, and describe their mood, their motivation, and any interesting information they might share with the party. The <strong>Leader</strong> is an important Role in this Encounter Type, as their insights into the other travellers will keep the party forewarned and prepared.</p>

<h3>Resolution</h3>
<p>A Chance Meeting has two steps: the Leader Check and the Group Check.</p>

<h4>Leader Check</h4>
<p>The Leader makes a <strong>Society</strong> check to evaluate the mood of the newcomers and gauge their intentions. This represents the Leader making introductions for the group while trying to get a feel for how best to approach the situation.</p>
<ul>
<li><strong>On a success:</strong> Reduce the DC of the Group Check by 2.</li>
<li><strong>On a failure:</strong> Increase the DC of the Group Check DC by 2.</li>
</ul>

<h4>Group Check</h4>
<p>Once the Leader has made the introductions, each party member then makes a <strong>Diplomacy</strong> or <strong>Perception</strong> check, representing their contributions to the conversation, their demeanour, and their intuition about how the meeting is going. If one or more party members is lying or misleading the other group, they can make a <strong>Deception</strong> check instead.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party leaves a good impression and may be given helpful directions to a sheltered spot or interesting landmark on the road ahead. The GM rolls 1d6, replacing the next Encounter with one of the following: on a 1–3, the travellers direct the party to a nearby Natural Wonder; on a 4, they whisper of Old Memories the party may wish to discover; on a 5, they tell the party of a safe Place to Rest; and on a 6, they disclose that there are Hidden Reserves secreted away close by.</li>
<li><strong>If more than half of the party succeed:</strong> The two groups part amicably and share knowledge of what they have seen, such as potential hazards and how to overcome them. Each character makes their next ability check with Advantage.</li>
<li><strong>If half or fewer of the party succeed:</strong> The travellers share little and are keen to be on their way. The party gain no additional effects.</li>
<li><strong>If no party members succeed:</strong> The party insult, cajole, or otherwise leave a bad impression on the group, to the point where they purposely mislead the party. The GM adds another Encounter onto the Journey as the party take the wrong path. If the party make a really bad impression, instead of rolling for the next Encounter, the GM can decide that the other group directs them into danger and chooses either A Bump in the Road, Danger Afoot, or a Deadly Fight as the next Encounter.</li>
</ul>`
  },

  "Hidden Reserves": {
    name: "Hidden Reserves",
    summary: "Finding additional supplies like food, ammunition, equipment, or healing items.",
    keyRole: "Quartermaster",
    content: `<h2>Hidden Reserves</h2>
<p>Throughout the lands, there are always caches of supplies to be found. Hidden Reserves Encounters are a chance for the party to find additional supplies to help them on their Journey. They often feature abundant sources of food, forgotten stashes of ammunition, useful equipment for traversing the region, or hidden caches of healing items. Finding these windfalls is challenging, but well worth the effort.</p>

<p>A Hidden Reserves Encounter features a description of the resource the party stumbles upon, where they are, and how they are useful to their Journey. The more supplies the party successfully gathers, the stronger the impact on the party. The <strong>Quartermaster</strong> is an important Role in this Encounter Type, as they are often adept at foraging for supplies and identifying useful equipment. Their expertise will help the party find, track, and best use these new provisions.</p>

<h3>Resolution</h3>
<p>To resolve a Hidden Reserves Encounter, the party must make a Group Check to search through an area to find the hidden cache of supplies.</p>

<h4>Group Check</h4>
<p>Each party member must make either an <strong>Perception</strong>, <strong>Thievery</strong>, or <strong>Survival</strong> check. The Quartermaster may replace another party member's result with their own.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party find more supplies than they expected and are filled with hope after this successful haul. Each party member gains Inspiration or removes one level of Exhaustion (player's choice), and the Quartermaster recovers 1 Supply Die.</li>
<li><strong>If more than half of the party succeed:</strong> The extra supplies lessen the party's burden. Each party member removes one level of Exhaustion.</li>
<li><strong>If half or fewer of the party succeed:</strong> The supplies found are meagre, only just balancing out the energy expended to find them. The party gain no additional effects.</li>
<li><strong>If no party member succeeds:</strong> The search is grueling, and the supplies found are not worth the time and effort. Each party member gains one level of Exhaustion.</li>
</ul>`
  },

  "A Bump in the Road": {
    name: "A Bump in the Road",
    summary: "Natural or artificial obstacles blocking the way forward.",
    keyRole: "Outrider",
    content: `<h2>A Bump in the Road</h2>
<p>When travelling, it is inevitable that some natural or artificial obstacle blocks your way forward. A Bump in the Road Encounter features a hurdle that the party must overcome, such as hazardous terrain, creatures protecting their lands, or other travellers who wish to interfere in the party's business. There is rarely a reward in such Encounters, and they can often lead to negative consequences if the party are not up to the challenge.</p>

<p>A Bump in the Road Encounter includes a description of the obstacle the party faces and the appropriate ability check or saving throw needed to overcome it. The <strong>Outrider</strong> Role is important in this Encounter Type, as their pathfinding skills affect how hard the party has to work to overcome the problem.</p>

<h3>Resolution</h3>
<p>A Bump in the Road has two steps: the Outrider Check and the Constitution Save.</p>

<h4>Outrider Check</h4>
<p>The Outrider must make an ability check as determined by the entry on the Encounter table. The result of this check affects the Constitution Save.</p>
<ul>
<li><strong>On a success by 5 or more:</strong> The Outrider advises the group on how best to prepare for the challenge ahead. Each party member makes the Fortitude save for this Encounter with Advantage.</li>
<li><strong>On a success:</strong> The Outrider is unsure how to approach the obstacle, but does their best to guide the party. Each party member makes the Fortitude save as normal.</li>
<li><strong>On a failure:</strong> The Outrider directs the party to approach it in the wrong way. Each party member makes the Fortitude save for this Encounter with Disadvantage.</li>
</ul>

<h4>Constitution Save</h4>
<p>After determining the result of the Outrider's check, each party member must make a <strong>Fortitude save</strong>. This represents the party having to cover more ground to push through an obstacle or travelling far out of their way to avoid it. The result of each character's individual saving throw determines the effects applied to that specific character; this is not a group check.</p>
<ul>
<li><strong>On a success:</strong> The character endures the trials without any negative consequence.</li>
<li><strong>On a failure:</strong> The character has pushed themself further than their resolve could handle. They gain 1 level of exhaustion.</li>
</ul>`
  },

  "Needing Assistance": {
    name: "Needing Assistance",
    summary: "Coming across folk who are lost, trapped, or in danger from the world around them.",
    keyRole: "Quartermaster",
    content: `<h2>Needing Assistance</h2>
<p>Travelling through unknown lands and even along well-trodden paths can be dangerous, and there are many pitfalls and hazards that unwary travellers can fall prey to. The party can sometimes come across folk Needing Assistance and can render aid to those who may be lost, trapped, or in danger from the world around them. Those they have helped may offer news or rewards for the party's aid, though the party runs the risk of delays to their own Journey due to taking the time to care for the new travellers.</p>

<p>A Needing Assistance Encounter includes a description of the people who are in danger, what led to their current predicament, and the actions and skills required to help them. The <strong>Quartermaster</strong> is an important Role in this Encounter Type, as they can use their supplies and equipment to aid their allies and calm those in need.</p>

<h3>Resolution</h3>
<p>To resolve a Needing Assistance Encounter, the party must make a Group Check to aid the other group.</p>

<h4>Group Check</h4>
<p>Each party member must make an ability check, as determined by the entry on the Encounter table. The Quartermaster may replace another party member's result with their own result. The players may choose not to help those in need, should they wish. If so, the GM should record the NPC's that were encountered and use them at a later stage as possible rivals / nemeses.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party's help may have saved the travellers from catastrophe, and they are eternally grateful for the party's aid. At the GM's discretion, the group may offer the party additional supplies (the Quartermaster recovers one extra Supply Die), give them directions to a location the party seek (add one additional Encounter but the party can choose the Encounter Type), or promise to offer them aid or monetary reward should their paths cross again.</li>
<li><strong>If more than half of the party succeed:</strong> The party has helped someone in need, and each group can safely go on their way. The party's spirits are raised by knowing they helped another in need. Each party member gains Inspiration.</li>
<li><strong>If half or fewer of the party succeed:</strong> The party's efforts were in vain. They failed to help the group and the effect is dejecting. Each party member loses Inspiration.</li>
<li><strong>If no party member succeeds:</strong> The party fails completely, and may even make things worse. They may expend too much energy (each party member gains a level of Exhaustion), waste resources (the Quartermaster loses a Supply Die), become disheartened by their failure (each party member loses Inspiration), or even inadvertently hurt, injure, or wrong those they are trying to help. The GM should choose an appropriate outcome.</li>
</ul>`
  },

  "Danger Afoot": {
    name: "Danger Afoot",
    summary: "Confronting humanoids actively working against the party, or forces trying to ambush or attack them.",
    keyRole: "Sentry",
    content: `<h2>Danger Afoot</h2>
<p>There are those throughout the world that seek to take advantage of unwary travellers. In a Danger Afoot encounter the party confronts humanoids actively working against them, or other forces trying to ambush or attack them. There are signs that, if noticed, betray the presence of these enemies. These encounters put the party in harm's way, but also may present the opportunity for an easy win.</p>

<p>A Danger Afoot encounter includes a description of the enemies the party are facing, the telltale signs that can forewarn the characters, and the motivation and goals of the enemies. <strong>Sentries</strong> are a vital Role in this Encounter Type, as being alert and on the lookout for enemies will improve the odds for the Encounter ahead.</p>

<h3>Resolution</h3>
<p>To resolve a Danger Afoot Encounter, the party must make a Group Check to determine how prepared they are for trouble.</p>

<h4>Group Check</h4>
<p>Each party member must make a <strong>Perception</strong>, <strong>Perception</strong>, or <strong>Stealth</strong> check. The Sentry may replace another party member's result with their own.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party notices the danger ahead and has ample time to prepare. If and when combat begins, the enemy is Surprised.</li>
<li><strong>If more than half of the party succeed:</strong> The more observant of the party notice the incoming threats and warn the rest of the party. If and when combat begins, neither side is Surprised.</li>
<li><strong>If half or fewer of the party succeed:</strong> The enemy gets the drop on some of the party. If and when combat begins, any character who failed their check is Surprised.</li>
<li><strong>If no party member succeeds:</strong> The party was distracted, wrong-footed, or otherwise caught completely unaware and stumble into danger. If and when combat begins, the whole party is Surprised and make their Initiative roll with Disadvantage.</li>
</ul>`
  },

  "Natural Wonders": {
    name: "Natural Wonders",
    summary: "Beautiful or foreboding geographical features that can inspire or overwhelm the party.",
    keyRole: "Leader",
    content: `<h2>Natural Wonders</h2>
<p>The land is filled with wonders, from beautiful snow capped mountains creating a picturesque vista, to small pearls shining beautifully within the shells of oysters. Natural Wonders can be inspiring, giving hope and sparking something in the soul, or it can be foreboding and daunting, making characters feel insignificant as they confront the near-impossible task ahead.</p>

<p>Each Natural Wonders Encounter includes a description of a prominent geographical or natural feature, and what aspects of the feature may contribute to the party's hope or despair. <strong>Leaders</strong> play an important Role in this Encounter Type, as they can use this moment of awe to lift the party's spirits. Natural Wonders are a great opportunity for the GM to share more about their world, allowing them to introduce prominent landmarks, share stories of the land to fill its history, and give the party insight and context for the world they are adventuring in.</p>

<h3>Resolution</h3>
<p>To resolve a Natural Wonders Encounter, the party must make a Group Check to determine if they are overwhelmed by the awesome presence of this feature.</p>

<h4>Group Check</h4>
<p>Each party member makes a <strong>Will save</strong> to determine how the sight of such an awesome wonder affects them. The Leader may replace another party member's result with their own.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party takes a quiet moment to admire this natural wonder, perhaps feeling their burdens lifted or a new sense of purpose. Each party member gains Inspiration. The GM may grant additional rewards, such as gaining Advantage on checks to navigate the region as the party use a towering mountain to orient themselves, or recovering a Hit Die after drinking from a crystalline lake.</li>
<li><strong>If more than half of the party succeed:</strong> The party are invigorated by the beauty before them and excited to face the challenges ahead. Each party member gains Advantage on their next ability check or saving throw.</li>
<li><strong>If half or fewer of the party succeed:</strong> The party fails to see this wonder as more than just another sight on the long hard road to their destination. The party gain no additional effects.</li>
<li><strong>If no party members succeed:</strong> The party feel small and insignificant in the face of the unrelenting harshness of nature and the daunting challenge ahead. Each party member loses Inspiration and has Disadvantage on their next ability check or saving throw.</li>
</ul>`
  },

  "Monster Hunt": {
    name: "Monster Hunt",
    summary: "Evidence of a natural beast or monster from the region. Track it or avoid it.",
    keyRole: "Outrider",
    content: `<h2>Monster Hunt</h2>
<p>The party stumbles across evidence of a natural beast or monster from the region. These creatures are likely patrolling their territory or on the hunt for their next meal. The party can avoid the risk of a deadly encounter, but great opportunities and rewards await a successful Monster Hunt.</p>

<p>A Monster Hunt Encounter includes a named monster that has wandered into the area or is local to the region, the signs and evidence of the monster's presence in the area, the creature's demeanour, and the valuable reward that can be obtained from these creatures. The <strong>Outrider</strong> is a key Role in this Encounter Type, as they will likely be the first to notice evidence of the dangerous creature and will be essential in finding the monster. If the party choose to avoid the creature, the <strong>Sentry</strong> plays a vital part instead.</p>

<h3>Resolution</h3>
<p>To resolve a Monster Hunt Encounter, the party must first decide if they want to try and track the creature, or to avoid it.</p>

<h4>Tracking the Monster</h4>
<p>If the party chooses to track the creature, each party member must make a <strong>Survival</strong> or <strong>Nature</strong> check to see how well they follow the creature's trail. The Outrider may replace another party member's result with their own.</p>
<ul>
<li><strong>If more than half of the party succeed:</strong> The party's efforts have led them to the creature's exact location, and it has not noticed their approach. When combat begins, the creature is Surprised.</li>
<li><strong>If half or fewer of the party succeed:</strong> It has taken longer than expected, but the party has successfully tracked the creature to its lair. However, their presence has not gone unnoticed, and combat begins immediately.</li>
</ul>

<h4>Avoiding the Monster</h4>
<p>If the party chooses to avoid the creature, each party member must make a <strong>Stealth</strong> or <strong>Perception</strong> check to avoid the creature's notice. The Sentry may replace one other party member's result with their own.</p>
<ul>
<li><strong>If more than half of the party succeed:</strong> The party escapes from the monster without notice or interference. No combat occurs and there are no further effects.</li>
<li><strong>If half or fewer of the party succeed:</strong> The party inadvertently stumble into the monster's lair, or the creature has actually been hunting the party all along. Combat begins immediately and the party are Surprised.</li>
</ul>`
  },

  "A Place to Rest": {
    name: "A Place to Rest",
    summary: "A safe haven where the party can recuperate and regain spent resources.",
    keyRole: "Quartermaster",
    content: `<h2>A Place to Rest</h2>
<p>The party's Journey will be taxing and offer few moments to rest. However, they may be lucky enough to come across a safe haven where they can recuperate. A Place to Rest offers the opportunity for the group to regain their spent resources. These locations are an ideal opportunity for a break from the tension and stress of the road, but the party may not be the only creatures seeking sanctuary.</p>

<p>A Place to Rest Encounters include a description of the location the party have found, what about it makes it suitable as a potential campsite, and any enemies that may try to oust the party from the location. The <strong>Quartermaster</strong> is an important Role in this Encounter type, as they can aid the party's recovery with hearty foods, redistribution of gear, and minor repairs to any damaged equipment.</p>

<h3>Resolution</h3>
<p>A Place to Rest has two steps: the Quartermaster Check, and the Group Check.</p>

<h4>Quartermaster Check</h4>
<p>The Quartermaster makes a <strong>Survival</strong> check to determine how safe the location is, directs the party how best to set up camp, and prepares the evening meal. The result of this check affects the Group Check.</p>
<ul>
<li><strong>On a success by 5 or more:</strong> The Quartermaster has prepared an ideal campsite and made the site as safe and comfortable as possible. The party makes the Group Check with Advantage.</li>
<li><strong>On a success:</strong> The Quartermaster has adequately prepared the camp for a good night's rest. The party makes the Group Check as normal.</li>
<li><strong>On a failure:</strong> The Quartermaster has set up camp in a less than ideal location, leaving the party exposed to the elements and any dangers lurking beyond. The party makes the Group Check with Disadvantage.</li>
</ul>

<h4>Group Check</h4>
<p>After determining the result of the Quartermaster's check, each party member must make a <strong>Perception</strong> check to ensure those on duty stay alert and awake through their shift.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party have a peaceful and refreshing night's sleep. They gain the benefits of a Long Rest.</li>
<li><strong>If more than half of the party succeed:</strong> The party have a relatively comfortable night's sleep. They gain the benefits of a Short Rest.</li>
<li><strong>If half or fewer of the party succeed:</strong> The party have an uneasy night and can't relax. They feel no better by morning and gain no benefits from the night's sleep.</li>
<li><strong>If no party member succeeds:</strong> The party have a terrible night's sleep and are left drained. Perhaps something already occupies the place and they are forced to fight it, or the stresses of the road lead to a night of bickering with one another. The party gains one level of Exhaustion. This happens after any combat that may occur during the night.</li>
</ul>`
  },

  "Old Memories": {
    name: "Old Memories",
    summary: "Remnants of ancient civilizations - crumbling ruins or magical relics from forgotten empires.",
    keyRole: "Leader",
    content: `<h2>Old Memories</h2>
<p>There are ancient civilizations scattered throughout the land, their stories lost to time. The remnants of these forgotten empires can still be found in the world. They are the crumbling ruins your party passes on their journey, or the secret magical relics found in hidden tombs. These Old Memories are an opportunity for the GM to share some of the history of the campaign world, to give the party context for their endeavours, or it may remind them of all that has been lost to the sands of time. These locations are intended to add depth and age to your world, and if the players want to explore these locations further you can use the rules for creating Ancient Ruins.</p>

<p>An Old Memories Encounter includes a description of an ancient structure or relic that is emblematic of cultures that were once powerful and prominent, but have since faded through history. The <strong>Leader</strong>, in telling tales of this place lost to time or presenting it in the context of the party's current trials, can inspire a sense of hope in the party, or inadvertently invoke a sense of loss and remorse.</p>

<h3>Resolution</h3>
<p>To resolve an Old Memories Encounter, the party must make a Group Check to glean more information about the location.</p>

<h4>Group Check</h4>
<p>Each party member must make an <strong>Society</strong> check to recall or glean what information they know about this place, attempting to appreciate and understand the purpose of these structures. If it is appropriate, a character may make an <strong>Religion</strong> or <strong>Arcana</strong> check instead. The Leader may replace another party member's result with their own.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party is inspired by the history and importance of the location, perhaps recalling stories of heroic last stands or great scientific or arcane achievements. In addition to any rewards noted in the Encounter table entry, each party member may add 1d4 to all ability checks, saving throws, and attack rolls they make in their next Encounter.</li>
<li><strong>If more than half of the party succeed:</strong> The party gains a new appreciation for the history of this place, noting this location on their maps and moving onwards to continue their journey.</li>
<li><strong>If half or fewer of the party succeed:</strong> The party deliberates on the challenges of the past, reflecting on the struggles of past societies and how meaningless they now seem. Their malaise at these thoughts lingers a while. Each party member has Disadvantage on their next ability check.</li>
<li><strong>If no party member succeeds:</strong> The party becomes dejected at the inevitability of failure and ruin, unable to muster much energy after being confronted by the cold harshness of mortality and the insignificance of their existence. Each party member loses Inspiration and must subtract 1d4 from all ability checks, saving throws, and attack rolls they make in their next Encounter.</li>
</ul>`
  },

  "A Dark Place": {
    name: "A Dark Place",
    summary: "Ungodly locations and corrupted sites where evil deeds have gone unchecked.",
    keyRole: "Outrider",
    content: `<h2>A Dark Place</h2>
<p>The world is filled with ungodly locations and corrupted sites where evil deeds have gone unchecked and malicious forces hold sway. The site of an infernal ritual where dark things were summoned into the world, the remnants of a bloody slaughter, or the inconspicuous house where dozens of innocents were murdered — these are just a few such twisted locations. It is easy to be overwhelmed when confronted by such A Dark Place, and the party must steel themselves to overcome these unnatural places.</p>

<p>These Encounters are designed to be an emotional low point in the Journey. They show the malice and ill will of the nearby villains, and can overwhelm the party with dread, or instil them with a grim resolve. If you are running a game with a prominent villain or nemesis, these encounters are an ideal opportunity to showcase their twisted machinations.</p>

<p>A Dark Place Encounter includes a description of the site, the events that led to it being tainted, and the potential glimmer of hope that can push the party to move on. The <strong>Outrider</strong> is the first to discover these encounters, and how this location affects them will strongly influence the morale of the team, though some aid from the <strong>Leader</strong> can offset this.</p>

<h3>Resolution</h3>
<p>A Dark Place has two steps: the Outrider Check and the Wisdom Save.</p>

<h4>Outrider Check</h4>
<p>The Outrider makes a <strong>Survival</strong> check to scout the Dark Place. The result of this check affects the Wisdom Save.</p>
<ul>
<li><strong>On a success by 5 or more:</strong> The Outrider has identified any potential hazards the location holds. Though the place is unsettling, there is little else to fear. Each party member makes the Will save for this Encounter with Advantage.</li>
<li><strong>On a success:</strong> The Outrider surveys the location and has a bad feeling about it. They advise the party to be wary as they approach. Each party member makes the Will save as normal.</li>
<li><strong>On a failure:</strong> The Outrider attempts to scout the location but is completely unnerved and must return to the party. Each party member makes the Will save for this Encounter with Disadvantage.</li>
</ul>

<h4>Wisdom Save</h4>
<p>After determining the result of the Outrider's check, each party member must make a <strong>Will save</strong>. This determines if the party can overcome the oppressive dread of the encounter and find an inner tenacity. The Leader may replace another player's result with their own result.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party musters an inner strength and finds the resolve to persevere, insisting such crimes will never happen again. Each party member regains a Hit Die.</li>
<li><strong>If more than half of the party succeed:</strong> The party resists the grim aura that this place exudes, keeping their heads down and marching through unperturbed. They suffer no adverse effects.</li>
<li><strong>If half or fewer of the party succeed:</strong> The party's morale is undermined by the horrors they have witnessed and the unsettling nature of the place. Each party member loses a Hit Die.</li>
<li><strong>If no party member succeeds:</strong> An overwhelming sense of dread overcomes the party, which they can't shake for days to come. Each party member loses a Hit Die and gains a level of Exhaustion.</li>
</ul>`
  },

  "Deadly Fight": {
    name: "Deadly Fight",
    summary: "Challenges that can only be overcome with violence - combat is inevitable.",
    keyRole: "Sentry",
    content: `<h2>Deadly Fight</h2>
<p>Travel is a dangerous business and sometimes you must fight to survive. These Deadly Fights present the party with challenges that can only be overcome with violence, such as an attack from a wild-eyed necromancer who seeks a grim harvest from unwary travellers, an ambitious young dragon seeking to establish its dominion over the region, or a skittering Remorhaz erupting from the snow drifts to attack the party. These encounters will challenge the party's combat skills above all else.</p>

<p>In a Deadly Fight Encounter, you will find monsters and monstrous humanoids alike, spoiling for a fight and intent on doing the party harm. The <strong>Sentry</strong> will play a vital Role in this Encounter Type, as sighting the threat in advance will allow the party to prepare for the oncoming fight.</p>

<h3>Resolution</h3>
<p>A Deadly Fight has two steps: the Sentry Check and the Group Check.</p>

<h4>Sentry Check</h4>
<p>The Sentry must make a <strong>Perception</strong> check to spot the threat before combat starts, giving them a chance to warn their allies.</p>
<ul>
<li><strong>On a success:</strong> The Sentry notices the approaching danger and the party has time to prepare. See Group Check for next steps.</li>
<li><strong>On a failure:</strong> The Sentry doesn't notice the enemies and the party are ambushed. Combat begins immediately and the party are Surprised.</li>
</ul>

<h4>Group Check</h4>
<p>If the Sentry is successful, the party has a chance to prepare and can set an ambush for the approaching enemies. Each party member makes a <strong>Stealth</strong> or <strong>Deception</strong> check to hide or lure the enemies in.</p>
<ul>
<li><strong>If the whole party succeeds:</strong> The party lays an ambush for the enemies. When combat starts, the enemies are Surprised. The GM may award additional effects based on preparations that were made, such as snares knocking the opponents Prone, or traps dealing additional damage.</li>
<li><strong>If more than half the party succeed:</strong> The party is prepared for the attack. When combat starts, the other group is Surprised.</li>
<li><strong>If half or fewer of the party succeed:</strong> The party has squandered their opportunity for a surprise attack. Neither side is Surprised.</li>
<li><strong>If no party member succeeds:</strong> The party delayed so long in their preparations that the enemies managed to get the drop on them regardless! Combat starts immediately and the party is Surprised.</li>
</ul>`
  },

  "Fateful Encounter": {
    name: "Fateful Encounter",
    summary: "A mysterious stranger or group approaches - their motives and secrets are unknown.",
    keyRole: "Sentry",
    content: `<h2>Fateful Encounter</h2>
<p>A lone stranger or a mysterious group approaches you from across the horizon. This Fateful Encounter could be a messenger, carrying word from an erstwhile ally, or could be an agent of your nemesis, sent for acts of subterfuge and espionage. Their motives and secrets are a mystery, and their involvement in the fates of the characters will have a lasting impact.</p>

<p>In a Fateful Encounter, the party meets a wandering soul who may seek to help or hinder the party on their adventure. The Encounter describes the character the party meets, what their motivations are, and the hidden information that they may have. The <strong>Sentry</strong> will be essential in determining whether the wanderer the party meet is friend or foe.</p>

<p>These Encounters are intended to help add recurring characters to your adventures. The hidden secrets that these characters have can function as clues to adventure locations and side-quests, and the messengers can be powerful allies or devious villains. If a fight breaks out, the character will likely flee and return to haunt the party another day. These Encounters work best when tailored to your own campaign, or can be the jumping off point for new and unexpected adventures.</p>

<h3>Resolution</h3>
<p>To resolve a Fateful Encounter, the party must make a Group Check to gauge the intent of their new companion and what they might be hiding.</p>

<h4>Group Check</h4>
<p>Each party member must make a <strong>Diplomacy</strong>, <strong>Perception</strong>, or <strong>Perception</strong> check to try to make a good impression on the traveller, deduce hidden clues about them, and gauge their intent. The Sentry may replace another party member's result with their own.</p>
<ul>
<li><strong>If more than half of the party succeed:</strong> Through amicable discussions, keen insight, or quick wits, the party learns the secret information this person is hiding.</li>
<li><strong>If half or fewer of the party succeed:</strong> Despite their best efforts, the party is unable to uncover the travellers' true intent and what secrets they may be hiding.</li>
</ul>`
  },

  "Dungeon": {
    name: "Dungeon",
    summary: "Ein verlassener Komplex voller Gefahren und Schätze - ideal für mutige Abenteurer.",
    keyRole: "Sentry",
    content: `<h2>Dungeon</h2>
<p>Die Gruppe entdeckt einen verlassenen Komplex - vielleicht eine alte Mine, ein vergessenes Gewölbe, oder die Ruinen einer untergegangenen Zivilisation. Solche Orte bergen große Gefahren, aber auch großartige Schätze für jene, die mutig genug sind, sie zu erkunden.</p>

<p>Ein Dungeon-Encounter beschreibt den Eingang zum Komplex, die sichtbaren Gefahren und die potenziellen Belohnungen. Der <strong>Sentry</strong> ist entscheidend für die sichere Erkundung, da er Fallen und versteckte Gefahren aufspüren kann, bevor sie zur Bedrohung werden.</p>

<h3>Resolution</h3>
<p>Ein Dungeon-Encounter hat zwei Schritte: die Sentry-Prüfung und den Gruppen-Check.</p>

<h4>Sentry-Prüfung</h4>
<p>Der Sentry macht einen <strong>Wahrnehmungs-Check</strong>, um den Eingang auf Fallen und versteckte Gefahren zu untersuchen.</p>
<ul>
<li><strong>Kritischer Erfolg (DC+10):</strong> Der Sentry entdeckt alle Fallen und kennt den sichersten Weg. Der Gruppen-Check wird mit Vorteil gewürfelt.</li>
<li><strong>Erfolg:</strong> Der Sentry findet einen brauchbaren Weg. Der Gruppen-Check wird normal gewürfelt.</li>
<li><strong>Fehlschlag:</strong> Der Sentry übersieht wichtige Gefahren. Der Gruppen-Check wird mit Nachteil gewürfelt.</li>
</ul>

<h4>Gruppen-Check</h4>
<p>Jedes Gruppenmitglied macht einen <strong>Stealth</strong>, <strong>Athletics</strong>, oder <strong>Perception</strong> Check, um durch den Dungeon zu navigieren.</p>
<ul>
<li><strong>Alle erfolgreich:</strong> Perfekte Erkundung! Alle Schätze gefunden, keine Fallen ausgelöst. Die Gruppe erhält großartige Beute.</li>
<li><strong>Mehr als die Hälfte erfolgreich:</strong> Erfolgreiche Erkundung. Hauptschatz gefunden, einige Fallen umgangen. Standard-Beute.</li>
<li><strong>Hälfte oder weniger erfolgreich:</strong> Mühsame Erkundung. Teilweise Beute, mehrere Fallen ausgelöst. Geringe Beute, jeder der fehlgeschlagen hat erleidet Schaden.</li>
<li><strong>Niemand erfolgreich:</strong> Katastrophe! Die Gruppe muss fliehen. Keine Beute, alle erleiden Schaden und einen Grad Erschöpfung.</li>
</ul>`
  },

  "Lost Knowledge": {
    name: "Verschollenes Wissen",
    summary: "Uraltes Wissen wartet darauf, entdeckt zu werden - Geheimnisse der Vergangenheit.",
    keyRole: "Leader",
    content: `<h2>Verschollenes Wissen</h2>
<p>Die Gruppe stößt auf Überreste vergessener Gelehrsamkeit - vielleicht eine versteckte Bibliothek, uralte Inschriften, oder die Aufzeichnungen eines längst verstorbenen Magiers. Solches Wissen kann Geheimnisse der Vergangenheit enthüllen, mächtige Rituale offenbaren, oder Hinweise auf verborgene Schätze geben.</p>

<p>Ein Verschollenes-Wissen-Encounter beschreibt die Art des gefundenen Wissens, seinen Ursprung und seinen potenziellen Nutzen. Der <strong>Leader</strong> spielt eine entscheidende Rolle, da er die Bedeutung der Entdeckung einordnen und das Team bei der Entschlüsselung anleiten kann.</p>

<h3>Resolution</h3>
<p>Ein Verschollenes-Wissen-Encounter hat zwei Schritte: die Leader-Prüfung und den Forschungs-Check.</p>

<h4>Leader-Prüfung</h4>
<p>Der Leader macht einen <strong>Society</strong> oder <strong>Arcana</strong> Check, um die Bedeutung der Entdeckung einzuordnen.</p>
<ul>
<li><strong>Kritischer Erfolg (DC+10):</strong> Der Leader erkennt sofort den Wert des Wissens. Der Forschungs-Check wird mit Vorteil gewürfelt.</li>
<li><strong>Erfolg:</strong> Der Leader versteht die Grundlagen. Der Forschungs-Check wird normal gewürfelt.</li>
<li><strong>Fehlschlag:</strong> Der Leader unterschätzt die Komplexität. Der Forschungs-Check wird mit Nachteil gewürfelt.</li>
</ul>

<h4>Forschungs-Check (Research)</h4>
<p>Jedes Gruppenmitglied macht einen <strong>Arcana</strong>, <strong>Occultism</strong>, <strong>Religion</strong>, <strong>Nature</strong>, oder <strong>Society</strong> Check, um das Wissen zu studieren und zu entschlüsseln.</p>
<ul>
<li><strong>Alle erfolgreich:</strong> Vollständige Entschlüsselung! Die Gruppe enthüllt ein großes Geheimnis UND erhält einen praktischen Nutzen (z.B. permanenten Bonus, neuen Zauber, etc.).</li>
<li><strong>Mehr als die Hälfte erfolgreich:</strong> Teilweise Entschlüsselung. Ein wichtiges Geheimnis wird enthüllt.</li>
<li><strong>Hälfte oder weniger erfolgreich:</strong> Bruchstückhafte Erkenntnisse. Die Gruppe erhält Hinweise auf ein größeres Geheimnis.</li>
<li><strong>Niemand erfolgreich:</strong> Das Wissen bleibt verschlossen. Die Gruppe versteht nur Fragmente ohne Zusammenhang.</li>
</ul>`
  }
};

/**
 * Resolution configuration for encounter types
 * Defines the mechanical flow for resolving each encounter type
 * Phase 1: A Chance Meeting, A Bump in the Road, Hidden Reserves, Monster Hunt
 */
export const ENCOUNTER_RESOLUTION_CONFIG = {
  "A Chance Meeting": {
    pattern: "keyRole-then-group",
    keyRole: "leader",
    keyRoleCheck: {
      skill: "society",  // PF2E Society (5E Insight)
      description: "Evaluate the mood of the newcomers and gauge their intentions.",
      successEffect: { groupDcMod: -2 },
      failureEffect: { groupDcMod: +2 }
    },
    groupCheck: {
      skills: ["diplomacy", "perception", "deception"],
      description: "Contribute to the conversation and make a good impression.",
      canReplace: null,  // Leader cannot replace in this encounter
      outcomes: {
        all: {
          label: "Complete Success",
          description: "The party leaves a good impression. Roll d6: 1-3 Natural Wonder, 4 Old Memories, 5 Place to Rest, 6 Hidden Reserves replaces next encounter.",
          effect: "replaceNextEncounter"
        },
        majority: {
          label: "Partial Success",
          description: "The groups part amicably. Each character has advantage on their next ability check.",
          effect: "advantageNextCheck"
        },
        minority: {
          label: "Failure",
          description: "The travellers share little and are keen to be on their way.",
          effect: "noEffect"
        },
        none: {
          label: "Critical Failure",
          description: "The party leaves a bad impression. The GM adds another encounter as the party takes the wrong path.",
          effect: "addEncounter"
        }
      }
    }
  },

  "A Bump in the Road": {
    pattern: "keyRole-then-saves",
    keyRole: "outrider",
    keyRoleCheck: {
      skill: null,  // Varies by specific encounter - see description
      skillVariable: true,
      description: "Scout ahead and find the best way to approach the obstacle. (Check type varies by encounter)",
      successBy5Effect: { saveAdvantage: true },
      successEffect: {},
      failureEffect: { saveDisadvantage: true }
    },
    individualSaves: {
      save: "fortitude",  // PF2E Fortitude (CON save)
      description: "Endure the trials of pushing through or going around the obstacle.",
      canReplace: null,
      outcomes: {
        success: {
          label: "Success",
          description: "You endure the trials without any negative consequence.",
          effect: "noEffect"
        },
        failure: {
          label: "Failure",
          description: "You gain 1 level of exhaustion from the strain.",
          effect: "exhaustion"
        }
      }
    }
  },

  "Hidden Reserves": {
    pattern: "group-only",
    keyRole: "quartermaster",  // Key role for replacement ability
    groupCheck: {
      skills: ["perception", "thievery", "survival"],  // Investigation → Perception, Sleight of Hand → Thievery
      description: "Search through the area to find the hidden cache of supplies.",
      canReplace: "quartermaster",
      outcomes: {
        all: {
          label: "Complete Success",
          description: "More supplies than expected! Each party member gains Inspiration or removes one level of Exhaustion. Quartermaster recovers 1 Supply Die.",
          effect: "inspirationOrRemoveExhaustion",
          quartermasterBonus: "recoverSupplyDie"
        },
        majority: {
          label: "Partial Success",
          description: "The extra supplies lessen the burden. Each party member removes one level of Exhaustion.",
          effect: "removeExhaustion"
        },
        minority: {
          label: "Failure",
          description: "The supplies found are meagre, only just balancing out the energy expended.",
          effect: "noEffect"
        },
        none: {
          label: "Critical Failure",
          description: "The search is grueling. Each party member gains one level of Exhaustion.",
          effect: "addExhaustion"
        }
      }
    }
  },

  "Monster Hunt": {
    pattern: "choice",
    keyRole: null,  // Depends on choice
    choicePrompt: "The party has found evidence of a monster. What do you do?",
    choices: {
      track: {
        label: "Track the Monster",
        icon: "fa-paw",
        description: "Follow the creature's trail to its location.",
        pattern: "group-only",
        keyRole: "outrider",
        groupCheck: {
          skills: ["survival", "nature"],
          description: "Track the creature to its lair.",
          canReplace: "outrider",
          outcomes: {
            all: {
              label: "Complete Success",
              description: "You find the creature's location without being noticed. When combat begins, the creature is Surprised.",
              effect: "enemySurprised"
            },
            majority: {
              label: "Success",
              description: "You find the creature's location without being noticed. When combat begins, the creature is Surprised.",
              effect: "enemySurprised"
            },
            minority: {
              label: "Failure",
              description: "You track the creature but your presence is noticed. Combat begins immediately.",
              effect: "combatStarts"
            },
            none: {
              label: "Critical Failure",
              description: "The creature has been hunting YOU! Combat begins immediately and the party is Surprised.",
              effect: "partySurprised"
            }
          }
        }
      },
      avoid: {
        label: "Avoid the Monster",
        icon: "fa-shoe-prints",
        description: "Sneak past the creature without being detected.",
        pattern: "group-only",
        keyRole: "sentry",
        groupCheck: {
          skills: ["stealth", "perception"],
          description: "Avoid the creature's notice.",
          canReplace: "sentry",
          outcomes: {
            all: {
              label: "Complete Success",
              description: "The party escapes from the monster without notice. No combat occurs.",
              effect: "noCombat"
            },
            majority: {
              label: "Success",
              description: "The party escapes from the monster without notice. No combat occurs.",
              effect: "noCombat"
            },
            minority: {
              label: "Failure",
              description: "The party stumbles into the monster! Combat begins immediately and the party is Surprised.",
              effect: "partySurprised"
            },
            none: {
              label: "Critical Failure",
              description: "The party stumbles into the monster's lair! Combat begins immediately and the party is Surprised.",
              effect: "partySurprised"
            }
          }
        }
      }
    }
  },

  "Needing Assistance": {
    pattern: "group-only",
    keyRole: "quartermaster",
    groupCheck: {
      skills: ["medicine", "survival", "athletics", "crafting"],  // Varies per specific encounter
      description: "Aid the other group with your skills and supplies.",
      canReplace: "quartermaster",
      outcomes: {
        all: {
          label: "Complete Success",
          description: "The travellers are eternally grateful. Quartermaster recovers 1 Supply Die, OR party can choose the next encounter type, OR promise of future aid.",
          effect: "quartermasterRecoverSupply",
          quartermasterBonus: "recoverSupplyDie"
        },
        majority: {
          label: "Partial Success",
          description: "The party helped someone in need and their spirits are raised. Each party member gains Inspiration.",
          effect: "gainInspiration"
        },
        minority: {
          label: "Failure",
          description: "The party's efforts were in vain. The effect is dejecting. Each party member loses Inspiration.",
          effect: "loseInspiration"
        },
        none: {
          label: "Critical Failure",
          description: "The party fails completely. GM chooses: exhaustion for all, Quartermaster loses Supply Die, lose Inspiration, or inadvertently make things worse.",
          effect: "gmChooseNegative"
        }
      }
    }
  },

  "Danger Afoot": {
    pattern: "group-only",
    keyRole: "sentry",
    groupCheck: {
      skills: ["perception", "stealth"],  // Insight → Perception, Perception, Stealth
      description: "Spot the danger and prepare for trouble.",
      canReplace: "sentry",
      outcomes: {
        all: {
          label: "Complete Success",
          description: "The party notices the danger and has ample time to prepare. If combat begins, the enemy is Surprised.",
          effect: "enemySurprised"
        },
        majority: {
          label: "Partial Success",
          description: "The more observant party members warn the rest. If combat begins, neither side is Surprised.",
          effect: "neitherSurprised"
        },
        minority: {
          label: "Failure",
          description: "The enemy gets the drop on some party members. Any character who failed their check is Surprised.",
          effect: "failedMembersSurprised"
        },
        none: {
          label: "Critical Failure",
          description: "The party is caught completely unaware! The whole party is Surprised and makes Initiative with Disadvantage.",
          effect: "partySurprisedDisadvantage"
        }
      }
    }
  },

  "Natural Wonders": {
    pattern: "group-only",
    keyRole: "leader",
    groupCheck: {
      skills: [],  // Will save, not a skill check
      saveType: "will",  // PF2E Will save (Wisdom)
      description: "Steel yourself against being overwhelmed by the awesome presence of this natural wonder.",
      canReplace: "leader",
      outcomes: {
        all: {
          label: "Complete Success",
          description: "The party feels their burdens lifted. Each party member gains Inspiration. GM may grant additional rewards.",
          effect: "gainInspiration"
        },
        majority: {
          label: "Partial Success",
          description: "The party is invigorated by the beauty. Each party member gains Advantage on their next ability check or saving throw.",
          effect: "advantageNextCheck"
        },
        minority: {
          label: "Failure",
          description: "The party fails to see this wonder as more than just another sight on the long road.",
          effect: "noEffect"
        },
        none: {
          label: "Critical Failure",
          description: "The party feels small and insignificant. Each party member loses Inspiration and has Disadvantage on their next check.",
          effect: "loseInspirationDisadvantage"
        }
      }
    }
  },

  "A Place to Rest": {
    pattern: "keyRole-then-group",
    keyRole: "quartermaster",
    keyRoleCheck: {
      skill: "survival",
      description: "Determine how safe the location is and prepare the campsite.",
      successBy5Effect: { groupAdvantage: true },
      successEffect: {},
      failureEffect: { groupDisadvantage: true }
    },
    groupCheck: {
      skills: ["perception"],  // Perception check to stay alert
      saveType: "fortitude",  // Can use Fortitude as alternative
      description: "Stay alert and awake through your watch shift.",
      canReplace: null,
      outcomes: {
        all: {
          label: "Long Rest",
          description: "The party has a peaceful and refreshing night's sleep. They gain the benefits of a Long Rest.",
          effect: "longRest"
        },
        majority: {
          label: "Short Rest",
          description: "The party has a relatively comfortable night's sleep. They gain the benefits of a Short Rest.",
          effect: "shortRest"
        },
        minority: {
          label: "No Rest",
          description: "The party has an uneasy night and can't relax. No benefits from the night's sleep.",
          effect: "noEffect"
        },
        none: {
          label: "Terrible Night",
          description: "The party has a terrible night's sleep. Each party member gains one level of Exhaustion.",
          effect: "addExhaustion"
        }
      }
    }
  },

  "Old Memories": {
    pattern: "group-only",
    keyRole: "leader",
    groupCheck: {
      skills: ["society", "religion", "arcana"],  // History → Society in PF2E
      description: "Recall or glean information about this ancient place.",
      canReplace: "leader",
      outcomes: {
        all: {
          label: "Complete Success",
          description: "The party is inspired by the history. Each party member may add 1d4 to all checks, saves, and attacks in the next encounter.",
          effect: "bonusD4NextEncounter"
        },
        majority: {
          label: "Partial Success",
          description: "The party gains appreciation for the history, noting this location on their maps.",
          effect: "noEffect"
        },
        minority: {
          label: "Failure",
          description: "The party reflects on past struggles and their malaise lingers. Each party member has Disadvantage on their next ability check.",
          effect: "disadvantageNextCheck"
        },
        none: {
          label: "Critical Failure",
          description: "The party becomes dejected. Each party member loses Inspiration and must subtract 1d4 from all checks in the next encounter.",
          effect: "penaltyD4NextEncounter"
        }
      }
    }
  },

  "A Dark Place": {
    pattern: "keyRole-then-saves",
    keyRole: "outrider",
    keyRoleCheck: {
      skill: "survival",
      description: "Scout the Dark Place and identify potential hazards.",
      successBy5Effect: { saveAdvantage: true },
      successEffect: {},
      failureEffect: { saveDisadvantage: true }
    },
    individualSaves: {
      save: "will",  // PF2E Will save (Wisdom)
      description: "Overcome the oppressive dread and find inner tenacity.",
      canReplace: "leader",  // Leader can replace another's save result
      outcomes: {
        all: {
          label: "Inner Strength",
          description: "The party finds resolve to persevere. Each party member regains a Hit Die.",
          effect: "regainHitDie"
        },
        majority: {
          label: "Unperturbed",
          description: "The party resists the grim aura and marches through unperturbed.",
          effect: "noEffect"
        },
        minority: {
          label: "Morale Undermined",
          description: "The party's morale is undermined by the horrors. Each party member loses a Hit Die.",
          effect: "loseHitDie"
        },
        none: {
          label: "Overwhelming Dread",
          description: "An overwhelming sense of dread overcomes the party. Each party member loses a Hit Die and gains Exhaustion.",
          effect: "loseHitDieAndExhaustion"
        }
      }
    }
  },

  "Deadly Fight": {
    pattern: "keyRole-then-group-conditional",
    keyRole: "sentry",
    keyRoleCheck: {
      skill: "perception",
      description: "Spot the approaching threat before combat starts.",
      successEffect: { proceedToGroup: true },
      failureEffect: { skipToResult: "partySurprised" }  // Immediate failure - party is surprised
    },
    groupCheck: {
      skills: ["stealth", "deception"],
      description: "Hide or set up an ambush for the approaching enemies.",
      canReplace: null,
      outcomes: {
        all: {
          label: "Perfect Ambush",
          description: "The party lays a perfect ambush. Enemies are Surprised. GM may award bonus effects from preparations.",
          effect: "enemySurprisedBonus"
        },
        majority: {
          label: "Successful Ambush",
          description: "The party is prepared for the attack. Enemies are Surprised.",
          effect: "enemySurprised"
        },
        minority: {
          label: "Squandered Opportunity",
          description: "The party squandered their chance for surprise. Neither side is Surprised.",
          effect: "neitherSurprised"
        },
        none: {
          label: "Tables Turned",
          description: "The party delayed too long and the enemies got the drop on them! Party is Surprised.",
          effect: "partySurprised"
        }
      }
    }
  },

  "Fateful Encounter": {
    pattern: "group-only",
    keyRole: "sentry",
    groupCheck: {
      skills: ["diplomacy", "perception", "society"],  // Persuasion → Diplomacy, Investigation → Perception, Insight → Society
      description: "Make a good impression and gauge the traveller's intent.",
      canReplace: "sentry",
      outcomes: {
        all: {
          label: "Complete Success",
          description: "The party learns the secret information this person is hiding.",
          effect: "learnSecret"
        },
        majority: {
          label: "Success",
          description: "Through amicable discussions or keen insight, the party learns the traveller's secret.",
          effect: "learnSecret"
        },
        minority: {
          label: "Failure",
          description: "Despite their best efforts, the party is unable to uncover the traveller's true intent.",
          effect: "noEffect"
        },
        none: {
          label: "Critical Failure",
          description: "The party fails to learn anything and may have made a poor impression.",
          effect: "noEffect"
        }
      }
    }
  },

  "Dungeon": {
    pattern: "keyRole-then-group",
    keyRole: "sentry",
    keyRoleCheck: {
      skill: "perception",
      description: "Untersuche den Eingang auf Fallen und versteckte Gefahren.",
      successBy5Effect: { groupAdvantage: true },
      successEffect: {},
      failureEffect: { groupDisadvantage: true }
    },
    groupCheck: {
      skills: ["stealth", "athletics", "perception"],
      description: "Navigiere durch den Dungeon und meide Gefahren.",
      canReplace: null,
      outcomes: {
        all: {
          label: "Perfekte Erkundung",
          description: "Alle Schätze gefunden, keine Fallen ausgelöst. Die Gruppe erhält großartige Beute.",
          effect: "majorLoot",
          loot: "major"
        },
        majority: {
          label: "Erfolgreiche Erkundung",
          description: "Hauptschatz gefunden, einige Fallen umgangen. Standard-Beute.",
          effect: "standardLoot",
          loot: "standard"
        },
        minority: {
          label: "Mühsame Erkundung",
          description: "Teilweise Beute, mehrere Fallen ausgelöst. Geringe Beute + Schaden für Fehlschläge.",
          effect: "minorLootWithDamage",
          loot: "minor",
          damage: true
        },
        none: {
          label: "Katastrophe",
          description: "Flucht ohne Beute! Alle erleiden Schaden und einen Grad Erschöpfung.",
          effect: "noLootWithDamageAndExhaustion",
          loot: "none",
          damage: true,
          exhaustion: true
        }
      }
    }
  },

  "Lost Knowledge": {
    pattern: "keyRole-then-group",
    keyRole: "leader",
    keyRoleCheck: {
      skill: "society",
      alternativeSkill: "arcana",
      description: "Erkenne die Bedeutung und den Wert der Entdeckung.",
      successBy5Effect: { groupAdvantage: true },
      successEffect: {},
      failureEffect: { groupDisadvantage: true }
    },
    groupCheck: {
      skills: ["arcana", "occultism", "religion", "nature", "society"],
      description: "Studiere und entschlüssle das uralte Wissen.",
      canReplace: "leader",
      outcomes: {
        all: {
          label: "Vollständige Entschlüsselung",
          description: "Geheimes Wissen enthüllt + praktischer Nutzen (Bonus, Zauber, etc.).",
          effect: "secretAndMechanicalBenefit",
          reward: "secret+benefit"
        },
        majority: {
          label: "Teilweise Entschlüsselung",
          description: "Ein wichtiges Geheimnis wird enthüllt.",
          effect: "revealSecret",
          reward: "secret"
        },
        minority: {
          label: "Bruchstückhafte Erkenntnisse",
          description: "Hinweise auf ein größeres Geheimnis werden entdeckt.",
          effect: "revealHint",
          reward: "hint"
        },
        none: {
          label: "Unverständlich",
          description: "Das Wissen bleibt verschlossen. Nur Fragmente ohne Zusammenhang.",
          effect: "noEffect",
          reward: "none"
        }
      }
    }
  }
};

/**
 * Get the resolution configuration for an encounter type
 * @param {string} encounterType - The encounter type name
 * @returns {Object|null} Resolution config or null if not found
 */
export function getResolutionConfig(encounterType) {
  return ENCOUNTER_RESOLUTION_CONFIG[encounterType] ?? null;
}
