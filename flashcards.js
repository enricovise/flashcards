// In a first step build something that loads the list of cards, picks one at random, and displays the "front" part to the user. Then the user can think about the translation and "flip" the card to see the "back" side. Then the user can choose to go to another random card.


function Card(frontString, backString)
{
	this.front = frontString;
	this.back = backString;
	this.last_reviewed = null;
	this.interval = 1;
	this.efactor = 2.5;
};

Card.prototype.isLearning = function()
{
	return this.last_reviewed;
};

Card.prototype.isNew = function()
{
	return !this.isLearning();
};

Card.prototye.isExpired = function()
{
	return !this.isNew() && new Date(this.last_reviewed.getTime() + 60000 * this.interval).getTime() < (new Date()).getTime();
};

Card.prototype.display = function()
{
	return this.front;
};

Card.prototype.displayIn = function(anElement)
{
	anElement.innerHTML = this.display();
};

Card.prototype.flip = function()
{
	return this.back;
};

Card.prototype.flipIn = function(anElement)
{
	anElement.innerHTML = this.flip();
};






function List() {
	this.cards =
		[
			{
				"front": "Hello. (formal) ",
				"back": "Salve. (sAH-lveh)"
			},
			{
				"front": "Hello. (informal) ",
				"back": "Ciao. (chow)"
			},
			{
				"front": "How are you? (informal)",
				"back": "Come stai? (koh-meh STAI?)"
			},
			{
				"front": "How are you? (formal)",
				"back": "Come sta? (koh-meh STAH?)"
			},
			{
				"front": "Fine, thank you. ",
				"back": "Bene, grazie. (BEH-neh, GRAHT-tsyeh)"
			},
			{
				"front": "What is your name? (informal)",
				"back": "Come ti chiami? (KOH-meh tee kee-AH-mee?)"
			},
			{
				"front": "What is your name? (formal)",
				"back": "Come si chiama? (KOH-meh see kee-AH-mah?)"
			},
			{
				"front": "My name is ______ . ",
				"back": "Mi chiamo ______ . (mee kee-AH-moh _____)"
			},
			{
				"front": "Nice to meet you. ",
				"back": "Piacere di conoscerla. (pyah-CHEH-reh dee koh-noh-SHEHR-lah)"
			},
			{
				"front": "Please. ",
				"back": "Per favore. (PEHR fah-VOH-reh)"
			},
			{
				"front": "Thank you. ",
				"back": "Grazie. (GRAHT-tsyeh)"
			},
			{
				"front": "You're welcome. ",
				"back": "Prego. (PREH-goh)"
			},
			{
				"front": "No problem. ",
				"back": "Non c'è problema (non cheh proh-BLEH-mah)"
			},
			{
				"front": "Yes ",
				"back": "Sì. (SEE)"
			},
			{
				"front": "No ",
				"back": "No. (noh)"
			},
			{
				"front": "Excuse me (formal)",
				"back": "Mi scusi. (mee SKOO-zee)"
			},
			{
				"front": "Excuse me (informal)",
				"back": "Scusa (SKOO-sah)"
			},
			{
				"front": "What's that? ",
				"back": "Che cos'è? (KAY kohz-ay)"
			},
			{
				"front": "I'm sorry. ",
				"back": "Mi dispiace. (mee dee-SPYA-chee)"
			},
			{
				"front": "Goodbye. (informal) ",
				"back": "Ciao. (\"chow\")"
			},
			{
				"front": "Goodbye. (formal) ",
				"back": "Arrivederci. (ahr-ree-veh-DEHR-chee)"
			},
			{
				"front": "See you.  ",
				"back": "Ci vediamo. (chee veh-DYAH-moh)"
			},
			{
				"front": "Sure. ",
				"back": "Certamente (cher-TAH-men-teh)or Certo (CHEHR-toh)"
			},
			{
				"front": "Really? ",
				"back": "Davvero? (dahv-VEH-roh?)"
			},
			{
				"front": "I don't speak Italian. ",
				"back": "Non parlo italiano. (non PAHR-loh ee-TAH-lyah-noh)"
			},
			{
				"front": "Do you speak English? (formal)",
				"back": "Parla inglese? (PAHR-lah een-GLEH-zeh?)"
			},
			{
				"front": "Do you speak English? (informal)",
				"back": "Parli inglese? (PAHR-lee een-GLEH-zeh?)"
			},
			{
				"front": "Speak more slowly, please. ",
				"back": "Parli più lentamente/piano, per favore. (PAHR-lee pyoo lehn-TAH-mehn-teh/PYAH-noh, pehr fah-VOH-reh)"
			},
			{
				"front": "I understand Italian a little. ",
				"back": "Capisco l’italiano solo un po'. (EE-oh kah-PEES-koh lee-TAH-lyah-noh SOH-loh oon poh)"
			},
			{
				"front": "I speak just a few words of Italian.  ",
				"back": "Conosco solo alcune parole in italiano. (koh-NOHS-koh SOH-loh ahl-KOO-neh pah-ROH-leh een ee-TAH-lyah-noh)"
			},
			{
				"front": "Is there someone here who speaks English? ",
				"back": "Qualcuno parla inglese? (kwahl-KOO-noh PAHR-lah een-GLEH-zeh?)"
			},
			{
				"front": "What does it mean? ",
				"back": "Che cosa significa? (keh KOH-zah see-NYEE-fee-kah?)or Che cosa vuol dire? (keh KOH-zah vwohl DEE-reh?)"
			},
			{
				"front": "I forgot. ",
				"back": "Mi sono dimenticato. (Mee SOH-noh dee-MEHN-tee-kah-toh)"
			},
			{
				"front": "Now I remember. ",
				"back": "Ora ricordo. (OH-rah ree-KOHR-doh)"
			},
			{
				"front": "I don’t know.",
				"back": "Non lo so. (nohn loh soh)"
			},
			{
				"front": "After ",
				"back": "Dopo (DOH-poh)"
			},
			{
				"front": "Before ",
				"back": "Prima (PREE-mah)"
			},
			{
				"front": "Wait! ",
				"back": "Aspetta! (ahs-PEHT-tah)"
			},
			{
				"front": "I have a question.  ",
				"back": "Ho una domanda. (oh OO-nah doh-MAHN-dah)"
			},
			{
				"front": "Can you tell me...  ",
				"back": "Lei può dirmi... (lay pwoh DEER-mee)"
			},
			{
				"front": "How to get to...  ",
				"back": "Come arrivare a... (KOH-meh ahr-REE-vah-reh ah)"
			},
			{
				"front": "Where/When do we meet? ",
				"back": "Dove/Quando ci incontriamo? (DOH-veh/ KWAHN-doh chee een-KOHN-tryah-moh?)"
			},
			{
				"front": "How is the weather? ",
				"back": "Che tempo fa? (keh TEHM-poh fah)"
			},
			{
				"front": "While ",
				"back": "Mentre (MEHN-treh)"
			},
			{
				"front": "So ",
				"back": "Così (koh-ZEE)"
			},
			{
				"front": "Why/Because ",
				"back": "Perché (pehr-KEH)"
			},
			{
				"front": "Pardon?  ",
				"back": "Come? (KOH-meh?)"
			},
			{
				"front": "Help! ",
				"back": "Aiuto! (ah-YOO-toh!)"
			},
			{
				"front": "Good morning. ",
				"back": "Buon giorno. (bwohn JOHR-noh)"
			},
			{
				"front": "Good afternoon. ",
				"back": "Buon pomeriggio. (bwohn poh-meh-REE-joh)"
			},
			{
				"front": "Good evening. ",
				"back": "Buona sera. (bwoh-nah-SEH-rah)"
			},
			{
				"front": "Good night. ",
				"back": "Buona notte. (bwoh-nah-NOHT-teh)"
			},
			{
				"front": "I don't understand. ",
				"back": "Non capisco. (nohn kah-PEES-koh)"
			},
			{
				"front": "Where are the restrooms? (public place) ",
				"back": "Dove sono i gabinetti? (doh-VEH SOH-noh ee gah-bee-NEHT-tee)"
			},
			{
				"front": "Where is the bathroom? (someone's home) ",
				"back": "Dov'è il bagno? (doh-VEH eel BAHN-yoh)"
			},
			{
				"front": "Leave me alone. ",
				"back": "Mi lasci in pace (mee LAH-shee IN PAH-cheh)or Lasciami in paceor Mi lasci stare (mee LAH-shee STAH-reh)"
			},
			{
				"front": "Don't touch me! ",
				"back": "Non mi toccare! (NOHN mee TOH-kare!)"
			},
			{
				"front": "I'll call the police. ",
				"back": "Chiamo la polizia. (KYAH-moh lah poh-LEE-tsyah!)"
			},
			{
				"front": "Police! ",
				"back": "Polizia! (poh-LEE-tsyah!)"
			},
			{
				"front": "Stop! Thief! ",
				"back": "Al ladro! (ahl LAH-droh!)"
			},
			{
				"front": "I need your help. ",
				"back": "Ho bisogno del tuo aiuto. (oh bee-ZOH-nyoh dehl too-oh ah-YOO-toh)"
			},
			{
				"front": "It's an emergency. ",
				"back": "È un'emergenza. (eh oo-neh-mehr-JEN-tsah)"
			},
			{
				"front": "I'm lost. ",
				"back": "Mi sono perso/a. (mee soh-noh PEHR-soh/sah)"
			},
			{
				"front": "I lost my bag. ",
				"back": "Ho perso la mia borsa. (oh PEHR-soh lah MEE-ah BOHR-sah)"
			},
			{
				"front": "I lost my wallet. ",
				"back": "Ho perso il mio portafoglio. (oh PEHR-soh eel myoh pohr-tah-FOH-lyoh)"
			},
			{
				"front": "I'm sick. ",
				"back": "Sono malato/a. (SOH-noh mah-LAH-toh/tah)"
			},
			{
				"front": "I've been injured. ",
				"back": "Mi sono ferito/a. (mee SOH-noh feh-REE-toh/tah)"
			},
			{
				"front": "I need a doctor. ",
				"back": "Ho bisogno di un medico. (oh bee-ZOH-nyoh dee oon meh-DEE-coh)"
			},
			{
				"front": "Can I use your phone? ",
				"back": "Posso usare il suo telefono? (POS-soh oo-ZAH-reh eel swoh teh-LEH-foh-noh?)"
			},
			{
				"front": "1 ",
				"back": "uno (OO-noh)"
			},
			{
				"front": "2 ",
				"back": "due (DOO-eh)"
			},
			{
				"front": "3 ",
				"back": "tre (treh)"
			},
			{
				"front": "4 ",
				"back": "quattro (KWAH-troh)"
			},
			{
				"front": "5 ",
				"back": "cinque (CHEEN-kweh)"
			},
			{
				"front": "6 ",
				"back": "sei (SEH-ee)"
			},
			{
				"front": "7 ",
				"back": "sette (SEH-teh)"
			},
			{
				"front": "8 ",
				"back": "otto (OH-toh)"
			},
			{
				"front": "9 ",
				"back": "nove (NOH-veh)"
			},
			{
				"front": "10 ",
				"back": "dieci (DYEH-chee)"
			},
			{
				"front": "11 ",
				"back": "undici (OON-dee-chee)"
			},
			{
				"front": "12 ",
				"back": "dodici (DOH-dee-chee)"
			},
			{
				"front": "13 ",
				"back": "tredici (TREH-dee-chee)"
			},
			{
				"front": "14 ",
				"back": "quattordici (kwahr-TOHR-dee-chee)"
			},
			{
				"front": "15 ",
				"back": "quindici (KWEEN-dee-chee)"
			},
			{
				"front": "16 ",
				"back": "sedici (SEH-dee-chee)"
			},
			{
				"front": "17 ",
				"back": "diciassette (dee-chee-ah-SSEH-teh)"
			},
			{
				"front": "18 ",
				"back": "diciotto (dee-CHOH-toh)"
			},
			{
				"front": "19 ",
				"back": "diciannove (dee-chah-NOH-veh)"
			},
			{
				"front": "20 ",
				"back": "venti (VEHN-tee)"
			},
			{
				"front": "21 ",
				"back": "ventuno (vehn-TOO-noh)"
			},
			{
				"front": "22 ",
				"back": "ventidue (vehn-tee-DOO-eh)"
			},
			{
				"front": "23 ",
				"back": "ventitré (vehn-tee-TREH)"
			},
			{
				"front": "30 ",
				"back": "trenta (TREHN-tah)"
			},
			{
				"front": "40 ",
				"back": "quaranta (kwah-RAHN-tah)"
			},
			{
				"front": "50 ",
				"back": "cinquanta (cheen-KWAHN-tah)"
			},
			{
				"front": "60 ",
				"back": "sessanta (sehs-SAHN-tah)"
			},
			{
				"front": "70 ",
				"back": "settanta (seht-TAHN-tah)"
			},
			{
				"front": "80 ",
				"back": "ottanta (oht-TAHN-tah)"
			},
			{
				"front": "90 ",
				"back": "novanta (noh-VAHN-tah)"
			},
			{
				"front": "100 ",
				"back": "cento (CHEHN-toh)"
			},
			{
				"front": "200 ",
				"back": "duecento (dweh-CHEHN-toh)"
			},
			{
				"front": "300 ",
				"back": "trecento (treh-CHEHN-toh)"
			},
			{
				"front": "1,000 ",
				"back": "mille (MEEL-leh)"
			},
			{
				"front": "2,000 ",
				"back": "duemila (dweh-MEE-lah)"
			},
			{
				"front": "1,000,000 ",
				"back": "un milione (oon mee-LYOH-neh)"
			},
			{
				"front": "1,000,000,000 ",
				"back": "un miliardo (oo mee-LYAHR-doh)"
			},
			{
				"front": "1,000,000,000,000 ",
				"back": "mille miliardi (MEEL-leh mee-LYAHR-dee) or un bilione (oo bee-LYOH-neh)"
			},
			{
				"front": "number _____ (train, bus, etc.) ",
				"back": "numero_____ (NOO-meh-roh)"
			},
			{
				"front": "half ",
				"back": "mezzo (MEHD-dzoh)"
			},
			{
				"front": "less ",
				"back": "meno (MEH-noh)"
			},
			{
				"front": "more ",
				"back": "più (pyoo)"
			},
			{
				"front": "now ",
				"back": "adesso (ah-DEHSS-oh) - ora"
			},
			{
				"front": "later ",
				"back": "più tardi (PYOO-TAR-dee) - dopo (\"DOH-poh\")"
			},
			{
				"front": "before ",
				"back": "prima (PREE-ma)"
			},
			{
				"front": "morning ",
				"back": "mattino (mah-TEEN-oh)"
			},
			{
				"front": "afternoon ",
				"back": "pomeriggio (poh-meh-REED-joh)"
			},
			{
				"front": "evening ",
				"back": "sera (SEH-rah)"
			},
			{
				"front": "night ",
				"back": "notte (NOHT-teh)"
			},
			{
				"front": "one o'clock AM ",
				"back": "l'una (LOO-nah)"
			},
			{
				"front": "two o'clock AM ",
				"back": "le due (leh DOO-eh)"
			},
			{
				"front": "noon ",
				"back": "mezzogiorno (mehd-dzoh-JOHR-noh)"
			},
			{
				"front": "one o'clock PM ",
				"back": "le tredici (leh TREH-dee-chee)"
			},
			{
				"front": "two o'clock PM ",
				"back": "le quattordici (leh kwaht-TOHR-dee-chee)"
			},
			{
				"front": "midnight ",
				"back": "mezzanotte (mehd-dzah-NOHT-teh)"
			},
			{
				"front": "_____ minute(s) ",
				"back": "_____ minuto/ti (mee-NOO-toh/tee)"
			},
			{
				"front": "_____ hour(s) ",
				"back": "_____ ora/e (OH-rah/eh)"
			},
			{
				"front": "_____ day(s) ",
				"back": "_____ giorno/ni (JOHR-noh/nee)"
			},
			{
				"front": "_____ week(s) ",
				"back": "_____ settimana/ne (seht-tee-MAH-nah/neh)"
			},
			{
				"front": "_____ month(s) ",
				"back": "_____ mese/si (MEH-zeh/zee)"
			},
			{
				"front": "_____ year(s) ",
				"back": "_____ anno/ni (AHN-noh/nee)"
			},
			{
				"front": "today ",
				"back": "oggi (OHD-jee)"
			},
			{
				"front": "yesterday ",
				"back": "ieri (YEH-ree)"
			},
			{
				"front": "tomorrow ",
				"back": "domani (doh-MAH-nee)"
			},
			{
				"front": "day after tomorrow ",
				"back": "dopo domani ( doh-poh doh-MAH-nee)"
			},
			{
				"front": "this week ",
				"back": "questa settimana (KWEHS-tah seht-tee-MAH-nah)"
			},
			{
				"front": "last week ",
				"back": "la settimana scorsa (lah set-tee-MAH-nah SKOR-sah)"
			},
			{
				"front": "next week ",
				"back": "la prossima settimana (lah PROHS-see-mah set-tee-MAH-nah)"
			},
			{
				"front": "Sunday ",
				"back": "domenica (doh-MEH-nee-kah)"
			},
			{
				"front": "Monday ",
				"back": "lunedì (loo-neh-DEE)"
			},
			{
				"front": "Tuesday ",
				"back": "martedì (mahr-teh-DEE)"
			},
			{
				"front": "Wednesday ",
				"back": "mercoledì (mehr-koh-leh-DEE)"
			},
			{
				"front": "Thursday ",
				"back": "giovedì (joh-veh-DEE)"
			},
			{
				"front": "Friday ",
				"back": "venerdì (veh-nehr-DEE)"
			},
			{
				"front": "Saturday ",
				"back": "sabato (SAH-bah-toh)"
			},
			{
				"front": "January ",
				"back": "gennaio (jehn-NAH-yoh)"
			},
			{
				"front": "February ",
				"back": "febbraio (fehb-BRAH-yoh)"
			},
			{
				"front": "March ",
				"back": "marzo (MAR-tso)"
			},
			{
				"front": "April ",
				"back": "aprile (ah-PREE-leh)"
			},
			{
				"front": "May ",
				"back": "maggio (MAHD-joh)"
			},
			{
				"front": "June ",
				"back": "giugno (JOO-nyoh)"
			},
			{
				"front": "July ",
				"back": "luglio (LOO-lyoh)"
			},
			{
				"front": "August ",
				"back": "agosto (ah-GOHS-toh)"
			},
			{
				"front": "September ",
				"back": "settembre (seht-TEM-breh)"
			},
			{
				"front": "October ",
				"back": "ottobre (oht-TOH-breh)"
			},
			{
				"front": "November ",
				"back": "novembre (noh-VEHM-breh)"
			},
			{
				"front": "December ",
				"back": "dicembre (dee-CHEM-breh)"
			},
			{
				"front": "black ",
				"back": "nero (NEH-roh)"
			},
			{
				"front": "white ",
				"back": "bianco (BYAHN-koh)"
			},
			{
				"front": "gray ",
				"back": "grigio (GREE-joh)"
			},
			{
				"front": "red ",
				"back": "rosso (ROHS-soh)"
			},
			{
				"front": "blue ",
				"back": "blu (bloo)"
			},
			{
				"front": "yellow ",
				"back": "giallo (JAHL-loh)"
			},
			{
				"front": "green ",
				"back": "verde (VEHR-deh)"
			},
			{
				"front": "orange ",
				"back": "arancione (ah-rahn-CHOH-neh)"
			},
			{
				"front": "purple ",
				"back": "viola (VYOH-lah)"
			},
			{
				"front": "brown ",
				"back": "marrone (mahr-ROH-neh)"
			},
			{
				"front": "How much is a ticket to _____? ",
				"back": "Quanto costa un biglietto per _____? (KWAHN-toh KOHS-tah oon bee-LYEHT-toh pehr)"
			},
			{
				"front": "One ticket to _____, please. ",
				"back": "Un biglietto per _____, per favore. (oon bee-LYEHT-toh pehr....pehr fah-VOH-reh)"
			},
			{
				"front": "Where does this train/bus go? ",
				"back": "Dove va questo treno / quest'autobus? (DOH-veh vah KWEHS-toh TREH-noh / KWEHS-tow-TOH-boos)"
			},
			{
				"front": "Where is the train/bus to _____? ",
				"back": "Dov'è il treno/l'autobus per _____? (doh-VEH eel TREH-noh/ low-TOH-boos)"
			},
			{
				"front": "Does this train/bus stop in _____? ",
				"back": "Questo treno/quest'autobus si ferma a _____? (KWEHS-toh TREH-noh/ KWEHS-tow-TOH-boos see FEHR-mah ah)"
			},
			{
				"front": "When does the train/bus for _____ leave? ",
				"back": "Quando parte il treno/l'autobus per _____? (KWAHN-doh PAHR-teh eel TREH-noh / low-TOH-boos)"
			},
			{
				"front": "When will this train/bus arrive in _____? ",
				"back": "Quando arriva a _____ questo treno/quest'autobus? (KWAHN-doh ahr-REE-vah ah....KWEHS-toh TREH-noh / KWEHS-tow-TOH-boos)"
			},
			{
				"front": "How do I get to _____ ? ",
				"back": "Come si arriva a _____ ? (Koh-meh see ahr-REE-vah ah...?)"
			},
			{
				"front": "...to the railway station? ",
				"back": "...alla stazione ferroviaria? (...ahl-LAH stah-DSYOH-neh fehr-roh-VYAH-ryah?)"
			},
			{
				"front": "...to the bus station? ",
				"back": "...alla stazione dell'autobus? (...ahl-LAH stah-DSYOH-neh dehl-LOW-toh-boos?)"
			},
			{
				"front": "...to the airport? ",
				"back": "...all'aeroporto? (...ahl-lah-eh-roh-POHR-toh?)"
			},
			{
				"front": "...downtown? ",
				"back": "...in centro? (...een CHEHN-troh)"
			},
			{
				"front": "...the youth hostel? ",
				"back": "...all'ostello? (...ahl-LOHS-tehl-loh?)"
			},
			{
				"front": "...the small hotel? / hotel? ",
				"back": "...all'albergo? hotel? (...ahl-LAHL-behr-goh/ oh-TEHL?)"
			},
			{
				"front": "...the American/Canadian/Australian/British consulate? ",
				"back": "...al consolato Americano/Canadese/Australiano/Inglese? (...ahl kohn-SOH-lah-toh ameh-REE-kah-noh/ kah-nah-DEH-zeh/ ows-trah-LYAH-noh/ ehn-GLEH-zeh?)"
			},
			{
				"front": "Where are there a lot of... ",
				"back": "Dove ci sono molti... (DOH-veh chee SOH-noh MOHL-tee...)"
			},
			{
				"front": "...hotels? ",
				"back": "...hotel? (...oh-TEH-l?)"
			},
			{
				"front": "...restaurants? ",
				"back": "...ristoranti? (...rees-toh-RAHN-tee?)"
			},
			{
				"front": "...bars? ",
				"back": "...bar? (bahr?)"
			},
			{
				"front": "...sites to see? ",
				"back": "...cose da vedere? (KOH-zeh dah veh-DEH-reh?)or ...luoghi da vedere? (...LOW-gee dah veh-DEH-reh?)"
			},
			{
				"front": "Can you show (it to) me on the map? ",
				"back": "Potete mostrarmelo sulla carta? (poh-TEH-teh mohs-trahr-MEH-loh sool-LAH KAHR-tah?)"
			},
			{
				"front": "street ",
				"back": "strada (STRAH-dah)"
			},
			{
				"front": "Turn left. ",
				"back": "Giri a sinistra. (JEE-ree ah see-NEES-trah)"
			},
			{
				"front": "Turn right. ",
				"back": "Giri a destra. (JEE-ree ah DEHS-trah)"
			},
			{
				"front": "left ",
				"back": "sinistra (see-NEES-trah)"
			},
			{
				"front": "right ",
				"back": "destra (DEHS-trah)"
			},
			{
				"front": "straight ahead ",
				"back": "diritto (dee-REET-toh)"
			},
			{
				"front": "towards the _____ ",
				"back": "verso il _____ (VEHR-zoh eel...)"
			},
			{
				"front": "past the _____ ",
				"back": "dopo il _____ (DOH-poh eel...)"
			},
			{
				"front": "before the _____ ",
				"back": "prima del _____ (PREE-mah dehl...)"
			},
			{
				"front": "Watch for the _____. ",
				"back": "Guarda il _____. (GWAHR-dah eel...)or Cerca il _____. (CHEHR-kah eel...)"
			},
			{
				"front": "intersection ",
				"back": "incrocio (een-KROH-chyoh)"
			},
			{
				"front": "north ",
				"back": "nord (nohrd) abbreviation N"
			},
			{
				"front": "south ",
				"back": "sud (sood) abbreviation S"
			},
			{
				"front": "east ",
				"back": "est (ehst) abbreviation E"
			},
			{
				"front": "west ",
				"back": "ovest (oh-VEHST) abbreviation O"
			},
			{
				"front": "Taxi! ",
				"back": "Taxi! (TAHK-see)"
			},
			{
				"front": "Take me to _____, please. ",
				"back": "Portatemi a _____, per favore. (pohr-TAH-teh-mee ah..., pehr fah-VOH-reh)"
			},
			{
				"front": "How much does it cost to get to _____? ",
				"back": "Quanto costa andare a _____? (KWAHN-toh KOHS-tah ahn-DAH-reh ah...?)"
			},
			{
				"front": "Please take me to_____. ",
				"back": "Per favore, mi porti a______. (pehr fah-VOH-reh, mee POHR-tee ah...)"
			},
			{
				"front": "I'm in a hurry! ",
				"back": "Vado di fretta! / Ho fretta! (VAH-doh dee FREHT-tah/ oh FREHT-tah)"
			},
			{
				"front": "Stop here, please! ",
				"back": "Fermi qui, per favore! (FEHR-mee kwee pehr fah-VOH-reh)"
			},
			{
				"front": "How much do I owe you? ",
				"back": "Quanto Le devo? (KWAHN-toh leh DEH-voh)"
			},
			{
				"front": "Do you have any rooms available? ",
				"back": "Avete camere libere? (ah-VEH-teh kah-MEH-reh lee-BEH-reh?)"
			},
			{
				"front": "How much is a room for one person/two people? ",
				"back": "Quanto costa una stanza singola/doppia? (KWAHN-toh KOHS-tah OO-nah STAHN-tsah seen-GOH-lah/ DOHP-pyah)"
			},
			{
				"front": "Does the room come with... ",
				"back": "La stanza ha ... (lah STAHN-tsah ah...)"
			},
			{
				"front": "...bedsheets? ",
				"back": "...lenzuola? (...lehn-ZWOH-lah?)"
			},
			{
				"front": "...a bathroom? ",
				"back": "...un bagno? (...oon BAH-nyoh?)"
			},
			{
				"front": "...a telephone? ",
				"back": "...un telefono? (...oon teh-LEH-foh-noh)"
			},
			{
				"front": "...a TV? ",
				"back": "...un televisore? (...oon teh-leh-VEE-soh-reh?)"
			},
			{
				"front": "May I see the room first? ",
				"back": "Posso prima vedere la stanza? (POHS-soh PREE-mah veh-DEH-reh lah STAHN-tsah?)"
			},
			{
				"front": "Do you have anything quieter? ",
				"back": "Ha una stanza più silenziosa? (ah OO-nah STAHN-tsah pyoo see-lehn-TSYOH-zah?)"
			},
			{
				"front": "...bigger? ",
				"back": "...più grande? (pyoo GRAHN-deh?)"
			},
			{
				"front": "...cleaner? ",
				"back": "...più pulita? (pyoo poo-LEE-tah?)"
			},
			{
				"front": "...cheaper? ",
				"back": "...più economica? (pyoo eh-koh-NOH-mee-kah?)"
			},
			{
				"front": "OK, I'll take it. ",
				"back": "Va bene, la prendo. (vah BEH-neh, lah PREHN-doh)"
			},
			{
				"front": "I will stay for _____ night(s). ",
				"back": "Mi fermo per _____ notte(i). (mee FEHR-moh pehr...NOHT-teh(ee))"
			},
			{
				"front": "Can you suggest another hotel? ",
				"back": "Potete suggerirmi un altro hotel? (poh-TEH-teh soo-JEH-reer-mee oon AHL-troh OH-tehl?)"
			},
			{
				"front": "Do you have a safe? ",
				"back": "Avete una cassaforte (centrale)? (ah-VEH-teh OO-nah kahs-SAH-fohr-teh (chehn-TRAH-leh)?)"
			},
			{
				"front": "Is breakfast/supper included? ",
				"back": "È inclusa la prima colazione / la cena? (EH een-KLOO-zah la PREE-mah koh-lah-TSYOH-neh/ lah CHEH-nah?)"
			},
			{
				"front": "What time is breakfast/supper? ",
				"back": "A che ora è la prima colazione / la cena? (ah keh OH-rah EH lah PREE-mah koh-lah-TSYOH-neh / lah CHEH-nah)"
			},
			{
				"front": "Please clean my room. ",
				"back": "Pulite la mia camera, per favore. (poo-LEE-teh lah myah kah-MEH-rah, pehr fah-VOH-reh)"
			},
			{
				"front": "Can you wake me at _____? ",
				"back": "Potete svegliarmi alle _____? (poh-TEH-teh sveh-LYAHR-mee AHL-leh....?)"
			},
			{
				"front": "I want to check out. ",
				"back": "Voglio andare via. (voh-LYOH ahn-DAH-reh vyah) or voglio partire (voh-LYOH pahr-TEE-reh)"
			},
			{
				"front": "Do you accept American/Australian/Canadian dollars? ",
				"back": "Accettate dollari Americani/Australiani/Canadesi? (aht-cheht-TAH-teh DOHL-lah-ree ah-meh-ree-KAH-nee/ ows-trah-LYAH-nee/ kah-nah-DEH-see?)"
			},
			{
				"front": "Do you accept British pounds? ",
				"back": "Accettate sterline Inglesi? (aht-cheht-TAH-teh stehr-LEE-neh een-GLEH-zee?)"
			},
			{
				"front": "Do you accept credit cards? ",
				"back": "Accettate carte di credito? (aht-cheht-TAH-teh KAHR-teh dee kreh-DEE-toh?)"
			},
			{
				"front": "Can you change money for me? ",
				"back": "Potete cambiare del denaro per me? (poh-TEH-teh kahm-BYAH-reh dehl deh-NAH-roh pehr meh?)"
			},
			{
				"front": "Can you change British pounds for me? ",
				"back": "Potete cambiare delle sterline Inglesi per me? (poh-TEH-teh kahm-BYAH-reh DEHL-leh stehr-LEE-neh een-GLEH-zee pehr meh?)"
			},
			{
				"front": "Can you change American/Australian/Canadian dollars for me? ",
				"back": "Potete cambiare dei dollari Americani/Australiani/Canadesi per me? (poh-TEH-teh kahm-BYAH-reh day DOHL-lah-ree ah-meh-ree-KAH-nee/ ows-trah-LYAH-nee/ kah-nah-DEH-see pehr meh?)"
			},
			{
				"front": "Where can I get money changed? ",
				"back": "Dove posso cambiare del denaro? (DOH-veh POHS-soh kahm-BYAH-reh dehl deh-NAH-roh?)"
			},
			{
				"front": "Where can I get foreign money changed? ",
				"back": "Dove posso cambiare della valuta straniera? (DOH-veh POHS-soh kahm-BYAH-reh DEHL-lah vah-LOO-tah strah-NYEH-rah?)"
			},
			{
				"front": "Can you change a traveler's check for me? ",
				"back": "Potete cambiare questi traveller's cheque per me? (poh-TEH-teh kahm-BYAH-reh KWEHS-tee TRAH-veh-lehrs checks pehr meh?)"
			},
			{
				"front": "Where can I get a traveler's check changed? ",
				"back": "Dove posso cambiare un traveller's cheque? (Doh-veh POHS-soh kahm-BYAH-reh oon TRAH-veh-lehrs check?)"
			},
			{
				"front": "What is the exchange rate? ",
				"back": "Quant'è il cambio? (KWAHN-teh eel KAHM-byoh?)"
			},
			{
				"front": "Where is an automatic teller machine (ATM)? ",
				"back": "Dove posso trovare un Bancomat? (DOH-veh POHS-soh troh-VAH-reh oon bahn-KOH-maht?)"
			},
			{
				"front": "NOTE ",
				"back": "In Italy it is more common to say \"Bancomat\" for \"ATM\""
			},
			{
				"front": "A table for one person/two people, please. ",
				"back": "Un tavolo per uno/due, per favore. (oon tah-VOH-loh pehr OO-noh/ dweh, pehr fah-VOH-reh)"
			},
			{
				"front": "Can I look at the menu, please? ",
				"back": "Posso vedere il menu, per favore? (POHS-soh veh-DEH-reh eel meh-NOO, pehr fah-VOH-reh?)"
			},
			{
				"front": "Is there a house specialty? ",
				"back": "C'è una specialità della casa? (cheh OO-nah speh-chah-lee-TAH DEHL-lah KAH-zah?)"
			},
			{
				"front": "Is there a local specialty? ",
				"back": "C'è una specialità locale? (cheh OO-nah speh-chah-lee-TAH loh-KAH-leh?)"
			},
			{
				"front": "I'm a vegetarian. ",
				"back": "Sono vegetariano/a (SOH-noh veh-jeh-tah-RYAH-noh/ ah)"
			},
			{
				"front": "I don't eat pork. ",
				"back": "Non mangio il maiale. (nohn MAHN-joh eel mah-YAH-leh)"
			},
			{
				"front": "I don't eat beef. ",
				"back": "Non mangio il manzo. (nohn MAHN-joh eel MAHN-dzoh)"
			},
			{
				"front": "I only eat kosher food. ",
				"back": "Mangio solamente cibo kosher. (MAHN-joh soh-LAH-mehn-teh CHEE-boh KOH-shehr)"
			},
			{
				"front": "Can you make it \"lite\", please? (less oil/butter/lard) ",
				"back": "Potete farlo leggero, per favore? (poh-TEH-teh FAHR-loh lehd-JEH-roh, pehr fah-VOH-reh?)"
			},
			{
				"front": "fixed-price meal ",
				"back": "pranzo a prezzo fisso (PRAH-tsoh ah PREHD-zoh FEES-soh)"
			},
			{
				"front": "à la carte ",
				"back": "à la carte (AH lah KAHR-tah)"
			},
			{
				"front": "breakfast ",
				"back": "la prima colazione (lah PREE-mah koh-lah-TSYOH-neh)"
			},
			{
				"front": "lunch ",
				"back": "il pranzo (eel PRAHN-dzoh)"
			},
			{
				"front": "tea (meal) ",
				"back": "tè (teh)"
			},
			{
				"front": "supper ",
				"back": "la cena (lah CHEH-nah)"
			},
			{
				"front": "I would like _____. ",
				"back": "Vorrei _____. (vohr-RAY)"
			},
			{
				"front": "I would like a dish containing _____. ",
				"back": "Vorrei un piatto con _____. (vohr-RAY oon PYAHT-toh kohn....)"
			},
			{
				"front": "chicken ",
				"back": "il pollo (eel POHL-loh)"
			},
			{
				"front": "beef ",
				"back": "il manzo (eel MAHN-dzoh)"
			},
			{
				"front": "fish ",
				"back": "il pesce (eel PEH-sheh)"
			},
			{
				"front": "ham ",
				"back": "il prosciutto (eel proh-SHOOT-toh)"
			},
			{
				"front": "sausage ",
				"back": "salsiccia (sahl-SEET-chah)"
			},
			{
				"front": "cheese ",
				"back": "formaggio (fohr-MAHD-joh)"
			},
			{
				"front": "eggs ",
				"back": "uova (WOH-vah)"
			},
			{
				"front": "salad ",
				"back": "insalata (een-sah-LAH-tah)"
			},
			{
				"front": "(fresh) vegetables ",
				"back": "verdure fresche (vehr-DOO-reh FREHS-keh)"
			},
			{
				"front": "(fresh) fruit ",
				"back": "frutta fresca (FROOT-tah FREHS-kah)"
			},
			{
				"front": "bread ",
				"back": "pane (PAH-neh)"
			},
			{
				"front": "toast ",
				"back": "toast (tohst)"
			},
			{
				"front": "noodles ",
				"back": "tagliatelle (tah-LYAH-tehl-leh)"
			},
			{
				"front": "rice ",
				"back": "riso (REE-zoh)"
			},
			{
				"front": "beans ",
				"back": "fagioli (fah-JOH-lee) or fagiolini (similar to beans but different)"
			},
			{
				"front": "May I have a glass of _____? ",
				"back": "Posso avere un bicchiere di _____? (POHS-soh ah-VEH-reh oon beek-KYEH-reh dee....?)"
			},
			{
				"front": "May I have a cup of _____? ",
				"back": "Posso avere una tazza di _____? (POHS-soh ah-VEH-reh OO-nah TAHT-tsah dee...?)"
			},
			{
				"front": "May I have a bottle of _____? ",
				"back": "Posso avere una bottiglia di _____? (POHS-soh ah-VEH-reh OO-nah boht-TEE-lyah dee...?)"
			},
			{
				"front": "the coffee ",
				"back": "il caffè (eel kahf-FEH)"
			},
			{
				"front": "the tea (drink) ",
				"back": "il tè (eel TEH)"
			},
			{
				"front": "the juice ",
				"back": "il succo (eel SOOK-koh)"
			},
			{
				"front": "the water ",
				"back": "l'acqua (LAHK-kwah)"
			},
			{
				"front": "the bubbly water ",
				"back": "l'acqua frizzante (LAHK-kwah free-DZAHN-teh)"
			},
			{
				"front": "the beer ",
				"back": "la birra (lah beer-RAH)"
			},
			{
				"front": "the red/white wine ",
				"back": "il vino rosso/bianco (eel VEE-noh ROHS-soh/ BYAHN-koh)"
			},
			{
				"front": "May I have some _____? ",
				"back": "Posso aver del _____? (POHS-soh AH-vehr dehl...?)"
			},
			{
				"front": "the salt ",
				"back": "il sale (eel SAH-leh)"
			},
			{
				"front": "the black pepper ",
				"back": "il pepe (eel PEH-peh)"
			},
			{
				"front": "the butter ",
				"back": "il burro (eel BOOR-roh)"
			},
			{
				"front": "Excuse me, waiter? (getting attention of server) ",
				"back": "Scusi, cameriere?(m)/cameriera?(f) (SKOO-zee, kah-meh-RYEH-reh?/ kah-meh-RYEH-rah?)"
			},
			{
				"front": "I'm finished. ",
				"back": "Ho finito. (oh fee-NEE-toh)"
			},
			{
				"front": "It was delicious. ",
				"back": "È squisito. (EH skwee-ZEE-toh)"
			},
			{
				"front": "Please clear the table. ",
				"back": "Potete pulire il tavolo, per favore. (poh-TEH-teh poo-LEE-reh eel tah-VOH-loh, pehr fah-VOH-reh)"
			},
			{
				"front": "The check, please. ",
				"back": "Il conto, per favore. (eel KOHN-toh, pehr fah-VOH-reh)"
			},
			{
				"front": "Do you serve alcohol? ",
				"back": "Avete bevande alcoliche? (ah-VEH-teh beh-VAHN-deh ahl-KOH-lee-keh?)"
			},
			{
				"front": "Is there table service? ",
				"back": "C'è il servizio al tavolo? (cheh eel sehr-VEE-zyoh ahl tah-VOH-loh?)"
			},
			{
				"front": "A beer/two beers, please. ",
				"back": "Una birra/due birre, per favore. (OO-nah BEER-rah/ dweh BEER-reh, pehr fah-VOH-reh)"
			},
			{
				"front": "A glass of red/white wine, please. ",
				"back": "Un bicchiere di vino rosso/bianco, per favore. (oon beek-KYEH-reh dee VEE-noh ROHS-soh/ BYAHN-koh, pehr fah-VOH-reh)"
			},
			{
				"front": "A pint, please. ",
				"back": "Un boccale, per favore. (oon bohk-KAH-leh, pehr fah-VOH-reh)"
			},
			{
				"front": "A bottle, please. ",
				"back": "Una bottiglia, per favore. (OO-nah boht-TEE-lyah, pehr fah-VOH-reh)"
			},
			{
				"front": "I'd like a_______? ",
				"back": "Vorrei un_____? (vohr-RAY oon...?)"
			},
			{
				"front": "beer ",
				"back": "birra (BEER-rah)"
			},
			{
				"front": "wine ",
				"back": "vino (VEE-noh)"
			},
			{
				"front": "gin ",
				"back": "gin (jeen)"
			},
			{
				"front": "whiskey ",
				"back": "whisky (WEES-kee)"
			},
			{
				"front": "vodka ",
				"back": "vodka (VOHD-kah)"
			},
			{
				"front": "rum ",
				"back": "rum (rohm)"
			},
			{
				"front": "water ",
				"back": "acqua (AHK-kwah)"
			},
			{
				"front": "club soda ",
				"back": "club soda (kloob SOH-dah)"
			},
			{
				"front": "tonic water ",
				"back": "acqua tonica (AHK-kwah toh-NEE-kah)"
			},
			{
				"front": "orange juice ",
				"back": "succo di arancia (SOOK-koh dee ah-RAHN-chah)"
			},
			{
				"front": "Coke (soda) ",
				"back": "Coca Cola (KOH-kah KOH-lah)"
			},
			{
				"front": "A soda. ",
				"back": "Una soda. (OO-nah SOH-dah)"
			},
			{
				"front": "Do you have any bar snacks? ",
				"back": "Avete qualcosa da stuzzicare? (a-VE-te kwalcoza da STU-zee-ca-ray?)"
			},
			{
				"front": "One more, please. ",
				"back": "Un altro, per favore. (oon AHL-troh, pehr fah-VOH-reh)"
			},
			{
				"front": "Another round, please. ",
				"back": "Un altro giro, per favore. (oon AHL-troh JEE-roh, pehr fah-VOH-reh)"
			},
			{
				"front": "When is closing time? ",
				"back": "Qual è l'ora di chiusura? (kwah-LEH loh-RAH dee KYOO-zoo-rah?)"
			},
			{
				"front": "Do you have this in my size? ",
				"back": "Avete questo nella mia taglia? (ah-VEH-teh KWEHS-toh NEHL-lah myah tah-LYAH?)"
			},
			{
				"front": "How much is this? ",
				"back": "Quanto costa questo? (KWAHN-toh KOHS-tah KWEHS-toh?)"
			},
			{
				"front": "That's too expensive. ",
				"back": "È troppo caro/a. (EH TROHP-poh KAH-roh/ah)"
			},
			{
				"front": "Would you take _____? ",
				"back": "Prendereste _____? (prehn-DEH-rehs-teh....?)"
			},
			{
				"front": "expensive ",
				"back": "caro (KAH-roh)"
			},
			{
				"front": "cheap ",
				"back": "economico (eh-koh-NOH-mee-koh)"
			},
			{
				"front": "I can't afford it. ",
				"back": "Non posso permettermelo. (nohn POHS-soh pehr-meht-TEHR-meh-loh)"
			},
			{
				"front": "I am looking for something cheaper. ",
				"back": "Cerco qualcosa di più; economico. (CHEHR-koh KWAHL-koh-zah dee pyoo eh-koh-NOH-mee-koh)"
			},
			{
				"front": "I don't want it. ",
				"back": "Non lo voglio. (nohn loh voh-LYOH)"
			},
			{
				"front": "You're cheating me. ",
				"back": "Mi state imbrogliando. (mee STAH-teh eem-broh-LYAHN-doh)"
			},
			{
				"front": "I'm not interested. ",
				"back": "Non son interessato. (nohn sohn een-teh-REHS-sah-toh)"
			},
			{
				"front": "OK, I'll take it. ",
				"back": "Va bene, lo prendo. (vah BEH-neh, loh PREHN-doh)"
			},
			{
				"front": "Can I have a bag? ",
				"back": "Posso avere una busta? (POHS-soh AVEH-reh OO-nah BOOS-tah?)"
			},
			{
				"front": "Do you ship (overseas)? ",
				"back": "Potete spedirlo (all'estero)? (poh-TEH-teh speh-DEER-loh (AHL-lehs-TEH-roh)?)"
			},
			{
				"front": "I need... ",
				"back": "Ho bisogno di... (oh bee-SOH-byoh dee...)"
			},
			{
				"front": "...toothpaste. ",
				"back": "...dentifricio. (dehn-tee-FREE-choh)"
			},
			{
				"front": "...toothbrush. ",
				"back": "...spazzolino da denti. (spaht-tsoh-LEE-noh dah DEHN-tee)"
			},
			{
				"front": "...tampons. ",
				"back": "...tampone/assorbente. (tahm-POH-neh/ ahs-SOHR-behn-teh)"
			},
			{
				"front": "...soap. ",
				"back": "...sapone. (sah-POH-neh)"
			},
			{
				"front": "...shampoo. ",
				"back": "...shampoo. (SHAHM-poo)"
			},
			{
				"front": "...pain reliever. ",
				"back": "...aspirina. (ahs-pee-REE-nah)"
			},
			{
				"front": "...cold medicine. ",
				"back": "...medicina per il raffreddore. (meh-dee-CHEE-nah pehr eel rahf-FREHD-doh-reh)"
			},
			{
				"front": "...stomach medicine. ",
				"back": "...medicina per lo stomaco. (meh-dee-CHEE-nah pehr loh stoh-MAH-koh)"
			},
			{
				"front": "...a razor. ",
				"back": "...un rasoio. (oon rah-ZOH-io)"
			},
			{
				"front": "...an umbrella. ",
				"back": "...un ombrello. (oon ohm-BREHL-loh)"
			},
			{
				"front": "...sunblock lotion. ",
				"back": "...lozione/crema solare. (loh-TSYOH-neh/ KREH-mah soh-LAH-reh)"
			},
			{
				"front": "...a postcard. ",
				"back": "...una cartolina. (OO-nah kahr-TOH-lee-nah)"
			},
			{
				"front": "...postage stamps. ",
				"back": "...francobolli. (frahn-koh-BOHL-lee)"
			},
			{
				"front": "...batteries. ",
				"back": "...batterie. (baht-TEH-ryeh)"
			},
			{
				"front": "...writing paper. ",
				"back": "...carta. (KAHR-tah)"
			},
			{
				"front": "...a pen. ",
				"back": "...una penna. (OO-nah PEHN-nah)"
			},
			{
				"front": "...a pencil. ",
				"back": "...una matita. (OO-nah mah-TEE-tah)"
			},
			{
				"front": "...English-language books. ",
				"back": "...libri in inglese. (LEE-bree een een-GLEH-zeh)"
			},
			{
				"front": "...English-language magazines. ",
				"back": "...riviste in inglese. (ree-VEES-teh een een-GLEH-zeh)"
			},
			{
				"front": "...an English-language newspaper. ",
				"back": "...un giornale in inglese. (oon johr-NAH-leh een een-GLEH-zeh)"
			},
			{
				"front": "...an English-Italian dictionary. ",
				"back": "...un dizionario Inglese-Italiano. (oon dee-tsyoh-NAH-ryoh een-GLEH-zeh-ee-tah-LYAH-noh)"
			},
			{
				"front": "I want to rent a car. ",
				"back": "Desidero noleggiare una macchina. (deh-SEE-deh-roh noh-lehd-JAH-reh OO-nah mahk-KEE-nah)"
			},
			{
				"front": "Can I get insurance? ",
				"back": "Posso avere un'assicurazione? (POHS-soh ah-VEH-reh oo-nahs-see-koo-RAH-tsyoh-neh?)"
			},
			{
				"front": "stop (on a street sign) ",
				"back": "stop (stohp)"
			},
			{
				"front": "one way ",
				"back": "senso unico (SEHN-soh OO-nee-koh)"
			},
			{
				"front": "yield ",
				"back": "dare la precedenza (DAH-leh lah preh-cheh-DEHN-tsah)"
			},
			{
				"front": "no entry ",
				"back": "divieto di accesso (dee-VYEH-toh dee aht-CHEHS-soh)"
			},
			{
				"front": "no parking ",
				"back": "sosta vietata (SOHS-tah vyeh-TAH-tah)"
			},
			{
				"front": "speed limit ",
				"back": "limite di velocità; (lee-MEE-teh dee veh-loh-chee-TAH)"
			},
			{
				"front": "gas (petrol) station ",
				"back": "benzinaio (behn-dzee-NAH-yoh)"
			},
			{
				"front": "petrol ",
				"back": "benzina (only unleaded one) (behn-DZEE-nah)"
			},
			{
				"front": "diesel ",
				"back": "diesel (DEE-zehl)"
			},
			{
				"front": "I haven't done anything wrong. ",
				"back": "Non ho fatto nulla di male. (nohn oh FAHT-toh nool-lah dee MAH-leh)"
			},
			{
				"front": "It was a misunderstanding. ",
				"back": "È stato un malinteso. (eh STAH-toh oon mah-LEEN-teh-zoh)"
			},
			{
				"front": "Where are you taking me? ",
				"back": "Dove mi state portando? (DOH-veh mee STAH-teh pohr-TAHN-doh?)"
			},
			{
				"front": "Am I under arrest? ",
				"back": "Sono in arresto? (SOH-noh een ahr-REHS-toh?)"
			},
			{
				"front": "I am an American/Australian/British/Canadian citizen. ",
				"back": "Sono un(una) cittadino(a) americano(a)/australiano(a)/britannico(a)/canadese. (SOH-noh oon(OO-nah) cheet-TAH-dee-noh(ah) ah-meh-ree-KAH-noh(ah)/ ows-trah-LYAH-noh(ah)/ bree-tahn-NEE-koh(ah)/ kah-nah-DEH-zeh)"
			},
			{
				"front": "I want to talk to the American/Australian/British/Canadian embassy/consulate. ",
				"back": "Voglio parlare con l'ambasciata/il consolato Americano/Australiano/Inglese/Canadese. (voh-LYOH pahr-LAH-reh kohn lahm-bah-SHAH-tah/ eel kohn-SOH-lah-toh ah-meh-ree-KAH-noh/ ows-trah-LYAH-noh/ een-GLEH-zeh/ kah-nah-DEH-zeh)"
			},
			{
				"front": "I want to talk to a lawyer. ",
				"back": "Voglio parlare con un(una) avvocato(a). (voh-LYOH pahr-LAH-reh kohn oon(OO-nah) ahv-voh-KAH-toh(ah))"
			},
			{
				"front": "Can I just pay a fine now? ",
				"back": "Posso semplicemente pagare una multa adesso? (POHS-soh sehm-plee-CHEH-mehn-teh pah-GAH-reh OO-nah MOOL-tah ah-DEHS-soh?)"
			}
		];
	this.toCards();
}

List.prototype.get = function(anInteger)
{
	// return new Card(this.cards[anInteger].front, this.cards[anInteger].back);
	return this.cards[anInteger];
};

List.prototype.getRandom = function()
{
	return this.get(Math.floor((Math.random()*this.cards.length)));
};

List.prototype.toCards = function()
{
	for (var i = 0; i < this.cards.length; i++)
	{
		this.cards[i] = new Card(this.cards[i].front, this.cards[i].back);
    }
};



function Session(aList)
{
	this.list = aList;
	this.card = this.nextCard();
}

Session.prototype.currentCard = function()
{
	return this.card;
};

Session.prototype.nextCard = function()
{
	this.card = this.list.getRandom();
	return this.card;
};
