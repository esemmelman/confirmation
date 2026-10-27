'use strict';
// Concise paraphrases from the existing study material; null marks unavailable source text.
const verseCommentaries = {
  "1-1": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Gives a midrashic reason for beginning with creation: God owns the world and assigns its lands. His plain-sense reading connects the opening to the creation of light rather than treating verse 1 as a chronological inventory. He also links the divine names to justice and mercy.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.1"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Reads the beginning as the beginning of time and creation as bringing something into existence from nothing. He explains Elohim as the enduring source of all powers and describes heaven and earth through the cosmology of his period.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.1"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Defends creation from absolute nonexistence: God first creates primordial matter and then gives it form. He disagrees with Rashi's grammatical argument and also explains the opening narratives through divine ownership, moral judgment, and the limits of openly teaching creation's mysteries.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.1"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Begins with an Aramaic expression meaning at first or in the beginning. This is a translation choice, not a separate discussion of creation from nothing.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.1"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "The opening assumes God's existence rather than explaining God's origin. Heaven and earth establish the framework within which the rest of creation will be described.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.1"
    }
  ],
  "1-2": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Explains tohu as bewildering desolation and bohu as emptiness. He identifies the deep with waters covering the earth and gives a midrashic picture of God's throne hovering above them like a dove over its nest.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.2"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Interprets tohu and bohu as the potential and changing form of primordial matter. His account of darkness, air, water, motion, and heat uses the natural philosophy of his period rather than modern physical science.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.2"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Related comment on 1:1: In his comment on 1:1, he interprets tohu as primordial matter and bohu as its acquired form, and discusses the four elements in the wording of verse 2.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.1"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Renders the earth as desolate and empty and describes a wind from before God blowing over the waters. This makes the movement of the wind explicit instead of retaining an image of hovering.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.2"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Emphasizes the absence of structure and definite form. God's hovering expresses a presence and will active near creation while remaining distinct from it. He also acknowledges uncertainty about the exact meaning of bohu.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.2"
    }
  ],
  "1-3": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.3"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Identifies this as the special light of the first creation days, distinct from the later luminaries, and connects it to a future condition in which nourishment and clothing will not depend on ordinary sowing and production.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.3"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "God's saying expresses will or thought, not laborious speech. Light emerges from the substance of heaven. He distinguishes its initial state from its later form and reads the creation days literally while also recognizing a hidden symbolic meaning.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.3"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates God's command and its immediate fulfillment. No distinctive explanatory addition is apparent here.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.3"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Treats divine speech as a mysterious communication whose instruction is fulfilled. The first light need not resemble familiar light from a physical source; he leaves open whether it was even a physical phenomenon.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.3"
    }
  ],
  "1-4": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Offers both a midrash, in which the original light is reserved for the righteous, and a plain-sense reading: light and darkness receive separate periods of activity so that they do not function in confusion.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.4"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "God creates light because it is good; He does not learn its goodness afterward. Before the sun's assignment, the alternation of light and darkness follows God's direct arrangement.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.4"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "God's seeing does not mean discovering a fact or changing His mind. It expresses His will that a creation continue to exist. The darkness separated here is the absence of light, distinct from his elemental reading of darkness in verse 2.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.4"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the recognition of goodness and separation of light from darkness, without an additional explanation.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.4"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Separation gives light a definite identity after its goodness is recognized. He extends the theme of discerning and separating good from bad beyond creation into human history and civilization.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.4"
    }
  ],
  "1-5": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Explains the unusual expression one day through a midrash: God was alone in His world, since the angels were not created until the second day.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.5"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "God already assigns the names day and night before human usage. Evening and dawn provide gradual transitions between the allotted periods of darkness and light.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.5"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Naming assigns each phenomenon its boundary and function. Evening blurs distinctions and morning makes them discernible. One day is appropriate before a second day exists to make an ordinal comparison possible.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.5"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Retains one day rather than replacing it with an ordinal first day. Otherwise, it follows the verse closely.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.5"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Distinguishes daylight from a complete day containing light and darkness. The emergence of ordered time makes before and after meaningful. One day is initially a complete entity, without necessarily implying a second.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.5"
    }
  ],
  "1-6": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "The heavens, created initially in a fluid condition, now become firm. He places the expanse midway between the upper and lower waters and describes the upper waters as suspended by God's command.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.6"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Understands the expanse as an ordered boundary governing the regions above and below the waters, giving the air its defined region.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.6"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "The expanse is formed from previously created substance. He records the rabbinic interpretation of the midpoint and suspended waters, while stressing that the deeper process belongs to creation's concealed mysteries.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.6"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Translates the location as the middle of the waters, making the spatial relationship explicit.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.6"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Reads the division of the primordial waters as metaphysical rather than merely geographical. Creation advances by distinguishing entities that previously belonged to an undifferentiated whole.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.6"
    }
  ],
  "1-7": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Making means putting the expanse into its proper condition. The upper waters are above it, not resting directly upon it. The missing declaration of goodness reflects the unfinished work with the waters.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.7"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Describes an arrangement that keeps vaporous waters above the air, with condensation producing rain, snow, and hail. He presents this ordering, including its endurance, as an intentional divine act within his period's natural philosophy.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.7"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Making means arranging something in its required proportions. The statement that it was so affirms the enduring arrangement, not merely the initial event.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.7"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the making of the expanse and separation of upper and lower waters. It adds no separate explanatory gloss.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.7"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Interprets the separation of upper and lower waters as a distinction between spiritual and material planes. They remain connected in some respects but now have distinguishable identities.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.7"
    }
  ],
  "1-8": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Explores shamayim through rabbinic wordplays: carrying water, water being there, and fire combined with water.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.8"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Emphasizes that God assigns the name. Since celestial effects reach the lower world through intermediaries, the text identifies the divine source of this ordering.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.8"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Discusses the name heaven and distinguishes the expanse formed on the second day from the higher heavens of verse 1. He also signals a concealed meaning beyond his plain-sense explanation.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.8"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Uses the ordinary Aramaic terms for expanse and heaven. It does not reproduce Rashi's wordplays.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.8"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Offers a reading of shamayim as a doubled expression of there, suggesting what lies beyond. The second day introduces a hierarchy into the universe, not only another spatial division.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.8"
    }
  ],
  "1-9": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "The waters initially covered the whole earth; God gathers them into the great ocean.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.9"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Insists that gathering is not drying up. God confines the waters to their place so that they do not overflow and cover the land.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.9"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Describes two coordinated divine arrangements: waters collect in a lower place and dry ground appears above them. He considers alternative physical descriptions while emphasizing the resulting habitable land.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.9"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the gathering into one place and the appearance of dry ground, without a distinctive addition.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.9"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Identifies the lower waters with physical water comparable to what we know. Their gathering makes the dry land visible.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.9"
    }
  ],
  "1-10": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Explains the plural seas even though the waters form one connected body: fish taken from different regions have different tastes.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.10"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "The name of the whole is given to its habitable, productive part. Goodness describes the intended purpose of the arrangement.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.10"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "The dry land receives the broader name earth because it is the intended human dwelling. God's declaration of goodness establishes the completed arrangement's continuance; the work with water is now finished.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.10"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Translates the gathering of waters as a place of collected water. No extended interpretive comment accompanies the naming.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.10"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Suggests that land becomes a consolidated, distinct entity through separation from water, rather than merely being uncovered in its finished state. Earth and seas now provide different habitats capable of supporting life.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.10"
    }
  ],
  "1-11": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Distinguishes the ground's collective covering of vegetation from individual plants and explains the reproductive role of seeds. In a midrashic reading, the command calls for trees whose wood tastes like their fruit, but the earth does not fulfill that aspect.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.11"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Distinguishes vegetation for animals from seed-bearing plants for humans. Reproduction according to kind expresses the stable identity and continued existence of each species.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.11"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "God gives the earth a lasting power of growth and reproduction by species. He disputes Rashi's explanation of deshe, explores how barren plants and trees fit the command, and connects species distinctions to the prohibition of mixing kinds.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.11"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates seed-bearing plants and fruit trees reproducing by kind. The distinction is reproductive continuity, without an additional homiletic explanation.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.11"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Sees vegetation as the introduction of biological life, with growth and reproduction laying the foundation for later living creatures. Its significance exceeds the dramatic physical exposure of dry land.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.11"
    }
  ],
  "1-12": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Although the herbs were not explicitly commanded to emerge by kind, they infer that requirement from the command to the trees, following the rabbinic account in Chullin 60a.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.12"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.12"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "God's recognition of goodness affirms the continuing existence of the species. Vegetation does not require a separate creation day because it belongs to the earth's own productive work.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.12"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the plants and trees producing their respective kinds. No distinctive interpretive addition is apparent.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.12"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "The emphasis is on orderly differentiation into kinds, not a botanical classification system. Plant life's capacity to survive, grow, and reproduce marks a major new stage in creation.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.12"
    }
  ],
  "1-13": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.13"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.13"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.13"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the evening-and-morning formula ending the third day. No additional explanation is apparent.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.13"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "No additional explanatory gloss beyond the biblical wording in this entry.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.13"
    }
  ],
  "1-14": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "The luminaries already existed from the first day and are now placed in their assigned position. He discusses the original light, eclipses as signs, festivals, days, and years, and includes a midrashic reading of the word's defective spelling concerning illness.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.14"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Previously created heavenly bodies now receive their light-giving function for the lower world. The description addresses how their activity is perceived by earth's inhabitants.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.14"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Relates the luminaries to the original light and discusses how their light reaches the earth. He interprets their purposes as signs, seasonal changes, days, and annual cycles, distinguishing his account from Rashi's description of the primeval light.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.14"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Explicitly adds that days and years are counted by means of the luminaries, clarifying their timekeeping function.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.14"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Distinguishes light itself from the light-bearing bodies now assigned their roles. The luminaries further organize the universe, especially by measuring and segmenting time.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.14"
    }
  ],
  "1-15": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Adds illumination of the world to the luminaries' other functions listed in the preceding verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.15"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Their light benefits the earth's inhabitants, and the fulfillment of the command becomes an enduring feature of the natural order.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.15"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Their light must actually reach the earth; being visible in heaven or marking time would not by itself express that requirement.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.15"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates their function of illuminating the earth, without a separate explanation.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.15"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "No additional explanatory gloss beyond the biblical wording in this entry.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.15"
    }
  ],
  "1-16": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Cites the midrash in which sun and moon begin equally great, the moon is diminished after objecting to shared rule, and the stars are added as its attendant hosts.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.16"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Making describes completion and assignment of function rather than an entirely new act of creation. Sun and moon are singled out from the previously created heavenly bodies for their roles.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.16"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Reads making and setting together: the lights are bodies placed in the expanse, rather than objects made out of its own substance. His comment also addresses verse 17.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.16"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Preserves the contrast between the two great lights and their different sizes and domains. It supplies no account of a formerly equal moon being diminished.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.16"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Explicitly identifies the greater and lesser luminaries as the sun and moon in their familiar roles. Beyond these identifications, the entry closely follows the biblical wording.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.16"
    }
  ],
  "1-17": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.17"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Related comment on 1:16: His comment on verse 16 groups making, setting, illumination, rule, and separation as stages in assigning the heavenly bodies their functions.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.16"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Related comment on 1:16: His preceding comment explicitly treats verses 16 and 17 together: the lights are made as bodies and placed in the expanse.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.16"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates God's placement of the lights to illuminate the earth. No distinctive addition is apparent.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.17"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "No additional explanatory gloss beyond the biblical wording in this entry.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.17"
    }
  ],
  "1-18": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.18"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Their light supports the life of creatures in the lower world, and their assigned periods establish the alternation of light and darkness.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.18"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Rule means more than supplying light: the heavenly bodies influence processes in the lower world. He discusses their differentiated powers within medieval cosmology and astrology, while subordinating all such powers to God's will.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.18"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates rule by day and night and separation of light from darkness. It does not append an astrological explanation.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.18"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Explains rule from the human observer's perspective: the sun and moon conspicuously shape the experience of day and night. Their regular appearances make earlier distinctions of light and time more fully defined.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.18"
    }
  ],
  "1-19": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.19"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.19"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.19"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the formula concluding the fourth day. No distinctive interpretive addition is apparent.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.19"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "No additional explanatory gloss beyond the biblical wording in this entry.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.19"
    }
  ],
  "1-20": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Explains living creatures as beings with vitality and sheretz as creatures whose motion stays close to the ground, including certain insects, small creatures, and fish.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.20"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Assigns birds an atmospheric role: their flight helps clear excessive moisture from the air for the benefit of terrestrial inhabitants, within his account of the created order.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.20"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Disputes defining sheretz chiefly by low movement above the ground and emphasizes continual motion, drawing on Onkelos. He discusses birds' origin in water or marshy material and distinguishes animal life from plant growth and the higher human soul.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.20"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Uses Aramaic movement-language for the swarming creatures. Ramban explicitly draws attention to this wording when explaining sheretz and remes.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.20"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Distinguishes animal life from vegetation through movement and a measure of will. He highlights aquatic creatures as the first beings described here as living creatures and suggests water's foundational role in life.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.20"
    }
  ],
  "1-21": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Identifies the tanninim with large sea creatures and also gives the midrash of Leviathan and its mate, with the female preserved for the future righteous. He again explains the living creature as possessing vitality.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.21"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "The waters' productive capacity alone does not account for these great creatures; their origin requires a distinct act of the Creator.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.21"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Their exceptional size explains why creation is explicitly attributed to God. He considers why this day's account lacks the usual fulfillment formula and also records the Leviathan tradition.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.21"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Retains an Aramaic equivalent for great tanninim or large sea creatures. It does not insert the midrashic story about Leviathan's mate; identifying them specifically as whales is an English translator's rendering.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.21"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Warns against reading modern Hebrew animal names back into the biblical tanninim and Leviathan. He treats the biblical creatures as mysterious, powerful aquatic beings whose relationship to familiar zoology is uncertain.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.21"
    }
  ],
  "1-22": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Fish and birds need a reproductive blessing because humans hunt and eat them. Fruitfulness alone could mean one offspring, so multiplication adds abundance. He explains the absence of a separate land-animal blessing through the serpent's future curse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.22"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "The many living creatures require divine blessing to achieve their purpose in the world.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.22"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "The blessing grants abundant reproduction. Animals begin as pairs and need multiplication, whereas vegetation already covers the earth abundantly. Land animals share the broader animal blessing; birds reproduce on land even when they live in water.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.22"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Translates the blessing as fruitfulness, increase, and filling the waters, with birds increasing on land. No additional explanatory expansion is apparent.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.22"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Connects the special blessing to animals' need for an active reproductive drive, including finding a mate, in contrast to the propagation of plants.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.22"
    }
  ],
  "1-23": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.23"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.23"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.23"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the evening-and-morning formula ending the fifth day. No distinctive interpretive addition is apparent.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.23"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "No additional explanatory gloss beyond the biblical wording in this entry.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.23"
    }
  ],
  "1-24": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "The earth now brings forth creatures already created in potential on the first day. He also explains vitality and the low, seemingly dragging movement of creeping creatures.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.24"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Animals possess a kind of life above plant growth. The command is fulfilled with each creature's required components and reproductive integrity intact.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.24"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Distinguishes grass-eating animals from flesh-eating beasts. He challenges an overly narrow reading of remes and explains its range through treading or moving on the ground.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.24"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Distinguishes the categories of animals, moving creatures, and beasts in Aramaic. There is no separate explanation beyond the translation.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.24"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Reads the animal categories as descriptions from a human perspective rather than strict zoological definitions. He notes the possible distinction between predatory beasts and herbivorous animals.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.24"
    }
  ],
  "1-25": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "God brings the animals into existence fully developed and with their characteristic capacities, following the rabbinic account in Chullin 60a.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.25"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Each species receives the senses and abilities appropriate to its needs.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.25"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.25"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the making of each animal category according to its kind and the declaration of goodness, without an additional gloss.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.25"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "No additional explanatory gloss beyond the biblical wording in this entry.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.25"
    }
  ],
  "1-26": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "God consults the angels to teach humility, though they do not create humanity. Likeness includes understanding and discernment. Human dominion depends on worthiness: a person may rule the animals or fall below them.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.26"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Stresses intellect and freedom of choice. Humans resemble higher beings through understanding, yet exercise choice rather than angelic necessity; their likeness to God remains limited and can be misused.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.26"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Understands the plural as God addressing the earth: the earth supplies the body and God supplies the higher soul. Humanity therefore shares features of lower and higher existence. Dominion includes practical use of the earth and its resources.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.26"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Retains the plural wording of making humanity in our image and likeness and renders dominion as exercising rule. It does not identify the audience of the plural or provide a separate theory of the divine image.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.26"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Identifies the divine image chiefly with freedom of choice, alongside intelligence, rather than bodily appearance. Although physiologically similar to other creatures, humanity forms a distinct category through this freedom.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.26"
    }
  ],
  "1-27": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Explains humanity's specially prepared form. On male and female, he records a midrashic double-sided first human, but his plain-sense reading treats this verse as a general account whose details appear in chapter 2.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.27"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Locates the divine image in intellectual capacity, which must be perfected through knowledge, reverence, and love of God. The image is a potential likeness that calls for cultivation, not an assertion that humans are divine.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.27"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Related comment on 1:26: His preceding discussion explicitly interprets verse 27: the divine image emphasizes humanity's higher soul and explains the movement from singular humanity to male and female.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.26"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely preserves image-language and the creation of male and female. It adds no explanatory definition of what the image means.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.27"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Connects the divine image to freedom and the ability to change one's surroundings. Male and female situates humanity within biological life and describes the beginnings of the species, while he also stresses the significance of sexual difference.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.27"
    }
  ],
  "1-28": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Uses the defective spelling of subdue it for a traditional reading about the husband's authority and the male obligation of procreation. This is his historical exegetical and legal interpretation, not a modern social recommendation.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.28"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Subduing is accomplished through superior intelligence, not merely physical force. Dominion includes controlling threats from animals and training them for human purposes.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.28"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Distinguishes the blessing of humanity from the wording used for fish and birds. Filling the earth means dispersing and inhabiting it widely; subduing and ruling include settlement, building, cultivation, and use of resources and animals.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.28"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Renders subduing as becoming strong over the earth and dominion as exercising rule over its creatures. It does not add Rashi's gender-related interpretation.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.28"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Treats procreation as a command addressed to a freely choosing subject. Filling the earth also entails settlement and cultivation; human responsibility to inhabit it does not eliminate the presence of other creatures.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.28"
    }
  ],
  "1-29": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Reads the food allocation together with verse 30: the first humans may not kill animals for food. Permission to eat meat comes later, after the Flood, in Genesis 9:3.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.29"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Briefly identifies the allocation as food given to humanity.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.29"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Distinguishes human seed-and-fruit food from the green vegetation assigned to animals. Meat is initially forbidden because animal life has value and creatures avoid pain and death. He relates later meat permission to enduring limits concerning life, blood, and suffering.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.29"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the grant of seed-bearing vegetation and fruit to humans. It does not add a discussion of later permission to eat meat.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.29"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Understands the plant-food allocation as applying at this initial stage. The added qualification leaves room for the later change in humanity's permitted diet.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.29"
    }
  ],
  "1-30": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "No separate entry in the checked edition for this verse.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.30"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "Assigns animals green vegetation, in distinction from the seed-bearing food allocated to humanity.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.30"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "Related comment on 1:29: His comment on 1:29 expressly distinguishes the animal diet in 1:30 from humanity's seed-and-fruit diet and discusses the initial restriction on meat.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.29"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Closely translates the provision of green vegetation to animals possessing life. No separate interpretive addition is apparent.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.30"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Suggests the possibility of an initially herbivorous creation. He also raises an alternative: perhaps killing was restricted without every form of nourishment from animals or carcasses being forbidden. He presents this as a possibility, not a settled conclusion.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.30"
    }
  ],
  "1-31": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": "Interprets the added definite article in the sixth day through a midrashic connection to the five books of Torah and the future sixth of Sivan, when Israel receives the Torah.",
      "url": "https://www.sefaria.org/Rashi_on_Genesis.1.31"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": "The completed whole is better than its parts considered separately. He also treats the sixth day as the transition between the workdays and the Sabbath.",
      "url": "https://www.sefaria.org/Sforno_on_Genesis.1.31"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": "The whole arrangement is very good even though it includes death, the evil inclination, and punishment, because these can serve the preservation of the wider good. He connects this to Onkelos's language of a properly ordered creation.",
      "url": "https://www.sefaria.org/Ramban_on_Genesis.1.31"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": "Renders the final assessment with language of being thoroughly ordered or properly prepared, rather than simply repeating good. Ramban explicitly discusses this choice.",
      "url": "https://www.sefaria.org/Onkelos_Genesis.1.31"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": "Emphasizes that God's final assessment takes in the whole created order, from light to humanity. Beyond that emphasis on entirety, the entry closely follows the verse.",
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.1.31"
    }
  ],
  "2-1": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.1"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.1"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.1"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.1"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.1"
    }
  ],
  "2-2": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.2"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.2"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.2"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.2"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.2"
    }
  ],
  "2-3": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.3"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.3"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.3"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.3"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.3"
    }
  ],
  "2-4": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.4"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.4"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.4"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.4"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.4"
    }
  ],
  "2-5": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.5"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.5"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.5"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.5"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.5"
    }
  ],
  "2-6": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.6"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.6"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.6"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.6"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.6"
    }
  ],
  "2-7": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.7"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.7"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.7"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.7"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.7"
    }
  ],
  "2-8": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.8"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.8"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.8"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.8"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.8"
    }
  ],
  "2-9": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.9"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.9"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.9"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.9"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.9"
    }
  ],
  "2-10": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.10"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.10"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.10"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.10"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.10"
    }
  ],
  "2-11": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.11"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.11"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.11"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.11"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.11"
    }
  ],
  "2-12": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.12"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.12"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.12"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.12"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.12"
    }
  ],
  "2-13": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.13"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.13"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.13"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.13"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.13"
    }
  ],
  "2-14": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.14"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.14"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.14"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.14"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.14"
    }
  ],
  "2-15": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.15"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.15"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.15"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.15"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.15"
    }
  ],
  "2-16": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.16"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.16"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.16"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.16"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.16"
    }
  ],
  "2-17": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.17"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.17"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.17"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.17"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.17"
    }
  ],
  "2-18": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.18"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.18"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.18"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.18"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.18"
    }
  ],
  "2-19": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.19"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.19"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.19"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.19"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.19"
    }
  ],
  "2-20": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.20"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.20"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.20"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.20"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.20"
    }
  ],
  "2-21": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.21"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.21"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.21"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.21"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.21"
    }
  ],
  "2-22": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.22"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.22"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.22"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.22"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.22"
    }
  ],
  "2-23": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.23"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.23"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.23"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.23"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.23"
    }
  ],
  "2-24": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.24"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.24"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.24"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.24"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.24"
    }
  ],
  "2-25": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.2.25"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.2.25"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.2.25"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.2.25"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.2.25"
    }
  ],
  "3-1": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.1"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.1"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.1"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.1"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.1"
    }
  ],
  "3-2": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.2"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.2"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.2"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.2"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.2"
    }
  ],
  "3-3": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.3"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.3"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.3"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.3"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.3"
    }
  ],
  "3-4": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.4"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.4"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.4"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.4"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.4"
    }
  ],
  "3-5": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.5"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.5"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.5"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.5"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.5"
    }
  ],
  "3-6": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.6"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.6"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.6"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.6"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.6"
    }
  ],
  "3-7": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.7"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.7"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.7"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.7"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.7"
    }
  ],
  "3-8": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.8"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.8"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.8"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.8"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.8"
    }
  ],
  "3-9": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.9"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.9"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.9"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.9"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.9"
    }
  ],
  "3-10": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.10"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.10"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.10"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.10"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.10"
    }
  ],
  "3-11": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.11"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.11"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.11"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.11"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.11"
    }
  ],
  "3-12": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.12"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.12"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.12"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.12"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.12"
    }
  ],
  "3-13": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.13"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.13"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.13"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.13"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.13"
    }
  ],
  "3-14": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.14"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.14"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.14"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.14"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.14"
    }
  ],
  "3-15": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.15"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.15"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.15"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.15"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.15"
    }
  ],
  "3-16": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.16"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.16"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.16"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.16"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.16"
    }
  ],
  "3-17": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.17"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.17"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.17"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.17"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.17"
    }
  ],
  "3-18": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.18"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.18"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.18"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.18"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.18"
    }
  ],
  "3-19": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.19"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.19"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.19"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.19"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.19"
    }
  ],
  "3-20": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.20"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.20"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.20"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.20"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.20"
    }
  ],
  "3-21": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.21"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.21"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.21"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.21"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.21"
    }
  ],
  "3-22": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.22"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.22"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.22"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.22"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.22"
    }
  ],
  "3-23": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.23"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.23"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.23"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.23"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.23"
    }
  ],
  "3-24": [
    {
      "id": "rashi",
      "name": "Rashi",
      "text": null,
      "url": "https://www.sefaria.org/Rashi_on_Genesis.3.24"
    },
    {
      "id": "sforno",
      "name": "S’forno",
      "text": null,
      "url": "https://www.sefaria.org/Sforno_on_Genesis.3.24"
    },
    {
      "id": "ramban",
      "name": "Ramban",
      "text": null,
      "url": "https://www.sefaria.org/Ramban_on_Genesis.3.24"
    },
    {
      "id": "unkelos",
      "name": "Unkelos",
      "text": null,
      "url": "https://www.sefaria.org/Onkelos_Genesis.3.24"
    },
    {
      "id": "plaut",
      "name": "Plaut Torah",
      "text": null
    },
    {
      "id": "etz-chaim",
      "name": "Etz Chaim Torah",
      "text": null
    },
    {
      "id": "steinsaltz",
      "name": "Rabbi Steinsaltz",
      "text": null,
      "url": "https://www.sefaria.org/Steinsaltz_on_Genesis.3.24"
    }
  ]
};
