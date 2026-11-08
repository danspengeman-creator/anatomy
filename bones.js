/* ===== DATA ===== */
const GROUPS=["Skull & face","Spine","Thorax","Shoulder & arm","Hand","Pelvis & leg","Foot"];
const E=[
/* ---------- SKULL & FACE ---------- */
{id:"skull",name:"Skull (overview)",kw:"head cranium face brain case",group:"Skull & face",reg:"Axial",view:"full",zoom:"skull",
 count:"22 bones (8 cranial + 14 facial)",kind:"Flat and irregular",
 location:"Top of the axial skeleton. The cranium rests on the atlas (C1) at the atlanto-occipital joints.",
 role:"The cranium encloses and protects the brain. The facial skeleton frames the orbits and nasal cavity, anchors the teeth and gives attachment to the muscles of expression and mastication.",
 features:["Cranial bones: frontal, 2 parietal, 2 temporal, occipital, sphenoid and ethmoid","Facial bones: 2 maxillae, 2 zygomatics, 2 nasals, 2 lacrimals, 2 palatines, 2 inferior nasal conchae, vomer and mandible","The 6 ear ossicles and the hyoid are counted separately from the 22","Adult cranial bones are joined by fibrous sutures that allow no useful movement"],
 clinical:"A blow over the pterion (where the frontal, parietal, temporal and greater wing of sphenoid meet) can tear the middle meningeal artery and cause an epidural hematoma.",
 fun:"Of the 22 skull bones only the mandible moves at a joint you control.",
 dev:"At birth the cranial bones are separated by membranous sutures and fontanelles. This lets the head mold during delivery and then expand as the brain grows."},
{id:"frontal",name:"Frontal bone",kw:"forehead brow",group:"Skull & face",reg:"Axial",view:"skull",
 count:"1",kind:"Flat",
 location:"Forehead and the roof of the orbits at the front of the cranial vault.",
 role:"Protects the frontal lobes, forms the roof of the orbit and part of the anterior cranial fossa and contains the frontal sinuses.",
 features:["Meets the parietal bones at the coronal suture","The supraorbital notch or foramen transmits the supraorbital nerve and vessels","Frontal sinuses are paired air spaces that drain to the middle meatus","Glabella is the smooth area between the brow ridges"],
 clinical:"Frontal sinus fractures that involve the posterior wall risk a dural tear and CSF leak.",
 fun:"It starts as two halves. In a minority of adults the metopic suture never closes and a midline line remains.",
 dev:"Two halves at birth. The metopic suture usually closes during the first year of life."},
{id:"parietal",name:"Parietal bones",kw:"top of skull vault",group:"Skull & face",reg:"Axial",view:"skull",
 count:"2",kind:"Flat",
 location:"Upper sides and roof of the cranium.",
 role:"Forms most of the cranial vault and protects the brain. Its inner surface is grooved by the meningeal vessels.",
 features:["Joins the frontal bone at the coronal suture and the occipital bone at the lambdoid suture","The two parietals meet at the sagittal suture","Squamous suture joins each parietal to the temporal bone below","The parietal eminence is the point of greatest convexity"],
 clinical:"Premature fusion of a suture (craniosynostosis) alters head shape. Early sagittal synostosis gives a long narrow head (scaphocephaly).",
 fun:"Newborn parietal bones can overlap slightly during delivery, which is why some babies are born with a temporarily elongated head.",
 dev:"Ossifies in membrane (intramembranous ossification), radiating outward from the parietal eminence."},
{id:"temporal",name:"Temporal bones",kw:"ear mastoid temple petrous",group:"Skull & face",reg:"Axial",view:"skull",
 count:"2",kind:"Irregular",
 location:"Lower sides of the skull around the ear.",
 role:"Houses the middle and inner ear, forms the temporomandibular joint and protects the lower lateral brain. Carries the carotid canal and the facial canal.",
 features:["Four parts: squamous, tympanic, mastoid and petrous","The mastoid process contains air cells that connect with the middle ear","The styloid process anchors muscles and ligaments of the tongue and hyoid","The petrous part is often cited as the densest bone in the body"],
 clinical:"Transverse temporal bone fractures more often injure the facial nerve and inner ear than longitudinal ones. Mastoiditis can follow acute otitis media.",
 fun:"The temporal bones hold the organs of both hearing and balance, along with the smallest bones in the body.",
 dev:"The mastoid process is undeveloped at birth and grows during the second year. Until then the facial nerve leaves the stylomastoid foramen close to the surface."},
{id:"occipital",name:"Occipital bone",kw:"back of skull foramen magnum",group:"Skull & face",reg:"Axial",view:"skull",
 count:"1",kind:"Flat and irregular",
 location:"Back and base of the skull.",
 role:"Protects the cerebellum and occipital lobes. The foramen magnum passes the brainstem and spinal cord junction and the vertebral arteries.",
 features:["Foramen magnum is the large opening where the brainstem becomes the spinal cord","Occipital condyles articulate with C1 (atlas) and allow nodding","The external occipital protuberance (inion) is a palpable midline bump","Articulates with the parietals, temporals and sphenoid"],
 clinical:"Raised intracranial pressure can push the cerebellar tonsils through the foramen magnum (tonsillar herniation). Basilar skull fractures often involve this bone.",
 fun:"The foramen magnum means 'large hole' and measures about 3 cm across.",
 dev:"Forms from four parts that fuse by about 6 years. The basilar part joins the sphenoid in the late teens to early 20s, a feature used in age estimation."},
{id:"sphenoid",name:"Sphenoid bone",kw:"wedge bat keystone sella pituitary",group:"Skull & face",reg:"Axial",view:"skull",
 count:"1",kind:"Irregular",
 location:"Central skull base, deep behind the eyes and nose. Its greater wing shows at the temple.",
 role:"Keystone of the cranial base. It articulates with every other cranial bone. The sella turcica cradles the pituitary gland and its openings carry cranial nerves II to VI.",
 features:["Body containing the sphenoid sinuses","Greater and lesser wings","Pterygoid processes give attachment to the pterygoid muscles","Foramina: optic canal, superior orbital fissure, rotundum, ovale and spinosum"],
 clinical:"Transsphenoidal surgery reaches pituitary tumors through the nose and sphenoid sinus.",
 fun:"Seen from above it looks like a bat with outstretched wings. The name means 'wedge-shaped'.",
 dev:"Forms from several centers that fuse in infancy and joins the occipital bone in the late teens.",
 hiddenNote:"Only a small part (the greater wing) shows from the side. The rest of the bone sits deep in the skull base."},
{id:"ethmoid",name:"Ethmoid bone",kw:"cribriform sieve smell nose",group:"Skull & face",reg:"Axial",view:"skull",hidden:true,
 count:"1",kind:"Irregular",
 location:"Between the orbits and behind the nose. The cribriform plate forms part of the roof of the nasal cavity.",
 role:"Forms the medial wall of the orbit, the upper nasal septum, the superior and middle conchae and the ethmoid air cells.",
 features:["Cribriform plate with tiny holes for olfactory nerve filaments","Crista galli anchors the falx cerebri","Perpendicular plate forms the upper nasal septum","Lamina papyracea is the thin 'paper plate' wall of the orbit"],
 clinical:"A cribriform plate fracture can cause anosmia and CSF rhinorrhea. Ethmoid sinusitis can cross the thin lamina papyracea and cause orbital cellulitis.",
 fun:"Ethmoid comes from the Greek for 'sieve-like'.",
 dev:"Air cells are present but small at birth and keep enlarging through childhood.",
 hiddenNote:"The ethmoid is deep to the surface and cannot be seen from the side."},
{id:"maxilla",name:"Maxillae",kw:"upper jaw palate sinus",group:"Skull & face",reg:"Axial",view:"skull",
 count:"2",kind:"Irregular",
 location:"Upper jaw and the middle of the face.",
 role:"Holds the upper teeth, forms most of the hard palate, the floor of the orbit and the side of the nose and contains the maxillary sinus.",
 features:["Maxillary sinus is the largest paranasal sinus","Infraorbital foramen transmits the infraorbital nerve (V2)","Alveolar process holds the roots of the upper teeth","The two maxillae join at the midline intermaxillary suture"],
 clinical:"Le Fort fractures classify midface fractures through the maxilla (I horizontal, II pyramidal and III craniofacial dysjunction).",
 fun:"The maxillary sinus drains from near its top, so gravity does not help it empty when you have a cold.",
 dev:"The palatal processes fuse in the late first trimester. Failure to fuse causes cleft palate."},
{id:"zygomatic",name:"Zygomatic bones",kw:"cheekbone cheek malar",group:"Skull & face",reg:"Axial",view:"skull",
 count:"2",kind:"Irregular",
 location:"Cheeks, below and to the side of the orbits.",
 role:"Gives the cheek its prominence and forms the lateral wall and floor of the orbit. Joins the temporal bone to make the zygomatic arch, which gives origin to the masseter.",
 features:["Zygomatic arch = zygomatic bone + temporal process","Articulates with the frontal, sphenoid, maxilla and temporal bones","Zygomaticofacial foramen carries a small sensory nerve"],
 clinical:"Zygomaticomaxillary complex ('tripod') fractures follow blows to the cheek and can flatten the cheek and cause infraorbital numbness and trismus.",
 fun:"Clench your teeth and feel in front of your ear: the bulge below the arch is your masseter.",
 dev:"Ossifies from centers in the membrane of the cheek in the second month of fetal life."},
{id:"facial-small",name:"Smaller facial bones",kw:"nasal lacrimal palatine vomer concha nose tear",group:"Skull & face",reg:"Axial",view:"skull",
 count:"9 (2 nasal + 2 lacrimal + 2 palatine + 2 inferior conchae + vomer)",kind:"Irregular",
 location:"Nose, medial orbit and the back of the hard palate.",
 role:"Nasals form the bridge of the nose. Lacrimals hold the groove for the tear sac. Palatines complete the hard palate. Inferior conchae humidify air. The vomer forms the lower back nasal septum.",
 features:["Lacrimal bone is the smallest and most fragile facial bone","Palatine bones form the back fourth of the hard palate","Inferior nasal conchae are the only conchae that are separate bones","Vomer means 'plowshare'"],
 clinical:"Nasal bones are the most commonly fractured facial bones. A septal hematoma must be drained to protect the septal cartilage.",
 fun:"The lacrimal bone is about the size of a fingernail.",
 dev:"Nasal cartilage is large in infants and the nasal bones grow slowly through childhood.",
 hiddenNote:"From the side you can see the nasal and lacrimal bones. The palatines, vomer and conchae are deeper in the nose and palate."},
{id:"mandible",name:"Mandible",kw:"jaw lower jaw chin tmj",group:"Skull & face",reg:"Axial",view:"skull",
 count:"1",kind:"Irregular",
 location:"Lower jaw.",
 role:"The only movable skull bone. Holds the lower teeth, articulates with the temporal bone at the TMJ and anchors the muscles of mastication.",
 features:["Body and two rami meet at the angle","Condylar process forms the TMJ and the coronoid process receives temporalis","Mental foramen carries the mental nerve and the mandibular foramen the inferior alveolar nerve","Strongest and largest facial bone"],
 clinical:"The mandible acts like a ring, so fractures are often multiple. When you find one, look for a second.",
 fun:"With age and tooth loss the jaw bone resorbs and the angle between body and ramus opens up, much like it is in a baby.",
 dev:"Two halves at birth joined at the symphysis, which fuses in the first year. The angle is wide (about 140 degrees) in infants."},
{id:"ossicles",name:"Ear ossicles",kw:"malleus incus stapes hammer anvil stirrup middle ear hearing",group:"Skull & face",reg:"Axial",view:"skull",
 count:"6 (3 per ear)",kind:"Irregular (tiny)",
 location:"Middle ear cavity inside each temporal bone.",
 role:"The malleus, incus and stapes form a lever chain that carries vibration from the eardrum to the oval window. This boosts pressure by roughly 20-fold and matches air to inner-ear fluid.",
 features:["Malleus is attached to the eardrum and is the largest ossicle","Incus joins the malleus and stapes","Stapes is the smallest named bone in the body, about 3 mm long and a few milligrams","Footplate of the stapes sits in the oval window"],
 clinical:"Otosclerosis fixes the stapes footplate and causes conductive hearing loss. A stapedotomy replaces it with a small prosthesis.",
 fun:"The ossicles are close to adult size at birth, so a newborn's middle ear is already full-sized.",
 dev:"Malleus and incus come from the first pharyngeal arch (Meckel's cartilage) and the stapes mostly from the second (Reichert's cartilage)."},
{id:"hyoid",name:"Hyoid bone",kw:"neck tongue swallowing u-shaped",group:"Skull & face",reg:"Axial",view:"full",
 count:"1",kind:"Irregular (U-shaped)",
 location:"Front of the neck at about the level of C3, between the mandible and the thyroid cartilage.",
 role:"Anchors the tongue and supports the larynx. Gives attachment to the suprahyoid and infrahyoid muscles that move during swallowing and speech.",
 features:["Body plus two greater horns and two lesser horns","The only bone that does not articulate directly with another bone","Suspended by muscles and ligaments from the skull base"],
 clinical:"Hyoid fracture is uncommon and is a recognized finding in forensic assessment of neck trauma.",
 fun:"It is the one 'floating' bone in the body, held in place by muscle and ligament instead of a joint.",
 dev:"Ossifies from several centers. The horns usually fuse to the body in middle age."},
/* ---------- SPINE ---------- */
{id:"cervical",name:"Cervical vertebrae",kw:"neck atlas axis c1 c2 c7 spine",group:"Spine",reg:"Axial",view:"spine",zoom:"spine",
 count:"7 (C1 to C7)",kind:"Irregular",
 location:"The neck, between the skull and the thoracic spine.",
 role:"Support the skull, allow a wide range of movement and protect the cord and the vertebral arteries.",
 features:["Transverse foramina carry the vertebral arteries (usually C1 to C6)","C1 (atlas) has no body. C2 (axis) has the odontoid process (dens)","C7 (vertebra prominens) has a long spinous process that you can feel at the base of the neck","Roughly half of neck rotation occurs at the atlantoaxial joint"],
 clinical:"A Jefferson fracture is a burst fracture of the C1 ring. A hangman's fracture is a C2 pars injury (traumatic spondylolisthesis). Both are classic high cervical injuries.",
 fun:"A giraffe has the same 7 neck vertebrae as you do. Almost all mammals share the number.",
 dev:"The dens fuses to the body of C2 at about 6 to 7 years. The cervical lordosis appears as an infant learns to lift the head."},
{id:"thoracic",name:"Thoracic vertebrae",kw:"mid back t1 t12 spine kyphosis",group:"Spine",reg:"Axial",view:"spine",zoom:"spine",
 count:"12 (T1 to T12)",kind:"Irregular",
 location:"The mid back, behind the chest.",
 role:"Form the posterior anchor of the rib cage and protect the cord. Their facet orientation allows rotation but limits flexion and extension.",
 features:["Costal facets on the bodies and transverse processes articulate with the ribs","Vertebral bodies get larger from T1 to T12","Long spinous processes slope downward","The thoracic kyphosis is a primary curve"],
 clinical:"Osteoporotic compression fractures cluster in the mid thoracic spine and at the thoracolumbar junction. Repeated wedge fractures increase kyphosis.",
 fun:"These are the only vertebrae that carry ribs, which is why the thoracic spine is much stiffer than the neck or low back.",
 dev:"The thoracic curve is a primary curve and is already present at birth."},
{id:"lumbar",name:"Lumbar vertebrae",kw:"low back l1 l5 spine lordosis",group:"Spine",reg:"Axial",view:"spine",zoom:"spine",
 count:"5 (L1 to L5)",kind:"Irregular",
 location:"The lower back, between the ribs and the pelvis.",
 role:"Carry most of the weight of the body above the pelvis and allow bending forward and back.",
 features:["Largest of the mobile vertebrae","Short, stout spinous processes that project straight back","Sagittally oriented facet joints limit rotation","The spinal cord ends (conus medullaris) at about L1 to L2 in adults"],
 clinical:"A lumbar puncture is done at L3-L4 or L4-L5, below the cord. Disc herniation is most common at L4-L5 and L5-S1. Spondylolysis is most often at L5.",
 fun:"Each vertebra is larger than the one above it because the load it carries keeps growing as you go down.",
 dev:"The lumbar lordosis is a secondary curve that develops as a child starts to sit up, stand and walk."},
{id:"sacrum",name:"Sacrum",kw:"base of spine pelvis si joint s1",group:"Spine",reg:"Axial",view:"spine",zoom:"spine",
 count:"1 (5 fused vertebrae)",kind:"Irregular",
 location:"Between the two hip bones, at the base of the spine.",
 role:"Transfers weight from the spine to the pelvis and forms the back wall of the pelvic cavity. Houses the sacral nerve roots.",
 features:["Articulates with L5, both ilia (sacroiliac joints) and the coccyx","Sacral promontory is a landmark for the pelvic inlet","Four pairs of anterior and posterior sacral foramina","The sacral hiatus is the access point for a caudal epidural"],
 clinical:"Sacral insufficiency fractures are an under-recognized cause of low back and buttock pain in older adults with osteoporosis.",
 fun:"The name comes from the Latin os sacrum, 'sacred bone'.",
 dev:"Five separate vertebrae in childhood. Fusion starts after puberty from the bottom up and usually finishes in the 20s."},
{id:"coccyx",name:"Coccyx",kw:"tailbone tail end",group:"Spine",reg:"Axial",view:"spine",zoom:"spine",
 count:"1 (3 to 5 fused segments)",kind:"Irregular",
 location:"The very bottom of the spine, below the sacrum.",
 role:"Anchors pelvic floor muscles and ligaments and helps support the body when you lean back while sitting.",
 features:["Usually 4 small fused segments","Attachment for the coccygeus and part of the levator ani and gluteus maximus","Articulates with the sacrum at the sacrococcygeal joint"],
 clinical:"Coccydynia often follows a fall onto the buttocks or childbirth.",
 fun:"Human embryos have a tail that regresses by about the eighth week. The coccyx is what remains.",
 dev:"The segments ossify during childhood and fuse gradually in adulthood."},
/* ---------- THORAX ---------- */
{id:"sternum",name:"Sternum",kw:"breastbone chest manubrium xiphoid",group:"Thorax",reg:"Axial",view:"full",
 count:"1",kind:"Flat",
 location:"Midline of the front of the chest.",
 role:"Anchors the costal cartilages of ribs 1 to 7, protects the heart and great vessels and joins the clavicles at the sternoclavicular joints. Contains red marrow.",
 features:["Three parts: manubrium, body and xiphoid process","Sternal angle (of Louis) at the manubriosternal joint lines up with the 2nd costal cartilage and vertebral level T4 to T5","Jugular notch is at about the T2 to T3 level","A site for bone marrow aspiration in selected cases"],
 clinical:"The sternal angle is the standard landmark for counting ribs. It also marks the carina and the start of the aortic arch. CPR compressions go over the lower half of the sternum, above the xiphoid.",
 fun:"The xiphoid stays largely cartilaginous into adulthood and tends to ossify after about 40.",
 dev:"Forms from two sternal bars that fuse in the midline. The four sternebrae of the body fuse from the bottom up between puberty and the mid 20s."},
{id:"ribs",name:"Ribs",kw:"rib cage thorax costal floating",group:"Thorax",reg:"Axial",view:"full",
 count:"24 (12 pairs)",kind:"Flat (curved)",
 location:"Wrap around the chest from the thoracic spine to the sternum.",
 role:"Protect the heart and lungs, give attachment to respiratory and trunk muscles and move like bucket handles to change chest volume during breathing.",
 features:["True ribs 1 to 7 reach the sternum through their own costal cartilage","False ribs 8 to 10 join the cartilage above","Floating ribs 11 and 12 have no front attachment","The costal groove on the lower border carries the intercostal vein, artery and nerve"],
 clinical:"Ribs 4 to 9 break most often. Fractures of ribs 1 and 2 suggest high-energy trauma. Chest drains go over the top of a rib to spare the neurovascular bundle. Unexplained rib fractures in an infant raise concern for non-accidental injury.",
 fun:"Roughly 1 in 100 people has an extra cervical rib, which can cause thoracic outlet syndrome.",
 dev:"The front ends stay as costal cartilage for life, and that cartilage gradually calcifies with age."},
/* ---------- SHOULDER & ARM ---------- */
{id:"clavicle",name:"Clavicle",kw:"collarbone shoulder",group:"Shoulder & arm",reg:"Appendicular",view:"full",
 count:"2",kind:"Long (modified)",
 location:"Between the top of the sternum and the shoulder.",
 role:"A strut that holds the shoulder away from the chest, transmits force from the arm to the trunk and shields the nerves and vessels heading to the arm.",
 features:["S-shaped. The medial end meets the manubrium and the lateral end meets the acromion","The only bony link between the arm and the axial skeleton","Subcutaneous along its whole length, so easy to feel","The only long bone that lies horizontally"],
 clinical:"About 80 percent of clavicle fractures are in the middle third. The medial fragment is pulled up by sternocleidomastoid and the shoulder drops. It is also the most commonly fractured bone at birth.",
 fun:"It is among the first bones to start ossifying in the embryo (around week 5 to 6) and the last to finish growing.",
 dev:"The medial epiphysis appears at about 18 to 20 and fuses in the early to mid 20s, which is used in forensic age estimation."},
{id:"scapula",name:"Scapula",kw:"shoulder blade glenoid acromion",group:"Shoulder & arm",reg:"Appendicular",view:"full",
 count:"2",kind:"Flat",
 location:"Over the back of the upper ribs (about ribs 2 to 7).",
 role:"Mounts the arm. The glenoid forms the shoulder joint and the broad blade anchors the rotator cuff and many shoulder muscles.",
 features:["Spine, acromion, coracoid process, glenoid cavity and inferior angle","No bony joint with the rib cage, only the scapulothoracic gliding interface","Suprascapular notch passes the suprascapular nerve","The acromion forms the point of the shoulder"],
 clinical:"Scapular fractures are uncommon and signal high-energy trauma, so look for chest injury. Long thoracic nerve injury causes a winged scapula.",
 fun:"The scapula is attached to your torso by muscle alone, which gives the shoulder its huge range of motion.",
 dev:"Secondary centers (acromion, coracoid, glenoid, inferior angle and medial border) fuse by the early 20s."},
{id:"humerus",name:"Humerus",kw:"upper arm funny bone",group:"Shoulder & arm",reg:"Appendicular",view:"full",
 count:"2",kind:"Long",
 location:"The upper arm, from shoulder to elbow.",
 role:"The lever of the upper arm. The head forms the glenohumeral joint and the lower end forms the elbow with the radius and ulna.",
 features:["Anatomical neck and surgical neck","Deltoid tuberosity on the shaft","Radial groove carries the radial nerve","The ulnar nerve passes behind the medial epicondyle"],
 clinical:"Surgical neck fractures risk the axillary nerve. Midshaft fractures risk the radial nerve (wrist drop). Supracondylar fractures in children can injure the brachial artery and the anterior interosseous nerve.",
 fun:"The 'funny bone' is not a bone. The odd tingle is the ulnar nerve being pressed against the medial epicondyle.",
 dev:"Elbow centers appear in a set order (CRITOE): capitellum about 1, radial head 3, medial epicondyle 5, trochlea 7, olecranon 9 and lateral epicondyle 11 years."},
{id:"radius",name:"Radius",kw:"forearm thumb side wrist",group:"Shoulder & arm",reg:"Appendicular",view:"full",
 count:"2",kind:"Long",
 location:"Thumb side of the forearm.",
 role:"Rolls around the ulna for pronation and supination. Its wide lower end forms most of the wrist joint with the scaphoid and lunate.",
 features:["Head sits in the radial notch of the ulna and the capitulum","Radial tuberosity takes the biceps tendon","Styloid process is felt at the base of the thumb","Dorsal (Lister's) tubercle guides the extensor pollicis longus tendon"],
 clinical:"Distal radius fractures are among the most common fractures. A Colles fracture is dorsally displaced after a fall on an outstretched hand. A Smith fracture is volar. Toddlers can get 'nursemaid's elbow' (radial head subluxation).",
 fun:"When you turn your palm down, the radius crosses over a fixed ulna.",
 dev:"The distal epiphysis appears at about 1 year and fuses in the late teens."},
{id:"ulna",name:"Ulna",kw:"forearm elbow olecranon little finger side",group:"Shoulder & arm",reg:"Appendicular",view:"full",
 count:"2",kind:"Long",
 location:"Little-finger side of the forearm.",
 role:"Forms the main hinge of the elbow with the humerus and is the stable pillar around which the radius rotates.",
 features:["Olecranon is the point of the elbow","Trochlear notch grips the humeral trochlea","Coronoid process and styloid process","Ulnar head meets the radius at the distal radioulnar joint"],
 clinical:"A Monteggia injury is an ulnar fracture with radial head dislocation. A Galeazzi injury is a radial shaft fracture with distal radioulnar joint disruption.",
 fun:"The ulna is the main player at the elbow and the radius is the main player at the wrist. They swap importance along the forearm.",
 dev:"The olecranon epiphysis appears at about 9 years and fuses in the mid to late teens."},
/* ---------- HAND ---------- */
{id:"hand",name:"Hand (overview)",kw:"hand fingers wrist",group:"Hand",reg:"Appendicular",view:"full",zoom:"hand",
 count:"54 (27 per hand)",kind:"Mixed",
 location:"From the wrist to the fingertips.",
 role:"Fine manipulation and strong gripping. Built from 8 carpals, 5 metacarpals and 14 phalanges on each side.",
 features:["Carpals (wrist): 8","Metacarpals (palm): 5","Phalanges (fingers): 14","The thumb's saddle joint allows opposition"],
 clinical:"Hand fractures are very common and often come with tendon injury. Rotational deformity after a fracture is checked by looking for scissoring of the fingers when the fist is closed.",
 fun:"Your two hands and two feet hold 106 of your 206 bones, just over half.",
 dev:"A hand and wrist X-ray is the standard way to estimate a child's bone age."},
{id:"carpals",name:"Carpals",kw:"wrist scaphoid lunate capitate hamate",group:"Hand",reg:"Appendicular",view:"hand",
 count:"16 (8 per wrist)",kind:"Short",
 location:"The wrist, in two rows of four.",
 role:"Provide wrist mobility and pass load from the hand to the forearm.",
 features:["Proximal row (thumb to little finger): scaphoid, lunate, triquetrum and pisiform","Distal row: trapezium, trapezoid, capitate and hamate","Mnemonic: 'So Long To Pinky, Here Comes The Thumb'","The capitate is the largest carpal"],
 clinical:"The scaphoid is the most commonly fractured carpal. Look for snuffbox tenderness after a fall on an outstretched hand. Its blood supply enters from the distal end, so proximal pole fractures risk non-union and avascular necrosis. Early X-rays can look normal.",
 fun:"Wrist X-rays are compared with standard atlases (Greulich and Pyle) to judge how mature a child's skeleton is.",
 dev:"All carpals are cartilage at birth. The capitate and hamate ossify first (within the first year) and the pisiform last (at about 9 to 12 years). A teaching rule of thumb is that the number ossified is roughly age in years plus one."},
{id:"metacarpals",name:"Metacarpals",kw:"palm knuckles hand bones boxer",group:"Hand",reg:"Appendicular",view:"hand",
 count:"10 (5 per hand)",kind:"Long (miniature)",
 location:"The palm, between the wrist and the fingers.",
 role:"Form the skeleton of the palm. Their heads make the knuckles.",
 features:["Each has a base, shaft and head","The thumb metacarpal forms a saddle joint with the trapezium","The 2nd and 3rd are rigid. The 4th and 5th are more mobile and help the grip","Numbered 1 to 5 from the thumb"],
 clinical:"A boxer's fracture is a fracture of the 5th metacarpal neck. A Bennett fracture is an intra-articular fracture-dislocation at the base of the thumb metacarpal.",
 fun:"The saddle shape of the first carpometacarpal joint is what lets your thumb touch each fingertip.",
 dev:"Each metacarpal has one secondary center: at the head for the 2nd to 5th and at the base for the thumb, which makes the thumb metacarpal behave like a phalanx."},
{id:"hand-phalanges",name:"Phalanges of the hand",kw:"fingers thumb digits",group:"Hand",reg:"Appendicular",view:"hand",
 count:"28 (14 per hand)",kind:"Long (miniature)",
 location:"The fingers and thumb.",
 role:"Form the fingers and carry the tendons that give pinch and grip.",
 features:["Thumb has 2 (proximal and distal)","Each finger has 3 (proximal, middle and distal)","Base, shaft and head on each phalanx","The distal phalanx has a tuft that supports the fingertip pulp"],
 clinical:"Mallet finger is extensor tendon avulsion from the distal phalanx. Jersey finger is a flexor digitorum profundus avulsion.",
 fun:"There are no muscles inside your fingers. They are moved by tendons pulled from muscles in the forearm and palm.",
 dev:"Phalangeal epiphyses appear in early childhood and fuse in the mid to late teens."},
/* ---------- PELVIS & LEG ---------- */
{id:"hip",name:"Hip bone (os coxae)",kw:"pelvis ilium ischium pubis acetabulum sit bone",group:"Pelvis & leg",reg:"Appendicular",view:"full",
 count:"2 (each is 3 fused bones)",kind:"Irregular",
 location:"Each side of the pelvis, joined at the pubic symphysis in front and to the sacrum behind.",
 role:"Transfers weight from the spine to the legs, forms the hip socket (acetabulum) and protects the pelvic organs.",
 features:["Ilium (upper wing), ischium (sit bone) and pubis (front)","All three meet in the acetabulum","The sacroiliac joints and the pubic symphysis complete the pelvic ring","The obturator foramen is the largest foramen in the body"],
 clinical:"Pelvic ring fractures come from high energy and can bleed heavily. Avulsion injuries of the anterior superior iliac spine occur in teenage athletes while the apophysis is still open.",
 fun:"A typical female pelvis is wider, with a broader pelvic inlet and subpubic angle, an adaptation for childbirth.",
 dev:"At birth the ilium, ischium and pubis are separate and meet at a Y-shaped triradiate cartilage in the acetabulum. They fuse at about 14 to 16 years, earlier in girls."},
{id:"femur",name:"Femur",kw:"thigh thighbone",group:"Pelvis & leg",reg:"Appendicular",view:"full",
 count:"2",kind:"Long",
 location:"The thigh, from hip to knee.",
 role:"The longest, heaviest and strongest bone. Carries body weight and anchors the large thigh and buttock muscles.",
 features:["Head fits the acetabulum and the neck-shaft angle averages about 125 degrees","Greater and lesser trochanters","Linea aspera is a posterior ridge for muscle attachment","Medial and lateral condyles meet the tibia"],
 clinical:"Displaced femoral neck fractures can disrupt the retinacular branches of the medial circumflex femoral artery and cause avascular necrosis. A femoral shaft fracture can hide over a liter of blood loss in the thigh.",
 fun:"Its length is roughly a quarter of body height, which is why it is used to estimate stature.",
 dev:"The distal femoral epiphysis is one of the few ossification centers present at birth (it appears at about 36 weeks of gestation). The distal physis supplies about 70 percent of femoral growth."},
{id:"patella",name:"Patella",kw:"kneecap knee sesamoid",group:"Pelvis & leg",reg:"Appendicular",view:"full",
 count:"2",kind:"Sesamoid",
 location:"In front of the knee, inside the quadriceps tendon.",
 role:"Moves the quadriceps tendon away from the knee axis, which increases leverage when you straighten the knee. It also protects the front of the joint.",
 features:["The largest sesamoid bone","Base faces up and the apex points down to the patellar ligament","Its back surface carries the thickest articular cartilage in the body"],
 clinical:"Patellar dislocation is usually lateral. A bipartite patella (a normal variant) can be mistaken for a fracture on X-ray.",
 fun:"Babies are born without a bony kneecap. It is cartilage and starts to ossify at about 3 to 6 years.",
 dev:"Cartilaginous at birth. Ossification begins at about 3 to 6 years, sometimes from several centers."},
{id:"tibia",name:"Tibia",kw:"shin shinbone lower leg",group:"Pelvis & leg",reg:"Appendicular",view:"full",
 count:"2",kind:"Long",
 location:"The inner (medial) bone of the lower leg.",
 role:"The main weight-bearing bone of the leg. Passes load from the femur to the talus.",
 features:["Second longest bone in the body","Tibial plateau, tibial tuberosity and anterior border (the shin)","Medial malleolus forms the inner ankle","Subcutaneous along most of its front surface"],
 clinical:"Open fractures are common because the shin has little soft tissue cover. Tibial shaft injuries can lead to compartment syndrome. Osgood-Schlatter disease affects the tibial tuberosity in growing athletes.",
 fun:"The tibia is among the most commonly fractured long bones.",
 dev:"The proximal epiphysis ossifies around birth. The tibial tuberosity apophysis fuses in the late teens."},
{id:"fibula",name:"Fibula",kw:"calf lower leg splint",group:"Pelvis & leg",reg:"Appendicular",view:"full",
 count:"2",kind:"Long",
 location:"The outer (lateral) bone of the lower leg.",
 role:"Mostly a muscle attachment and ankle stabilizer. It carries only a small fraction of body weight.",
 features:["Head meets the tibia below the knee","The common fibular nerve wraps around the neck","Lateral malleolus forms the outer ankle and reaches lower than the medial one","Not part of the knee joint"],
 clinical:"Pressure over the fibular neck (a tight cast, for example) can injure the common fibular nerve and cause foot drop. The Weber classification links ankle fractures to the fibular fracture level.",
 fun:"Surgeons harvest the fibula for vascularized bone grafts, such as rebuilding a jaw, because the body copes well without a piece of it.",
 dev:"The distal epiphysis appears at about 1 to 2 years."},
/* ---------- FOOT ---------- */
{id:"foot",name:"Foot (overview)",kw:"foot toes ankle arch",group:"Foot",reg:"Appendicular",view:"full",zoom:"foot",
 count:"52 (26 per foot)",kind:"Mixed",
 location:"From the ankle to the toes.",
 role:"Supports the body, absorbs shock and pushes off during walking. Built from 7 tarsals, 5 metatarsals and 14 phalanges on each side.",
 features:["Tarsals (hindfoot and midfoot): 7","Metatarsals: 5","Phalanges (toes): 14","Three arches: medial longitudinal, lateral longitudinal and transverse"],
 clinical:"Foot and ankle injuries are among the most common musculoskeletal presentations. The Ottawa ankle rules help decide who needs an X-ray.",
 fun:"Your two feet hold 52 bones, roughly a quarter of your skeleton.",
 dev:"The arches are not present at birth. They develop through early childhood."},
{id:"tarsals",name:"Tarsals",kw:"ankle heel talus calcaneus navicular cuboid cuneiform",group:"Foot",reg:"Appendicular",view:"foot",
 count:"14 (7 per foot)",kind:"Short",
 location:"The ankle and back of the foot.",
 role:"Pass body weight from the leg to the ground and absorb shock.",
 features:["Hindfoot: talus and calcaneus","Midfoot: navicular, cuboid and three cuneiforms","The talus has no muscle attachments and about 60 percent of its surface is articular cartilage","The Achilles tendon inserts on the calcaneus"],
 clinical:"Calcaneal fractures follow falls from a height and can come with lumbar vertebral fractures, so examine the spine. Talar neck fractures risk avascular necrosis because the blood supply runs backward into the bone.",
 fun:"The calcaneus is the largest bone of the foot and is already ossifying before birth.",
 dev:"The calcaneus ossifies at about 4 months of fetal life, the talus at about 6 to 7 months and the cuboid around birth. The rest follow in early childhood."},
{id:"metatarsals",name:"Metatarsals",kw:"foot ball of foot jones fracture",group:"Foot",reg:"Appendicular",view:"foot",
 count:"10 (5 per foot)",kind:"Long (miniature)",
 location:"The middle of the foot between the ankle bones and the toes.",
 role:"Form the arches and the ball of the foot. The first metatarsal takes the most load during push-off.",
 features:["First metatarsal is the thickest and the second is usually the longest","Two sesamoid bones sit under the head of the first","The base of the fifth has a prominent tuberosity","Numbered 1 to 5 from the big toe"],
 clinical:"A Jones fracture (the base of the fifth metatarsal shaft) heals poorly because of its blood supply. Stress ('march') fractures typically involve the second or third metatarsal.",
 fun:"A metatarsal is the 'long bone' of the foot, the same design as a metacarpal in the hand.",
 dev:"Like the metacarpals, the first has a base epiphysis and the others have a head epiphysis."},
{id:"foot-phalanges",name:"Phalanges of the foot",kw:"toes big toe hallux",group:"Foot",reg:"Appendicular",view:"foot",
 count:"28 (14 per foot)",kind:"Long (miniature)",
 location:"The toes.",
 role:"Balance and push-off. The big toe provides the final push in each step.",
 features:["The big toe (hallux) has 2 phalanges and each other toe has 3","Much shorter than finger bones","The first metatarsophalangeal joint carries heavy load"],
 clinical:"Gout classically attacks the first metatarsophalangeal joint (podagra). Hammer and mallet toes are deformities of the toe joints.",
 fun:"Short toes are a hallmark of human walking. Ape toes are long because they grip.",
 dev:"Phalangeal centers appear between about 1 and 4 years."}
];
const BY={};E.forEach(e=>BY[e.id]=e);

