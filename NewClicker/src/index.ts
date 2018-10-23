﻿import { Fighter } from "./javascript/Classes/Fighters"
import { Player } from "./javascript/InterfacesBaseClasses/Player";
import { Kore } from "@kirinnee/core";
//import $ from "jquery";
import { Repository } from "./javascript/InterfacesBaseClasses/Repository";
import { Storage } from "./javascript/InterfacesBaseClasses/Storage";
import { StageLevel } from "./javascript/InterfacesBaseClasses/StageLevel";
import { Unit, Enemy, Resource, RefinerTrainer, Hero } from "./javascript/InterfacesBaseClasses/BaseClass";
import { IPlayer } from "./javascript/InterfacesBaseClasses/IPlayer";
let core: Core = new Kore();
core.ExtendPrimitives();

//$(document).ready(function () {
//    $("#map-image").draggable({
//        containment: "#map-container",
//        cursor: "crosshair"
//    });
//    $("#backdrop").fadeIn(0);
//    $("#sophie").click(function () {
//        $("#sophie").css("z-index", "101");
//        $("#resource-unit-div").css("z-index", "0");
//        $("#side-panel-black-overlay,#sophie-speech,#clickable-screen").fadeIn(0, function () {
//            $("#clickable-screen").click(function () {
//                $("#side-panel-black-overlay,#sophie-speech,#clickable-screen").fadeOut(0);
//                $("#sophie").css("z-index", "10");
//            });
//        });
//    });
//    $(".side-panel-button").click(function () {
//        var button = $(this);
//        var id = button.attr('name');
//        $(".side-panel-info-card").animate({ "right": "-600%" }, 600);
//        if (button.hasClass("selectedPanel")) {
//            button.removeClass("selectedPanel");
//        }
//        else {
//            $(".selectedPanel").removeClass("selectedPanel");
//            $("#" + id).animate({ "right": "100%" }, 600);
//            button.addClass("selectedPanel");
//        }
//    });
//    $(".side-panel-block").click(function () {
//        $("#sophie").css("z-index", "0");
//        var id = $(this).attr('name');
//        $("#side-panel-black-overlay,#clickable-screen,#" + id).fadeIn(0);
//        $("#clickable-screen").click(function () {
//            $("#side-panel-black-overlay,#clickable-screen,#" + id).fadeOut(0);
//            $("#sophie").css("z-index", "10");
//        });
//    });
//    $(".refiner-trainer-button").click(function () {
//        var id = $(this).attr('name');
//        $("#refiner-trainer-area").children().fadeOut(0);
//        if (id === "refiner-repo") {
//            $("#refiner-trainer-title-text").text("Refiners");
//        }
//        else {
//            $("#refiner-trainer-title-text").text("Trainers");
//        }
//        $("#" + id).fadeIn(0);
//    });
//    $(".map-stats-skills-heroes-button").click(function () {
//        var id = $(this).attr('name');
//        $("#map-div-area").children().fadeOut(0);
//        if (id === "stats-selected") {
//            $("#map-title-text").text("Stats");
//        }
//        if (id === "skills-selected") {
//            $("#map-title-text").text("Skills");
//        }
//        if (id === "heroes-selected") {
//            $("#map-title-text").text("Heroes");
//        }
//        if (id === "map-selected") {
//            $("#map-title-text").text("Map");
//        }
//        $("#" + id).fadeIn(0);
//    });
//    $("#toggle-button").click(function () {
//        if (!($("#toggle-button").hasClass("toggle-button-switched"))) {
//            $("#toggle-button").addClass("toggle-button-switched").animate({ "right": "2%" }, 300);
//            $("#resource-unit-title-text").text("Units");
//            $("#unit-area").fadeIn(200);
//            $("#resource-area").fadeOut(200);
//        }
//        else {
//            $("#toggle-button").removeClass("toggle-button-switched").animate({ "right": "7%" }, 300);
//            $("#resource-unit-title-text").text("Resources");
//            $("#unit-area").fadeOut(200);
//            $("#resource-area").fadeIn(200);
//        }
//    });

//    function addQuantityAnimation(type, quantityAdd) {
//        var old = $("#" + type + "-quantity").text();
//        var oldQuantity = parseInt(old.substr(2));
//        var newQuantity = oldQuantity + quantityAdd;
//        $("#" + type + "-quantity").text("X " + newQuantity.toString());
//    }


//});

let thePlayer: Player = new Player(1);
let theStage: StageLevel = new StageLevel(1);

