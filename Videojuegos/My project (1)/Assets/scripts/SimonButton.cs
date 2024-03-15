using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SimonButton : MonoBehaviour
{
    AudioSource audioEffect;
    Color ogcolor;

    // Start is called before the first frame update
    void Start()
    {
        ogcolor = GetComponent<Image>().color;
        audioEffect = GetComponent<AudioSource>();
    }

    public void HighLight(){
        StartCoroutine(ChangeColor());
    }

    IEnumerator ChangeColor(){
        GetComponent<Image>().color = Color.white;
        PlayAudioEffect();
        yield return new WaitForSeconds(0.5f);
        GetComponent<Image>().color = ogcolor;
    }

    public void PlayAudioEffect(){
        audioEffect.Play();
    }
}
