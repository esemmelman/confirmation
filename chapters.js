'use strict';
// Bundled reading text: render before requesting the live Google Doc.
const savedChapters = [
  {
    "number": 1,
    "verses": [
      {
        "number": 1,
        "text": "When God began to create the heaven and the earth."
      },
      {
        "number": 2,
        "text": "the earth being unformed and void, with darkness over the surface of the deep and a wind from God sweeping over the water."
      },
      {
        "number": 3,
        "text": "God said, “Let there be light”; and there was light."
      },
      {
        "number": 4,
        "text": "God saw that the light was good, and God separated the light from the darkness."
      },
      {
        "number": 5,
        "text": "God called the light Day, and the darkness He called Night. And there was evening and there was morning, a first day."
      },
      {
        "number": 6,
        "text": "God said, “Let there be an expanse in the midst of the water, that it may separate water from water.”"
      },
      {
        "number": 7,
        "text": "God made the expanse, and it separated the water which was below the expanse from the water which was above the expanse. And it was so."
      },
      {
        "number": 8,
        "text": "God called the expanse Sky. And there was evening and there was morning, a second day."
      },
      {
        "number": 9,
        "text": "God said, “Let the water below the sky be gathered into one area, that the dry land may appear.” And it was so."
      },
      {
        "number": 10,
        "text": "God called the dry land Earth, and the gathering of waters He called Seas. And God saw that this was good."
      },
      {
        "number": 11,
        "text": "And God said, “Let the earth sprout vegetation: seed-bearing plants, fruit trees of every kind on earth that bear fruit with the seed in it.” And it was so."
      },
      {
        "number": 12,
        "text": "The earth brought forth vegetation: seed-bearing plants of every kind, and trees of every kind bearing fruit with the seed in it. And God saw that this was good."
      },
      {
        "number": 13,
        "text": "And there was evening and there was morning, a third day."
      },
      {
        "number": 14,
        "text": "God said, “Let there be lights in the expanse of the sky to separate day from night; they shall serve as signs for the set times. the days and the years;"
      },
      {
        "number": 15,
        "text": "and they shall serve as lights in the expanse of the sky to shine upon the earth.” And it was so."
      },
      {
        "number": 16,
        "text": "God made the two great lights, the greater light to dominate the day and the lesser light to dominate the night, and the stars."
      },
      {
        "number": 17,
        "text": "And God set them in the expanse of the sky to shine upon the earth,"
      },
      {
        "number": 18,
        "text": "to dominate the day and the night, and to separate light from darkness. And God saw that this was good."
      },
      {
        "number": 19,
        "text": "And there was evening and there was morning, a fourth day."
      },
      {
        "number": 20,
        "text": "God said, “Let the waters bring forth swarms of living creatures, and birds that fly above the earth across the expanse of the sky.”"
      },
      {
        "number": 21,
        "text": "God created the great sea monsters, and all the living creatures of every kind that creep, which the waters brought forth in swarms; and all the winged birds of every kind. And God saw that this was good."
      },
      {
        "number": 22,
        "text": "God blessed them, saying, “Be fertile and increase, fill the waters in the seas, and let the birds increase on the earth.”"
      },
      {
        "number": 23,
        "text": "And there was evening and there was morning, a fifth day."
      },
      {
        "number": 24,
        "text": "God said, “Let the earth bring forth every kind of living creature: cattle, creeping things, and wild beasts of every kind.” And it was so."
      },
      {
        "number": 25,
        "text": "God made wild beasts of every kind and cattle of every kind, and all kinds of creeping things of the earth. And God saw that this was good."
      },
      {
        "number": 26,
        "text": "And God said, “Let us make man in our image, after our likeness. They shall rule the fish of the sea, the birds of the sky, the cattle, the whole earth, and all the creeping things that creep on earth.”"
      },
      {
        "number": 27,
        "text": "And God created man in His image, in the image of God He created him; male and female He created them."
      },
      {
        "number": 28,
        "text": "God blessed them and God said to them, “Be fertile and increase, fill the earth and master it; and rule the fish of the sea, the birds of the sky, and all the living things that creep on earth.”"
      },
      {
        "number": 29,
        "text": "God said, “See, I give you every seed-bearing plant that is upon all the earth, and every tree that has seed-bearing fruit; they shall be yours for food."
      },
      {
        "number": 30,
        "text": "And to all the animals on land, to all the birds of the sky, and to everything that creeps on earth, in which there is the breath of life, [I give] all the green plants for food.” And it was so."
      },
      {
        "number": 31,
        "text": "And God saw all that He had made, and found it very good. And there was evening and there was morning, the sixth day."
      }
    ]
  },
  {
    "number": 2,
    "verses": [
      {
        "number": 1,
        "text": "The heaven and the earth were finished, and all their array."
      },
      {
        "number": 2,
        "text": "On the seventh day God finished the work which He had been doing, and He ceased on the seventh day from all the work which He had done."
      },
      {
        "number": 3,
        "text": "And God blessed the seventh day and declared it holy, because on it God ceased from all the work of creation which He had done."
      },
      {
        "number": 4,
        "text": "Such is the story of heaven and earth when they were created.\r\nWhen the LORD God made earth and heaven."
      },
      {
        "number": 5,
        "text": "when no shrub of the field was yet on earth and no grasses of the field had yet sprouted, because the LORD God had not sent rain upon the earth and there was no man to till the soil,"
      },
      {
        "number": 6,
        "text": "but a flow would well up from the ground and water the whole surface of the earth."
      },
      {
        "number": 7,
        "text": "the LORD God formed man from the dust of the earth. He blew into his nostrils the breath of life, and man became a living being."
      },
      {
        "number": 8,
        "text": "The LORD God planted a garden in Eden, in the east, and placed there the man whom He had formed."
      },
      {
        "number": 9,
        "text": "And from the ground the LORD God caused to grow every tree that was pleasing to the sight and good for food, with the tree of life in the middle of the garden, and the tree of knowledge of good and bad."
      },
      {
        "number": 10,
        "text": "A river issues from Eden to water the garden, and it then divides and becomes four branches."
      },
      {
        "number": 11,
        "text": "The name of the first is Pishon, the one that winds through the whole land of Havilah, where the gold is."
      },
      {
        "number": 12,
        "text": "The gold of that land is good; bdellium is there, and lapis lazuli."
      },
      {
        "number": 13,
        "text": "The name of the second river is Gihon, the one that winds through the whole land of Cush."
      },
      {
        "number": 14,
        "text": "The name of the third river is Tigris, the one that flows east of Asshur. And the fourth river is the Euphrates."
      },
      {
        "number": 15,
        "text": "The LORD God took the man and placed him in the garden of Eden, to till it and tend it."
      },
      {
        "number": 16,
        "text": "And the LORD God commanded the man, saying, “Of every tree of the garden you are free to eat;"
      },
      {
        "number": 17,
        "text": "but as for the tree of knowledge of good and bad, you must not eat of it; for as soon as you eat of it, you shall die.”"
      },
      {
        "number": 18,
        "text": "The LORD God said, “It is not good for man to be alone; I will make a fitting helper for him.”"
      },
      {
        "number": 19,
        "text": "And the LORD God formed out of the earth all the wild beasts and all the birds of the sky, and brought them to the man to see what he would call them; and whatever the man called each living creature, that would be its name."
      },
      {
        "number": 20,
        "text": "And the man gave names to all the cattle and to the birds of the sky and to all the wild beasts; but for Adam no fitting helper was found."
      },
      {
        "number": 21,
        "text": "So the LORD God cast a deep sleep upon the man; and, while he slept, He took one of his ribs and closed up the flesh at that spot."
      },
      {
        "number": 22,
        "text": "And the LORD God fashioned the rib that He had taken from the man into a woman; and He brought her to the man."
      },
      {
        "number": 23,
        "text": "Then the man said, “This one at last / Is bone of my bones / And flesh of my flesh. / This one shall be called Woman, / For from man was she taken.”"
      },
      {
        "number": 24,
        "text": "Hence a man leaves his father and mother and clings to his wife, so that they become one flesh."
      },
      {
        "number": 25,
        "text": "The two of them were naked, the man and his wife, yet they felt no shame."
      }
    ]
  },
  {
    "number": 3,
    "verses": [
      {
        "number": 1,
        "text": "Now the serpent was the shrewdest of all the wild beasts that the LORD God had made. He said to the woman, “Did God really say: You shall not eat of any tree of the garden?”"
      },
      {
        "number": 2,
        "text": "The woman replied to the serpent, “We may eat of the fruit of the other trees of the garden."
      },
      {
        "number": 3,
        "text": "It is only about fruit of the tree in the middle of the garden that God said: You shall not eat of it or touch it, lest you die.”"
      },
      {
        "number": 4,
        "text": "And the serpent said to the woman, “You are not going to die,"
      },
      {
        "number": 5,
        "text": "but God knows that as soon as you eat of it your eyes will be opened and you will be like divine beings who know good and bad.”"
      },
      {
        "number": 6,
        "text": "When the woman saw that the tree was good for eating and a delight to the eyes, and that the tree was desirable as a source of wisdom, she took of its fruit and ate. She also gave some to her husband, and he ate."
      },
      {
        "number": 7,
        "text": "Then the eyes of both of them were opened and they perceived that they were naked; and they sewed together fig leaves and made themselves loincloths."
      },
      {
        "number": 8,
        "text": "They heard the sound of the LORD God moving about in the garden at the breezy time of day; and the man and his wife hid from the LORD God among the trees of the garden."
      },
      {
        "number": 9,
        "text": "The LORD God called out to the man and said to him, “Where are you?”"
      },
      {
        "number": 10,
        "text": "He replied, “I heard the sound of You in the garden, and I was afraid because I was naked, so I hid.”"
      },
      {
        "number": 11,
        "text": "Then He asked, “Who told you that you were naked? Did you eat of the tree from which I had forbidden you to eat?”"
      },
      {
        "number": 12,
        "text": "The man said, “The woman You put at my side. she gave me of the tree, and I ate.”"
      },
      {
        "number": 13,
        "text": "And the LORD God said to the woman, “What is this you have done!” The woman replied, “The serpent duped me, and I ate.”"
      },
      {
        "number": 14,
        "text": "Then the LORD God said to the serpent, “Because you did this, / More cursed shall you be / Than all cattle / And all the wild beasts: / On your belly shall you crawl / And dirt shall you eat / All the days of your life."
      },
      {
        "number": 15,
        "text": "I will put enmity / Between you and the woman, / And between your offspring and hers; / They shall strike at your head, / And you shall strike at their heel.”"
      },
      {
        "number": 16,
        "text": "And to the woman He said, “I will make most severe / Your pangs in childbearing; / In pain shall you bear children. / Yet your urge shall be for your husband, / And he shall rule over you.”"
      },
      {
        "number": 17,
        "text": "To Adam He said, “Because you did as your wife said and ate of the tree about which I commanded you, ‘You shall not eat of it,’ / Cursed be the ground because of you; / By toil shall you eat of it / All the days of your life:"
      },
      {
        "number": 18,
        "text": "Thorns and thistles shall it sprout for you. / But your food shall be the grasses of the field;"
      },
      {
        "number": 19,
        "text": "By the sweat of your brow / Shall you get bread to eat, / Until you return to the ground. / For from it you were taken. / For dust you are, / And to dust you shall return.”"
      },
      {
        "number": 20,
        "text": "The man named his wife Eve, because she was the mother of all the living."
      },
      {
        "number": 21,
        "text": "And the LORD God made garments of skins for Adam and his wife, and clothed them."
      },
      {
        "number": 22,
        "text": "And the LORD God said, “Now that the man has become like one of us, knowing good and bad, what if he should stretch out his hand and take also from the tree of life and eat, and live forever!”"
      },
      {
        "number": 23,
        "text": "So the LORD God banished him from the garden of Eden, to till the soil from which he was taken."
      },
      {
        "number": 24,
        "text": "He drove the man out, and stationed east of the garden of Eden the cherubim and the fiery ever-turning sword, to guard the way to the tree of life."
      }
    ]
  }
];