//Resources
let Man: Resource = new Resource(0, "abc", "Man");
let Wood: Resource = new Resource(1, "abc", "Wood");
let Iron: Resource = new Resource(2, "abc", "Iron");
let Thread: Resource = new Resource(3, "abc", "Thread");
let Steel: Resource = new Resource(4, "abc", "Steel");
let Gunpowder: Resource = new Resource(5, "abc", "Gunpowder");
let ManaShard: Resource = new Resource(6, "abc", "Mana Shard");
let Coin: Resource = new Resource(7, "abc", "Coin");
let Plank: Resource = new Resource(8, "abc", "Plank");
let IronBar: Resource = new Resource(9, "abc", "Iron Bar");
let Nylon: Resource = new Resource(10, "abc", "Nylon");
let IronBlade: Resource = new Resource(11, "abc", "Iron Blade");
let Manacyte: Resource = new Resource(12, "abc", "Manacyte");
let Bullet: Resource = new Resource(13, "abc", "Bullet");
let SteelBar: Resource = new Resource(14, "abc", "Steel Bar");
let Arrow: Resource = new Resource(15, "abc", "Arrow");
let SteelPlate: Resource = new Resource(16, "abc", "Steel Plate");
let Spear: Resource = new Resource(17, "abc", "Spear");
let Sword: Resource = new Resource(18, "abc", "Sword");
let Bow: Resource = new Resource(19, "abc", "Bow");
let WoodenShield: Resource = new Resource(20, "abc", "Wooden Shield");
let Rifle: Resource = new Resource(21, "abc", "Rifle");
let IronShield: Resource = new Resource(22, "abc", "Iron Shield");
let SteelArmor: Resource = new Resource(23, "abc", "Steel Armor");
let Wand: Resource = new Resource(24, "abc", "Wand");
let Crossbow: Resource = new Resource(25, "abc", "Crossbow");
let Staff: Resource = new Resource(26, "abc", "Staff");
let EnchantedBlade: Resource = new Resource(27, "abc", "Enchanted Blade");
let MysticBow: Resource = new Resource(28, "abc", "Mystic Bow");
let ArcaneRifle: Resource = new Resource(29, "abc", "Arcane Rifle");
let HolyLance: Resource = new Resource(30, "abc", "Holy Lance");
let ResourceArr: Resource[] = [Man, Wood, Iron, Thread, Steel, Gunpowder, ManaShard, Coin, Plank,
    IronBar, Nylon, IronBlade, Manacyte, Bullet, SteelBar, Arrow, SteelPlate, Spear, Sword,
    Bow, WoodenShield, Rifle, IronShield, SteelArmor, Wand, Crossbow, Staff, EnchantedBlade,
    MysticBow, ArcaneRifle, HolyLance];

//Units
let Spearman: Unit = new Unit(0, "abc", "Spearman", 6, 1, 2, 0, thePlayer, 20);
let Swordsman: Unit = new Unit(1, "abc", "Swordsman", 6, 10, 1, 0, thePlayer, 40);
let Archer: Unit = new Unit(2, "abc", "Archer", 5, 100, 4, 0, thePlayer, 160);
let Pikeman: Unit = new Unit(3, "abc", "Pikeman", 7, 14, 2, 0, thePlayer, 20);
let Warrior: Unit = new Unit(4, "abc", "Warrior", 7.5, 60, 1, 0, thePlayer, 40);
let Rifleman: Unit = new Unit(5, "abc", "Rifleman", 5, 250, 3, 0, thePlayer, 80);
let Knight: Unit = new Unit(6, "abc", "Knight", 10, 200, 1, 0, thePlayer, 40);
let CrossArcher: Unit = new Unit(7, "abc", "Cross Archer", 6, 1500, 5, 0, thePlayer,160);
let Chanter: Unit = new Unit(8, "abc", "Chanter", 5, 6000, 5, 0, thePlayer, 400);
let Paladin: Unit = new Unit(9, "abc", "Paladin", 10, 800, 2, 0, thePlayer, 20);
//let Gladiator: Unit = new Unit(10, "abc", "Gladiator", 12.5, 4000, 1, 0, thePlayer, 40);
let Magus: Unit = new Unit(11, "abc", "Magus", 12.5, 100000, 6, 0, thePlayer, 400);
let ArcaneGunslinger: Unit = new Unit(12, "abc", "Arcane Gunslinger", 6, 55000, 6, 0, thePlayer, 80);
let MysticRanger: Unit = new Unit(13, "abc", "MysticRanger", 7.5, 320000, 5, 0, thePlayer, 160);

