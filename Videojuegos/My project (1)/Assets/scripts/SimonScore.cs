using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;

public class SimonScore : MonoBehaviour
{
    [SerializeField] private TMP_Text scoreText;

    // Start is called before the first frame update
    void Start(){
        int score = PlayerPrefs.GetInt("SimonScore", 0);
        scoreText.text = "Score: " + score.ToString();
    }

    public void PlayAgain(){
        PlayerPrefs.SetInt("SimonScore", 0);
        SceneManager.LoadScene("Simon");
    }
}
