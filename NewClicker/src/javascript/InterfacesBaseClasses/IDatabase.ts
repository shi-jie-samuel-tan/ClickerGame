﻿import { Player } from "./Player";
import { StageLevel } from "./StageLevel";
import { Enemy, Unit } from "./BaseClass";

export interface IDatabase {
    readonly CurrentPlayer:Player;
    readonly CurrentStage:StageLevel;

    EnemyArrCounter: number;
    StageOneEnemyArr: Enemy[];
    StageTwoEnemyArr: Enemy[];
    StageThreeEnemyArr: Enemy[];
    StageFourEnemyArr: Enemy[];
    StageFiveEnemyArr: Enemy[];
    EnemyArr: Enemy[][];
    CurrentEnemyArr: Enemy[]; 

    RangeOneUnitArr: Unit[];
    RangeTwoUnitArr: Unit[];
    RangeThreeUnitArr: Unit[];
    RangeFourUnitArr: Unit[];
    RangeFiveUnitArr: Unit[];
    RangeSixUnitArr: Unit[];
    HeroArr: Unit[];
    UnitArr: Unit[][]; 
    CurrentUnit: Unit;
    counter: number;
}