//RefinerTrainer
let Recruiter: RefinerTrainer = new RefinerTrainer(0, "abc", "Recruiter", [Coin], [1], [Man], [1], 1200);
let Woodworker: RefinerTrainer = new RefinerTrainer(1, "abc", "Woodworker", [Wood], [1], [Plank], [2], 100);
let Ironsmith: RefinerTrainer = new RefinerTrainer(2, "abc", "Ironsmith", [Iron], [5], [IronBar], [1], 60);
let Couturier: RefinerTrainer = new RefinerTrainer(3, "abc", "Couturier", [Thread], [8], [Nylon], [1], 53);
let BladeSmith: RefinerTrainer = new RefinerTrainer(4, "abc", "Blade Smith", [IronBar], [2], [IronBlade], [1], 100);
let ManaRefiner: RefinerTrainer = new RefinerTrainer(5, "abc", "Mana Refiner", [Manacyte], [1], [ManaShard], [1], 80);
let PyrotechnicExpert: RefinerTrainer = new RefinerTrainer(6, "abc", "Pyrotechnic Expert", [IronBlade], [1], [Bullet], [10], 30);
let SteelWorker: RefinerTrainer = new RefinerTrainer(7, "abc", "Steel Worker", [Steel], [5], [SteelBar], [1], 60);
let Fletcher: RefinerTrainer = new RefinerTrainer(8, "abc", "Fletcher", [Plank, Iron], [5, 1], [Arrow], [20], 80);
let Metallurgist: RefinerTrainer = new RefinerTrainer(9, "abc", "Metallurgist", [SteelBar], [2], [SteelPlate], [1], 200);
let SpearCrafter: RefinerTrainer = new RefinerTrainer(10, "abc", "Spear Crafter", [IronBar, Plank], [1, 2], [Spear], [2], 120);
let Blacksmith: RefinerTrainer = new RefinerTrainer(11, "abc", "Blacksmith", [IronBlade, Plank], [1, 1], [Sword], [1], 100);
let Bowyer: RefinerTrainer = new RefinerTrainer(12, "abc", "Bowyer", [Nylon, Plank], [3, 1], [Bow], [1], 160);
let WoodenShieldSmith: RefinerTrainer = new RefinerTrainer(13, "abc", "Wooden Shield Smith", [Plank], [3], [WoodenShield], [1], 160);
let IronShieldSmith: RefinerTrainer = new RefinerTrainer(14, "abc", "Iron Shield Smith", [WoodenShield, IronBar], [1, 1], [IronShield], [1], 160);
let Armorer: RefinerTrainer = new RefinerTrainer(15, "abc", "Armorer", [SteelPlate], [2], [SteelArmor], [1], 300);
let Gunsmith: RefinerTrainer = new RefinerTrainer(16, "abc", "Gunsmith", [SteelBar], [2], [Rifle], [1], 300);
let Crossbowyer: RefinerTrainer = new RefinerTrainer(17, "abc", "Crossbowyer", [Bow, Steel], [1, 1], [Crossbow], [1], 200);
let Wandmaker: RefinerTrainer = new RefinerTrainer(18, "abc", "Wandmaker", [Manacyte, Plank], [1, 1], [Wand], [1], 200);
let StaffCrafter: RefinerTrainer = new RefinerTrainer(19, "abc", "Staff Crafter", [Wand, Steel], [1, 1], [Staff], [1], 200);
let EnchantedBladeSmith: RefinerTrainer = new RefinerTrainer(20, "abc", "Enchanted Blade Smith", [Manacyte, Sword], [5, 1], [EnchantedBlade], [1], 1200);
let MysticBowyer: RefinerTrainer = new RefinerTrainer(21, "abc", "Mystic Bowyer", [Manacyte, Bow], [5, 1], [MysticBow], [1], 1200);
let ArcaneGunsmith: RefinerTrainer = new RefinerTrainer(22, "abc", "Arcane Gunsmith", [Manacyte, Rifle], [5, 1], [ArcaneRifle], [1], 1200);
let LanceSmith: RefinerTrainer = new RefinerTrainer(23, "abc", "Lance Smith", [Manacyte, Spear], [5, 1], [HolyLance], [1], 1200);
let SpearmanInstructor: RefinerTrainer = new RefinerTrainer(24, "abc", "Spearman Instructor", [Man, Coin, Spear], [1, 3, 1], [Spearman], [1], 40);
let SwordsmanInstructor: RefinerTrainer = new RefinerTrainer(25, "abc", "Swordsman Instructor", [Man, Coin, Sword], [1, 3, 1], [Swordsman], [1], 66);
let BowmanInstructor: RefinerTrainer = new RefinerTrainer(26, "abc", "Bowman Instructor", [Bow, Man, Coin, Arrow], [1, 1, 5, 10], [Archer], [1], 66);
let PikemanTrainer: RefinerTrainer = new RefinerTrainer(27, "abc", "Pikeman Trainer", [Spearman, Coin, WoodenShield], [1, 10, 1], [Pikeman], [1], 160);
let WarriorTrainer: RefinerTrainer = new RefinerTrainer(28, "abc", "Warrior Trainer", [Swordsman, Coin, WoodenShield], [1, 10, 1], [Warrior], [1], 240);
let RiflemanInstructor: RefinerTrainer = new RefinerTrainer(29, "abc", "Rifleman Instructor", [Rifle, Coin, Bullet, Man], [1, 30, 10, 1], [Rifleman], [1], 160);
let KnightMentor: RefinerTrainer = new RefinerTrainer(30, "abc", "Knight Mentor", [Warrior, SteelArmor, IronShield, Coin], [1, 1, 1, 75], [Knight], [1], 400);
let CrossArcherTrainer: RefinerTrainer = new RefinerTrainer(31, "abc", "Cross Archer Trainer", [Archer, Crossbow, Coin], [1, 1, 120], [CrossArcher], [1], 240);
let ChanterInstructor: RefinerTrainer = new RefinerTrainer(32, "abc", "Chanter Instructor", [Wand, Man, Coin], [1, 1, 200], [Chanter], [1], 400);
let MagusMaster: RefinerTrainer = new RefinerTrainer(33, "abc", "Magus Master", [Chanter, Staff, Coin], [1, 1, 2500], [Magus], [1], 900);
let PaladinMaster: RefinerTrainer = new RefinerTrainer(34, "abc", "Paladin Master", [Pikeman, HolyLance, SteelArmor, Coin], [1, 1, 1, 500], [Paladin], [1], 900);
let ArcaneGunslingerMaster: RefinerTrainer = new RefinerTrainer(35, "abc", "Arcane Gunslinger Master", [Rifleman, ArcaneRifle, Coin], [1, 1, 5500], [ArcaneGunslinger], [1], 900);
let MysticRangerMaster: RefinerTrainer = new RefinerTrainer(36, "abc", "Mystic Ranger Master", [CrossArcher, MysticBow, Coin], [1, 1, 15000], [MysticRanger], [1], 900);
let RefinerTrainerArr: RefinerTrainer[] = [Recruiter, Woodworker, Ironsmith, Couturier, BladeSmith, ManaRefiner, PyrotechnicExpert,
    SteelWorker, Fletcher, Metallurgist, SpearCrafter, Blacksmith, Bowyer, WoodenShieldSmith, IronShieldSmith, Armorer, Gunsmith, Crossbowyer,
    Wandmaker, StaffCrafter, EnchantedBladeSmith, MysticBowyer, ArcaneGunsmith, LanceSmith, SpearmanInstructor, SwordsmanInstructor,
    BowmanInstructor, PikemanTrainer, WarriorTrainer, RiflemanInstructor, KnightMentor, CrossArcherTrainer, ChanterInstructor,
    MagusMaster, PaladinMaster, ArcaneGunslingerMaster, MysticRangerMaster];