/* ===== PART DETAILS ===== */
const CARP_INFO={
 "Scaphoid":"Boat-shaped. The most commonly fractured carpal bone. Tenderness in the anatomical snuffbox is the classic sign. Blood supply enters distally so proximal fractures risk avascular necrosis.",
 "Lunate":"Moon-shaped and central in the proximal row. Lunate and perilunate dislocations are serious wrist injuries. Kienbock disease is avascular necrosis of the lunate.",
 "Triquetrum":"Three-cornered. The second most commonly fractured carpal, usually a small dorsal chip.",
 "Pisiform":"Pea-shaped sesamoid bone in the flexor carpi ulnaris tendon. Sits in front of the triquetrum. The last carpal to ossify (about 9 to 12 years).",
 "Trapezium":"Forms the saddle joint with the first metacarpal. Osteoarthritis of this joint is a common cause of thumb-base pain.",
 "Trapezoid":"The smallest bone of the distal row. A wedge that carries the second metacarpal. Rarely injured.",
 "Capitate":"The largest carpal. Its head sits in the cup formed by the scaphoid and lunate. One of the first to ossify.",
 "Hamate":"Wedge-shaped with a hook (hamulus) that forms the ulnar wall of the carpal tunnel. Hook fractures occur in racquet, club and bat sports and can injure the ulnar nerve or little finger flexor tendons."
};
const TARS_INFO={
 "Talus":"Sits between the tibia and fibula above and the calcaneus below. No muscle attachments. Neck fractures risk avascular necrosis.",
 "Calcaneus":"The heel bone and the largest tarsal. The Achilles tendon inserts on its back and the sustentaculum tali supports the talus.",
 "Navicular":"Boat-shaped keystone of the medial longitudinal arch. Prone to stress fractures in athletes because its central third has a poor blood supply.",
 "Cuboid":"Lateral midfoot bone with a groove for the peroneus longus tendon.",
 "Medial cuneiform":"The largest cuneiform. Articulates with the first metatarsal. Tibialis anterior and peroneus longus insert nearby.",
 "Intermediate cuneiform":"The smallest cuneiform. Wedged between the other two, it acts as a keystone of the transverse arch.",
 "Lateral cuneiform":"Sits between the intermediate cuneiform and the cuboid and articulates with the third metatarsal."
};
const MC_INFO={
 "1st metacarpal":"Shortest and most mobile. Forms the saddle joint with the trapezium.",
 "2nd metacarpal":"The longest metacarpal and very rigid. Base joins the trapezoid.",
 "3rd metacarpal":"Has a styloid process at its base. Rigid center post of the hand.",
 "4th metacarpal":"More mobile than the 2nd and 3rd, which helps cup the palm.",
 "5th metacarpal":"Neck fractures here are called boxer's fractures. Quite mobile, important for power grip."
};
const MT_INFO={
 "1st metatarsal":"Short and thick. Takes the most load at push-off. Two sesamoids sit under its head.",
 "2nd metatarsal":"Usually the longest. A common site of stress fracture.",
 "3rd metatarsal":"Central ray of the foot. Also a common stress fracture site.",
 "4th metatarsal":"Slender and fairly mobile. Joins the cuboid.",
 "5th metatarsal":"Prominent tuberosity at its base takes the peroneus brevis. The Jones fracture lies just beyond it."
};
function ribInfo(p){
 const n=parseInt(p.replace("Rib ",""),10);
 const kind=n<=7?"True rib: its own costal cartilage reaches the sternum.":n<=10?"False rib: its cartilage joins the rib above.":"Floating rib: no front attachment.";
 const x={1:" Shortest, flattest and most curved. Grooves for the subclavian vessels sit on its upper surface, with the scalene tubercle between them.",2:" Its cartilage joins at the sternal angle, which makes it the landmark for counting ribs. Has a tubercle for serratus anterior.",10:" Has a single facet on its head, like ribs 11 and 12.",11:" Short with no neck or tubercle.",12:" Lies behind the kidney. The pleura can reach below it, a point that matters in flank incisions."};
 return kind+(x[n]||"");
}
function vertInfo(p){
 const sp={C1:"Atlas: a ring with no vertebral body. Carries the skull on its lateral masses and allows nodding at the atlanto-occipital joints.",C2:"Axis: its odontoid process (dens) is the pivot for head rotation and is held by the transverse ligament of the atlas.",C7:"Vertebra prominens: the long spinous process you can feel at the base of the neck. The vertebral artery usually enters higher, at C6.",T1:"Has a full costal facet for rib 1 and a nearly horizontal spinous process.",T12:"Transitional vertebra between thoracic and lumbar types. Burst fractures cluster at the thoracolumbar junction.",L1:"The conus medullaris usually ends around L1 to L2. Thoracolumbar junction injuries involve T12 to L2.",L4:"A line joining the iliac crests (the supracristal plane) crosses at about L4, a landmark for lumbar puncture.",L5:"The largest and most wedge-shaped body. The usual site of spondylolysis and the L5-S1 slip (spondylolisthesis)."};
 if(sp[p])return sp[p];
 const t=p[0];
 return t==="C"?"Typical cervical vertebra: small body, transverse foramina and usually a bifid spinous process.":t==="T"?"Thoracic vertebra: carries costal facets for the ribs.":"Lumbar vertebra: large kidney-shaped body for weight bearing.";
}
const PARTFN={
 carpals:p=>CARP_INFO[p]||"",
 tarsals:p=>TARS_INFO[p]||"",
 metacarpals:p=>MC_INFO[p]||"",
 metatarsals:p=>MT_INFO[p]||"",
 ribs:ribInfo,
 cervical:vertInfo,thoracic:vertInfo,lumbar:vertInfo,
 sternum:p=>({"Manubrium":"Meets the clavicles and the first rib (plus half of the second). The jugular notch at its top is at about T2 to T3.","Body":"Has notches for the cartilages of ribs 2 to 7. The sternal angle at its top marks rib 2.","Xiphoid process":"The smallest part. Cartilage in the young and ossifies in later adult life. Avoid pressing on it during CPR."}[p]||""),
 ossicles:p=>({"Malleus":"The 'hammer'. Largest ossicle. Its handle is embedded in the eardrum.","Incus":"The 'anvil'. Links the malleus to the stapes.","Stapes":"The 'stirrup'. The smallest bone in the body. Its footplate fits the oval window."}[p]||""),
 "hand-phalanges":p=>"",
 "foot-phalanges":p=>"",
 "facial-small":p=>({"Nasal bone":"Forms the bridge of the nose. The most commonly fractured facial bone.","Lacrimal bone":"Tiny medial wall of the orbit with the groove for the tear sac."}[p]||"")
};
const QUOTE_FACTS=[
 "A newborn has roughly 270 to 300 bony pieces. An adult has 206.",
 "Your hands and feet hold 106 of your 206 bones, just over half.",
 "About 99 percent of the body's calcium is stored in bone and teeth.",
 "The stapes in your middle ear is the smallest bone in the body, about 3 mm long.",
 "The femur is the longest bone and measures about a quarter of your height.",
 "Bone marrow makes roughly 2 million red blood cells every second.",
 "Giraffes and humans both have 7 neck vertebrae.",
 "Teeth are not bones, even though they look similar and contain calcium.",
 "The hyoid is the only bone that does not meet another bone at a joint.",
 "Wolff's law: bone remodels in response to the loads placed on it. That is why astronauts lose bone density in microgravity.",
 "Osteocytes make up most of the cells in bone, roughly 90 to 95 percent.",
 "As a rule of thumb the whole adult skeleton is remodeled about once every ten years, although cortical and trabecular bone turn over at different speeds.",
 "A baby's kneecap is cartilage. It does not turn to bone until about 3 to 6 years of age.",
 "The funny bone is a nerve, not a bone: the ulnar nerve against the medial epicondyle.",
 "The clavicle is one of the first bones to begin ossifying in the embryo and one of the last to finish growing."
];
const TF=[
 ["Babies are born with more bones than adults have.",1,"True. Roughly 270 to 300 bony pieces at birth fuse down to 206."],
 ["The femur is the longest bone in the body.",1,"True. It is also the heaviest and the strongest."],
 ["A newborn has a fully formed bony kneecap.",0,"False. The patella is cartilage at birth and ossifies at about 3 to 6 years."],
 ["Giraffes have many more neck vertebrae than humans.",0,"False. Giraffes and humans both have 7. Each giraffe vertebra is just much longer."],
 ["The 'funny bone' is a bone.",0,"False. It is the ulnar nerve running behind the medial epicondyle of the humerus."],
 ["More than half of all bones are in the hands and feet.",1,"True. 54 in the hands and 52 in the feet make 106 of 206."],
 ["The hyoid does not articulate directly with any other bone.",1,"True. It is held by muscles and ligaments only."],
 ["The stapes is the smallest bone in the body.",1,"True. It is about 3 mm long and sits in the middle ear."],
 ["Everybody has exactly 12 pairs of ribs.",0,"False. Variants exist. Roughly 1 in 100 people has a cervical rib, and some people have 11 or 13 pairs."],
 ["Teeth are classified as bones.",0,"False. Teeth are made of enamel, dentin and cementum, which differ from bone."],
 ["The scaphoid is the most commonly fractured carpal bone.",1,"True. It is often missed on early X-rays."],
 ["The clavicle is the most commonly fractured bone at birth.",1,"True. It is the most common obstetric fracture and usually heals well without treatment."]
];

