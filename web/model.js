var mongoose = require('mongoose'),
	Schema = mongoose.Schema,
	ObjectId = Schema.ObjectId;

var CustomerSchema = new Schema({
	name			: string,
	contact			: {
		first		: string,
		last		: string,
		email		: string,
		phone		: string
	},
	programs		: [{
		name		: string,
		date		: timestamp,
		time		: string,
		recurs		: {type: string, enum: ['daily', 'weekdays', 'week', 'month' 'annual']}
		recurCount	: int,
		rooms		: [{
			name		: string,
			location	: string,
			number		: string,
			age			: string,
			grade		: string,
			labels		: int,
			latitude	: string,
			longitude	: string
		}]
	}],
	printers		: [{
		name		: string,
		ipAddress	: string,
		latitude	: string,
		longitude	: string
	}]
});
var FamilySetSchema = new Schema({
	adults			: [{
		first		: string,
		last		: string,
		email		: string,
		phone		: string,
		address		: string,
		city		: string,
		state		: string,
		zip			: string,
		device		: string,//type: iphone, andriod... not sure if I should make this an enum
		relationship: {type: string, enum: ['father', 'mother', 'guardian', 'grandpa', 'grandma', 'neighbor', 'friend']}
	}],
	kids			: [{
		first		: string,
		last		: string,
		age			: int,
		birthday	: timestamp,
		grade		: string,
		relationship: {type: string, enum ['son', 'daughter', 'foster', 'friend']},//what else goes here?
		guest		: boolean,
		alergies	: [string]
	}]
});
/*
var RiderSchema = new Schema({
	name: {
		first	: String
	  , last	: String
	}
  , number		: Number
  , sex			: {type: String, enum: ['M', 'F']}
  , team		: String
});

var TeamSchema = new Schema({
	name		: String
  , group		: {type: String, enum: ['solo', 'male', 'female', 'coed']}
  , duration	: {type: String, enum: ['6', '12']}
  , riders		: [ObjectId]
  , laps		: {type: Number, default: 0}
  , lastLap		: Date
});

var LapSchema = new Schema({
	rider		: ObjectId
  , number		: Number
  , team		: String
  , rName		: String
  , date		: {type: Date, default: Date.now}
});

mongoose.connect('mongodb://localhost/potluck12');
module.exports.Rider = mongoose.model('Rider', RiderSchema);
module.exports.Team = mongoose.model('Team', TeamSchema);
module.exports.Lap = mongoose.model('Lap', LapSchema);
*/