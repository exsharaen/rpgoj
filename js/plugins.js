// Generated by RPG Maker.
// Do not edit this file directly.
var $plugins =
[
{"name":"YEP_CoreEngine","status":true,"description":"v1.15 Needed for the majority of Yanfly Engine Scripts. Also\r\ncontains bug fixes found inherently in RPG Maker.","parameters":{"---Screen---":"","Screen Width":"816","Screen Height":"624","Scale Battlebacks":"true","Scale Title":"true","Scale Game Over":"true","Open Console":"false","Reposition Battlers":"true","GameFont Load Timer":"0","---Gold---":"","Gold Max":"99999999","Gold Font Size":"20","Gold Icon":"313","Gold Overlap":"Banyak!","---Items---":"","Default Max":"999","Quantity Text Size":"20","---Stats---":"","Max Level":"300","Actor MaxHP":"99999","Actor MaxMP":"99999","Actor Parameter":"999","Enemy MaxHP":"99999999","Enemy MaxMP":"99999","Enemy Parameter":"999","---Battle---":"","Animation Rate":"4","Flash Target":"false","---Font---":"","Chinese Font":"SimHei, Heiti TC, sans-serif","Korean Font":"Dotum, AppleGothic, sans-serif","Default Font":"GameFont, Verdana, Arial, Courier New","Font Size":"28","Text Align":"left","---Windows---":"","Digit Grouping":"true","Line Height":"36","Icon Width":"32","Icon Height":"32","Face Width":"144","Face Height":"144","Window Padding":"18","Text Padding":"6","Window Opacity":"192","Gauge Outline":"true","Gauge Height":"18","Menu TP Bar":"true","---Window Colors---":"","Color: Normal":"0","Color: System":"16","Color: Crisis":"17","Color: Death":"18","Color: Gauge Back":"19","Color: HP Gauge 1":"20","Color: HP Gauge 2":"21","Color: MP Gauge 1":"22","Color: MP Gauge 2":"23","Color: MP Cost":"23","Color: Power Up":"24","Color: Power Down":"25","Color: TP Gauge 1":"28","Color: TP Gauge 2":"29","Color: TP Cost Color":"29"}},
{"name":"YEP_MainMenuManager","status":true,"description":"v1.02 This plugin allows you to manage the various aspects\nof your main menu.","parameters":{"---Command---":"","Command Alignment":"left","Command Position":"left","Command Columns":"1","Command Rows":"Math.min(10, Math.ceil(this.maxItems() / this.maxCols()))","Command Width":"240","Hide Actor Window":"false","Hide Gold Window":"false","Blurry Background":"true","---Menu 1---":"","Menu 1 Name":"","Menu 1 Symbol":"","Menu 1 Show":"","Menu 1 Enabled":"","Menu 1 Ext":"","Menu 1 Main Bind":"","Menu 1 Actor Bind":"","---Menu 2---":"","Menu 2 Name":"","Menu 2 Symbol":"","Menu 2 Show":"","Menu 2 Enabled":"","Menu 2 Ext":"","Menu 2 Main Bind":"","Menu 2 Actor Bind":"","---Menu 3---":"","Menu 3 Name":"","Menu 3 Symbol":"","Menu 3 Show":"","Menu 3 Enabled":"","Menu 3 Ext":"","Menu 3 Main Bind":"","Menu 3 Actor Bind":"","---Menu 4---":"","Menu 4 Name":"","Menu 4 Symbol":"","Menu 4 Show":"","Menu 4 Enabled":"","Menu 4 Ext":"","Menu 4 Main Bind":"","Menu 4 Actor Bind":"","---Menu 5---":"","Menu 5 Name":"","Menu 5 Symbol":"","Menu 5 Show":"","Menu 5 Enabled":"","Menu 5 Ext":"","Menu 5 Main Bind":"","Menu 5 Actor Bind":"","---Menu 6---":"","Menu 6 Name":"","Menu 6 Symbol":"","Menu 6 Show":"","Menu 6 Enabled":"","Menu 6 Ext":"","Menu 6 Main Bind":"","Menu 6 Actor Bind":"","---Menu 7---":"","Menu 7 Name":"","Menu 7 Symbol":"","Menu 7 Show":"","Menu 7 Enabled":"","Menu 7 Ext":"","Menu 7 Main Bind":"","Menu 7 Actor Bind":"","---Menu 8---":"","Menu 8 Name":"","Menu 8 Symbol":"","Menu 8 Show":"","Menu 8 Enabled":"","Menu 8 Ext":"","Menu 8 Main Bind":"","Menu 8 Actor Bind":"","---Menu 9---":"","Menu 9 Name":"","Menu 9 Symbol":"","Menu 9 Show":"","Menu 9 Enabled":"","Menu 9 Ext":"","Menu 9 Main Bind":"","Menu 9 Actor Bind":"","---Menu 10---":"","Menu 10 Name":"TextManager.item","Menu 10 Symbol":"item","Menu 10 Show":"this.needsCommand('item')","Menu 10 Enabled":"this.areMainCommandsEnabled()","Menu 10 Ext":"","Menu 10 Main Bind":"this.commandItem.bind(this)","Menu 10 Actor Bind":"","---Menu 11---":"","Menu 11 Name":"","Menu 11 Symbol":"","Menu 11 Show":"","Menu 11 Enabled":"","Menu 11 Ext":"","Menu 11 Main Bind":"","Menu 11 Actor Bind":"","---Menu 12---":"","Menu 12 Name":"","Menu 12 Symbol":"","Menu 12 Show":"","Menu 12 Enabled":"","Menu 12 Ext":"","Menu 12 Main Bind":"","Menu 12 Actor Bind":"","---Menu 13---":"","Menu 13 Name":"","Menu 13 Symbol":"","Menu 13 Show":"","Menu 13 Enabled":"","Menu 13 Ext":"","Menu 13 Main Bind":"","Menu 13 Actor Bind":"","---Menu 14---":"","Menu 14 Name":"","Menu 14 Symbol":"","Menu 14 Show":"","Menu 14 Enabled":"","Menu 14 Ext":"","Menu 14 Main Bind":"","Menu 14 Actor Bind":"","---Menu 15---":"","Menu 15 Name":"TextManager.skill","Menu 15 Symbol":"skill","Menu 15 Show":"this.needsCommand('skill')","Menu 15 Enabled":"this.areMainCommandsEnabled()","Menu 15 Ext":"","Menu 15 Main Bind":"this.commandPersonal.bind(this)","Menu 15 Actor Bind":"SceneManager.push(Scene_Skill)","---Menu 16---":"","Menu 16 Name":"","Menu 16 Symbol":"","Menu 16 Show":"","Menu 16 Enabled":"","Menu 16 Ext":"","Menu 16 Main Bind":"","Menu 16 Actor Bind":"","---Menu 17---":"","Menu 17 Name":"","Menu 17 Symbol":"","Menu 17 Show":"","Menu 17 Enabled":"","Menu 17 Ext":"","Menu 17 Main Bind":"","Menu 17 Actor Bind":"","---Menu 18---":"","Menu 18 Name":"","Menu 18 Symbol":"","Menu 18 Show":"","Menu 18 Enabled":"","Menu 18 Ext":"","Menu 18 Main Bind":"","Menu 18 Actor Bind":"","---Menu 19---":"","Menu 19 Name":"","Menu 19 Symbol":"","Menu 19 Show":"","Menu 19 Enabled":"","Menu 19 Ext":"","Menu 19 Main Bind":"","Menu 19 Actor Bind":"","---Menu 20---":"","Menu 20 Name":"TextManager.equip","Menu 20 Symbol":"equip","Menu 20 Show":"this.needsCommand('equip')","Menu 20 Enabled":"this.areMainCommandsEnabled()","Menu 20 Ext":"","Menu 20 Main Bind":"this.commandPersonal.bind(this)","Menu 20 Actor Bind":"SceneManager.push(Scene_Equip)","---Menu 21---":"","Menu 21 Name":"","Menu 21 Symbol":"","Menu 21 Show":"","Menu 21 Enabled":"","Menu 21 Ext":"","Menu 21 Main Bind":"","Menu 21 Actor Bind":"","---Menu 22---":"","Menu 22 Name":"","Menu 22 Symbol":"","Menu 22 Show":"","Menu 22 Enabled":"","Menu 22 Ext":"","Menu 22 Main Bind":"","Menu 22 Actor Bind":"","---Menu 23---":"","Menu 23 Name":"","Menu 23 Symbol":"","Menu 23 Show":"","Menu 23 Enabled":"","Menu 23 Ext":"","Menu 23 Main Bind":"","Menu 23 Actor Bind":"","---Menu 24---":"","Menu 24 Name":"","Menu 24 Symbol":"","Menu 24 Show":"","Menu 24 Enabled":"","Menu 24 Ext":"","Menu 24 Main Bind":"","Menu 24 Actor Bind":"","---Menu 25---":"","Menu 25 Name":"Yanfly.Param.CCCCmdName","Menu 25 Symbol":"class","Menu 25 Show":"Imported.YEP_ClassChangeCore && $gameSystem.isShowClass()","Menu 25 Enabled":"$gameSystem.isEnableClass() && this.areMainCommandsEnabled()","Menu 25 Ext":"","Menu 25 Main Bind":"this.commandPersonal.bind(this)","Menu 25 Actor Bind":"SceneManager.push(Scene_Class)","---Menu 26---":"","Menu 26 Name":"","Menu 26 Symbol":"","Menu 26 Show":"","Menu 26 Enabled":"","Menu 26 Ext":"","Menu 26 Main Bind":"","Menu 26 Actor Bind":"","---Menu 27---":"","Menu 27 Name":"","Menu 27 Symbol":"","Menu 27 Show":"","Menu 27 Enabled":"","Menu 27 Ext":"","Menu 27 Main Bind":"","Menu 27 Actor Bind":"","---Menu 28---":"","Menu 28 Name":"","Menu 28 Symbol":"","Menu 28 Show":"","Menu 28 Enabled":"","Menu 28 Ext":"","Menu 28 Main Bind":"","Menu 28 Actor Bind":"","---Menu 29---":"","Menu 29 Name":"","Menu 29 Symbol":"","Menu 29 Show":"","Menu 29 Enabled":"","Menu 29 Ext":"","Menu 29 Main Bind":"","Menu 29 Actor Bind":"","---Menu 30---":"","Menu 30 Name":"","Menu 30 Symbol":"","Menu 30 Show":"","Menu 30 Enabled":"","Menu 30 Ext":"","Menu 30 Main Bind":"","Menu 30 Actor Bind":"","---Menu 31---":"","Menu 31 Name":"","Menu 31 Symbol":"","Menu 31 Show":"","Menu 31 Enabled":"","Menu 31 Ext":"","Menu 31 Main Bind":"","Menu 31 Actor Bind":"","---Menu 32---":"","Menu 32 Name":"","Menu 32 Symbol":"","Menu 32 Show":"","Menu 32 Enabled":"","Menu 32 Ext":"","Menu 32 Main Bind":"","Menu 32 Actor Bind":"","---Menu 33---":"","Menu 33 Name":"","Menu 33 Symbol":"","Menu 33 Show":"","Menu 33 Enabled":"","Menu 33 Ext":"","Menu 33 Main Bind":"","Menu 33 Actor Bind":"","---Menu 34---":"","Menu 34 Name":"","Menu 34 Symbol":"","Menu 34 Show":"","Menu 34 Enabled":"","Menu 34 Ext":"","Menu 34 Main Bind":"","Menu 34 Actor Bind":"","---Menu 35---":"","Menu 35 Name":"","Menu 35 Symbol":"","Menu 35 Show":"","Menu 35 Enabled":"","Menu 35 Ext":"","Menu 35 Main Bind":"","Menu 35 Actor Bind":"","---Menu 36---":"","Menu 36 Name":"","Menu 36 Symbol":"","Menu 36 Show":"","Menu 36 Enabled":"","Menu 36 Ext":"","Menu 36 Main Bind":"","Menu 36 Actor Bind":"","---Menu 37---":"","Menu 37 Name":"","Menu 37 Symbol":"","Menu 37 Show":"","Menu 37 Enabled":"","Menu 37 Ext":"","Menu 37 Main Bind":"","Menu 37 Actor Bind":"","---Menu 38---":"","Menu 38 Name":"","Menu 38 Symbol":"","Menu 38 Show":"","Menu 38 Enabled":"","Menu 38 Ext":"","Menu 38 Main Bind":"","Menu 38 Actor Bind":"","---Menu 39---":"","Menu 39 Name":"","Menu 39 Symbol":"","Menu 39 Show":"","Menu 39 Enabled":"","Menu 39 Ext":"","Menu 39 Main Bind":"","Menu 39 Actor Bind":"","---Menu 40---":"","Menu 40 Name":"","Menu 40 Symbol":"","Menu 40 Show":"","Menu 40 Enabled":"","Menu 40 Ext":"","Menu 40 Main Bind":"","Menu 40 Actor Bind":"","---Menu 41---":"","Menu 41 Name":"","Menu 41 Symbol":"","Menu 41 Show":"","Menu 41 Enabled":"","Menu 41 Ext":"","Menu 41 Main Bind":"","Menu 41 Actor Bind":"","---Menu 42---":"","Menu 42 Name":"","Menu 42 Symbol":"","Menu 42 Show":"","Menu 42 Enabled":"","Menu 42 Ext":"","Menu 42 Main Bind":"","Menu 42 Actor Bind":"","---Menu 43---":"","Menu 43 Name":"","Menu 43 Symbol":"","Menu 43 Show":"","Menu 43 Enabled":"","Menu 43 Ext":"","Menu 43 Main Bind":"","Menu 43 Actor Bind":"","---Menu 44---":"","Menu 44 Name":"","Menu 44 Symbol":"","Menu 44 Show":"","Menu 44 Enabled":"","Menu 44 Ext":"","Menu 44 Main Bind":"","Menu 44 Actor Bind":"","---Menu 45---":"","Menu 45 Name":"","Menu 45 Symbol":"","Menu 45 Show":"","Menu 45 Enabled":"","Menu 45 Ext":"","Menu 45 Main Bind":"","Menu 45 Actor Bind":"","---Menu 46---":"","Menu 46 Name":"","Menu 46 Symbol":"","Menu 46 Show":"","Menu 46 Enabled":"","Menu 46 Ext":"","Menu 46 Main Bind":"","Menu 46 Actor Bind":"","---Menu 47---":"","Menu 47 Name":"","Menu 47 Symbol":"","Menu 47 Show":"","Menu 47 Enabled":"","Menu 47 Ext":"","Menu 47 Main Bind":"","Menu 47 Actor Bind":"","---Menu 48---":"","Menu 48 Name":"","Menu 48 Symbol":"","Menu 48 Show":"","Menu 48 Enabled":"","Menu 48 Ext":"","Menu 48 Main Bind":"","Menu 48 Actor Bind":"","---Menu 49---":"","Menu 49 Name":"","Menu 49 Symbol":"","Menu 49 Show":"","Menu 49 Enabled":"","Menu 49 Ext":"","Menu 49 Main Bind":"","Menu 49 Actor Bind":"","---Menu 50---":"","Menu 50 Name":"TextManager.status","Menu 50 Symbol":"status","Menu 50 Show":"this.needsCommand('status')","Menu 50 Enabled":"this.areMainCommandsEnabled()","Menu 50 Ext":"","Menu 50 Main Bind":"this.commandPersonal.bind(this)","Menu 50 Actor Bind":"SceneManager.push(Scene_Status)","---Menu 51---":"","Menu 51 Name":"'Jurnal Tugas'","Menu 51 Symbol":"quest","Menu 51 Show":"true","Menu 51 Enabled":"true","Menu 51 Ext":"","Menu 51 Main Bind":"this.commandQuest.bind(this)","Menu 51 Actor Bind":"","---Menu 52---":"","Menu 52 Name":"","Menu 52 Symbol":"","Menu 52 Show":"","Menu 52 Enabled":"","Menu 52 Ext":"","Menu 52 Main Bind":"","Menu 52 Actor Bind":"","---Menu 53---":"","Menu 53 Name":"","Menu 53 Symbol":"","Menu 53 Show":"","Menu 53 Enabled":"","Menu 53 Ext":"","Menu 53 Main Bind":"","Menu 53 Actor Bind":"","---Menu 54---":"","Menu 54 Name":"","Menu 54 Symbol":"","Menu 54 Show":"","Menu 54 Enabled":"","Menu 54 Ext":"","Menu 54 Main Bind":"","Menu 54 Actor Bind":"","---Menu 55---":"","Menu 55 Name":"TextManager.formation","Menu 55 Symbol":"formation","Menu 55 Show":"this.needsCommand('formation')","Menu 55 Enabled":"this.isFormationEnabled()","Menu 55 Ext":"","Menu 55 Main Bind":"this.commandFormation.bind(this)","Menu 55 Actor Bind":"","---Menu 56---":"","Menu 56 Name":"","Menu 56 Symbol":"","Menu 56 Show":"","Menu 56 Enabled":"","Menu 56 Ext":"","Menu 56 Main Bind":"","Menu 56 Actor Bind":"","---Menu 57---":"","Menu 57 Name":"","Menu 57 Symbol":"","Menu 57 Show":"","Menu 57 Enabled":"","Menu 57 Ext":"","Menu 57 Main Bind":"","Menu 57 Actor Bind":"","---Menu 58---":"","Menu 58 Name":"","Menu 58 Symbol":"","Menu 58 Show":"","Menu 58 Enabled":"","Menu 58 Ext":"","Menu 58 Main Bind":"","Menu 58 Actor Bind":"","---Menu 59---":"","Menu 59 Name":"","Menu 59 Symbol":"","Menu 59 Show":"","Menu 59 Enabled":"","Menu 59 Ext":"","Menu 59 Main Bind":"","Menu 59 Actor Bind":"","---Menu 60---":"","Menu 60 Name":"","Menu 60 Symbol":"","Menu 60 Show":"","Menu 60 Enabled":"","Menu 60 Ext":"","Menu 60 Main Bind":"","Menu 60 Actor Bind":"","---Menu 61---":"","Menu 61 Name":"","Menu 61 Symbol":"","Menu 61 Show":"","Menu 61 Enabled":"","Menu 61 Ext":"","Menu 61 Main Bind":"","Menu 61 Actor Bind":"","---Menu 62---":"","Menu 62 Name":"","Menu 62 Symbol":"","Menu 62 Show":"","Menu 62 Enabled":"","Menu 62 Ext":"","Menu 62 Main Bind":"","Menu 62 Actor Bind":"","---Menu 63---":"","Menu 63 Name":"","Menu 63 Symbol":"","Menu 63 Show":"","Menu 63 Enabled":"","Menu 63 Ext":"","Menu 63 Main Bind":"","Menu 63 Actor Bind":"","---Menu 64---":"","Menu 64 Name":"","Menu 64 Symbol":"","Menu 64 Show":"","Menu 64 Enabled":"","Menu 64 Ext":"","Menu 64 Main Bind":"","Menu 64 Actor Bind":"","---Menu 65---":"","Menu 65 Name":"","Menu 65 Symbol":"","Menu 65 Show":"","Menu 65 Enabled":"","Menu 65 Ext":"","Menu 65 Main Bind":"","Menu 65 Actor Bind":"","---Menu 66---":"","Menu 66 Name":"","Menu 66 Symbol":"","Menu 66 Show":"","Menu 66 Enabled":"","Menu 66 Ext":"","Menu 66 Main Bind":"","Menu 66 Actor Bind":"","---Menu 67---":"","Menu 67 Name":"","Menu 67 Symbol":"","Menu 67 Show":"","Menu 67 Enabled":"","Menu 67 Ext":"","Menu 67 Main Bind":"","Menu 67 Actor Bind":"","---Menu 68---":"","Menu 68 Name":"","Menu 68 Symbol":"","Menu 68 Show":"","Menu 68 Enabled":"","Menu 68 Ext":"","Menu 68 Main Bind":"","Menu 68 Actor Bind":"","---Menu 69---":"","Menu 69 Name":"","Menu 69 Symbol":"","Menu 69 Show":"","Menu 69 Enabled":"","Menu 69 Ext":"","Menu 69 Main Bind":"","Menu 69 Actor Bind":"","---Menu 70---":"","Menu 70 Name":"","Menu 70 Symbol":"","Menu 70 Show":"","Menu 70 Enabled":"","Menu 70 Ext":"","Menu 70 Main Bind":"","Menu 70 Actor Bind":"","---Menu 71---":"","Menu 71 Name":"","Menu 71 Symbol":"","Menu 71 Show":"","Menu 71 Enabled":"","Menu 71 Ext":"","Menu 71 Main Bind":"","Menu 71 Actor Bind":"","---Menu 72---":"","Menu 72 Name":"","Menu 72 Symbol":"","Menu 72 Show":"","Menu 72 Enabled":"","Menu 72 Ext":"","Menu 72 Main Bind":"","Menu 72 Actor Bind":"","---Menu 73---":"","Menu 73 Name":"","Menu 73 Symbol":"","Menu 73 Show":"","Menu 73 Enabled":"","Menu 73 Ext":"","Menu 73 Main Bind":"","Menu 73 Actor Bind":"","---Menu 74---":"","Menu 74 Name":"","Menu 74 Symbol":"","Menu 74 Show":"","Menu 74 Enabled":"","Menu 74 Ext":"","Menu 74 Main Bind":"","Menu 74 Actor Bind":"","---Menu 75---":"","Menu 75 Name":"","Menu 75 Symbol":"","Menu 75 Show":"","Menu 75 Enabled":"","Menu 75 Ext":"","Menu 75 Main Bind":"","Menu 75 Actor Bind":"","---Menu 76---":"","Menu 76 Name":"","Menu 76 Symbol":"","Menu 76 Show":"","Menu 76 Enabled":"","Menu 76 Ext":"","Menu 76 Main Bind":"","Menu 76 Actor Bind":"","---Menu 77---":"","Menu 77 Name":"","Menu 77 Symbol":"","Menu 77 Show":"","Menu 77 Enabled":"","Menu 77 Ext":"","Menu 77 Main Bind":"","Menu 77 Actor Bind":"","---Menu 78---":"","Menu 78 Name":"","Menu 78 Symbol":"","Menu 78 Show":"","Menu 78 Enabled":"","Menu 78 Ext":"","Menu 78 Main Bind":"","Menu 78 Actor Bind":"","---Menu 79---":"","Menu 79 Name":"","Menu 79 Symbol":"","Menu 79 Show":"","Menu 79 Enabled":"","Menu 79 Ext":"","Menu 79 Main Bind":"","Menu 79 Actor Bind":"","---Menu 80---":"","Menu 80 Name":"","Menu 80 Symbol":"","Menu 80 Show":"","Menu 80 Enabled":"","Menu 80 Ext":"","Menu 80 Main Bind":"","Menu 80 Actor Bind":"","---Menu 81---":"","Menu 81 Name":"'Common Event 1'","Menu 81 Symbol":"common event","Menu 81 Show":"false","Menu 81 Enabled":"true","Menu 81 Ext":"1","Menu 81 Main Bind":"this.callCommonEvent.bind(this)","Menu 81 Actor Bind":"","---Menu 82---":"","Menu 82 Name":"'Common Event 2'","Menu 82 Symbol":"common event","Menu 82 Show":"false","Menu 82 Enabled":"true","Menu 82 Ext":"2","Menu 82 Main Bind":"this.callCommonEvent.bind(this)","Menu 82 Actor Bind":"","---Menu 83---":"","Menu 83 Name":"'Common Event 3'","Menu 83 Symbol":"common event","Menu 83 Show":"false","Menu 83 Enabled":"true","Menu 83 Ext":"3","Menu 83 Main Bind":"this.callCommonEvent.bind(this)","Menu 83 Actor Bind":"","---Menu 84---":"","Menu 84 Name":"","Menu 84 Symbol":"","Menu 84 Show":"","Menu 84 Enabled":"","Menu 84 Ext":"","Menu 84 Main Bind":"","Menu 84 Actor Bind":"","---Menu 85---":"","Menu 85 Name":"","Menu 85 Symbol":"","Menu 85 Show":"","Menu 85 Enabled":"","Menu 85 Ext":"","Menu 85 Main Bind":"","Menu 85 Actor Bind":"","---Menu 86---":"","Menu 86 Name":"","Menu 86 Symbol":"","Menu 86 Show":"","Menu 86 Enabled":"","Menu 86 Ext":"","Menu 86 Main Bind":"","Menu 86 Actor Bind":"","---Menu 87---":"","Menu 87 Name":"","Menu 87 Symbol":"","Menu 87 Show":"","Menu 87 Enabled":"","Menu 87 Ext":"","Menu 87 Main Bind":"","Menu 87 Actor Bind":"","---Menu 88---":"","Menu 88 Name":"","Menu 88 Symbol":"","Menu 88 Show":"","Menu 88 Enabled":"","Menu 88 Ext":"","Menu 88 Main Bind":"","Menu 88 Actor Bind":"","---Menu 89---":"","Menu 89 Name":"","Menu 89 Symbol":"","Menu 89 Show":"","Menu 89 Enabled":"","Menu 89 Ext":"","Menu 89 Main Bind":"","Menu 89 Actor Bind":"","---Menu 90---":"","Menu 90 Name":"TextManager.options","Menu 90 Symbol":"options","Menu 90 Show":"this.needsCommand('options')","Menu 90 Enabled":"this.isOptionsEnabled()","Menu 90 Ext":"","Menu 90 Main Bind":"this.commandOptions.bind(this)","Menu 90 Actor Bind":"","---Menu 91---":"","Menu 91 Name":"","Menu 91 Symbol":"","Menu 91 Show":"","Menu 91 Enabled":"","Menu 91 Ext":"","Menu 91 Main Bind":"","Menu 91 Actor Bind":"","---Menu 92---":"","Menu 92 Name":"","Menu 92 Symbol":"","Menu 92 Show":"","Menu 92 Enabled":"","Menu 92 Ext":"","Menu 92 Main Bind":"","Menu 92 Actor Bind":"","---Menu 93---":"","Menu 93 Name":"","Menu 93 Symbol":"","Menu 93 Show":"","Menu 93 Enabled":"","Menu 93 Ext":"","Menu 93 Main Bind":"","Menu 93 Actor Bind":"","---Menu 94---":"","Menu 94 Name":"","Menu 94 Symbol":"","Menu 94 Show":"","Menu 94 Enabled":"","Menu 94 Ext":"","Menu 94 Main Bind":"","Menu 94 Actor Bind":"","---Menu 95---":"","Menu 95 Name":"TextManager.save","Menu 95 Symbol":"save","Menu 95 Show":"this.needsCommand('save')","Menu 95 Enabled":"this.isSaveEnabled()","Menu 95 Ext":"","Menu 95 Main Bind":"this.commandSave.bind(this)","Menu 95 Actor Bind":"","---Menu 96---":"","Menu 96 Name":"","Menu 96 Symbol":"","Menu 96 Show":"","Menu 96 Enabled":"","Menu 96 Ext":"","Menu 96 Main Bind":"","Menu 96 Actor Bind":"","---Menu 97---":"","Menu 97 Name":"","Menu 97 Symbol":"","Menu 97 Show":"","Menu 97 Enabled":"","Menu 97 Ext":"","Menu 97 Main Bind":"","Menu 97 Actor Bind":"","---Menu 98---":"","Menu 98 Name":"","Menu 98 Symbol":"","Menu 98 Show":"","Menu 98 Enabled":"","Menu 98 Ext":"","Menu 98 Main Bind":"","Menu 98 Actor Bind":"","---Menu 99---":"","Menu 99 Name":"'Debug'","Menu 99 Symbol":"debug","Menu 99 Show":"$gameTemp.isPlaytest()","Menu 99 Enabled":"true","Menu 99 Ext":"","Menu 99 Main Bind":"this.commandDebug.bind(this)","Menu 99 Actor Bind":"","---Menu 100---":"","Menu 100 Name":"TextManager.gameEnd","Menu 100 Symbol":"gameEnd","Menu 100 Show":"true","Menu 100 Enabled":"this.isGameEndEnabled()","Menu 100 Ext":"","Menu 100 Main Bind":"this.commandGameEnd.bind(this)","Menu 100 Actor Bind":""}},
{"name":"YEP_MessageCore","status":true,"description":"v1.12 Adds more features to the Message Window to customized\nthe way your messages appear and functions.","parameters":{"---General---":"","Default Rows":"4","Default Width":"Graphics.boxWidth","Face Indent":"Window_Base._faceWidth + 24","Fast Forward Key":"pagedown","Enable Fast Forward":"true","Word Wrapping":"false","Description Wrap":"false","Word Wrap Space":"false","---Font---":"","Font Name":"GameFont","Font Size":"28","Font Size Change":"12","Font Changed Max":"96","Font Changed Min":"12","Font Outline":"4","---Name Box---":"","Name Box Buffer X":"-28","Name Box Buffer Y":"0","Name Box Padding":"this.standardPadding() * 4","Name Box Color":"0","Name Box Clear":"false","Name Box Added Text":""}},
{"name":"YEP_X_ExtMesPack1","status":true,"description":"v1.08 (Requires YEP_MessageCore.js) Letter Sounds, NameBox\nBackground Types, Choice Control, and more!","parameters":{"---Letter Sounds---":"","Enable Sound":"true","Sound Name":"Cursor1","Sound Volume":"50","Sound Pitch":"100","Pitch Variance":"10","Sound Pan":"0","Pan Variance":"10","Sound Interval":"2","Reset Sounds":"false","---Message Anchor---":"","Default X":"center","Default Y":"bottom","Auto Row Full Face":"false","---Message Choices---":"","Max Rows":"6","Choice 1 Show Switch":"0","Choice 2 Show Switch":"0","Choice 3 Show Switch":"0","Choice 4 Show Switch":"0","Choice 5 Show Switch":"0","Choice 6 Show Switch":"0","Choice 7 Show Switch":"0","Choice 8 Show Switch":"0","Choice 9 Show Switch":"0","Choice 10 Show Switch":"0","Choice 11 Show Switch":"0","Choice 12 Show Switch":"0","Choice 13 Show Switch":"0","Choice 14 Show Switch":"0","Choice 15 Show Switch":"0","Choice 16 Show Switch":"0","Choice 17 Show Switch":"0","Choice 18 Show Switch":"0","Choice 19 Show Switch":"0","Choice 20 Show Switch":"0","Choice 1 On Switch":"0","Choice 2 On Switch":"0","Choice 3 On Switch":"0","Choice 4 On Switch":"0","Choice 5 On Switch":"0","Choice 6 On Switch":"0","Choice 7 On Switch":"0","Choice 8 On Switch":"0","Choice 9 On Switch":"0","Choice 10 On Switch":"0","Choice 11 On Switch":"0","Choice 12 On Switch":"0","Choice 13 On Switch":"0","Choice 14 On Switch":"0","Choice 15 On Switch":"0","Choice 16 On Switch":"0","Choice 17 On Switch":"0","Choice 18 On Switch":"0","Choice 19 On Switch":"0","Choice 20 On Switch":"0"}},
{"name":"YEP_X_MessageMacros1","status":true,"description":"v1.00 (Requires YEP_MessageCore.js) Adds macros 1 to 100\nfor your game's message system.","parameters":{"---Setting---":"","Enable Quick Macro":"true","---Macro 1---":"","Macro 1 Text":"\\n<\\c[24]\\n[1]\\c[0]>","Macro 1 Name":"Hero 1","---Macro 2---":"","Macro 2 Text":"\\n<\\c[6]\\n[2]\\c[0]>","Macro 2 Name":"Therese","---Macro 3---":"","Macro 3 Text":"\\n<\\c[6]\\n[3]\\c[0]>","Macro 3 Name":"Marsha","---Macro 4---":"","Macro 4 Text":"\\n<\\c[6]\\n[4]\\c[0]>","Macro 4 Name":"Lucius","---Macro 5---":"","Macro 5 Text":"undefined","Macro 5 Name":"undefined","---Macro 6---":"","Macro 6 Text":"undefined","Macro 6 Name":"undefined","---Macro 7---":"","Macro 7 Text":"undefined","Macro 7 Name":"undefined","---Macro 8---":"","Macro 8 Text":"undefined","Macro 8 Name":"undefined","---Macro 9---":"","Macro 9 Text":"undefined","Macro 9 Name":"undefined","---Macro 10---":"","Macro 10 Text":"undefined","Macro 10 Name":"undefined","---Macro 11---":"","Macro 11 Text":"undefined","Macro 11 Name":"undefined","---Macro 12---":"","Macro 12 Text":"undefined","Macro 12 Name":"undefined","---Macro 13---":"","Macro 13 Text":"undefined","Macro 13 Name":"undefined","---Macro 14---":"","Macro 14 Text":"undefined","Macro 14 Name":"undefined","---Macro 15---":"","Macro 15 Text":"undefined","Macro 15 Name":"undefined","---Macro 16---":"","Macro 16 Text":"undefined","Macro 16 Name":"undefined","---Macro 17---":"","Macro 17 Text":"undefined","Macro 17 Name":"undefined","---Macro 18---":"","Macro 18 Text":"undefined","Macro 18 Name":"undefined","---Macro 19---":"","Macro 19 Text":"undefined","Macro 19 Name":"undefined","---Macro 20---":"","Macro 20 Text":"undefined","Macro 20 Name":"undefined","---Macro 21---":"","Macro 21 Text":"undefined","Macro 21 Name":"undefined","---Macro 22---":"","Macro 22 Text":"undefined","Macro 22 Name":"undefined","---Macro 23---":"","Macro 23 Text":"undefined","Macro 23 Name":"undefined","---Macro 24---":"","Macro 24 Text":"undefined","Macro 24 Name":"undefined","---Macro 25---":"","Macro 25 Text":"undefined","Macro 25 Name":"undefined","---Macro 26---":"","Macro 26 Text":"undefined","Macro 26 Name":"undefined","---Macro 27---":"","Macro 27 Text":"undefined","Macro 27 Name":"undefined","---Macro 28---":"","Macro 28 Text":"undefined","Macro 28 Name":"undefined","---Macro 29---":"","Macro 29 Text":"undefined","Macro 29 Name":"undefined","---Macro 30---":"","Macro 30 Text":"undefined","Macro 30 Name":"undefined","---Macro 31---":"","Macro 31 Text":"undefined","Macro 31 Name":"undefined","---Macro 32---":"","Macro 32 Text":"undefined","Macro 32 Name":"undefined","---Macro 33---":"","Macro 33 Text":"undefined","Macro 33 Name":"undefined","---Macro 34---":"","Macro 34 Text":"undefined","Macro 34 Name":"undefined","---Macro 35---":"","Macro 35 Text":"undefined","Macro 35 Name":"undefined","---Macro 36---":"","Macro 36 Text":"undefined","Macro 36 Name":"undefined","---Macro 37---":"","Macro 37 Text":"undefined","Macro 37 Name":"undefined","---Macro 38---":"","Macro 38 Text":"undefined","Macro 38 Name":"undefined","---Macro 39---":"","Macro 39 Text":"undefined","Macro 39 Name":"undefined","---Macro 40---":"","Macro 40 Text":"undefined","Macro 40 Name":"undefined","---Macro 41---":"","Macro 41 Text":"undefined","Macro 41 Name":"undefined","---Macro 42---":"","Macro 42 Text":"The Answer to the Ultimate Question of Life, the Universe, and Everything.","Macro 42 Name":"Life","---Macro 43---":"","Macro 43 Text":"undefined","Macro 43 Name":"undefined","---Macro 44---":"","Macro 44 Text":"undefined","Macro 44 Name":"undefined","---Macro 45---":"","Macro 45 Text":"undefined","Macro 45 Name":"undefined","---Macro 46---":"","Macro 46 Text":"undefined","Macro 46 Name":"undefined","---Macro 47---":"","Macro 47 Text":"undefined","Macro 47 Name":"undefined","---Macro 48---":"","Macro 48 Text":"undefined","Macro 48 Name":"undefined","---Macro 49---":"","Macro 49 Text":"undefined","Macro 49 Name":"undefined","---Macro 50---":"","Macro 50 Text":"undefined","Macro 50 Name":"undefined","---Macro 51---":"","Macro 51 Text":"undefined","Macro 51 Name":"undefined","---Macro 52---":"","Macro 52 Text":"undefined","Macro 52 Name":"undefined","---Macro 53---":"","Macro 53 Text":"undefined","Macro 53 Name":"undefined","---Macro 54---":"","Macro 54 Text":"undefined","Macro 54 Name":"undefined","---Macro 55---":"","Macro 55 Text":"undefined","Macro 55 Name":"undefined","---Macro 56---":"","Macro 56 Text":"undefined","Macro 56 Name":"undefined","---Macro 57---":"","Macro 57 Text":"undefined","Macro 57 Name":"undefined","---Macro 58---":"","Macro 58 Text":"undefined","Macro 58 Name":"undefined","---Macro 59---":"","Macro 59 Text":"undefined","Macro 59 Name":"undefined","---Macro 60---":"","Macro 60 Text":"undefined","Macro 60 Name":"undefined","---Macro 61---":"","Macro 61 Text":"undefined","Macro 61 Name":"undefined","---Macro 62---":"","Macro 62 Text":"undefined","Macro 62 Name":"undefined","---Macro 63---":"","Macro 63 Text":"undefined","Macro 63 Name":"undefined","---Macro 64---":"","Macro 64 Text":"undefined","Macro 64 Name":"undefined","---Macro 65---":"","Macro 65 Text":"undefined","Macro 65 Name":"undefined","---Macro 66---":"","Macro 66 Text":"undefined","Macro 66 Name":"undefined","---Macro 67---":"","Macro 67 Text":"undefined","Macro 67 Name":"undefined","---Macro 68---":"","Macro 68 Text":"undefined","Macro 68 Name":"undefined","---Macro 69---":"","Macro 69 Text":"undefined","Macro 69 Name":"undefined","---Macro 70---":"","Macro 70 Text":"undefined","Macro 70 Name":"undefined","---Macro 71---":"","Macro 71 Text":"undefined","Macro 71 Name":"undefined","---Macro 72---":"","Macro 72 Text":"undefined","Macro 72 Name":"undefined","---Macro 73---":"","Macro 73 Text":"undefined","Macro 73 Name":"undefined","---Macro 74---":"","Macro 74 Text":"undefined","Macro 74 Name":"undefined","---Macro 75---":"","Macro 75 Text":"undefined","Macro 75 Name":"undefined","---Macro 76---":"","Macro 76 Text":"undefined","Macro 76 Name":"undefined","---Macro 77---":"","Macro 77 Text":"undefined","Macro 77 Name":"undefined","---Macro 78---":"","Macro 78 Text":"undefined","Macro 78 Name":"undefined","---Macro 79---":"","Macro 79 Text":"undefined","Macro 79 Name":"undefined","---Macro 80---":"","Macro 80 Text":"undefined","Macro 80 Name":"undefined","---Macro 81---":"","Macro 81 Text":"undefined","Macro 81 Name":"undefined","---Macro 82---":"","Macro 82 Text":"undefined","Macro 82 Name":"undefined","---Macro 83---":"","Macro 83 Text":"undefined","Macro 83 Name":"undefined","---Macro 84---":"","Macro 84 Text":"undefined","Macro 84 Name":"undefined","---Macro 85---":"","Macro 85 Text":"undefined","Macro 85 Name":"undefined","---Macro 86---":"","Macro 86 Text":"undefined","Macro 86 Name":"undefined","---Macro 87---":"","Macro 87 Text":"undefined","Macro 87 Name":"undefined","---Macro 88---":"","Macro 88 Text":"undefined","Macro 88 Name":"undefined","---Macro 89---":"","Macro 89 Text":"undefined","Macro 89 Name":"undefined","---Macro 90---":"","Macro 90 Text":"undefined","Macro 90 Name":"undefined","---Macro 91---":"","Macro 91 Text":"undefined","Macro 91 Name":"undefined","---Macro 92---":"","Macro 92 Text":"undefined","Macro 92 Name":"undefined","---Macro 93---":"","Macro 93 Text":"undefined","Macro 93 Name":"undefined","---Macro 94---":"","Macro 94 Text":"undefined","Macro 94 Name":"undefined","---Macro 95---":"","Macro 95 Text":"undefined","Macro 95 Name":"undefined","---Macro 96---":"","Macro 96 Text":"undefined","Macro 96 Name":"undefined","---Macro 97---":"","Macro 97 Text":"undefined","Macro 97 Name":"undefined","---Macro 98---":"","Macro 98 Text":"undefined","Macro 98 Name":"undefined","---Macro 99---":"","Macro 99 Text":"undefined","Macro 99 Name":"undefined","---Macro 100---":"","Macro 100 Text":"undefined","Macro 100 Name":"undefined"}},
{"name":"YEP_ButtonCommonEvents","status":true,"description":"v1.01 On the field map, call common events when certain\nbuttons are pressed on the keyboard.","parameters":{"---Top Row---":"","Key ~":"0","Key 1":"0","Key 2":"0","Key 3":"0","Key 4":"0","Key 5":"0","Key 6":"0","Key 7":"0","Key 8":"0","Key 9":"0","Key 0":"0","Key -":"0","Key =":"0","---2nd Row---":"","Key Q (PageUp)":"0","Key W (PageDown)":"0","Key E":"0","Key R":"0","Key T":"1","Key Y":"0","Key U":"0","Key I":"0","Key O":"0","Key P":"0","Key [":"0","Key ]":"0","Key \\":"0","---3rd Row---":"","Key A":"0","Key S":"0","Key D":"0","Key F":"0","Key G":"0","Key H":"0","Key J":"0","Key K":"0","Key L":"0","Key ;":"0","Key \"":"0","Key Enter (OK)":"0","---4th Row---":"","Key Shift (Dash)":"0","Key Z (OK)":"0","Key X (Cancel)":"0","Key C":"0","Key V":"0","Key B":"0","Key N":"0","Key M":"0","Key ,":"0","Key .":"0","Key /":"0","---Misc---":"","Key Space (OK)":"0","Key Left (Left)":"0","Key Up (Up)":"0","Key Right (Right)":"0","Key Down (Down)":"0","Key Insert (Cancel)":"0","Key Delete":"0","Key Home":"0","Key End":"0","Key Page Up (PageUp)":"0","Key Page Down (PageDown)":"0","---NumPad---":"","Key NumPad 0 (Cancel)":"0","Key NumPad 1":"0","Key NumPad 2 (Down)":"0","Key NumPad 3":"0","Key NumPad 4 (Left)":"0","Key NumPad 5":"0","Key NumPad 6 (Right)":"0","Key NumPad 7":"0","Key NumPad 8 (Up)":"0","Key NumPad 9":"0","Key NumPad .":"0","Key NumPad +":"0","Key NumPad -":"0","Key NumPad *":"0","Key NumPad /":"0"}},
{"name":"YEP_KeyboardConfig","status":true,"description":"v1.01 Allows players to adjust their button configuration\nfor keyboards.","parameters":{"---General---":"","Command Name":"Atur Keyboard","Button Events":"1","---Help Text---":"","Key Help":"Ganti pengaturan tombol ini?","Default Layout":"Tatanan Tombol Dasar","Default Help":"Kembalikan pengaturan keyboard ke pengaturan dasar.","WASD Layout":"Tatanan Pergerakan WASD","WASD Help":"Ganti pergerakan ke tombol WASD.","Finish Config":"Selesai Atur","Finish Help":"Sudah selesai mengatur susunan tombol?","Assigned Color":"21","Action Color":"4","Clear Text":"(tidak diatur)","---Key Names---":"","OK Key":"OK","OK Text":"OK / Bicara","Escape Key":"X","Escape Text":"Batal / Menu","Cancel Key":"Batal","Cancel Text":"Batal","Menu Key":"Menu","Menu Text":"Menu","Shift Key":"Lari","Shift Text":"Lari","PageUp Key":"PgUp","PageUp Text":"Page Up","PageDown Key":"PgDn","PageDown Text":"Page Down","Left Key":"◄","Left Text":"Gerak ◄ Kiri","Up Key":"▲","Up Text":"Gerak ▲ Atas","Right Key":"►","Right Text":"Gerak ► Kanan","Down Key":"▼","Down Text":"Gerak ▼ Bawah"}},
{"name":"--------------------","status":true,"description":"------------------------------------------------------------","parameters":{}},
{"name":"Exsharaen_YEP_EventName","status":true,"description":"(Requires YEP_MessageCore.js) Get event name for message window","parameters":{}},
{"name":"GALV_MessageBusts","status":true,"description":"Displays a bust image instead of selected face image","parameters":{"Bust Priority":"0","Bust Position":"0","Text X Offset":"390","Filename Append":""}},
{"name":"GS_QuestSystem","status":true,"description":"- A simplistic quest system with various customization options.","parameters":{"Auto Rewards":"true","---------------":"","Words":"","Hidden Reward Text":"??????","No Quests Text":"Tidak Ada Tugas","All Word":"Semua","Completed Word":"Selesai","Failed Word":"Gagal","In-Progress Word":"Berjalan","Steps Word":"Langkah-Langkah","Rewards Word":"Hadiah","Display Options":"","Reverse Layout":"false","Filter Position":"Top","Use Categories":"true","Show Empty Categories":"0","Show Quest Count":"true","Bullet Character":"-","Max Steps":"0","Default Filter":"0","Image Options":"","Use Icons":"true","Completed Image":"","Completed Image Opacity":"128","Failed Image":"","Failed Image Opacity":"128","Color Options":"","Default Step Color":"#ffffff","Complete Step Color":"#00ff00","Failed Step Color":"#ff0000","Quest Name Color":"#84aaff","Quest Description Color":"#ffffff","Steps Name Color":"#84aaff","Rewards Name Color":"#84aaff","Rewards Point Color":"#ffffff","Rewards Hidden Color":"#ffffff","Font Options":"","Quest Info Font":"GameFont","Quest Info Font Size":"28"}},
{"name":"OrangeOverlay","status":true,"description":"v1.1.2 - Adds overlay images to the map <OrangeOverlay>","parameters":{"Organized Folders":"true","Parallax Layer Filename":"par","Ground Layer Filename":"ground","Light Layer Filename":"light","Shadow Layer Filename":"shadow","Light Opacity":"185","Quick Start":"true","Bush Region ID":"7","Fog Switch ID":"1","Light Switch ID":"2","Parallax Switch ID":"3","Shadow Switch ID":"4"}},
{"name":"OrangeMapshot","status":true,"description":"This plugin will save a picture of the entire map on a Mapshots folder when you press a key. <OrangeMapshot>","parameters":{"useMapName":"true","layerType":"0","drawAutoShadows":"true","drawEvents":"false","keyCode":"44","imageType":"png","imageQuality":"70","imagePath":"./Mapshots"}}
];