/* ===== DRAWING HELPERS ===== */
const C=200;
const r1=n=>Math.round(n*10)/10;
let TITLES=true;
const RELIEF=`<defs><filter id="relief" x="-4%" y="-3%" width="108%" height="106%" color-interpolation-filters="sRGB">
<feGaussianBlur in="SourceAlpha" stdDeviation="1.7" result="b1"/><feGaussianBlur in="SourceAlpha" stdDeviation="5" result="b2"/>
<feDiffuseLighting in="b1" surfaceScale="5" diffuseConstant="1.3" lighting-color="#fff" result="d1"><feDistantLight azimuth="235" elevation="58"/></feDiffuseLighting>
<feDiffuseLighting in="b2" surfaceScale="14" diffuseConstant="1.3" lighting-color="#fff" result="d2"><feDistantLight azimuth="235" elevation="58"/></feDiffuseLighting>
<feComposite in="d1" in2="d2" operator="arithmetic" k2=".55" k3=".45" result="d"/>
<feSpecularLighting in="b1" surfaceScale="5" specularConstant=".5" specularExponent="24" lighting-color="#fff4da" result="s"><feDistantLight azimuth="235" elevation="58"/></feSpecularLighting>
<feComposite in="s" in2="SourceAlpha" operator="in" result="s2"/>
<feTurbulence type="fractalNoise" baseFrequency=".85" numOctaves="3" seed="7" result="n"/>
<feColorMatrix in="n" type="matrix" values="0.22 0 0 0 .84  0.22 0 0 0 .84  0.2 0 0 0 .82  0 0 0 0 1" result="nn"/>
<feComposite in="SourceGraphic" in2="d" operator="arithmetic" k1="1" result="l1"/>
<feComposite in="l1" in2="nn" operator="arithmetic" k1="1" result="l2"/>
<feComposite in="l2" in2="s2" operator="arithmetic" k2="1" k3="1"/>
</filter></defs>`;