//Heroes

let StageOneEnemyArr: Enemy[] = [new Enemy(0, 1, 5, 5, 2, [0, 1], theStage)];
let StageTwoEnemyArr: Enemy[] = [new Enemy(0, 1, 5, 5, 2, [0, 1], theStage)];
let StageThreeEnemyArr: Enemy[] = [new Enemy(0, 1, 5, 5, 2, [0, 1], theStage)];
let StageFourEnemyArr: Enemy[] = [new Enemy(0, 1, 5, 5, 2, [0, 1], theStage)];
let StageFiveEnemyArr: Enemy[] = [new Enemy(0, 1, 5, 5, 2, [0, 1], theStage)];
let RangeOneUnitArr: Unit[] = [Swordsman, Warrior, Knight];
let RangeTwoUnitArr: Unit[] = [Spearman, Pikeman, Paladin];
let RangeThreeUnitArr: Unit[] = [Rifleman];
let RangeFourUnitArr: Unit[] = [Archer];
let RangeFiveUnitArr: Unit[] = [CrossArcher, Chanter, MysticRanger];
let RangeSixUnitArr: Unit[] = [Magus, ArcaneGunslinger];
let HeroArr: Hero[] = [];
let theDatabase = new Storage(thePlayer, theStage, StageOneEnemyArr, StageTwoEnemyArr, StageThreeEnemyArr, StageFourEnemyArr,
    StageFiveEnemyArr, RangeOneUnitArr, RangeTwoUnitArr, RangeThreeUnitArr, RangeFourUnitArr, RangeFiveUnitArr, RangeSixUnitArr, HeroArr, ResourceArr, RefinerTrainerArr);
export let theRepo = new Repository(theDatabase);




