using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Movement : MonoBehaviour
{
   public float speed;
   public KeyCode moveUp;
   public KeyCode moveDown;
   public float Limit;
    
    
    // Start is called before the first frame update
    void Start()
    {
        
    }

    // Update is called once per frame
    void Update()
    {
        if(Input.GetKey(moveUp) && transform.position.y < Limit){
            transform.Translate(Vector3.up * speed * Time.deltaTime);
        }
        else if(Input.GetKey(moveDown)&& transform.position.y > -Limit){
            transform.Translate(Vector3.down * speed * Time.deltaTime);
        }
    }
}