function O(m,d){return d.replace(/(-?\d+(?:\.\d+)?),(-?\d+(?:\.\d+)?)/g,(a,x,y)=>r1(C+m*parseFloat(x))+","+y)}
const X=(m,x)=>r1(C+m*x);
const SIDES=fn=>`<g class="side">${fn(1)}</g><g class="side">${fn(-1)}</g>`;
function G(id,inner){const en=BY[id];return `<g class="bone" data-id="${id}">${TITLES?`<title>${en.name}</title>`:""}${inner}</g>`}
function PT(name,inner){return `<g class="part" data-part="${name}">${inner}</g>`}
/* union of primitives: e=ellipse l=line p=path r=rect */
function U(prims){
  let a="",b="";
  for(const p of prims){
    if(p.e){const [cx,cy,rx,ry,rot]=p.e;const tr=rot?` transform="rotate(${rot} ${cx} ${cy})"`:"";
      a+=`<ellipse class="uo" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${tr}/>`;
      b+=`<ellipse class="uf" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${tr}/>`;}
    else if(p.l){const [x1,y1,x2,y2,w]=p.l;const d=`M${x1},${y1}L${x2},${y2}`;
      a+=`<path class="eo" d="${d}" stroke-width="${w+1.9}"/>`;
      b+=`<path class="ef" d="${d}" stroke-width="${w}"/>`;}
    else if(p.p){a+=`<path class="uo" d="${p.p}"/>`;b+=`<path class="uf" d="${p.p}"/>`;}
    else if(p.r){const [x,y,w,h,rx]=p.r;
      a+=`<rect class="uo" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx||0}"/>`;
      b+=`<rect class="uf" x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx||0}"/>`;}
  }
  return a+b;
}
const LB=(x1,y1,x2,y2,w,a,b)=>{const o=[{l:[x1,y1,x2,y2,w]}];if(a)o.push({e:[x1,y1,a[0],a[1]]});if(b)o.push({e:[x2,y2,b[0],b[1]]});return o};

/* ===== HAND (local frame, right hand palmar view, thumb on left, origin = wrist centre) ===== */
const CARP=[
 {n:"Scaphoid",e:[-48,30,22,15,-35]},{n:"Lunate",e:[-12,18,18,15,0]},{n:"Triquetrum",e:[26,20,17,14,0]},
 {n:"Trapezium",e:[-70,70,19,16,0]},{n:"Trapezoid",e:[-36,70,15,14,0]},{n:"Capitate",e:[-2,66,19,22,0]},{n:"Hamate",e:[36,72,20,18,0],extra:[{e:[36,88,7,8]}]},
 {n:"Pisiform",e:[42,40,10,9,0]}
];
const MCS=[
 ["1st metacarpal",-84,86,-122,150,15],["2nd metacarpal",-36,88,-54,182,13],["3rd metacarpal",-4,90,-12,182,13],["4th metacarpal",22,92,26,170,12],["5th metacarpal",46,92,60,160,12]
];
const PHS=[
 ["Thumb proximal phalanx",-122,156,-142,196,12.5],["Thumb distal phalanx",-144,202,-152,236,10.5],
 ["Index proximal phalanx",-56,188,-66,236,11],["Index middle phalanx",-67,242,-72,270,9.5],["Index distal phalanx",-73,276,-76,298,8],
 ["Middle proximal phalanx",-12,188,-14,244,11.5],["Middle middle phalanx",-14,250,-15,284,9.5],["Middle distal phalanx",-15,290,-15,314,8],
 ["Ring proximal phalanx",27,176,32,228,11],["Ring middle phalanx",33,234,36,264,9.5],["Ring distal phalanx",36,270,38,292,8],
 ["Little proximal phalanx",62,166,72,206,10],["Little middle phalanx",73,212,78,232,8.5],["Little distal phalanx",79,238,82,254,7.5]
];
function handInner(det){
  const wrap=(id,inner)=>det?G(id,inner):inner;
  const part=(n,inner)=>det?PT(n,inner):inner;
  let car="",mc="",ph="";
  for(const c of CARP){const pr=[{e:c.e}].concat(c.extra||[]);car+=part(c.n,U(pr));}
  for(const [n,x1,y1,x2,y2,w] of MCS){mc+=part(n,U(LB(x1,y1,x2,y2,w,[w*.62,w*.5],[w*.7,w*.62])));}
  for(const [n,x1,y1,x2,y2,w] of PHS){ph+=part(n.replace(/^(\w+) (\w+) phalanx$/,"$1 $2 phalanx"),U(LB(x1,y1,x2,y2,w,[w*.6,w*.5],[w*.62,w*.55])));}
  return wrap("carpals",car)+wrap("metacarpals",mc)+wrap("hand-phalanges",ph);
}
function handView(){
  const ctx=`<g class="ctx">${U(LB(-36,-100,-34,-20,26,null,[30,16]).concat([{e:[-62,-2,6,9]}]))}${U(LB(30,-100,32,-24,14,null,[14,10]))}</g>`;
  return ctx+handInner(true)+`<text class="cap" x="-186" y="-70">Right hand, palm view</text><text class="cap2" x="-186" y="-55">Thumb on the left</text>`;
}

