const data = {
    "destination_addresses": ["Mysuru, Karnataka, India"],
    "origin_addresses": ["Bengaluru, Karnataka, India"],
    "rows": [
        {
            "elements": [
                {
                    "distance": {
                        "text": "144 km",
                        "value": 144344
                    },
                    "duration": {
                        "text": "3 hours 13 mins",
                        "value": 11562
                    },
                    "duration_in_traffic": {
                        "text": "3 hours 32 mins",
                        "value": 12692
                    },
                    "status": "OK"
                }
            ]
        }
    ],
    "status": "OK"
}
const distance=console.log(data.rows[0].elements[0].distance.text)
console.log(data.destination_addresses[0].split(",")[0])
console.log(data.origin_addresses[0].split(",")[0])
console.log(data.rows[0].elements[0].duration_in_traffic.text)
console.log(`The distance between ${data.origin_addresses[0].split(",")[0]} and ${data.destination_addresses[0].split(",")[0]} is ${data.rows[0].elements[0].distance.text} and duration required is ${data.rows[0].elements[0].duration_in_traffic.text}`)