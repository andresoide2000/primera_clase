using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;
using TMPro;

public class SimonController : MonoBehaviour
{
    [SerializeField] private List<int> sequence;
    [SerializeField] private GameObject[] buttons;
    [SerializeField] private GameObject canvas;
    [SerializeField] private AudioSource audioGameOver;
    [SerializeField] private TMP_Text scoreText;


    bool playerTurn = false;
    int index;
    private int score = 0;
    private int highestScore = 0;

    public void Start(){
        canvas.SetActive(true);
        highestScore = PlayerPrefs.GetInt("SimonHighestScore", 0);
        scoreText.text = "Highest Score: " + highestScore.ToString();
    }
    public void StartGame(){
        canvas.SetActive(false);
        NewGame();
    }

    void NewGame(){
        sequence.Clear();
        index = 0;
        scoreText.text = "Score: 0";
        AddToSequence();
    }

    void AddToSequence(){
        playerTurn = false;
        index = 0;
        int num = Random.Range(0, buttons.Length);
        sequence.Add(num);
        StartCoroutine(PlaySequence());
    }

    IEnumerator PlaySequence(){
        yield return new WaitForSeconds(1);
        foreach(int num in sequence){
            buttons[num].GetComponent<SimonButton>().HighLight();
            yield return new WaitForSeconds(1);
        }
        playerTurn = true;
    }

    public void PlayerInput(int num){
        if(playerTurn){
            buttons[num].GetComponent<SimonButton>().PlayAudioEffect();
            buttons[num].GetComponent<SimonButton>().HighLight();
            if(num == sequence[index]){
                index++;
                if(index == sequence.Count){
                    playerTurn = false;
                    index = 0;
                    score++;
                    scoreText.text = "Score: " + score.ToString();

                    AddToSequence();
                }
            } else {
                PlayerPrefs.SetInt("SimonScore", score);
                if(score > highestScore){
                    PlayerPrefs.SetInt("SimonHighestScore", score);
                }
                StartCoroutine(GameOver());
            }
        }
    }

    IEnumerator GameOver(){
        yield return new WaitForSeconds(0.5f);
        audioGameOver.Play();
        yield return new WaitForSeconds(0.5f);
        audioGameOver.Stop();
        SceneManager.LoadScene("Gameover");
    }

  
}