/* ===== FOOT (local frame, right foot dorsal view, medial side to +x, origin = ankle centre) ===== */
const TARS=[
 {n:"Calcaneus",e:[-22,44,17,32,-8]},{n:"Talus",e:[2,20,22,19,0]},{n:"Navicular",e:[16,66,20,11,0]},{n:"Cuboid",e:[-30,86,15,14,0]},
 {n:"Lateral cuneiform",e:[-4,94,11,13,0]},{n:"Intermediate cuneiform",e:[14,98,9,11,0]},{n:"Medial cuneiform",e:[33,96,12,15,0]}
];
const MTS=[["1st metatarsal",34,112,38,182,18],["2nd metatarsal",14,112,14,190,11],["3rd metatarsal",-4,108,-8,184,10.5],["4th metatarsal",-22,104,-30,176,10],["5th metatarsal",-40,100,-54,168,10]];
const TPH=[
 ["Big toe proximal phalanx",38,188,40,222,15],["Big toe distal phalanx",40,226,41,252,13],
 ["2nd toe proximal phalanx",14,196,13,222,8],["2nd toe middle phalanx",13,225,13,238,7],["2nd toe distal phalanx",13,241,13,252,6.5],
 ["3rd toe proximal phalanx",-8,192,-10,214,7.5],["3rd toe middle phalanx",-10,217,-11,229,6.5],["3rd toe distal phalanx",-11,232,-11,243,6],
 ["4th toe proximal phalanx",-30,184,-34,204,7],["4th toe middle phalanx",-34,207,-35,218,6],["4th toe distal phalanx",-35,221,-36,230,5.5],
 ["5th toe proximal phalanx",-54,176,-60,192,6.5],["5th toe middle phalanx",-60,195,-61,203,5.5],["5th toe distal phalanx",-61,206,-62,213,5]
];
function footInner(det){
  const wrap=(id,inner)=>det?G(id,inner):inner;
  const part=(n,inner)=>det?PT(n,inner):inner;
  let t="",m="",p="";
  for(const c of TARS)t+=part(c.n,U([{e:c.e}]));
  for(const [n,x1,y1,x2,y2,w] of MTS){m+=part(n,U(LB(x1,y1,x2,y2,w,[w*.6,w*.45],[w*.62,w*.55]).concat(n==="5th metatarsal"?[{e:[-44,100,8,6]}]:[])));}
  for(const [n,x1,y1,x2,y2,w] of TPH){p+=part(n,U(LB(x1,y1,x2,y2,w,[w*.58,w*.45],[w*.6,w*.5])));}
  return wrap("tarsals",t)+wrap("metatarsals",m)+wrap("foot-phalanges",p);
}
function footView(){
  const ctx=`<g class="ctx">${U(LB(14,-70,14,-8,30,null,null).concat([{e:[34,0,9,14]}]))}${U(LB(-26,-70,-26,-10,15,null,null).concat([{e:[-34,2,9,16]}]))}</g>`;
  return ctx+footInner(true)+`<text class="cap" x="-96" y="-30">Right foot, top view</text><text class="cap2" x="-96" y="-16">Big toe on the right</text>`;
}

/* ===== FULL BODY ===== */
const HIP="M-22,460 C-44,432 -92,426 -106,460 C-111,476 -104,492 -94,502 L-84,510 C-82,522 -80,534 -74,542 C-72,560 -66,580 -60,592 C-56,604 -46,610 -38,604 C-32,598 -28,590 -22,582 L-3,574 L-3,552 L-18,545 C-27,535 -31,520 -33,504 C-33,488 -31,472 -22,460Z M-56,560 C-60,572 -56,588 -46,594 C-38,596 -28,584 -26,572 C-30,562 -46,552 -56,560Z";
const RW=[28,42,53,61,67,71,72,68,62,54,48,40];
const RY=[196,208.4,220.8,233.2,245.6,258,270.4,282.8,295.2,307.6,320,332.4];
const REND=[[22,232],[26,254],[33,266],[38,277],[42,287],[44,295],[45,302],[56,318],[50,331],[44,343],[50,362],[40,372]];
const RCART=[[12,226],[11,246],[10,258],[10,270],[10,280],[10,288],[10,295],[16,299],[22,306],[30,314]];
function fullView(){
  const s=[];
  // scapula
  s.push(G("scapula",SIDES(m=>`<path class="f" d="${O(m,"M-52,208 L-76,204 L-98,198 C-104,204 -100,214 -90,220 L-82,226 C-78,244 -70,268 -62,292 L-54,288 C-52,262 -52,236 -52,208Z")}"/>`)));
  // cervical
  let cv="",y=126;const ch=[5,8,8,8,8,8,8],cw=[24,14,13,13,14,14,15];
  for(let i=0;i<7;i++){cv+=PT("C"+(i+1),`<rect class="f" x="${C-cw[i]/2}" y="${y}" width="${cw[i]}" height="${ch[i]}" rx="2.5"/>`);y+=ch[i]+1.4;}
  s.push(G("cervical",cv));
  // thoracic
  let th="";
  for(let i=0;i<12;i++){const w=15+i,yy=190+i*12.4;th+=PT("T"+(i+1),`<rect class="f" x="${C-w/2}" y="${r1(yy)}" width="${w}" height="10.2" rx="2.5"/>`);}
  s.push(G("thoracic",th));
  // lumbar
  let lu="";
  for(let i=0;i<5;i++){const w=30+i*1.3,yy=340+i*19.2;
    lu+=PT("L"+(i+1),`<rect class="f" x="${r1(C-w/2-15)}" y="${r1(yy+4)}" width="${r1(w+30)}" height="5.5" rx="2.7"/><rect class="f" x="${r1(C-w/2)}" y="${r1(yy)}" width="${r1(w)}" height="15.5" rx="3"/>`);}
  s.push(G("lumbar",lu));
  // sacrum + coccyx
  let fo="";[[13,448],[11,460],[9,472],[7,483]].forEach(([dx,yy])=>{fo+=`<ellipse class="hole" cx="${C-dx}" cy="${yy}" rx="3" ry="2.4"/><ellipse class="hole" cx="${C+dx}" cy="${yy}" rx="3" ry="2.4"/>`});
  s.push(G("sacrum",`<path class="f" d="M171,434 C185,428 215,428 229,434 C228,456 220,480 208,500 L192,500 C180,480 172,456 171,434Z"/>${fo}`));
  s.push(G("coccyx",U([{e:[200,505,6,4]},{e:[200,512,5,3.5]},{e:[200,518,4,3]},{e:[200,523,3,2.5]}])));
  // hip bones
  s.push(G("hip",SIDES(m=>`<path class="f" fill-rule="evenodd" d="${O(m,HIP)}"/>`)));
  // legs
  s.push(G("femur",SIDES(m=>U([{l:[X(m,-66),500,X(m,-32),690,14.5]},{e:[X(m,-48),476,12.5,12.5]},{l:[X(m,-48),476,X(m,-72),494,11.5]},{e:[X(m,-74),497,9,11]},{e:[X(m,-30),694,20,12]}]))));
  s.push(G("tibia",SIDES(m=>U([{e:[X(m,-30),716,20,8]},{l:[X(m,-30),722,X(m,-27),884,12]},{e:[X(m,-26),892,13,9]},{e:[X(m,-19),900,6,9]}]))));
  s.push(G("fibula",SIDES(m=>U([{e:[X(m,-49),722,7,8]},{l:[X(m,-48),730,X(m,-45),886,6.5]},{e:[X(m,-44),894,6.5,11]}]))));
  s.push(G("patella",SIDES(m=>U([{e:[X(m,-30),702,10,12]}]))));
  // feet
  s.push(G("foot",`<g class="side" transform="translate(${C-34},896) scale(.46)">${footInner(false)}</g><g class="side" transform="translate(${C+34},896) scale(-.46,.46)">${footInner(false)}</g>`));
  // ribs
  // build ribs for both sides inside side groups
  const ribSide=m=>{let q="";for(let i=0;i<12;i++){const w=RW[i],ys=RY[i],[xb,yb]=REND[i];
      const d=O(m,`M-8,${ys} C${-w},${ys-6} ${-(w+2)},${yb-24} ${-xb},${yb}`);
      let inner=`<path class="eo" d="${d}" stroke-width="7.4"/><path class="ef" d="${d}" stroke-width="4.8"/>`;
      if(i<10){const [cx,cy]=RCART[i];inner+=`<path class="cartl" d="${O(m,`M${-xb},${yb} L${-cx},${cy}`)}"/>`;}
      q+=PT("Rib "+(i+1),inner);}return q;};
  s.push(G("ribs",SIDES(ribSide)));
  // sternum
  s.push(G("sternum",PT("Manubrium",`<path class="f" d="M186,221 L214,221 L217,230 L212,246 L188,246 L183,230Z"/>`)+PT("Body",`<path class="f" d="M189,248 L211,248 L210,295 L190,295Z"/>`)+PT("Xiphoid process",`<path class="f" d="M194,297 L206,297 L200,314Z"/>`)));
  // clavicle
  s.push(G("clavicle",SIDES(m=>U([{p:O(m,"M-12,224 C-36,214 -58,228 -90,204 L-90,208 C-58,233 -36,220 -12,229Z")},{e:[X(m,-12),226,7,6]},{e:[X(m,-91),205,6,5]}]))));
  // arms
  s.push(G("humerus",SIDES(m=>U([{l:[X(m,-90),222,X(m,-98),350,13]},{e:[X(m,-84),210,13,13]},{e:[X(m,-99),356,16,9]}]))));
  s.push(G("radius",SIDES(m=>U([{e:[X(m,-107),366,8,4]},{l:[X(m,-108),370,X(m,-124),500,9]},{e:[X(m,-125),505,14,8]}]))));
  s.push(G("ulna",SIDES(m=>U([{e:[X(m,-92),364,10,10]},{l:[X(m,-93),370,X(m,-108),497,8.5]},{e:[X(m,-108),505,7,6]}]))));
  // hands
  s.push(G("hand",`<g class="side" transform="translate(${C-116},514) scale(.3)">${handInner(false)}</g><g class="side" transform="translate(${C+116},514) scale(-.3,.3)">${handInner(false)}</g>`));
  // hyoid
  s.push(G("hyoid",`<path class="eo" d="M186,150 Q200,166 214,150" stroke-width="7.2"/><path class="ef" d="M186,150 Q200,166 214,150" stroke-width="4.6"/>`));
  // skull
  s.push(G("skull",`${U([{e:[200,66,43,48]},{p:"M162,86 C162,102 170,114 180,122 L220,122 C230,114 238,102 238,86Z"}])}<ellipse class="hole" cx="185" cy="76" rx="8.5" ry="7.5"/><ellipse class="hole" cx="215" cy="76" rx="8.5" ry="7.5"/><path class="hole" d="M200,86 L195,102 L205,102Z"/><rect class="tooth" x="183" y="108" width="34" height="8" rx="2"/><path class="f" d="M161,92 C158,122 176,144 200,144 C224,144 242,122 239,92 L231,95 C231,114 219,135 200,135 C181,135 169,114 169,95Z"/><rect class="tooth" x="185" y="121" width="30" height="7" rx="2"/>`));
  return s.join("");
}


/* jagged suture line along a path (runtime, uses SVG geometry) */
function zig(dstr,amp,step){
  const p=document.createElementNS("http://www.w3.org/2000/svg","path");p.setAttribute("d",dstr);
  const L=p.getTotalLength();let o="";
  for(let t=0,i=0;t<=L;t+=step,i++){
    const a=p.getPointAtLength(t),b=p.getPointAtLength(Math.min(L,t+.5));
    const dx=b.x-a.x,dy=b.y-a.y,n=Math.hypot(dx,dy)||1,k=(i%2?1:-1)*amp*(1+.35*Math.sin(i*1.7));
    o+=(i?"L":"M")+r1(a.x-dy/n*k)+","+r1(a.y+dx/n*k);
  }
  return o;
}

