/*	-INFORMATION-
	Subject:	Magic Item
	Effect:		This script adds the "Thaevur/Iron Sphere" item.
				This item is originally from older editions of D&D(?), and has been coded per the details in this video from Ed Greenwood: https://www.youtube.com/watch?v=Jvy_hr1QLQE.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-04-04 (sheet v13.1.0)
*/

var iFileName = "Thaevur Sphere [by MasterJedi2014] V1.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/04/04",
};

SourceList["EdGW"] = {
	name : "Ed Greenwood's YouTube Channel",
	abbreviation : "EdGW",
	date : "2024/04/01",
	url : "https://www.youtube.com/@edgreenwoodofficial",
};

MagicItemsList["thaevur/iron sphere"] = {
	name : "Thaevur/Iron Sphere",
	source : [["EdGW", 0], ["MJ:HB", 0]],
	nameTest : /^(?=.*(thaevur|iron))(?=.*sphere).*$/i,
	type : "wondrous item",
	rarity : "rare",
	notLegalAL : true,
	allowDuplicates : true,
	description : "A grapefruit sized or smaller sphere of a non-ferrous material \u0026 of a dark brown, rust hued, or black color that can absorb the magic of spells. When allowed to orbit me, any spell cast on it, the bearer, that includes the sphere or its bearer in its AOE is absorbed by the sphere. When the sphere is exhausted or overloaded, it will sink down the floor. This sphere can absorb a certain amount of magic depending on its rarity, losing 1d12 SL of stored magic per day. See tooltop for more info.",
	choices : ['Rare', 'Very Rare', 'Legendary'],
	"rare" : {
		name : "Thaevur/Iron Sphere [Rare]",
		description : "A grapefruit sized or smaller sphere of a non-ferrous material \u0026 of a dark brown, rust hued, or black color that can absorb the magic of spells. When allowed to orbit me, any spell that targets it, its bearer, or that includes the sphere or its bearer in its AOE is absorbed by the sphere. When the sphere is exhausted or overloaded, it will sink down the floor. This sphere can absorb 3d10+10 SL of magic of 4th Lvl or lower, losing 1d12 SL of stored magic per day. The last charge is enough to absorb any spell of 4th Lvl or lower. Bns Actn to \"turn off/on\". See tooltop for more info.",
		descriptionFull : "A grapefruit sized or smaller sphere of a non-ferrous material \u0026 of a dark brown, rust hued, or black color that can absorb the magic of spells. Into the surface of the sphere is carved a word in Common; I become the sphere's \"bearer\" upon speaking aloud the word while holding the sphere, at which point the sphere will begin orbiting my torso. When not confined such that the sphere cannot orbit me, any spell that targets it, its bearer, or that includes the sphere or its bearer in its AOE is absorbed by the sphere. I can use a Bonus Action to will the sphere to \"turn off or on\" to either allow or disallow spells to be cast on me. When the sphere is exhausted or overloaded, it will sink down the floor. This sphere can absorb 3d10+10 SL of magic of 4th Lvl or lower, losing 1d12 SL of stored magic per day. The last charge is enough to absorb any spell of 4th Lvl or lower. If multiple spheres are in a position to absorb a spell, only one sphere chosen at random will absorb that spell.",
		limfeaname : "Thaevur/Iron Sphere [Rare; 4th SL Max]",
		usages : "3d10+10 SL", // Inspired by comment on video by user @pelinoregeryon6593 that mentions 1E variants of Ioun Stones.
		recovery : "day",
	},
	"very rare" : {
		name : "Thaevur/Iron Sphere [Very Rare]",
		rarity : "very rare",
		description : "A grapefruit sized or smaller sphere of a non-ferrous material \u0026 of a dark brown, rust hued, or black color that can absorb the magic of spells. When allowed to orbit me, any spell that targets it, its bearer, or that includes the sphere or its bearer in its AOE is absorbed by the sphere. When the sphere is exhausted or overloaded, it will sink down the floor. This sphere can absorb 4d10+20 SL of magic of 6th Lvl or lower, losing 1d12 SL of stored magic per day. The last charge is enough to absorb any spell of 6th Lvl or lower. Bns Actn to \"turn off/on\". See tooltop for more info.",
		descriptionFull : "A grapefruit sized or smaller sphere of a non-ferrous material \u0026 of a dark brown, rust hued, or black color that can absorb the magic of spells. Into the surface of the sphere is carved a word in Common; I become the sphere's \"bearer\" upon speaking aloud the word while holding the sphere, at which point the sphere will begin orbiting my torso. When not confined such that the sphere cannot orbit me, any spell that targets it, its bearer, or that includes the sphere or its bearer in its AOE is absorbed by the sphere. I can use a Bonus Action to will the sphere to \"turn off or on\" to either allow or disallow spells to be cast on me. When the sphere is exhausted or overloaded, it will sink down the floor. This sphere can absorb 4d10+20 SL of magic of 6th Lvl or lower, losing 1d12 SL of stored magic per day. The last charge is enough to absorb any spell of 6th Lvl or lower. If multiple spheres are in a position to absorb a spell, only one sphere chosen at random will absorb that spell.",
		limfeaname : "Thaevur/Iron Sphere [Rare; 6th SL Max]",
		usages : "4d10+20 SL", // Inspired by comment on video by user @pelinoregeryon6593 that mentions 1E variants of Ioun Stones.
		recovery : "day",
	},
	"legendary" : {
		name : "Thaevur/Iron Sphere [Legendary]",
		rarity : "legendary",
		description : "A grapefruit sized or smaller sphere of a non-ferrous material \u0026 of a dark brown, rust hued, or black color that can absorb the magic of spells. When allowed to orbit me, any spell that targets it, its bearer, or that includes the sphere or its bearer in its AOE is absorbed by the sphere. When the sphere is exhausted or overloaded, it will sink down the floor. This sphere can absorb 5d10+30 SL of magic of 8th Lvl or lower, losing 1d12 SL of stored magic per day. The last charge is enough to absorb any spell of 8th Lvl or lower. Bns Actn to \"turn off/on\". See tooltop for more info.",
		descriptionFull : "A grapefruit sized or smaller sphere of a non-ferrous material \u0026 of a dark brown, rust hued, or black color that can absorb the magic of spells. Into the surface of the sphere is carved a word in Common; I become the sphere's \"bearer\" upon speaking aloud the word while holding the sphere, at which point the sphere will begin orbiting my torso. When not confined such that the sphere cannot orbit me, any spell that targets it, its bearer, or that includes the sphere or its bearer in its AOE is absorbed by the sphere. I can use a Bonus Action to will the sphere to \"turn off or on\" to either allow or disallow spells to be cast on me. When the sphere is exhausted or overloaded, it will sink down the floor. This sphere can absorb 5d10+30 SL of magic of 8th Lvl or lower, losing 1d12 SL of stored magic per day. The last charge is enough to absorb any spell of 8th Lvl or lower. If multiple spheres are in a position to absorb a spell, only one sphere chosen at random will absorb that spell.",
		limfeaname : "Thaevur/Iron Sphere [Legendary; 8th SL Max]",
		usages : "5d10+30 SL", // Inspired by comment on video by user @pelinoregeryon6593 that mentions 1E variants of Ioun Stones.
		recovery : "day",
	},
};