/* ===== SKULL (lateral view, facing left) ===== */
function skullView(){
  const OUT="M98,168 C92,120 120,52 200,38 C270,26 338,70 344,150 C346,190 336,214 318,226 L300,232 C292,240 284,236 276,224 L250,212 C240,214 230,212 220,206 L190,214 L172,226 L160,240 L118,244 L100,232 L90,208 C94,196 98,182 98,168Z";
  const reg=(id,d)=>G(id,`<path class="f" clip-path="url(#sk)" d="${d}"/>`);
  let s=`<defs><clipPath id="sk"><path d="${OUT}"/></clipPath></defs>`;
  s+=reg("occipital","M300,30 L360,30 L360,262 L312,262 L306,232 L312,176 C316,128 312,76 300,30Z");
  s+=reg("parietal","M196,30 L300,30 C312,76 316,128 312,176 C290,168 262,152 236,148 C216,146 200,140 188,130 C198,98 200,60 196,30Z");
  s+=reg("frontal","M70,170 L70,30 L196,30 C200,60 198,98 188,130 C172,134 160,134 150,140 C140,150 128,152 118,158 L96,164Z");
  s+=reg("temporal","M188,130 C200,140 216,146 236,148 C262,152 290,168 312,176 L306,232 L312,262 L262,262 L236,222 L214,212 L196,208 L178,200 L182,188 L200,186 L212,168 L200,140Z");
  s+=reg("sphenoid","M150,142 L188,130 L200,140 L212,168 L200,186 L182,188 L168,176 L158,160Z");
  s+=reg("zygomatic","M130,196 L156,160 L168,176 L182,188 L178,200 L168,214 L146,214 L128,208Z");
  s+=reg("maxilla","M86,190 L130,196 L128,208 L146,214 L168,214 L190,214 L196,262 L80,262 L84,220Z");
  s+=reg("facial-small",`M92,158 L116,152 L112,184 L90,194Z`);
  s+=`<ellipse class="hole" cx="136" cy="176" rx="24" ry="22"/>`;
  s+=G("facial-small",`<path class="f" d="M114,166 C110,176 112,190 120,196 L126,186 L122,168Z"/>`);
  s+=`<defs><radialGradient id="skvol" cx=".38" cy=".3" r=".85"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".6" stop-color="#8a7448" stop-opacity=".22"/><stop offset="1" stop-color="#3b2d14" stop-opacity=".6"/></radialGradient></defs>`;
  s+=`<path d="${OUT}" fill="url(#skvol)" style="mix-blend-mode:multiply;pointer-events:none"/>`;
  const SU="fill=\"none\" stroke=\"#4a3d26\" stroke-width=\"1\" stroke-linejoin=\"round\" vector-effect=\"non-scaling-stroke\" clip-path=\"url(#sk)\" style=\"pointer-events:none\"";
  s+=`<path ${SU} d="${zig("M196,30 C200,60 198,98 188,130",2.2,5)}"/>`;
  s+=`<path ${SU} d="${zig("M300,30 C312,76 316,128 312,176",2.4,5)}"/>`;
  s+=`<path ${SU} d="${zig("M188,130 C200,140 216,146 236,148 C262,152 290,168 312,176",1.6,5)}"/>`;
  s+=`<path ${SU} d="${zig("M312,176 L306,232",1.6,5)}"/>`;
  // temporal lines
  s+=`<path ${SU} stroke-opacity=".5" stroke-dasharray="1 0" d="M120,150 C170,100 230,98 290,132"/><path ${SU} stroke-opacity=".35" d="M128,162 C180,116 240,116 292,148"/>`;
  // supraorbital ridge, orbital rim, nasal aperture, foramina
  s+=`<path ${SU} stroke-opacity=".7" d="M94,164 C106,150 128,148 150,152"/>`;
  s+=`<ellipse cx="136" cy="176" rx="24" ry="22" fill="none" stroke="#4a3d26" stroke-opacity=".8" stroke-width="2.4" style="pointer-events:none"/>`;
  s+=`<path class="hole" d="M88,194 C84,204 88,214 98,214 C102,206 100,198 94,192Z"/>`;
  s+=`<ellipse class="hole" cx="116" cy="214" rx="2.6" ry="2" style="pointer-events:none"/><ellipse class="hole" cx="116" cy="270" rx="2.6" ry="2"/>`;
  s+=`<path ${SU} stroke-opacity=".5" d="M120,160 L124,152"/>`;
  // zygomatic arch with temporal fossa gap
  s+=`<path class="f" d="M178,200 C196,204 218,206 238,214 L246,224 C226,220 204,220 184,214Z" style="pointer-events:none"/>`;
  s+=`<path d="M150,220 L158,236" stroke="#4a3d26" stroke-width="1" fill="none" style="pointer-events:none" vector-effect="non-scaling-stroke"/>`;
  s+=`<path d="${OUT}" fill="none" stroke="#3b3120" stroke-width="1.4" vector-effect="non-scaling-stroke"/>`;
  // mastoid process and styloid
  s+=`<path d="M282,226 C288,240 296,246 304,236" fill="none" stroke="#4a3d26" stroke-opacity=".7" stroke-width="1.2" vector-effect="non-scaling-stroke" style="pointer-events:none"/>`;
  s+=`<path class="f" d="M262,232 L258,258 L262,258 L268,234Z" style="pointer-events:none"/>`;
  // ear canal
  s+=`<ellipse class="hole" cx="272" cy="206" rx="6" ry="8"/>`;
  // upper teeth
  for(let i=0;i<7;i++)s+=`<rect class="tooth" x="${96+i*8.6}" y="241" width="7.8" height="14" rx="2.2"/>`;
  // mandible
  s+=G("mandible",`<path class="f" d="M104,268 C100,276 104,290 120,296 C160,306 214,304 250,288 L262,272 L258,236 C258,224 254,216 246,214 C238,214 234,222 234,230 L226,224 C222,216 214,212 208,214 L206,236 C200,250 188,262 170,268 L140,266 L120,264Z"/>`);
  for(let i=0;i<6;i++)s+=`<rect class="tooth" x="${106+i*8.8}" y="251" width="8" height="13" rx="2.2"/>`;
  // ossicle inset
  s+=`<rect x="262" y="296" width="132" height="98" rx="10" fill="#0e1d33" stroke="#2a4568"/><text class="cap" x="270" y="311">Middle ear bones</text><text class="cap2" x="270" y="323">enlarged, left ear</text><path d="M276,222 L300,296" stroke="#5f7da3" stroke-dasharray="3 3" fill="none"/>`;
  const mal=U([{e:[292,336,7,7]},{l:[292,343,296,376,4]},{e:[300,340,3,3]}]);
  const inc=U([{e:[330,336,9,8]},{l:[336,340,346,350,4]},{l:[330,344,332,372,4]},{e:[332,374,3,3]}]);
  const sta=U([{e:[366,336,5,4]},{l:[366,340,358,372,3]},{l:[366,340,376,372,3]},{e:[367,374,12,3]}]);
  s+=G("ossicles",PT("Malleus",mal)+PT("Incus",inc)+PT("Stapes",sta));
  s+=`<text class="cap2" x="274" y="388">Malleus</text><text class="cap2" x="318" y="388">Incus</text><text class="cap2" x="354" y="388">Stapes</text>`;
  s+=`<text class="cap" x="14" y="30">Skull, side view</text><text class="cap2" x="14" y="46">Face points left</text>`;
  return s;
}

/* ===== SPINE (lateral view, anterior to the left) ===== */
function spineView(){
  const OFF=64,X0=170;
  const pts=[[44,-2],[100,-8],[152,0],[290,15],[425,0],[500,-12],[575,0],[625,12],[700,8]].map(p=>[p[0]+OFF,p[1]]);
  const cx=y=>{for(let i=0;i<pts.length-1;i++){if(y<=pts[i+1][0]){const t=Math.max(0,(y-pts[i][0])/(pts[i+1][0]-pts[i][0]));const u=(1-Math.cos(Math.PI*t))/2;return pts[i][1]+(pts[i+1][1]-pts[i][1])*u}}return pts[pts.length-1][1]};
  const segs=[];
  const chs=[10,15,13,12,12,12,13],cds=[16,20,18,18,19,20,22];
  for(let i=0;i<7;i++)segs.push({n:"C"+(i+1),g:"cervical",h:chs[i],d:cds[i],k:i===0?"a":i===6?"c7":"c"});
  for(let i=0;i<12;i++)segs.push({n:"T"+(i+1),g:"thoracic",h:17+i*.5,d:24+i,k:"t"});
  const lhs=[27,27,28,27,26],lds=[40,42,44,45,46];
  for(let i=0;i<5;i++)segs.push({n:"L"+(i+1),g:"lumbar",h:lhs[i],d:lds[i],k:"l"});
  let y=44+OFF;const out={cervical:"",thoracic:"",lumbar:""};let discs="";
  for(const sg of segs){
    const yc=y+sg.h/2,xc=X0+cx(yc),slope=(cx(yc+4)-cx(yc-4))/8,ang=-Math.atan(slope)*180/Math.PI;
    const bx=xc-sg.d/2;
    const prims=[{r:[r1(bx),r1(y),sg.d,r1(sg.h),3]}];
    // arch and spinous process
    const px=xc+sg.d/2;
    prims.push({r:[r1(px+1),r1(yc-sg.h*.42),8,r1(sg.h*.84),2]});
    let L,dy;
    if(sg.k==="a"){L=10;dy=0}else if(sg.k==="c"){L=16;dy=2}else if(sg.k==="c7"){L=24;dy=4}else if(sg.k==="t"){L=28;dy=14}else{L=26;dy=0}
    prims.push({l:[r1(px+8),r1(yc),r1(px+8+L),r1(yc+dy),sg.k==="l"?8:5]});
    out[sg.g]+=PT(sg.n,`<g transform="rotate(${r1(ang)} ${r1(xc)} ${r1(yc)})">${U(prims)}</g>`);
    discs+=`<rect class="disc" x="${r1(bx+1)}" y="${r1(y+sg.h)}" width="${sg.d-2}" height="3" rx="1.5" transform="rotate(${r1(ang)} ${r1(xc)} ${r1(yc)})"/>`;
    y+=sg.h+3;
  }
  // sacrum
  const sy0=y,sy1=y+88;let ant=[],pos=[];
  for(let yy=sy0;yy<=sy1;yy+=4){const w=44-(yy-sy0)*.33;const x=X0+cx(yy);ant.push([x-w/2,yy]);pos.push([x+w/2,yy]);}
  const sd="M"+ant.map(p=>r1(p[0])+","+p[1]).join(" L")+" L"+pos.reverse().map(p=>r1(p[0])+","+p[1]).join(" L")+"Z";
  let cc=[];for(let i=0;i<4;i++){const yy=sy1+5+i*8;cc.push({e:[r1(X0+cx(yy)),yy,7-i*1.2,4.6-i*.4]});}
  let s=`<ellipse class="f ctx" cx="${X0-2}" cy="78" rx="38" ry="26"/><path class="f ctx" d="M${X0-34},84 L${X0-46},104 L${X0-12},104 Z"/>`;
  s+=discs;
  s+=G("cervical",out.cervical)+G("thoracic",out.thoracic)+G("lumbar",out.lumbar);
  s+=G("sacrum",`<path class="f" d="${sd}"/>`)+G("coccyx",U(cc));
  // curve labels
  const br=(y1,y2,t1,t2)=>`<path d="M262,${y1} L268,${y1} L268,${y2} L262,${y2}" fill="none" stroke="#5f7da3"/><text class="cap" x="276" y="${(y1+y2)/2-2}">${t1}</text><text class="cap2" x="276" y="${(y1+y2)/2+13}">${t2}</text>`;
  s+=br(108,212,"Cervical lordosis","secondary curve");
  s+=br(220,484,"Thoracic kyphosis","primary curve");
  s+=br(492,636,"Lumbar lordosis","secondary curve");
  s+=br(644,758,"Sacral kyphosis","primary curve");
  s+=`<text class="cap" x="12" y="30">Spine, side view</text><text class="cap2" x="12" y="46">Front of the body is on the left</text>`;
  s+=`<text class="cap2" x="12" y="720">Primary: present at birth</text><text class="cap2" x="12" y="735">Secondary: develop later</text>`;
  return s;
}

/* ===== APP ===== */
const DUMMY=document.createElement("div");
const $=s=>document.querySelector(s)||DUMMY;
const svg=$("#svg"),info=$("#info"),hover=$("#hovertag");
const VIEWS={
  full:{label:"Full body",vb:"0 0 400 1030",build:fullView},
  skull:{label:"Skull",vb:"0 0 400 400",build:skullView},
  spine:{label:"Spine",vb:"0 0 400 780",build:spineView},
  hand:{label:"Hand",vb:"-190 -90 330 440",build:handView},
  foot:{label:"Foot",vb:"-100 -50 190 340",build:footView}
};
const state={view:"full",sel:null,part:null,quiz:null,peel:false};

function buildTabs(){
  $("#viewtabs").innerHTML=Object.keys(VIEWS).map(k=>`<button class="vt" data-v="${k}">${VIEWS[k].label}</button>`).join("");
  $("#viewtabs").addEventListener("click",e=>{const b=e.target.closest(".vt");if(b)setView(b.dataset.v)});
}
function setView(v){
  state.view=v;const V=VIEWS[v];
  svg.setAttribute("viewBox",V.vb);
  if(!V.html)V.html=V.build();
  svg.innerHTML=RELIEF+`<g id="art" filter="url(#relief)">${V.html}</g>`;
  svg.classList.toggle("peel",state.peel&&v==="full");
  document.querySelectorAll(".vt").forEach(b=>b.classList.toggle("on",b.dataset.v===v));
  $("#peel").style.display=v==="full"?"":"none";
  hover.textContent=state.quiz?"Tap the bone":"Tap a bone";
  applySel();
}
function clearViews(){Object.values(VIEWS).forEach(v=>v.html=null)}

function groupEl(id){return svg.querySelector(`[data-id="${id}"]`)}
function findPart(g,name){return [...g.querySelectorAll(".part")].find(p=>p.dataset.part===name)}
function applySel(){
  svg.querySelectorAll(".sel").forEach(n=>n.classList.remove("sel"));
  svg.querySelectorAll(".sub").forEach(n=>n.classList.remove("sub"));
  svg.querySelectorAll(".lbl").forEach(n=>n.remove());
  if(!state.sel||state.quiz&&!state.quiz.reveal)return;
  const g=groupEl(state.sel);if(!g)return;
  g.classList.add("sel");
  let p=null;
  if(state.part){p=findPart(g,state.part);if(p)p.classList.add("sub");}
  addLabel(p||g.querySelector(".side")||g,state.part||BY[state.sel].name);
}
function addLabel(el,text){
  const ctm=svg.getScreenCTM();if(!ctm)return;
  const r=el.getBoundingClientRect();
  const pt=svg.createSVGPoint();pt.x=r.left+r.width/2;pt.y=r.top+r.height/2;
  const q=pt.matrixTransform(ctm.inverse());
  const t=document.createElementNS("http://www.w3.org/2000/svg","text");
  t.setAttribute("class","lbl");t.setAttribute("x",q.x);t.setAttribute("y",q.y);t.setAttribute("text-anchor","middle");
  t.setAttribute("font-size",(13/ctm.a).toFixed(1));t.setAttribute("stroke-width",(4/ctm.a).toFixed(1));
  t.textContent=text;svg.appendChild(t);
  // keep label inside the view box
  const bb=t.getBBox(),vb=svg.viewBox.baseVal;
  let dx=0;if(bb.x<vb.x+4)dx=vb.x+4-bb.x;else if(bb.x+bb.width>vb.x+vb.width-4)dx=vb.x+vb.width-4-bb.x-bb.width;
  if(dx)t.setAttribute("x",q.x+dx);
}

function select(id,part){
  const e=BY[id];if(!e)return;
  state.sel=id;state.part=part||null;
  if(!groupEl(id))setView(e.view);else applySel();
  renderInfo(e,state.part);
  document.querySelectorAll(".item").forEach(b=>b.classList.toggle("on",b.dataset.id===id));
  $("#mname").textContent=e.name+(state.part?" > "+state.part:"");
  $("#mbar").classList.add("show");
}

function esc(s){return s}
function renderInfo(e,part){
  const pf=PARTFN[e.id];const pinfo=part?(pf?pf(part):""):"";
  let h=`<h3>${e.name}</h3><div><span class="badge hot">${e.count}</span><span class="badge">${e.kind}</span><span class="badge">${e.reg} skeleton</span></div>`;
  if(part)h+=`<div class="partbox"><b>${part}</b>${pinfo?": "+pinfo:""}</div>`;
  if(e.hidden||(e.view!==state.view&&!groupEl(e.id)))h+=`<div class="partbox" style="border-color:var(--mute);background:transparent">${e.hiddenNote||"This bone is not shown in the current view. Use the view tabs above."}</div>`;
  else if(e.hiddenNote&&state.view==="skull")h+=`<div class="partbox" style="border-color:var(--mute);background:transparent">${e.hiddenNote}</div>`;
  h+=`<div class="sec"><h4>Where it lives</h4><p>${e.location}</p></div>`;
  h+=`<div class="sec"><h4>What it does</h4><p>${e.role}</p></div>`;
  h+=`<div class="sec"><h4>Key features</h4><ul>${e.features.map(f=>`<li>${f}</li>`).join("")}</ul></div>`;
  h+=`<div class="callout"><h4>Clinical pearl</h4><p>${e.clinical}</p></div>`;
  h+=`<div class="callout fun"><h4>Fun fact</h4><p>${e.fun}</p></div>`;
  if(e.dev)h+=`<div class="callout baby"><h4>In a baby</h4><p>${e.dev}</p></div>`;
  const row=[];
  if(e.zoom&&state.view!==e.zoom)row.push(`<button class="btn pri" data-zoom="${e.zoom}">${e.zoom==="spine"?"See the spine curves":"Zoom in: "+VIEWS[e.zoom].label}</button>`);
  if(e.view!==state.view&&!groupEl(e.id))row.push(`<button class="btn" data-zoom="${e.view}">Show in ${VIEWS[e.view].label} view</button>`);
  row.push(`<button class="btn" id="startQuizHere">Quiz me</button>`);
  h+=`<div class="row">${row.join("")}</div>`;
  info.innerHTML=h;
}
function renderWelcome(){
  info.innerHTML=`<h3>Welcome</h3><p class="lead">Tap any bone on the skeleton or pick one from the list below. Head, hands and feet open into close-up views, and the Spine tab shows the natural curves. Where a bone has parts (carpals, ribs, vertebrae and more) tap a part to see it described.</p>
  <p class="legend"><i style="background:var(--hl)"></i>selected bone &nbsp; <i style="background:#ff6a3d"></i>selected part &nbsp; <i style="background:var(--cart)"></i>cartilage</p>
  <div class="sec"><h4>The 206 at a glance</h4></div>
  <div class="tbl"><table>
   <tr><th colspan="2">Axial skeleton: 80</th></tr>
   <tr><td>Skull</td><td>22 (8 cranial + 14 facial)</td></tr><tr><td>Ear ossicles</td><td>6</td></tr><tr><td>Hyoid</td><td>1</td></tr>
   <tr><td>Vertebral column</td><td>26 (7 C + 12 T + 5 L + sacrum + coccyx)</td></tr><tr><td>Sternum</td><td>1</td></tr><tr><td>Ribs</td><td>24</td></tr>
   <tr><th colspan="2">Appendicular skeleton: 126</th></tr>
   <tr><td>Shoulder girdles</td><td>4 (2 clavicles + 2 scapulae)</td></tr><tr><td>Upper limbs</td><td>60 (30 each)</td></tr>
   <tr><td>Pelvic girdle</td><td>2 hip bones</td></tr><tr><td>Lower limbs</td><td>60 (30 each, patella included)</td></tr>
  </table></div>`;
  $("#mbar").classList.remove("show");
}

/* ----- events on the diagram ----- */
svg.addEventListener("click",ev=>{
  const g=ev.target.closest(".bone");if(!g)return;
  const id=g.dataset.id;const p=ev.target.closest(".part");
  const part=p&&g.contains(p)?p.dataset.part:null;
  if(state.quiz){quizAnswer(id,g);return;}
  select(id,part);
});
svg.addEventListener("mouseover",ev=>{
  if(state.quiz)return;
  const g=ev.target.closest(".bone");if(!g){hover.textContent="Tap a bone";return;}
  const p=ev.target.closest(".part");
  hover.textContent=BY[g.dataset.id].name+(p&&g.contains(p)?": "+p.dataset.part:"");
});
info.addEventListener("click",ev=>{
  const z=ev.target.closest("[data-zoom]");
  if(z){setView(z.dataset.zoom);if(state.sel&&!groupEl(state.sel)){} else applySel();if(state.sel)renderInfo(BY[state.sel],state.part);return;}
  if(ev.target.id==="startQuizHere")startQuiz();
});
$("#peel").addEventListener("click",()=>{state.peel=!state.peel;$("#peel").classList.toggle("on",state.peel);svg.classList.toggle("peel",state.peel&&state.view==="full")});
$("#quizBtn").addEventListener("click",()=>state.quiz?stopQuiz():startQuiz());
$("#mgo").addEventListener("click",()=>{info.scrollIntoView({behavior:"smooth",block:"start"})});
if("IntersectionObserver" in window){
  new IntersectionObserver(es=>{es.forEach(en=>{if(en.isIntersecting)$("#mbar").classList.remove("show");else if(state.sel)$("#mbar").classList.add("show")})},{threshold:.25}).observe(info);
}

/* ----- quiz mode ----- */
function startQuiz(){
  state.quiz={score:0,tries:0,streak:0,asked:0,target:null,locked:false,reveal:false,last:null};
  $("#quizBtn").classList.add("on");$("#quizBtn").textContent="Exit quiz";
  TITLES=false;state.sel=null;state.part=null;clearViews();nextQ();
}
function stopQuiz(){
  state.quiz=null;TITLES=true;$("#quizBtn").classList.remove("on");$("#quizBtn").textContent="Quiz mode";
  clearViews();setView(state.view);renderWelcome();
}
function nextQ(){
  const q=state.quiz;if(!q)return;
  const pool=E.filter(e=>!e.hidden&&e.id!==q.last);
  q.target=pool[Math.floor(Math.random()*pool.length)];q.last=q.target.id;q.tries=0;q.locked=false;q.reveal=false;q.asked++;
  state.sel=null;
  setView(q.target.view);
  drawQuiz("");
}
function drawQuiz(msg,cls){
  const q=state.quiz;
  info.innerHTML=`<div class="qbox"><h3>Quiz mode</h3><p class="score">Question ${q.asked} &nbsp;|&nbsp; Score ${q.score} &nbsp;|&nbsp; Streak ${q.streak}</p>
  <div>Find this bone on the diagram:</div><div class="big">${q.target.name}</div>
  <div class="fb ${cls||""}" id="qfb">${msg||""}</div>
  <div class="row"><button class="btn" id="qhint">Hint</button><button class="btn" id="qskip">Skip</button><button class="btn" id="qexit">Exit quiz</button></div></div>`;
  $("#qhint").onclick=()=>{$("#qfb").className="fb";$("#qfb").textContent="Hint: it belongs to the "+q.target.group+" group and is shown in the "+VIEWS[q.target.view].label+" view."};
  $("#qskip").onclick=()=>{q.streak=0;if(!q.locked)nextQ()};
  $("#qexit").onclick=stopQuiz;
}
function flash(g,cls){g.classList.add(cls);setTimeout(()=>g.classList.remove(cls),700)}
function quizAnswer(id,g){
  const q=state.quiz;if(!q||q.locked)return;
  if(id===q.target.id){
    q.locked=true;q.score+=q.tries===0?1:0;q.streak+=q.tries===0?1:0;
    flash(g,"ok");
    drawQuiz(q.tries===0?"Correct! "+q.target.name+".":"Got it: "+q.target.name+".","good");
    setTimeout(nextQ,1300);
  }else{
    q.tries++;q.streak=0;flash(g,"bad");
    if(q.tries>=2){
      q.locked=true;q.reveal=true;state.sel=q.target.id;state.part=null;applySel();
      drawQuiz("Not quite. That one is the "+q.target.name+" (highlighted).","bad");
      setTimeout(nextQ,2200);
    }else{
      drawQuiz("That was the "+BY[id].name.toLowerCase()+". Try once more.","bad");
    }
  }
}

/* ----- bone index ----- */
let filt="All";
function buildList(){
  $("#filters").innerHTML=["All"].concat(GROUPS).map(g=>`<button class="mini${g===filt?" on":""}" data-g="${g}">${g}</button>`).join("");
  drawList();
}
function drawList(){
  const q=$("#search").value.trim().toLowerCase();
  const items=E.filter(e=>(filt==="All"||e.group===filt)&&(!q||(e.name+" "+e.kw+" "+e.group).toLowerCase().includes(q)));
  $("#list").innerHTML=items.map(e=>`<button class="item${state.sel===e.id?" on":""}" data-id="${e.id}">${e.name}<small>${e.count.split(" (")[0]} | ${e.group}</small></button>`).join("")||`<p class="legend">No bones match that search.</p>`;
}
$("#filters").addEventListener("click",ev=>{const b=ev.target.closest(".mini");if(!b)return;filt=b.dataset.g;buildList()});
function pick(id){
  if(state.quiz)stopQuiz();
  const e=BY[id];
  state.sel=e.id;state.part=null;
  if(!groupEl(e.id))setView(e.view);else applySel();
  renderInfo(e,null);
  document.querySelectorAll(".item").forEach(x=>x.classList.toggle("on",x.dataset.id===e.id));
  $("#mname").textContent=e.name;
  $("#stage").scrollIntoView({behavior:"smooth",block:"start"});
}
function drawSres(){
  const q=$("#search").value.trim().toLowerCase(),box=$("#sres");
  if(!q){box.innerHTML="";box.classList.remove("open");return}
  const m=E.filter(e=>(e.name+" "+e.kw+" "+e.group).toLowerCase().includes(q)).slice(0,7);
  box.innerHTML=m.map(e=>`<button class="item" data-id="${e.id}">${e.name}<small>${e.group}</small></button>`).join("")||`<p class="legend" style="padding:10px 12px;margin:0">No bones match that search.</p>`;
  box.classList.add("open");
}
$("#search").addEventListener("input",()=>{drawList();drawSres()});
$("#search").addEventListener("keydown",ev=>{if(ev.key==="Enter"){const b=$("#sres .item");if(b){pick(b.dataset.id);$("#search").blur()}}});
$("#sres").addEventListener("click",ev=>{const b=ev.target.closest(".item");if(!b)return;pick(b.dataset.id);$("#search").value="";drawList();drawSres()});
$("#list").addEventListener("click",ev=>{const b=ev.target.closest(".item");if(b)pick(b.dataset.id)});

/* ===== GROWTH ===== */
const AGE=[
 {k:"Birth",t:"Newborn",b:["Roughly 270 to 300 separate bony pieces. Much of the skeleton is still cartilage.","Skull plates are unfused, with fontanelles that let the head mold during birth.","Each hip bone is three bones (ilium, ischium and pubis), the sacrum is five and the mandible and frontal bone are each in two halves.","Wrist bones and the kneecap are cartilage, and the spine has a single C-shaped curve."]},
 {k:"3 mo",t:"3 months",b:["The posterior fontanelle has usually closed by about 2 to 3 months.","The capitate and hamate begin to ossify in the wrist.","As the infant lifts the head, the cervical lordosis starts to form.","The metopic suture begins to close (typically between 3 and 9 months)."]},
 {k:"1 y",t:"1 year",b:["The two halves of the mandible have fused at the chin.","The metopic suture is usually closed, so the frontal bone is now one bone.","The distal radius epiphysis appears.","Walking starts and the lumbar lordosis begins to develop."]},
 {k:"2 y",t:"2 years",b:["The anterior fontanelle closes in most children between about 12 and 24 months.","The triquetrum starts to ossify (about 2 to 3 years).","Growth plates are open at the ends of every long bone."]},
 {k:"5 y",t:"5 years",b:["The patella has usually begun to ossify (typically 3 to 6 years).","The scaphoid, trapezium and trapezoid appear (about 4 to 6 years).","Rapid height gain has slowed to a steady childhood rate."]},
 {k:"10 y",t:"10 years",b:["The pisiform appears at about 9 to 12 years, completing the wrist.","The elbow centers appear in order (CRITOE). The olecranon is the one that appears at about 9.","Open growth plates are the weak link in a child's bone. Salter-Harris fractures go through the physis."]},
 {k:"15 y",t:"15 years",b:["The triradiate cartilage in the hip is closing (about 14 to 16 years, earlier in girls).","Growth plates are closing in girls and usually a little later in boys.","The pelvis takes on its adult shape and sex differences become clear."]},
 {k:"18 y",t:"18 years",b:["Most long bone growth plates have closed.","The sacral segments begin to fuse from the bottom up.","The basilar part of the occipital bone fuses to the sphenoid (late teens to early 20s)."]},
 {k:"25 y",t:"25 years",b:["The medial end of the clavicle, the last epiphysis to fuse, joins the shaft in the early to mid 20s.","The sacrum is usually a single bone.","The skeleton has reached the adult count of 206. Peak bone mass is reached at about 30."]}
];
const CARP_ORDER=["Capitate","Hamate","Triquetrum","Lunate","Scaphoid","Trapezium","Trapezoid","Pisiform"];
const CARP_N=[0,2,2,3,6,8,8,8,8];
const CAPS={
 skull:["Both fontanelles open. Metopic suture open.","Posterior fontanelle closed. Anterior still large.","Anterior fontanelle shrinking. Metopic suture closed.","Anterior fontanelle closed. Sutures remain as fibrous joints.","Sutures remain as thin fibrous joints.","Sutures remain as thin fibrous joints.","Sutures remain as thin fibrous joints.","Sutures remain. Cranial base joint fusing.","Sutures slowly interlock through adulthood."],
 hip:["Three bones joined by a Y-shaped cartilage","Three bones joined by a Y-shaped cartilage","Three bones joined by a Y-shaped cartilage","Three bones joined by a Y-shaped cartilage","Three bones joined by a Y-shaped cartilage","Cartilage still open, bones growing","Cartilage closing (about 14 to 16 y)","Fused into one hip bone","One hip bone"],
 sacrum:["Five separate vertebrae","Five separate vertebrae","Five separate vertebrae","Five separate vertebrae","Five separate vertebrae","Five separate vertebrae","Five separate vertebrae, about to fuse","Lower segments fusing first","One bone, with ridges where the segments joined"],
 plate:["Cartilage ends (epiphyses) cap the shaft","Bony centers beginning in the cartilage","Bony centers growing inside the cartilage","Bony centers growing inside the cartilage","Epiphysis mostly bone, growth plate open","Growth plate open and driving growth","Growth plate thinning","Growth plate closing or closed","Plate closed. Growth in length has ended."]
};

function wristSVG(i){
  const n=CARP_N[i];let s=`<g transform="translate(112,8) scale(1.18)">`;
  for(const c of CARP){
    const ossified=CARP_ORDER.indexOf(c.n)<n;
    const [cx,cy,rx,ry,rot]=c.e;const tr=rot?` transform="rotate(${rot} ${cx} ${cy})"`:"";
    s+=ossified?`<ellipse class="f" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${tr}/>`:`<ellipse class="cartx" cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}"${tr}/>`;
  }
  return `<svg viewBox="0 0 200 150">${s}</g></svg>`;
}
function skullSVG(i){
  const gap=[7,6,4,3,2,1.6,1.4,1.2,1.2][i],fa=[26,23,12,0,0,0,0,0,0][i],fp=[11,0,0,0,0,0,0,0,0][i],met=[6,3,0,0,0,0,0,0,0][i];
  const cl=`stroke="#8fcfd4" fill="none" stroke-linecap="round"`;
  let s=`<defs><clipPath id="wsk"><ellipse cx="100" cy="100" rx="62" ry="80"/></clipPath></defs>`;
  s+=`<ellipse cx="100" cy="100" rx="62" ry="80" fill="#efe5cc" stroke="#5e5238" stroke-width="1.4"/>`;
  s+=`<g clip-path="url(#wsk)">`;
  if(met)s+=`<path d="M100,20 L100,70" ${cl} stroke-width="${met}"/>`;
  s+=`<path d="M100,70 L100,152" ${cl} stroke-width="${gap}"/>`;
  s+=`<path d="M36,92 Q100,60 164,92" ${cl} stroke-width="${gap}"/>`;
  s+=`<path d="M44,134 L100,152 L156,134" ${cl} stroke-width="${gap}"/>`;
  if(fa)s+=`<path d="M100,${76-fa*.8} L${100+fa*.55},76 L100,${76+fa*.8} L${100-fa*.55},76Z" fill="#8fcfd4" opacity=".9"/>`;
  if(fp)s+=`<path d="M100,${152-fp} L${100+fp*.7},152 L${100-fp*.7},152Z" fill="#8fcfd4" opacity=".9"/>`;
  s+=`</g><text x="100" y="14" text-anchor="middle" font-size="10" fill="#9fb2cb">front</text><text x="100" y="196" text-anchor="middle" font-size="10" fill="#9fb2cb">back</text>`;
  return `<svg viewBox="0 0 200 200">${s}</svg>`;
}
function hipSVG(i){
  const R=64,cx=100,cy=88;
  const fused=i>=7,closing=i===6;
  const col=fused?["#efe5cc","#efe5cc","#efe5cc"]:["#f0dfae","#e6c8b3","#d3dcb0"];
  const p1=[cx-.87*R,cy-.5*R],p2=[cx+.87*R,cy-.5*R],p3=[cx,cy+R];
  let s="";
  if(fused)s+=`<circle cx="${cx}" cy="${cy}" r="${R}" fill="#efe5cc" stroke="#5e5238" stroke-width="1.4"/>`;
  else{
  s+=`<path d="M${cx},${cy} L${p1[0]},${p1[1]} A${R},${R} 0 0 1 ${p2[0]},${p2[1]}Z" fill="${col[0]}" stroke="#5e5238"/>`;
  s+=`<path d="M${cx},${cy} L${p3[0]},${p3[1]} A${R},${R} 0 0 1 ${p1[0]},${p1[1]}Z" fill="${col[1]}" stroke="#5e5238"/>`;
  s+=`<path d="M${cx},${cy} L${p2[0]},${p2[1]} A${R},${R} 0 0 1 ${p3[0]},${p3[1]}Z" fill="${col[2]}" stroke="#5e5238"/>`;}
  const w=[5,5,5,5,5,4.5,2.6,0,0][i];
  if(w){const d=closing?` stroke-dasharray="5 4"`:"";
    s+=`<path d="M${cx},${cy} L${p1[0]},${p1[1]} M${cx},${cy} L${p2[0]},${p2[1]} M${cx},${cy} L${p3[0]},${p3[1]}" stroke="#8fcfd4" stroke-width="${w}" stroke-linecap="round" fill="none"${d}/>`;}
  s+=`<circle cx="${cx}" cy="${cy}" r="24" fill="#0d1a2f" stroke="#5e5238" stroke-width="1.4"/><text x="${cx}" y="${cy+3}" text-anchor="middle" font-size="9" fill="#9fb2cb">socket</text>`;
  if(!fused){s+=`<text x="100" y="46" text-anchor="middle" font-size="11" fill="#3d3420">ilium</text><text x="60" y="114" text-anchor="middle" font-size="11" fill="#3d3420">pubis</text><text x="141" y="114" text-anchor="middle" font-size="11" fill="#3d3420">ischium</text>`;}
  return `<svg viewBox="0 0 200 170">${s}</svg>`;
}
function sacrumSVG(i){
  const gaps=[[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[6,6,6,6],[5,5,5,5],[5,5,0,0],[0,0,0,0]][i];
  let y=8,s="";const h=30,wTop=88,wBot=26;
  const wAt=yy=>wTop-(wTop-wBot)*((yy-8)/(5*h+20));
  for(let k=0;k<5;k++){
    const y1=y,y2=y+h;const w1=wAt(y1),w2=wAt(y2);
    s+=`<path d="M${70-w1/2},${y1} L${70+w1/2},${y1} L${70+w2/2},${y2} L${70-w2/2},${y2}Z" fill="#efe5cc" stroke="#5e5238" stroke-width="1.2"/>`;
    if(k<4){const g=gaps[k];
      if(g>0)s+=`<rect x="${70-wAt(y2+g/2)/2}" y="${y2}" width="${wAt(y2+g/2)}" height="${g}" fill="#8fcfd4" opacity=".75"/>`;
      else if(i===8)s+=`<path d="M${70-w2/2+2},${y2} L${70+w2/2-2},${y2}" stroke="#b8a97c" stroke-width="1.4" stroke-dasharray="2 3"/>`;
      y=y2+g;}
  }
  const labels=["S1","S2","S3","S4","S5"];let yy=8;
  for(let k=0;k<5;k++){s+=`<text x="${70+wAt(yy+h/2)/2+8}" y="${yy+h/2+3}" font-size="9" fill="#9fb2cb">${labels[k]}</text>`;yy+=h+(k<4?gaps[k]:0);}
  return `<svg viewBox="0 0 140 190">${s}</svg>`;
}
function plateSVG(i){
  const cr=[.25,.22,.3,.42,.62,.85,1,1,1][i];
  const pl=[0,0,0,0,0,6,3.6,1.4,0][i];
  let s=`<rect x="86" y="46" width="28" height="82" fill="#efe5cc" stroke="#5e5238"/>`;
  const knob=(cy,dir)=>{
    let k=`<ellipse cx="100" cy="${cy}" rx="34" ry="22" fill="rgba(143,207,212,.45)" stroke="#8fcfd4" stroke-width="1.4"/>`;
    k+=`<ellipse cx="100" cy="${cy}" rx="${34*cr}" ry="${22*cr}" fill="#efe5cc" stroke="#5e5238"/>`;
    return k;};
  s+=knob(34)+knob(140);
  if(pl){s+=`<rect x="70" y="${50-pl/2}" width="60" height="${pl}" fill="#8fcfd4"/><rect x="70" y="${124-pl/2}" width="60" height="${pl}" fill="#8fcfd4"/>`;}
  else if(i===8){s+=`<path d="M76,50 L124,50 M76,124 L124,124" stroke="#b8a97c" stroke-dasharray="2 3"/>`;}
  s+=`<text x="144" y="22" font-size="10" fill="#9fb2cb">epiphysis</text>`;
  if(pl)s+=`<text x="136" y="68" font-size="10" fill="#8fcfd4">growth plate</text>`;
  s+=`<text x="124" y="92" font-size="10" fill="#9fb2cb">shaft</text>`;
  return `<svg viewBox="0 0 200 175">${s}</svg>`;
}
function renderAge(i){
  const a=AGE[i];$("#agetitle").textContent=a.t;
  $("#agelist").innerHTML=a.b.map(x=>`<li>${x}</li>`).join("");
  const wcap=[CAPS.skull[i],`${CARP_N[i]} of 8 carpal bones ossified`,CAPS.hip[i],CAPS.sacrum[i],CAPS.plate[i]];
  const wt=["Skull from above","Wrist (carpals)","Hip bone (side view)","Sacrum","Long bone growth"];
  const wsvg=[skullSVG(i),wristSVG(i),hipSVG(i),sacrumSVG(i),plateSVG(i)];
  $("#widgets").innerHTML=wt.map((t,k)=>`<div class="wcard"><h4>${t}</h4>${wsvg[k]}<small>${wcap[k]}</small></div>`).join("");
}
$("#ticks").innerHTML=AGE.map(a=>`<span>${a.k}</span>`).join("");
$("#age").addEventListener("input",e=>renderAge(+e.target.value));

/* ===== FUN ===== */
let fi=-1;
function nextFact(){
  let n;do{n=Math.floor(Math.random()*QUOTE_FACTS.length)}while(n===fi);fi=n;
  $("#factText").textContent=QUOTE_FACTS[n];
}
$("#nextFact").addEventListener("click",nextFact);
let tfOrder=[],tfi=0,tfScore=0,tfDone=false;
function tfShuffle(){tfOrder=TF.map((_,i)=>i).sort(()=>Math.random()-.5);tfi=0;tfScore=0}
function tfShow(){
  tfDone=false;
  if(tfi>=tfOrder.length){
    $("#tfQ").textContent="You scored "+tfScore+" out of "+tfOrder.length+".";
    $("#tfBtns").style.display="none";$("#tfFb").textContent="";
    $("#tfNext").style.display="";$("#tfNext").textContent="Play again";return;
  }
  $("#tfBtns").style.display="";$("#tfQ").textContent=TF[tfOrder[tfi]][0];
  $("#tfFb").textContent="";$("#tfFb").className="fb";$("#tfNext").style.display="none";
  $("#tfScore").textContent="| "+(tfi+1)+" of "+tfOrder.length+" | score "+tfScore;
}
$("#tfBtns").addEventListener("click",ev=>{
  const b=ev.target.closest("button");if(!b||tfDone)return;tfDone=true;
  const t=TF[tfOrder[tfi]];const ok=(+b.dataset.a)===t[1];if(ok)tfScore++;
  $("#tfFb").className="fb "+(ok?"good":"bad");$("#tfFb").textContent=(ok?"Correct. ":"Not quite. ")+t[2];
  $("#tfNext").style.display="";$("#tfNext").textContent=tfi+1>=tfOrder.length?"See score":"Next";
  $("#tfScore").textContent="| "+(tfi+1)+" of "+tfOrder.length+" | score "+tfScore;
});
$("#tfNext").addEventListener("click",()=>{
  if(tfi>=tfOrder.length){tfShuffle();tfShow();return;}
  tfi++;tfShow();
});

/* ===== INIT ===== */
if(document.getElementById("svg")){buildTabs();setView("full");renderWelcome();buildList()}
if(document.getElementById("age"))renderAge(0);
if(document.getElementById("factText")){nextFact();tfShuffle();tfShow()}
